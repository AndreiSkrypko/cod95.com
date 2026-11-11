import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CONTACTS, NAV } from "@/content/landing";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div
        className={cn(
          "container-page flex items-center justify-between rounded-full transition-all duration-500",
          scrolled ? "glass h-14 shadow-card" : "h-16 border border-transparent",
        )}
      >
        <Logo />

        <nav aria-label="Основная навигация" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 font-display text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACTS.phones[0].href}
            className="hidden items-center gap-2 font-display text-sm font-semibold text-foreground md:inline-flex"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {CONTACTS.phones[0].display}
          </a>
          <Button asChild variant="hero" size="sm" className="hidden h-10 px-5 sm:inline-flex">
            <a href="#contacts">Консультация</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="subtle" size="icon" className="size-10 lg:hidden" aria-label="Открыть меню">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-border bg-background">
              <SheetTitle className="font-display text-foreground">Меню</SheetTitle>
              <nav aria-label="Мобильная навигация" className="mt-8 flex flex-col gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 font-display text-lg font-semibold text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 space-y-3 border-t border-border pt-6">
                {CONTACTS.phones.map((p) => (
                  <a key={p.href} href={p.href} className="flex items-center gap-3 font-display font-semibold text-foreground">
                    <Phone className="size-4 text-primary" aria-hidden="true" />
                    {p.display}
                    <span className="text-sm font-normal text-muted-foreground">{p.label}</span>
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
