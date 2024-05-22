import Stripe from "stripe";
import client from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { CartProductType } from "@/types/types";
import { getLoggedInUser } from "@/app/controller/getLoggedInUser";
const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: "2023-10-16",
});
const caluclateSubTotal = (cartItems: CartProductType[]) => {
  const total = cartItems.reduce((acc: any, item) => {
    const cartItemTotal = Number(item.price) * item.quantity;
    return acc + cartItemTotal;
  }, 0);
  return total;
};
export async function POST(request: Request) {
  const currentUser = await getLoggedInUser();
  //user not logged in
  if (!currentUser) {
    const response = NextResponse.json(
      {
        succes: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
    return response;
  }
  //user logged in
  const body = await request.json();
  const { items, payment_intent_id } = body;
  const total = Math.round(caluclateSubTotal(items) * 100);
  const orderData = {
    user: { connect: { id: currentUser.id } },
    amount: total,
    currency: "usd",
    status: "pending",
    deliveryStatus: "pending",
    products: items,
    paymentIntentId: payment_intent_id,
  };
  if (payment_intent_id) {
    //update order
    const existingIntentId = await stripe.paymentIntents.retrieve(
      payment_intent_id
    );
    if (existingIntentId) {
      const updated_intent = await stripe.paymentIntents.update(
        payment_intent_id,
        { amount: total }
      );
    }
  } else {
    //create the payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    //use order model to create the order
    orderData.paymentIntentId = paymentIntent.id;
    await client.order.create({
      data: orderData,
    });
    return NextResponse.json(paymentIntent);
  }
}

export { caluclateSubTotal };
