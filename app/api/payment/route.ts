import Stripe from "stripe";
import client from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { CartProductType } from "@/types/types";
const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: "2023-10-16",
});
const caluclateSubTotal = (cartItems: CartProductType[]) => {
  const total = cartItems.reduce((acc: any, item) => {
    const cartItemTotal = Number(item.price) * item.quantity;
    return acc + cartItemTotal;
  }, 0);
};
export { caluclateSubTotal };
