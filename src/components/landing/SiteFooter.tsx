import { CONTACTS, NAV } from "@/content/landing";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="noise border-t border-border bg-surface/50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-muted-foreground">
            Легальное оформление КОД 95 и сопутствующих услуг для водителей-международников.
            Офисы в Минске и Варшаве.
          </p>
        </div>
        <nav aria-label="Навигация в подвале">
          <p className="eyebrow text-ink-soft">Разделы</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow text-ink-soft">Связь</p>
          <ul className="mt-4 space-y-2">
            {CONTACTS.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="font-display font-semibold text-foreground hover:text-accent-foreground">{p.display}</a>
              </li>
            ))}
            {CONTACTS.hours.map((h) => (
              <li key={h.days} className="text-muted-foreground">{h.days}: {h.time}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col justify-between gap-2 py-6 text-sm text-ink-soft sm:flex-row">
          <p>© 2026 DrivePrime / COD95. Все права защищены.</p>
          <p>Минск · Варшава</p>
        </div>
      </div>
    </footer>
  );
}
