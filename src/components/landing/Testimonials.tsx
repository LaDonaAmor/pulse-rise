import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Pulse helped me lose 18 pounds in four months without ever stepping into a gym. The plans actually fit my schedule.",
    name: "Sarah K.",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    quote:
      "Finally an app that doesn't shame me. The streaks and small wins keep me showing up every single day.",
    name: "Marcus T.",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote:
      "I've tried them all. Pulse is the first one that adapts when I miss a day instead of guilt-tripping me.",
    name: "Aisha R.",
    role: "Yoga Instructor",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Loved by athletes
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Real stories from real users.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="p-7 rounded-2xl bg-card-gradient border border-border shadow-card hover:-translate-y-1 transition-smooth"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
