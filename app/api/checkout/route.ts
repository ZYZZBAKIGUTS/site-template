import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  if (process.env.NEXT_PUBLIC_ENABLE_CHECKOUT !== "true") {
    return NextResponse.json({ error: "Checkout not enabled" }, { status: 403 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-05-27.dahlia",
  });

  const { priceId } = await req.json();

  if (!priceId || typeof priceId !== "string") {
    return NextResponse.json({ error: "Invalid price ID" }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/#pricing`,
  });

  return NextResponse.json({ url: session.url });
}
