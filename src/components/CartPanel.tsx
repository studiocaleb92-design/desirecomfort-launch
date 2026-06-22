import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { Minus, Plus, Trash2, Loader2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const CartPanel = () => {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <div>
        <p className="text-body text-muted-foreground">Your cart is empty.</p>
        <Link
          to="/#order"
          className="mt-6 inline-block border-b border-obsidian pb-1 text-body text-foreground transition-opacity hover:opacity-80"
        >
          Shop now
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.id} className="flex gap-4 border-b border-obsidian/10 pb-6">
            {item.image && (
              <img
                src={item.image}
                alt=""
                className="h-20 w-20 flex-shrink-0 rounded-none object-cover"
              />
            )}
            <div className="min-w-0 flex-1">
              <p className="text-body font-medium text-foreground">{item.title}</p>
              <p className="mt-1 text-caption text-muted-foreground">
                {item.color} / {item.size} / {item.packLabel}
              </p>
              <p className="mt-2 text-body font-medium text-foreground">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="flex h-9 w-9 items-center justify-center border border-obsidian bg-transparent transition-colors hover:bg-candlelight"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center text-body">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="flex h-9 w-9 items-center justify-center border border-obsidian bg-transparent transition-colors hover:bg-candlelight"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="ml-2 text-muted-foreground transition-opacity hover:opacity-70"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="space-y-4 border-t border-obsidian/10 pt-6">
        <div className="flex justify-between text-body">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        {checkoutError && <p className="text-body font-medium text-destructive">{checkoutError}</p>}
        <Button
          variant="hero"
          className={cn("w-full sm:w-auto", checkoutLoading && "opacity-70")}
          size="lg"
          disabled={checkoutLoading}
          onClick={async () => {
            setCheckoutError(null);
            setCheckoutLoading(true);
            try {
              const origin = window.location.origin;
              const res = await fetch(`${API_BASE}/api/create-checkout-session`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  items: items.map(({ id: _id, ...item }) => item),
                  successUrl: `${origin}/order-success`,
                  cancelUrl: `${origin}/cart`,
                }),
              });
              const text = await res.text();
              let data;
              try {
                data = text ? JSON.parse(text) : {};
              } catch {
                setCheckoutError(
                  "Checkout is temporarily unavailable. Please try again or contact us.",
                );
                return;
              }
              if (!res.ok) throw new Error(data.error || "Checkout failed");
              if (data.url) {
                window.location.href = data.url;
                return;
              }
              throw new Error("No checkout URL received");
            } catch (e) {
              setCheckoutError(e instanceof Error ? e.message : "Something went wrong");
            } finally {
              setCheckoutLoading(false);
            }
          }}
        >
          {checkoutLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Redirecting…
            </>
          ) : (
            "Check out →"
          )}
        </Button>
      </div>
    </div>
  );
};

export default CartPanel;
