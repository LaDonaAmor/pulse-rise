import appMockup from "@/assets/app-mockup.jpg";

const steps = [
  {
    n: "01",
    title: "Download the app",
    desc: "Free on iOS and Android. Takes less than a minute.",
  },
  {
    n: "02",
    title: "Set your goals",
    desc: "Tell us your level, schedule, and what you want to achieve.",
  },
  {
    n: "03",
    title: "Start moving",
    desc: "Follow your plan. Track progress. Hit your streak.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="py-20 lg:py-32 bg-card/30 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <img
            src={appMockup}
            alt="Pulse app dashboard showing workout stats"
            loading="lazy"
            width={1024}
            height={1280}
            className="relative w-full max-w-md mx-auto rounded-3xl shadow-elegant border border-border"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">
            Up and running in three steps.
          </h2>
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <div className="text-2xl font-display font-bold text-gradient w-12 shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
