"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type OrderProduct = { name: string; price: number };
type ActiveModal = "order" | "booking" | null;

type WhatsAppModalContextValue = {
  activeModal: ActiveModal;
  orderProduct: OrderProduct | null;
  openOrderModal: (product: OrderProduct) => void;
  openBookingModal: () => void;
  closeModal: () => void;
};

const WhatsAppModalContext = createContext<WhatsAppModalContextValue | null>(
  null,
);

export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [orderProduct, setOrderProduct] = useState<OrderProduct | null>(null);

  const value = useMemo(
    () => ({
      activeModal,
      orderProduct,
      openOrderModal: (product: OrderProduct) => {
        setOrderProduct(product);
        setActiveModal("order");
      },
      openBookingModal: () => setActiveModal("booking"),
      closeModal: () => setActiveModal(null),
    }),
    [activeModal, orderProduct],
  );

  return (
    <WhatsAppModalContext.Provider value={value}>
      {children}
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error(
      "useWhatsAppModal must be used within a WhatsAppModalProvider",
    );
  }
  return context;
}
