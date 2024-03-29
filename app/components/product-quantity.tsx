"use client";
import { CartProductType } from "../../types/types";
import { useCart } from "@/hooks/useCartContext";
import React from "react";
interface QuantityProps {
  cartQuantity?: boolean;
  cartProduct: CartProductType | any;
  handleIncrease: () => void;
  handleDecrease: () => void;
}
const ProductQuantity = ({ cartProduct, cartQuantity }: QuantityProps) => {
  const { increaseCart, decreaseCart } = useCart();
  return (
    <div>
      {cartQuantity ? (
        <div></div>
      ) : (
        <div className="flex ">
          <div className="flex gap-2 justify-between h-auto items-center">
            <button
              className="w-7 h-7 rounded-md flex items-center text-center justify-center  border-[2px] m-auto border-slate-600"
              onClick={() => decreaseCart(cartProduct)}
              disabled={cartProduct.quantity === 1 ? true : false}
            >
              -
            </button>
            <p className="font-[400]">{cartProduct.quantity}</p>
            <button
              className="w-7 h-7 rounded-md flex items-center justify-center text-center m-auto border-[2px] border-slate-600"
              onClick={() => increaseCart(cartProduct)}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductQuantity;
