"use client";
import { useState, useEffect } from "react";
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
import Link from "next/link";

interface ProductProps {
  product: any;
  products: any;
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
    price: product ? product.price : 0,
  });
  const router = useRouter();
  const { addToCart, cartProducts: cartContextProducts } = useCart();
  const productCheck = (cartContextProducts as CartProductType[])?.find(
    (label) => label.id === product.id
  );
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
  useEffect(() => {
    if (cartContextProducts) {
      const checkProductIndex = cartContextProducts.findIndex(
        (item) => item.id === product?.id
      );
      if (checkProductIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartContextProducts]);

  return (
    <div className=" transition hover:scale-105 text-center text-sm col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-md p-2">
      <div className="flex flex-col items-center gap-1 w-full cursor-pointer">
        <div className="aspect-square overflow-hidden relative w-full">
          <Link
            href={`/product/${product.id}`}
            className="text-underline text-start text-pink-400 cursor-pointer"
          >
            View cart
          </Link>
          <Image
            fill
            src={product.images[0].image}
            alt={product.name}
            className="w-full h-full object-contain"
            onClick={handleNavigate}
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
          <p className="font-semibold">
            {product ? formatPrice(product.price) : ""}
          </p>
        </div>
        {!isProductInCart ? (
          <div>
            <Button onClick={() => handleAddToCart(cartItem)}>
              Add to cart
            </Button>
          </div>
        ) : (
          <ProductQuantity
            cartProduct={productCheck}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
          />
        )}
      </div>
    </div>
  );
}
