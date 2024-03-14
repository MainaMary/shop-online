import { products } from "../../data/products";
import { truncateText } from "../../utils/truncate";
import { ProductCard } from "./product-card";
export function Products() {
  return (
    <div className=" grid grid-cols-4 md:grid-cols-4  gap-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
