import type { ReactNode } from "react";
import { Building2, MapPin, Warehouse } from "lucide-react";
import { useLocale } from "@/i18n/locale";

const ICONS = [Building2, Warehouse, MapPin] as const;

/** Преимущества учебного центра (схема клиента). */
export function HeroAdvantageStrip() {
  const { m } = useLocale();
  const items = m.bazaAdvantages;

  return (
    <div aria-labelledby="hero-advantages-title">
      <h2 id="hero-advantages-title" className="sr-only">
        {items.title}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {items.cards.map((card, i) => {
          const Icon = ICONS[i] ?? Building2;
          return (
            <li key={card.title}>
              <AdvantageCard
                icon={<Icon className="size-5 text-primary" strokeWidth={2} aria-hidden />}
                title={card.shortTitle}
                text={card.text}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AdvantageCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="hero-surface-strong flex h-full flex-col rounded-2xl px-4 py-4 text-left sm:px-5 sm:py-5">
      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-base font-extrabold tracking-tight text-foreground sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{text}</p>
    </article>
  );
}
