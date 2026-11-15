import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/content/landing";
import { heroPhone, useLocale } from "@/i18n/locale";
import { NAV_LINKS } from "@/i18n/messages";
import { BookButton, useBooking } from "./BookingDialog";
import { LanguageMenu, LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { SERVICE_ICONS } from "./serviceIcons";

const linkClass =
  "relative px-3 py-2 font-display text-[0.92rem] font-semibold text-foreground/80 transition-colors hover:text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100";

export function SiteHeader() {
  const openBooking = useBooking();
  const { m, locale } = useLocale();
  const phone = heroPhone(locale);
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

        <nav aria-label={m.header.nav} className="hidden items-center lg:flex">
          {NAV_LINKS.map((item) =>
            "mega" in item ? (
              <button
                key={item.key}
                type="button"
                className={cn(linkClass, "inline-flex items-center gap-1", megaOpen && "text-foreground after:scale-x-100")}
                aria-expanded={megaOpen}
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
              >
                {m.nav[item.key]}
                <ChevronDown className={cn("size-3.5 transition-transform", megaOpen && "rotate-180")} />
              </button>
            ) : item.to === "/zapis" ? (
              <button key={item.key} type="button" className={linkClass} onClick={() => openBooking()}>
                {m.nav[item.key]}
              </button>
            ) : (
              <Link
                key={item.key}
                to={item.to}
                className={linkClass}
                activeProps={{ className: "text-foreground after:scale-x-100" }}
              >
                {m.nav[item.key]}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <LanguageSwitch />
          <a href={phone.href} className="hidden items-center gap-2 text-sm font-semibold text-foreground xl:inline-flex">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {phone.display}
          </a>
        </div>

        <BookButton variant="hero" size="sm" className="ml-auto hidden h-10 px-5 sm:inline-flex lg:ml-2">
          {m.header.consult}
        </BookButton>

        <div className="ml-auto flex items-center gap-2 sm:ml-0 lg:hidden">
          <LanguageMenu />
          <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="subtle" size="icon" className="size-10" aria-label={m.header.menu}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-md overflow-y-auto border-border bg-background">
            <SheetTitle className="font-display">{m.header.menu}</SheetTitle>
            <nav className="mt-6 flex flex-col">
              {NAV_LINKS.map((item) =>
                item.to === "/zapis" ? (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      openBooking();
                    }}
                    className="border-b border-border py-3 text-left font-display text-lg font-semibold"
                  >
                    {m.nav[item.key]}
                  </button>
                ) : (
                  <Link
                    key={item.key}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-3 font-display text-lg font-semibold"
                  >
                    {m.nav[item.key]}
                  </Link>
                ),
              )}
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
                      {m.services[s.id].title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 space-y-2 border-t border-border pt-4">
              <a href={phone.href} className="block font-semibold">
                {phone.display}
              </a>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>

      <ServicesMegaMenu open={megaOpen} onOpenChange={setMegaOpen} className="pt-0" />
    </header>
  );
}
