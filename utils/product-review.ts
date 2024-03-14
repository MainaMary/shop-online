export const productReview = (product: any) => {
  const reviewRate =
    product?.reviews?.reduce(
      (acc: number, item: { rating: number }) => item.rating + acc,
      0
    ) / product?.reviews?.length;
  return reviewRate;
};
