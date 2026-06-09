import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36 text-center">
        <span className="inline-block mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
          Trusted by 1,000+ customers
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-tight">
          The headline that{" "}
          <span className="text-indigo-400">makes them stop scrolling</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
          One clear sentence explaining what you sell, who it's for, and the
          outcome they'll get. No jargon. No fluff.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#pricing"
            className="rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-colors"
          >
            Get started today
          </Link>
          <Link
            href="#features"
            className="rounded-xl border border-slate-600 px-8 py-4 text-base font-semibold text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
          >
            See how it works
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          No credit card required · Cancel anytime · 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
