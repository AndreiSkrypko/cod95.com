import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CONTACTS, NAV, PRIMARY_PHONE, SERVICES } from "@/content/landing";
import { BookButton, useBooking } from "./BookingDialog";
import { Logo } from "./Logo";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { SERVICE_ICONS } from "./serviceIcons";

const linkClass =
  "relative px-3 py-2 font-display text-[0.92rem] font-semibold text-foreground/80 transition-colors hover:text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100";

export function SiteHeader() {
  const openBooking = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [megaOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow",
        scrolled || megaOpen ? "border-border shadow-card" : "border-transparent",
      )}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="container-page flex h-[4.5rem] items-center gap-8">
        <Logo />

        <nav aria-label="Основная навигация" className="hidden items-center lg:flex">
          {NAV.map((item) =>
            item.mega ? (
              <button
                key={item.label}
                type="button"
                className={cn(linkClass, "inline-flex items-center gap-1", megaOpen && "text-foreground after:scale-x-100")}
                aria-expanded={megaOpen}
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
              >
                Наши услуги
                <ChevronDown className={cn("size-3.5 transition-transform", megaOpen && "rotate-180")} />
              </button>
            ) : item.to === "/zapis" ? (
              <button key={item.label} type="button" className={linkClass} onClick={() => openBooking()}>
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={linkClass}
                activeProps={{ className: "text-foreground after:scale-x-100" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto hidden items-center gap-6 xl:flex">
          <a href={PRIMARY_PHONE.href} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {PRIMARY_PHONE.display}
          </a>
          <span className="text-sm text-muted-foreground">{CONTACTS.phones[1]?.display}</span>
        </div>

        <BookButton variant="hero" size="sm" className="ml-auto hidden h-10 px-5 sm:inline-flex xl:ml-2">
          Консультация
        </BookButton>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="subtle" size="icon" className="ml-auto size-10 lg:hidden" aria-label="Меню">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-md overflow-y-auto border-border bg-background">
            <SheetTitle className="font-display">Меню</SheetTitle>
            <nav className="mt-6 flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 font-display text-lg font-semibold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ul className="mt-4 space-y-1">
              {SERVICES.map((s) => {
                const Icon = SERVICE_ICONS[s.id];
                return (
                  <li key={s.id}>
                    <Link
                      to="/uslugi/$serviceId"
                      params={{ serviceId: s.id }}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-1 py-2 text-sm"
                    >
                      <Icon className="size-4 text-primary" />
                      {s.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 space-y-2 border-t border-border pt-4">
              {CONTACTS.phones.map((p) => (
                <a key={p.href} href={p.href} className="block font-semibold">
                  {p.display}
                  <span className="ml-2 text-sm font-normal text-muted-foreground">{p.label}</span>
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <ServicesMegaMenu open={megaOpen} onOpenChange={setMegaOpen} className="pt-0" />
    </header>
  );
}
