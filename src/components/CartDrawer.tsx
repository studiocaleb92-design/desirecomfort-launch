import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, Loader2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent side="right" className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-sm">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 border-b border-border pb-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.color} / {item.size} / {item.packLabel}
                    </p>
                    <p className="text-sm font-medium text-foreground mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-muted"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded border border-border flex items-center justify-center hover:bg-muted"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="ml-2 text-muted-foreground hover:text-destructive"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">SUBTOTAL</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            {checkoutError && (
              <p className="text-sm text-destructive font-medium">{checkoutError}</p>
            )}
            <Button
              variant="hero"
              className="w-full"
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
                      cancelUrl: `${origin}/product`,
                    }),
                  });
                  const data = await res.json();
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
                  <Loader2 className="w-4 h-4 animate-spin" />
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
