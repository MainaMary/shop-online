import { CartProductType } from "@/types/types";

export const findProduct = (products: CartProductType[], productId: string) => {
  const product = products.find((label) => label.id === productId);
  return product;
};
