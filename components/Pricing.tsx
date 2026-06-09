"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for individuals getting started.",
    features: ["Feature one", "Feature two", "Feature three", "Email support"],
    cta: "Get Starter",
    highlight: false,
    priceId: "price_starter_placeholder",
  },
  {
    name: "Pro",
    price: 79,
    description: "For teams that need more power.",
    features: [
      "Everything in Starter",
      "Feature four",
      "Feature five",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Get Pro",
    highlight: true,
    priceId: "price_pro_placeholder",
  },
  {
    name: "Business",
    price: 199,
    description: "For serious businesses at scale.",
    features: [
      "Everything in Pro",
      "Unlimited seats",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom contracts",
    ],
    cta: "Get Business",
    highlight: false,
    priceId: "price_business_placeholder",
  },
];

const checkoutEnabled = process.env.NEXT_PUBLIC_ENABLE_CHECKOUT === "true";

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(priceId: string, planName: string) {
    if (!checkoutEnabled) {
      alert("Checkout coming soon! Contact us to get early access.");
      return;
    }
    setLoading(planName);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            No hidden fees. Cancel anytime.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-indigo-600 text-white shadow-2xl ring-4 ring-indigo-300"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-slate-900">
                  Most Popular
                </span>
              )}
              <p
                className={`text-sm font-semibold uppercase tracking-wide ${plan.highlight ? "text-indigo-200" : "text-indigo-600"}`}
              >
                {plan.name}
              </p>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span
                  className={`text-sm ${plan.highlight ? "text-indigo-200" : "text-slate-400"}`}
                >
                  /mo
                </span>
              </p>
              <p
                className={`mt-2 text-sm ${plan.highlight ? "text-indigo-100" : "text-slate-500"}`}
              >
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-indigo-200" : "text-indigo-600"}`}
                    />
                    <span
                      className={plan.highlight ? "text-white" : "text-slate-600"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout(plan.priceId, plan.name)}
                disabled={loading === plan.name}
                className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-colors disabled:opacity-60 ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
              >
                {loading === plan.name ? "Loading…" : plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
