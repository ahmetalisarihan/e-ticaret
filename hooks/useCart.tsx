"use client";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, use, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface CardContextProps {
  productCartQty: number;
    cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
  addToBasketIncrease: (product: CardProductProps) => void;
  addToBasketDecrease: (product: CardProductProps) => void;
  removeFromCart: (product: CardProductProps) => void;
  removeCart: () => void;
}

const CardContext = createContext<CardContextProps | null>(null);

interface Props {
  [propName: string]: any;
}
export const CardContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    let getItem = localStorage.getItem("cart");
    let getItemParse: CardProductProps[] | null = JSON.parse(getItem!);
    setCartPrdcts(getItemParse);
  }, []);

  const removeCart = useCallback(() => {
    setCartPrdcts(null);
    toast.success('Sepetiniz Temizlendi')
    localStorage.removeItem("cart");
  }, []);

  const addToBasketIncrease = useCallback((product: CardProductProps) => {
    let updatedCart;
    if(product.quantity == 10){
       return toast.error('Daha fazla ekleyemezsiniz...')
    }
    if(cartPrdcts){
       updatedCart = [...cartPrdcts];
       const existingItem = cartPrdcts.findIndex(item => item.id === product.id)

       if(existingItem > -1){
           updatedCart[existingItem].quantity = ++updatedCart[existingItem].quantity
       }
       setCartPrdcts(updatedCart)
       localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
   }, [cartPrdcts])

   const addToBasketDecrease = useCallback((product: CardProductProps) => {
       let updatedCart;
       if(product.quantity == 1){
          return toast.error('Daha az ekleyemezsiniz...')
       }
       if(cartPrdcts){
          updatedCart = [...cartPrdcts];
          const existingItem = cartPrdcts.findIndex(item => item.id === product.id)
  
          if(existingItem > -1){
              updatedCart[existingItem].quantity = --updatedCart[existingItem].quantity
          }
          setCartPrdcts(updatedCart)
          localStorage.setItem('cart', JSON.stringify(updatedCart))
       }
      }, [cartPrdcts])

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        let updatedCart;

        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        toast.success('Ürün Sepete Eklendi')
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    [cartPrdcts]
  );
  const removeFromCart = useCallback((product: CardProductProps) => {
    if(cartPrdcts) {
      const filteredCart = cartPrdcts.filter((cart) => cart.id !== product.id);
      setCartPrdcts(filteredCart);
      toast.success('Ürün Sepetten Silindi')
      localStorage.setItem("cart", JSON.stringify(filteredCart));
    }
    }, [cartPrdcts]);

  let value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease
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
