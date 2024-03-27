"use client";
import { useCart } from "@/hooks/useCartContext";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
const CartIcon = () => {
  const { cartTotalQuantity } = useCart();
  return (
    <Link href="/cart" className="relative cursor-pointer">
      <FiShoppingCart size={24} />
      <span className="absolute left-3 top-[-10px] w-[20px] h-[20px] rounded-full text-white bg-blue-700 flex justify-center m-auto items-center">
        {cartTotalQuantity}
      </span>
    </Link>
  );
};

export default CartIcon;
