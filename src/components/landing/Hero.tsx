import { ArrowRight, Apple, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero2.jpg";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 bg-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 text-xs">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Top Fitness App 2026
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
            Get fit in <span className="text-gradient">15 minutes</span> a day.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Personalized workouts, real-time tracking, and science-backed
            guidance — all in one app built for busy humans.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow group"
            >
              Start your free trial
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-card/30"
            >
              Watch demo
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth">
              <Apple className="size-5" />
              <div className="text-left leading-tight">
                <div className="text-[10px] text-muted-foreground">
                  Download on
                </div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth">
              <Play className="size-5" />
              <div className="text-left leading-tight">
                <div className="text-[10px] text-muted-foreground">
                  Get it on
                </div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
          </div>
          <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <span>
              <strong className="text-foreground">4.9</strong> · 200k+ active
              users
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
            <img
              src={heroImg}
              alt="Athlete using the Pulse fitness tracking app at sunrise"
              width={1280}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card-gradient border border-border rounded-2xl p-4 shadow-card hidden sm:block">
            <div className="text-xs text-muted-foreground">Today</div>
            <div className="text-2xl font-bold">
              8,432{" "}
              <span className="text-sm text-muted-foreground font-normal">
                steps
              </span>
            </div>
            <div className="mt-2 h-1.5 w-32 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-primary" />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-card-gradient border border-border rounded-2xl p-4 shadow-card hidden sm:block">
            <div className="text-xs text-muted-foreground">Heart rate</div>
            <div className="text-2xl font-bold flex items-baseline gap-1">
              142 <span className="text-xs font-normal text-primary">bpm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
