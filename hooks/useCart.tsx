"use client";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, use, useCallback, useContext, useState } from "react";

interface CardContextProps {
  productCartQty: number;
    cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
}

const CardContext = createContext<CardContextProps | null>(null);

interface Props {
  [propName: string]: any;
}
export const CardContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        let updatedCart;

        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  let value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
  };
  return <CardContext.Provider value={value} {...props} />;
};

import React from "react";

const useCart = () => {
  const context = useContext(CardContext);
  if (context == null) {
    throw new Error("useCard must be used within a CardContextProvider");
  }
  return context;
};

export default useCart;
