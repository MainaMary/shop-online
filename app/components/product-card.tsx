"use client";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { truncateText } from "../../utils/truncate";
import { formatPrice } from "../../utils/format-price";
import { productReview } from "@/utils/product-review";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: any;
}
export function ProductCard({ product }: ProductProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/product/${product.id}`);
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
      </div>
    </div>
  );
}
