import {
  Dumbbell,
  HeartPulse,
  Target,
  Flame,
  Watch,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Personalized workouts",
    desc: "AI-built plans that adapt to your level, goals, and recovery.",
  },
  {
    icon: HeartPulse,
    title: "Real-time tracking",
    desc: "Heart rate, calories, and steps streamed straight from your wearable.",
  },
  {
    icon: Target,
    title: "Smart goals",
    desc: "Set targets and let Pulse course-correct your week automatically.",
  },
  {
    icon: Flame,
    title: "Streaks & rewards",
    desc: "Stay motivated with streaks, badges, and weekly challenges.",
  },
  {
    icon: Watch,
    title: "Wearable sync",
    desc: "Works seamlessly with Apple Watch, Garmin, Fitbit, and more.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Train with friends, join challenges, and share your wins.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why Pulse
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Everything you need.{" "}
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-6 rounded-2xl bg-card-gradient border border-border hover:border-primary/40 transition-smooth shadow-card"
            >
              <div className="size-12 rounded-xl bg-primary/10 grid place-items-center mb-5 group-hover:bg-gradient-primary group-hover:shadow-glow transition-smooth">
                <f.icon className="size-6 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
