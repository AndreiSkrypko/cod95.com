import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CONTACTS } from "@/content/landing";
import { PHONE_BY, PHONE_PL, useLocale } from "@/i18n/locale";
import { NAV_LINKS } from "@/i18n/messages";
import { useBooking } from "./BookingDialog";
import { FooterLegalFinePrint } from "@/components/layout/LegalEntityFinePrint";
import { Logo } from "./Logo";

export function SiteFooter() {
  const openBooking = useBooking();
  const { m } = useLocale();
  const phones = [
    { ...PHONE_BY, label: m.contacts.minsk },
    { ...PHONE_PL, label: m.contacts.warsaw },
  ];
  const hours = [
    { days: m.contacts.weekdays, time: CONTACTS.hours[0]?.time ?? "" },
    { days: m.contacts.saturday, time: CONTACTS.hours[1]?.time ?? "" },
  ];
  return (
    <footer className="noise relative overflow-hidden border-t border-border bg-background-deep">
      <div className="container-page grid gap-12 pb-10 pt-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tagline />
          <p className="mt-6 max-w-sm text-muted-foreground">{m.footer.blurb}</p>
          <button
            type="button"
            onClick={() => openBooking()}
            className="group mt-8 inline-flex items-center gap-3 font-display text-lg font-bold text-foreground"
          >
            {m.footer.discuss}
            <span className="grid size-10 place-items-center rounded-md border border-border-strong transition-colors duration-700 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight
                className="size-4 transition-transform duration-700 ease-out-expo group-hover:rotate-45"
                aria-hidden="true"
              />
            </span>
          </button>
        </div>
        <nav aria-label={m.footer.sections} className="md:col-span-3 md:col-start-7">
          <p className="eyebrow text-ink-soft">{m.footer.sections}</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((n) => (
              <li key={n.key}>
                {n.to === "/zapis" ? (
                  <button
                    type="button"
                    onClick={() => openBooking()}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {m.nav[n.key]}
                  </button>
                ) : (
                  <Link
                    to={n.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {m.nav[n.key]}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="eyebrow text-ink-soft">{m.footer.contact}</p>
          <ul className="mt-5 space-y-3">
            {phones.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="font-display font-semibold text-foreground transition-colors hover:text-accent-foreground"
                >
                  {p.display}
                </a>
                <span className="ml-2 text-sm text-ink-soft">{p.label}</span>
              </li>
            ))}
            {hours.map((h) => (
              <li key={h.days} className="text-muted-foreground">
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className="pointer-events-none select-none text-center font-display text-[19vw] font-extrabold leading-[0.8] tracking-[-0.06em] bg-gradient-to-b from-foreground/12 to-foreground/0 bg-clip-text text-transparent"
        aria-hidden="true"
      >
        BAZA
      </p>

      <FooterLegalFinePrint />

      <div className="border-t border-border">
        <div className="container-page flex flex-col justify-between gap-2 py-6 text-sm text-ink-soft sm:flex-row">
          <p>{m.footer.rights}</p>
          <p>
            {m.contacts.minsk} · {m.contacts.warsaw}
          </p>
        </div>
      </div>
    </footer>
  );
}
