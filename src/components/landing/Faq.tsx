import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need any equipment?",
    a: "No. Most workouts use just your bodyweight. If you have dumbbells or bands, Pulse will work them in.",
  },
  {
    q: "How does the free trial work?",
    a: "You get 14 days of full Pro access. No charge if you cancel before it ends.",
  },
  {
    q: "Can I sync my Apple Watch or Fitbit?",
    a: "Yes. Pulse syncs automatically with Apple Health, Google Fit, Garmin, and Fitbit.",
  },
  {
    q: "Is Pulse good for beginners?",
    a: "Absolutely. Pulse adapts to your fitness level and progresses gradually as you get stronger.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes — one tap from the app, no questions asked.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Questions, answered.
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-5 bg-card-gradient"
            >
              <AccordionTrigger className="text-left hover:no-underline font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
