import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { Minus, Plus, Trash2, Loader2, X } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent
        side="right"
        hideClose
        className="flex w-full flex-col border-obsidian/10 sm:max-w-md"
      >
        <div className="flex items-center justify-between border-b border-obsidian/10 pb-4">
          <SheetTitle className="text-left">Your cart</SheetTitle>
          <SheetClose className="opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-glow focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div>
              <p className="text-sm text-muted-foreground">Your cart is empty.</p>
              <Link
                to="/#order"
                onClick={closeCart}
                className="mt-4 inline-block border-b border-obsidian pb-1 text-sm text-foreground transition-opacity hover:opacity-80"
              >
                Shop now
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li
                  key={item.id}
                  className={cn(
                    "flex gap-3 border-b border-obsidian/10 pb-4 reveal-hidden",
                    isOpen && "reveal-visible reveal-stagger",
                  )}
                  style={{ "--stagger-index": index * 0.67 } as React.CSSProperties}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="h-16 w-16 flex-shrink-0 rounded-none object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.color} / {item.size} / {item.packLabel}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center border border-obsidian bg-transparent transition-colors hover:bg-candlelight"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center border border-obsidian bg-transparent transition-colors hover:bg-candlelight"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
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
          )}
        </div>
        {items.length > 0 && (
          <div className="space-y-4 border-t border-obsidian/10 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            {checkoutError && (
              <p className="text-sm font-medium text-destructive">{checkoutError}</p>
            )}
            <Button
              variant="hero"
              className={cn("w-full", checkoutLoading && "opacity-70")}
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
                      cancelUrl: `${origin}/`,
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
                    closeCart();
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
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
