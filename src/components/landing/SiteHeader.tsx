import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PHONE_BY, PHONE_PL, useLocale } from "@/i18n/locale";
import { NAV_LINKS } from "@/i18n/messages";
import { BookButton, useBooking } from "./BookingDialog";
import { LanguageMenu, LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

const linkClass =
  "relative px-3 py-2 font-display text-[0.92rem] font-semibold text-foreground/80 transition-colors hover:text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100";

export function SiteHeader() {
  const openBooking = useBooking();
  const { m } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow",
        scrolled ? "border-border shadow-card" : "border-transparent",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center gap-8">
        <Logo />

        <nav aria-label={m.header.nav} className="hidden items-center lg:flex">
          {NAV_LINKS.map((item) =>
            item.to === "/zapis" ? (
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
          <div className="hidden flex-col items-end gap-0.5 xl:flex">
            <a
              href={PHONE_BY.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
            >
              <Phone className="size-3.5 text-primary" aria-hidden="true" />
              {PHONE_BY.display}
              <span className="text-xs font-medium text-muted-foreground">{m.contacts.minsk}</span>
            </a>
            <a
              href={PHONE_PL.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-foreground"
            >
              <Phone className="size-3.5 text-primary/80" aria-hidden="true" />
              {PHONE_PL.display}
              <span className="text-xs font-medium text-muted-foreground">{m.contacts.warsaw}</span>
            </a>
          </div>
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