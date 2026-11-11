import { useEffect, useRef, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CONTACTS, PRIMARY_PHONE, NAV } from "@/content/landing";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current)
        progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "border-b border-border-strong bg-background-deep/85 shadow-card backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between transition-[height] duration-700",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <Logo />

        <nav aria-label="Основная навигация" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-4 py-2 font-display text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PRIMARY_PHONE.href}
            className="hidden items-center gap-2 font-display text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground md:inline-flex"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {PRIMARY_PHONE.display}
          </a>
          <Button
            asChild
            variant="hero"
            size="sm"
            className="hidden h-11 px-6 text-sm sm:inline-flex"
          >
            <a href="#contacts">Консультация</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="subtle"
                size="icon"
                className="size-11 lg:hidden"
                aria-label="Открыть меню"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm border-border bg-background-deep"
            >
              <SheetTitle className="font-display text-foreground">Меню</SheetTitle>
              <nav aria-label="Мобильная навигация" className="mt-8 flex flex-col gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 font-display text-2xl font-bold tracking-tight text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 space-y-3 border-t border-border pt-6">
                {CONTACTS.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="flex items-center gap-3 font-display font-semibold text-foreground"
                  >
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
      <div
        ref={progress}
        className={cn(
          "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-accent transition-opacity duration-500",
          !scrolled && "opacity-0",
        )}
        aria-hidden="true"
      />
    </header>
  );
}
