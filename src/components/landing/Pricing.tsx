import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect to try Pulse and build a habit.",
    features: [
      "3 workouts/week",
      "Step & calorie tracking",
      "Community access",
    ],
    cta: "Download free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/mo",
    desc: "Unlock everything. 14-day free trial.",
    features: [
      "Unlimited personalized workouts",
      "Wearable sync",
      "Advanced analytics",
      "1:1 coach chat",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/mo",
    desc: "For families and small teams.",
    features: ["Up to 5 members", "Shared challenges", "All Pro features"],
    cta: "Get Team",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-32 bg-card/30 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Simple plans. No surprises.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-7 rounded-2xl border transition-smooth ${
                p.featured
                  ? "bg-gradient-primary text-primary-foreground border-primary shadow-glow scale-[1.02]"
                  : "bg-card-gradient border-border shadow-card"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background text-primary text-xs font-semibold border border-primary">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-3 mb-4">
                <span className="text-4xl font-bold">{p.price}</span>
                {p.period && (
                  <span
                    className={
                      p.featured ? "opacity-80" : "text-muted-foreground"
                    }
                  >
                    {p.period}
                  </span>
                )}
              </div>
              <p
                className={`text-sm mb-6 ${p.featured ? "opacity-90" : "text-muted-foreground"}`}
              >
                {p.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  p.featured
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
