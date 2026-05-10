import { Activity, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2 font-display font-bold text-lg"
            >
              <span className="size-8 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
                <Activity
                  className="size-4 text-primary-foreground"
                  strokeWidth={3}
                />
              </span>
              PULSE
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              The fitness app for busy humans. Train smart, track everything,
              stay consistent.
            </p>
            <div className="flex gap-3 mt-5">
              {[Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-lg border border-border grid place-items-center hover:border-primary hover:text-primary transition-smooth"
                  aria-label="Social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
          <span>© 2026 Pulse Fitness. All rights reserved.</span>
          <span>Built with ♥ for movement.</span>
        </div>
      </div>
    </footer>
  );
}
