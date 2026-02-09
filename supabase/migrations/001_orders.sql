-- Desire Comfort: orders table for storing Stripe Checkout orders (Shopify-style store)
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New query) or via Supabase CLI.

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  stripe_checkout_session_id text not null unique,
  stripe_payment_intent_id text,
  customer_email text not null,
  customer_name text,
  amount_total integer not null,
  currency text not null default 'usd',
  status text not null default 'paid',
  line_items jsonb not null default '[]',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Optional: index for listing orders by date and looking up by session
create index if not exists idx_orders_created_at on public.orders (created_at desc);
create index if not exists idx_orders_stripe_session on public.orders (stripe_checkout_session_id);

-- Optional: RLS (row-level security). For a simple store, only the backend (service_role) writes;
-- you can enable RLS later and add policies for an admin role.
-- alter table public.orders enable row level security;

comment on table public.orders is 'Orders from Stripe Checkout; populated by stripe-webhook on checkout.session.completed';
