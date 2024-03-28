"use client";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { truncateText } from "../../utils/truncate";
import { formatPrice } from "../../utils/format-price";
import { productReview } from "@/utils/product-review";
import { CartProductType } from "@/types/types";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCartContext";
import Button from "./button";
import ProductQuantity from "./product-quantity";
interface ProductProps {
  product: any;
}
export function ProductCard({ product }: ProductProps) {
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartItem, setCartItem] = useState<CartProductType>({
    id: product ? product.id : "",
    name: product ? product.name : "",
    desc: product ? product.description : "",
    category: product ? product.category : "",
    brand: product ? product.brand : "",
    image: product ? product.images[0].image : "",
    selectedImg: product ? { ...product.selectedImg } : "",
    quantity: 1,
    price: product ? product.price : "",
  });
  const router = useRouter();
  const { addToCart } = useCart();
  const handleNavigate = () => {
    router.push(`/product/${product.id}`);
  };
  const handleAddToCart = (cartItem: CartProductType) => {
    addToCart(cartItem);
  };
  const handleIncrease = () => {
    setCartItem((prev) => {
      return {
        ...prev,
        quantity: prev.quantity + 1,
      };
    });
  };
  const handleDecrease = () => {
    setCartItem((prev) => {
      return {
        ...prev,
        quantity: prev.quantity - 1,
      };
    });
  };
  return (
    <div className=" transition hover:scale-105 text-center text-sm col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-md p-2">
      <div
        className="flex flex-col items-center gap-1 w-full cursor-pointer"
        onClick={handleNavigate}
      >
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={product.images[0].image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p>{truncateText(product.name)}</p>
        </div>
        <div>
          <Rating value={productReview(product)} readOnly />
        </div>
        <div>
          <p>{`${product.reviews.length} reviews`}</p>
        </div>
        <div>
          <p className="font-semibold">{formatPrice(product.price)}</p>
        </div>
        <button>Add to cart</button>
        {!isProductInCart ? (
          <div>
            <Button onClick={() => handleAddToCart(product)}>
              Add to cart
            </Button>
          </div>
        ) : (
          <ProductQuantity
            cartProduct={cartItem}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
          />
        )}
      </div>
    </div>
  );
}
