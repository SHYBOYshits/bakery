"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useWhatsAppModal } from "@/components/WhatsAppModalContext";
import { getOrderWhatsAppUrl } from "@/lib/whatsapp";

const EMPTY_FORM = { name: "", phone: "", address: "" };

const INPUT_CLASSES =
  "w-full rounded-xl border border-coffee/15 bg-cream/60 px-4 py-3 text-sm text-coffee outline-none transition-colors duration-200 placeholder:text-coffee/40 focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function OrderWhatsAppModal() {
  const { activeModal, orderProduct, closeModal } = useWhatsAppModal();
  const isOpen = activeModal === "order" && orderProduct !== null;

  const [form, setForm] = useState(EMPTY_FORM);

  const handleClose = () => {
    closeModal();
    window.setTimeout(() => setForm(EMPTY_FORM), 300);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!orderProduct) return;

    const whatsappUrl = getOrderWhatsAppUrl(
      orderProduct.name,
      orderProduct.price,
      form.name.trim(),
      form.phone.trim(),
      form.address.trim(),
    );
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Order on WhatsApp"
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            aria-hidden
            onClick={handleClose}
            className="absolute inset-0 bg-coffee/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-3xl bg-cream shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-coffee/10 px-6 py-6">
              <div>
                <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                  Order on WhatsApp
                </span>
                <h2 className="mt-2 font-display text-2xl font-semibold text-coffee">
                  {orderProduct?.name}
                </h2>
                {orderProduct && (
                  <p className="mt-1 font-display text-lg font-semibold text-accent">
                    ${orderProduct.price.toFixed(2)}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-coffee/15 text-coffee transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="order-name"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-coffee/60 uppercase"
                  >
                    Full Name
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                    placeholder="Your name"
                    className={INPUT_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="order-phone"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-coffee/60 uppercase"
                  >
                    Phone Number
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, phone: event.target.value }))
                    }
                    placeholder="+91 98765 43210"
                    className={INPUT_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="order-address"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-coffee/60 uppercase"
                  >
                    Delivery Address / Location
                  </label>
                  <textarea
                    id="order-address"
                    required
                    rows={3}
                    value={form.address}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        address: event.target.value,
                      }))
                    }
                    placeholder="Flat / street / landmark"
                    className={`${INPUT_CLASSES} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-coffee px-6 py-3.5 text-sm font-medium text-cream shadow-md transition-all duration-300 hover:bg-accent hover:shadow-lg"
                >
                  Continue to WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
