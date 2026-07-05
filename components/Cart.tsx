"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useCart, type CartItem } from "@/components/CartContext";

export default function Cart() {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const openDrawer = () => setIsOpen(true);

  const closeDrawer = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsConfirmed(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDrawer();
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeDrawer]);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    window.setTimeout(() => {
      setIsCheckingOut(false);
      setIsConfirmed(true);
      clearCart();
      window.setTimeout(closeDrawer, 1600);
    }, 900);
  };

  return (
    <>
      <button
        type="button"
        onClick={openDrawer}
        aria-label="Open cart"
        className="fixed right-6 bottom-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-coffee text-cream shadow-[0_12px_30px_-8px_rgba(75,50,40,0.5)] transition-all duration-300 hover:scale-105 hover:bg-accent hover:shadow-[0_16px_36px_-8px_rgba(75,50,40,0.55)] sm:right-8 sm:bottom-8"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path
            d="M4 6h2l1.6 9.6a2 2 0 0 0 2 1.65h7.3a2 2 0 0 0 1.97-1.66L20 8.5H7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="20" r="1.4" fill="currentColor" />
          <circle cx="17" cy="20" r="1.4" fill="currentColor" />
        </svg>

        {totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-accent px-1 text-xs font-semibold text-coffee shadow-sm">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
          className="fixed inset-0 z-[110] flex justify-end"
        >
          <div
            aria-hidden
            onClick={closeDrawer}
            className={`absolute inset-0 bg-coffee/60 backdrop-blur-sm transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`relative flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${
              isVisible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between gap-4 border-b border-coffee/10 px-6 py-6">
              <h2 className="font-display text-2xl font-semibold text-coffee">
                Your Cart
              </h2>
              <button
                type="button"
                onClick={closeDrawer}
                aria-label="Close cart"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-coffee/15 text-coffee transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <path
                    d="M5 5l10 10M15 5 5 15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {isConfirmed ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                      <path
                        d="M5 12.5 10 17l9-10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-display text-xl font-semibold text-coffee">
                    Order placed!
                  </p>
                  <p className="max-w-xs text-sm text-coffee/70">
                    Thank you for your order. Your fresh bakes will be ready
                    shortly.
                  </p>
                </div>
              ) : items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coffee/5 text-coffee/40">
                    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                      <path
                        d="M4 6h2l1.6 9.6a2 2 0 0 0 2 1.65h7.3a2 2 0 0 0 1.97-1.66L20 8.5H7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-display text-lg font-semibold text-coffee">
                    Your cart is empty
                  </p>
                  <p className="max-w-xs text-sm text-coffee/60">
                    Add something delicious from our menu to get started.
                  </p>
                </div>
              ) : (
                <ul className="flex flex-col">
                  {items.map((item) => (
                    <CartRow key={item.id} item={item} />
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && !isConfirmed && (
              <div className="border-t border-coffee/10 px-6 py-6">
                <div className="flex items-center justify-between text-base">
                  <span className="font-medium text-coffee/70">Total</span>
                  <span className="font-display text-xl font-semibold text-coffee">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-coffee px-6 py-3.5 text-sm font-medium text-cream shadow-md transition-all duration-300 hover:bg-accent hover:shadow-lg disabled:opacity-70"
                >
                  {isCheckingOut ? "Placing order..." : "Checkout"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function CartRow({ item }: { item: CartItem }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <li className="flex items-start gap-4 border-b border-coffee/10 py-4 last:border-0">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <h3 className="font-display text-sm font-semibold text-coffee">
          {item.name}
        </h3>
        <p className="text-xs text-coffee/60">${item.price.toFixed(2)} each</p>

        <div className="mt-1.5 flex items-center gap-2">
          <button
            type="button"
            onClick={() => decreaseQuantity(item.id)}
            disabled={item.quantity <= 1}
            aria-label="Decrease quantity"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-coffee/20 text-coffee transition-colors duration-200 hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-coffee/20 disabled:hover:text-coffee"
          >
            <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
              <path
                d="M2.5 6h7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <span className="w-5 text-center text-sm font-medium text-coffee">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => increaseQuantity(item.id)}
            aria-label="Increase quantity"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-coffee/20 text-coffee transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
              <path
                d="M6 2.5v7M2.5 6h7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between self-stretch">
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          aria-label={`Remove ${item.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full text-coffee/40 transition-colors duration-200 hover:text-accent"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <path
              d="M5 5.5h10M8.3 5.5V4a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v1.5M6.2 5.5l.6 9.2a1.3 1.3 0 0 0 1.3 1.2h3.8a1.3 1.3 0 0 0 1.3-1.2l.6-9.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="font-display text-sm font-semibold text-accent">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </li>
  );
}
