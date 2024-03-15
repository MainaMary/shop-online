"use client";
import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { CartProductType } from "../types/types";
import { PRODUCT_KEY } from "../data/constants";
import { toast } from "react-toastify";
interface CartContextType {
  cartProducts: CartProductType[];
  cartTotalQuantity: number;
  addToCart: (item: CartProductType) => void;
}
interface IProps {
  children: ReactNode;
}
export const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: IProps) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);

  useEffect(() => {
    const storedCartProducts = localStorage.getItem(PRODUCT_KEY);
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    } else {
      setCartProducts([]);
    }
  }, []);
  const addToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let existingProduct;
      if (prev) {
        existingProduct = [...prev, product];
      } else {
        existingProduct = [product];
      }
      toast.success("Product added to cart");
      localStorage.setItem(PRODUCT_KEY, JSON.stringify(existingProduct));
      return existingProduct;
    });
  }, []);
  const value = {
    cartTotalQuantity,
    setCartTotalQuantity,
    cartProducts,
    setCartProducts,
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
