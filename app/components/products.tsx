"use client";
import { useState } from "react";
import { products } from "../../data/products";
import { truncateText } from "../../utils/truncate";
import { ProductCard } from "./product-card";
export function Products() {
  const [itemsToSplice, setItemsToSplice] = useState(products.splice(0, 10));
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4  gap-4">
      {itemsToSplice.map((product) => (
        <ProductCard product={product} products={products} key={product.id} />
      ))}
    </div>
  );
}
