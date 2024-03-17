import React from "react";
import { CartProductType } from "@/types/types";
import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";
import { useCart } from "@/hooks/useCartContext";
import { formatPrice } from "@/utils/format-price";
interface Props {
  product: CartProductType;
}
const CartCard = ({ product }: Props) => {
  const { removeFromCart, increaseCart, decreaseCart, cartProductTotal } =
    useCart();

  return (
    <div className="px-[20px] py-4">
      <div className="flex justify-between ">
        <div className="flex h-auto gap-2 w-[70%]">
          <Image
            width={100}
            height={100}
            src={product.image}
            alt={product.name}
          />
          <div>
            <p className="font-semibold">{product.name}</p>
            <p>
              Price:{" "}
              <span className="text-gray-700"> {`KSH ${product.price}`}</span>
            </p>
          </div>
        </div>
        <div>
          <span>Total</span>
          <p className="font-bold">
            {formatPrice(Number(product.price) * product.quantity)}
          </p>
        </div>
      </div>
      <div className="flex justify-between h-auto mt-4 items-center">
        <div
          className="flex  cursor-pointer gap-2 h-auto items-center"
          onClick={() => removeFromCart(product.id)}
        >
          <MdDeleteOutline />
          <p className="uppercase">Remove</p>
        </div>
        <div className="flex gap-3 h-auto items-center">
          <button
            className="w-7 h-7 rounded-md flex items-center text-center justify-center bg-rose-500 text-white"
            onClick={() => decreaseCart(product)}
            disabled={product.quantity === 1 ? true : false}
          >
            -
          </button>
          <p className="font-[400]">{product.quantity}</p>
          <button
            className="w-7 h-7 rounded-md flex items-center justify-center text-center bg-rose-500 text-white"
            onClick={() => increaseCart(product)}
          >
            +
          </button>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default CartCard;
