"use client";
import { ReactNode, createContext, useState, useContext } from "react";
import { CartProductType } from "../types/types";

interface CartContextType {
  cartItems: CartProductType[];
  cartTotalQuantity: number;
  addToCart: (item: CartProductType) => void;
}
interface IProps {
  children: ReactNode;
}
export const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: IProps) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState<CartProductType[] | null>(null);
  const addToCart = () => {};
  const value = {
    cartTotalQuantity,
    setCartTotalQuantity,
    cartItems,
    setCartItems,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("context must be used within the context provider!");
  }
  return context;
};
