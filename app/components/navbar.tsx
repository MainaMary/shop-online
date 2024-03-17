import React from "react";
import { useCart } from "@/hooks/useCartContext";

export function Navbar() {
  // const { cartTotalQuantity } = useCart();
  return (
    <nav className="h-20 px-12 flex  items-center shadow-md mb-4">
      <p>Shop online</p>
      {/* <p>Cart Menu {cartTotalQuantity}</p> */}
    </nav>
  );
}
