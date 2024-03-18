"use client";
import React from "react";
import { useCart } from "@/hooks/useCartContext";
import CartCard from "./cart-card";
import CartSummary from "./cart-summary";
const Cart = () => {
  const { cartProducts } = useCart();
  return (
    <div className="flex  w-full gap-10">
      <div className="w-[70%] rounded-md shadow-md bg-white">
        <p className="px-5 pb-4">{`Cart ${cartProducts?.length}`}</p>
        <hr />
        <div>
          {cartProducts?.length === 0 ? (
            "No cart products added"
          ) : (
            <div>
              {cartProducts?.map((product) => (
                <CartCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-[30%]rounded-md shadow-md bg-white px-6">
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
