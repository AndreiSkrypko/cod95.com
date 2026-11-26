import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PHONE_BY, PHONE_PL, useLocale } from "@/i18n/locale";
import { NAV_LINKS } from "@/i18n/messages";
import { BookButton, useBooking } from "./BookingDialog";
import { LanguageMenu, LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

const linkBase =
  "relative whitespace-nowrap px-2 py-2 font-display text-[0.875rem] font-semibold transition-colors after:absolute after:inset-x-2 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 xl:px-3 xl:text-[0.92rem]";
const linkLight = `${linkBase} text-foreground/80 hover:text-foreground`;
const linkOnHero = `${linkBase} text-white/80 hover:text-white`;

export function SiteHeader() {
  const openBooking = useBooking();
  const { m } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = useRouterState({ select: (s) => s.location.pathname === "/" });
  // Прозрачная шапка со светлым текстом поверх тёмного hero главной страницы.
  const onHero = isHome && !scrolled;
  const linkClass = onHero ? linkOnHero : linkLight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow] duration-300",
        onHero
          ? "border-transparent bg-[oklch(0.16_0.03_260/30%)]"
          : "border-border bg-surface/95 shadow-card",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center gap-4 xl:gap-8">
        <Logo />

        <nav aria-label={m.header.nav} className="hidden items-center lg:flex">
          {NAV_LINKS.map((item) =>
            item.to === "/zapis" ? (
              <button
                key={item.key}
                type="button"
                className={linkClass}
                onClick={() => openBooking()}
              >
                {m.nav[item.key]}
              </button>
            ) : (
              <Link
                key={item.key}
                to={item.to}
                className={linkClass}
                activeProps={{
                  className: onHero
                    ? "text-white after:scale-x-100"
                    : "text-foreground after:scale-x-100",
                }}
              >
                {m.nav[item.key]}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          {/* телефоны — только когда ширины хватает, иначе шапка переполняется */}
          <LanguageSwitch />
          <div className="hidden min-w-[13.5rem] flex-col items-start gap-1 2xl:flex">
            <a
              href={PHONE_BY.href}
              className={cn(
                "inline-flex items-center gap-2 text-left text-sm font-semibold hover:text-primary",
                onHero ? "text-white" : "text-foreground",
              )}
            >
              <Phone className="size-3.5 text-primary" aria-hidden="true" />
              {PHONE_BY.display}
              <span
                className={cn(
                  "text-xs font-medium",
                  onHero ? "text-white/50" : "text-muted-foreground",
                )}
              >
                {m.contacts.minsk}
              </span>
            </a>
            <a
              href={PHONE_PL.href}
              className={cn(
                "inline-flex items-center gap-2 text-left text-sm font-semibold",
                onHero
                  ? "text-white/75 hover:text-white"
                  : "text-foreground/80 hover:text-foreground",
              )}
            >
              <Phone
                className={cn("size-3.5", onHero ? "text-primary-glow/90" : "text-primary/80")}
                aria-hidden="true"
              />
              {PHONE_PL.display}
              <span
                className={cn(
                  "text-xs font-medium",
                  onHero ? "text-white/50" : "text-muted-foreground",
                )}
              >
                {m.contacts.warsaw}
              </span>
            </a>
          </div>
        </div>

        <BookButton
          variant="hero"
          size="sm"
          className="ml-auto hidden h-10 px-5 sm:inline-flex lg:ml-2"
        >
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
            <SheetContent
              side="right"
              className="w-[88vw] max-w-md overflow-y-auto border-border bg-background"
            >
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
              <div className="mt-6 space-y-3 border-t border-border pt-4">
                <a href={PHONE_BY.href} className="block">
                  <span className="font-semibold">{PHONE_BY.display}</span>
                  <span className="ml-2 text-sm text-muted-foreground">{m.contacts.minsk}</span>
                </a>
                <a href={PHONE_PL.href} className="block">
                  <span className="font-semibold">{PHONE_PL.display}</span>
                  <span className="ml-2 text-sm text-muted-foreground">{m.contacts.warsaw}</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
