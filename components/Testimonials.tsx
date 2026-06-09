const testimonials = [
  {
    quote:
      "This completely changed how I approach [problem]. I went from struggling every day to having everything handled in minutes.",
    name: "Alex Johnson",
    title: "Founder, Startup Co.",
    avatar: "AJ",
  },
  {
    quote:
      "I was skeptical at first, but within a week I saw real results. The ROI was obvious. I only wish I'd found this sooner.",
    name: "Sarah Chen",
    title: "Marketing Director",
    avatar: "SC",
  },
  {
    quote:
      "The support alone is worth it. Every question answered fast, and the product actually does what it promises.",
    name: "Marcus Williams",
    title: "Freelance Designer",
    avatar: "MW",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Don't take our word for it
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Real results from real customers.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {testimonials.map(({ quote, name, title, avatar }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-amber-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold">
                  {avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-sm text-slate-400">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
