import React from "react";
import { Button } from "@/app/components";
import { useCart } from "@/hooks/useCartContext";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { formatPrice } from "@/utils/format-price";

const CartSummary = () => {
  const { cartProducts, cartTotalAmount } = useCart();

  return (
    <div className="space-y-3 max-h-max">
      <p className="uppercase">Cart Summary</p>
      <hr />
      <div className="flex justify-between h-auto items-center">
        <p>Sub total</p>
        <p>{`${formatPrice(cartTotalAmount)}`}</p>
      </div>
      <p>Delivery fees not included yet</p>
      <hr />
      <div>
        <Button>{`Checkout ${formatPrice(cartTotalAmount)}`}</Button>
      </div>
      <hr />
      <Link href="/" className="flex gap-2 h-auto items-center ">
        <FaArrowLeftLong />
        <span> Continue shoping</span>
      </Link>
    </div>
  );
};

export default CartSummary;
