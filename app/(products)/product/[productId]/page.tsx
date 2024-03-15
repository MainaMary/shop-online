import React from "react";
import { ProductDetails } from "./product-details";

interface IProps {
  productId: string;
}
export default function SingleProduct({ params }: { params: IProps }) {
  const { productId } = params;
  return (
    <div>
      <ProductDetails productId={productId} />
    </div>
  );
}
