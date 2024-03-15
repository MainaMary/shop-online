"use client";
import React, { useCallback, useState } from "react";
import { products } from "@/data/products";
import { productReview } from "@/utils/product-review";
import { Rating } from "@mui/material";
import { formatPrice } from "@/utils/format-price";
import ColorSelect from "@/app/components/color-select";
import Image from "next/image";
import { CartProductType, SelectedImgType } from "@/app/types/types";
import { ProductQuantity, Button, ListRating } from "@/app/components";
import { useCart } from "@/app/hooks/useCartHook";
interface Props {
  productId: string;
}

export const ProductDetails = ({ productId }: Props) => {
  const product = products.find((item) => item.id === productId);

  const { addToCart, cartProducts } = useCart();
  const [cartItem, setCartItem] = useState<CartProductType>({
    id: product ? product.id : "",
    name: product ? product.name : "",
    desc: product ? product.description : "",
    category: product ? product.category : "",
    brand: product ? product.brand : "",
    selectedImg: product ? { ...product.selectedImg } : "",
    quantity: 1,
    price: product ? product.price : "",
  });
  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartItem((prev) => ({
        ...prev,
        selectedImg: value,
      }));
    },
    [setCartItem, cartItem.selectedImg]
  );
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

  const handleAdd = (cartItem: CartProductType) => {
    addToCart(cartItem);
  };
  console.log({ cartProducts });
  return (
    <div>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={product ? product.images[0].image : ""}
            alt={product ? product.name : ""}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div>
            <h2>{product ? product.name : ""}</h2>
          </div>
          <p>{product ? formatPrice(product.price) : ""}</p>
          <Rating readOnly value={productReview(product)} />
          <p>{product ? product.reviews.length : ""}</p>
          <div>
            <p className="text-justify">{product?.description}</p>
            <div>
              <span>Category:</span>
              <span className="font-semibold">{product?.category}</span>
            </div>
            <div>
              <span>Brand:</span>
              <span className="font-semibold">{product?.brand}</span>
            </div>
            <p className={product?.inStock ? "text-green-400" : "text-red-400"}>
              {product && product.inStock ? "In stock" : "Out of stock"}
            </p>
            <div>
              <span className="font-semibold">Color :</span>
              <ColorSelect
                handleColorSelect={handleColorSelect}
                cartItem={cartItem}
                images={product ? product.images : []}
              />
            </div>
            {cartProducts.length === 0 ? (
              <div>
                <Button onClick={() => handleAdd(cartItem)}>Add to cart</Button>
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
      </div>
      <div>
        {product?.reviews?.map((review) => (
          <ListRating key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
