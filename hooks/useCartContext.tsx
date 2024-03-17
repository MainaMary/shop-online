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
  cartTotalAmount: number;
  cartProductTotal: number;
  addToCart: (item: CartProductType) => void;
  removeFromCart: (item: string) => void;
  increaseCart: (item: CartProductType) => void;
  decreaseCart: (item: CartProductType) => void;
  clearCart: () => void;
}
interface IProps {
  children: ReactNode;
}
export const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: IProps) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProductTotal, setCartProductTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);

  useEffect(() => {
    const storedCartProducts = localStorage.getItem(PRODUCT_KEY);
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    } else {
      setCartProducts([]);
    }
  }, []);
  useEffect(() => {
    const calculateTotal = () => {
      if (cartProducts) {
        const { quantity, total } = cartProducts?.reduce(
          (acc: any, product: CartProductType) => {
            const { price, quantity } = product;
            const itemTotal = Number(price) * quantity;
            setCartProductTotal(itemTotal);
            acc.quantity += quantity;
            acc.total += itemTotal;
            return acc;
          },
          {
            quantity: 0,
            total: 0,
          }
        );
        setCartTotalAmount(total);
        setCartTotalQuantity(quantity);
      }
    };
    calculateTotal();
  }, [cartProducts]);

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
  const removeFromCart = useCallback(
    (id: string) => {
      const filteredItems = cartProducts.filter((product) => product.id !== id);
      setCartProducts(filteredItems);
      toast.success(`Product removed succesfully`);
      localStorage.setItem(PRODUCT_KEY, JSON.stringify(filteredItems));
    },
    [cartProducts]
  );
  const increaseCart = useCallback(
    (product: CartProductType) => {
      const { id } = product;
      let products;
      products = [...cartProducts];
      if (cartProducts) {
        const index = products?.findIndex((item) => item.id === id);
        if (index > -1) {
          products[index].quantity = ++products[index].quantity;
        }
      }
      setCartProducts(products);
      toast.success("Product increased");
      localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
    },
    [cartProducts]
  );
  const decreaseCart = useCallback(
    (product: CartProductType) => {
      const { id } = product;
      let products;
      products = [...cartProducts];
      if (cartProducts) {
        const index = products?.findIndex((item) => item.id === id);
        if (index > -1) {
          products[index].quantity = --products[index].quantity;
        }
      }
      setCartProducts(products);
      toast.success("Product decreased");
      localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
    },
    [cartProducts]
  );
  const clearCart = useCallback(() => {
    setCartProducts([]);
    localStorage.setItem(PRODUCT_KEY, JSON.stringify([]));
  }, []);
  const value = {
    cartTotalQuantity,
    cartTotalAmount,
    setCartTotalQuantity,
    cartProducts,
    setCartProducts,
    addToCart,
    removeFromCart,
    increaseCart,
    decreaseCart,
    clearCart,
    cartProductTotal,
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
