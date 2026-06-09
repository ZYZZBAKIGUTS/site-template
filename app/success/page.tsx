import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="rounded-2xl bg-white p-12 shadow-lg max-w-md w-full">
        <CheckCircle className="mx-auto mb-6 text-green-500" size={56} />
        <h1 className="text-2xl font-extrabold text-slate-900 mb-3">
          Payment successful!
        </h1>
        <p className="text-slate-500 mb-8">
          Thank you for your purchase. Check your email for confirmation and
          next steps.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
