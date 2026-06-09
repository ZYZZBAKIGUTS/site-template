import { Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Describe the first core benefit in one or two sentences. Focus on the outcome, not the feature.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Describe the second core benefit. What problem does this solve for the customer?",
  },
  {
    icon: BarChart3,
    title: "Built to Scale",
    description:
      "Describe the third core benefit. Why does this matter to the buyer right now?",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Supporting subheadline that reinforces the value proposition above.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-8 hover:shadow-md transition-shadow"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <Icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
