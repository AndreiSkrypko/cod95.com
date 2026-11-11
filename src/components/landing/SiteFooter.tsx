import { ArrowUpRight } from "lucide-react";
import { CONTACTS, NAV } from "@/content/landing";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="noise relative overflow-hidden border-t border-border bg-background-deep">
      <div className="container-page grid gap-12 pb-10 pt-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-muted-foreground">
            Легальное оформление КОД 95 и сопутствующих услуг для водителей-международников. Офисы в
            Минске и Варшаве.
          </p>
          <a
            href="#contacts"
            className="group mt-8 inline-flex items-center gap-3 font-display text-lg font-bold text-foreground"
          >
            Обсудить вашу ситуацию
            <span className="grid size-10 place-items-center rounded-full border border-border-strong transition-all duration-700 ease-out-expo group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>
        <nav aria-label="Навигация в подвале" className="md:col-span-3 md:col-start-7">
          <p className="eyebrow text-ink-soft">Разделы</p>
          <ul className="mt-5 space-y-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="eyebrow text-ink-soft">Связь</p>
          <ul className="mt-5 space-y-3">
            {CONTACTS.phones.map((p) => (
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
            {CONTACTS.hours.map((h) => (
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
        DrivePrime
      </p>

      <div className="border-t border-border">
        <div className="container-page flex flex-col justify-between gap-2 py-6 text-sm text-ink-soft sm:flex-row">
          <p>© 2026 DrivePrime / COD95. Все права защищены.</p>
          <p>Минск · Варшава</p>
        </div>
      </div>
    </footer>
  );
}
