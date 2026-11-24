import type { ReactNode } from "react";
import { Building2, MapPin, Warehouse } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale";

const ICONS = [Building2, Warehouse, MapPin] as const;

type StripProps = {
  /** Компактный ряд под кнопками в левой колонке hero */
  compact?: boolean;
};

/** Преимущества внизу первого экрана (схема клиента). */
export function HeroAdvantageStrip({ compact = false }: StripProps) {
  const { m } = useLocale();
  const items = m.bazaAdvantages;

  return (
    <div aria-labelledby="hero-advantages-title">
      <h2 id="hero-advantages-title" className="sr-only">
        {items.title}
      </h2>
      <ul
        className={cn(
          "grid gap-2",
          compact ? "min-[520px]:grid-cols-3 min-[520px]:gap-2.5 lg:max-w-[38rem] xl:max-w-[42rem]" : "gap-3 sm:grid-cols-3 sm:gap-4",
        )}
      >
        {items.cards.map((card, i) => {
          const Icon = ICONS[i] ?? Building2;
          return (
            <li key={card.title}>
              <AdvantageCard
                compact={compact}
                icon={<Icon className={cn("text-primary", compact ? "size-4" : "size-5")} strokeWidth={2} aria-hidden />}
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

function AdvantageCard({
  compact,
  icon,
  title,
  text,
}: {
  compact?: boolean;
  icon: ReactNode;
  title: string;
  text: string;
}) {
  if (compact) {
    return (
      <article className="hero-surface-strong flex h-full gap-2.5 rounded-xl p-3 text-left sm:p-3.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/12 sm:size-9">{icon}</span>
        <div className="min-w-0">
          <h3 className="font-display text-[0.8125rem] font-extrabold leading-snug tracking-tight text-foreground sm:text-sm">
            {title}
          </h3>
          <p className="mt-1 line-clamp-2 text-[0.6875rem] leading-snug text-foreground/82 sm:text-xs">{text}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="hero-surface-strong flex h-full flex-col rounded-2xl px-4 py-4 text-left sm:px-5 sm:py-5">
      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12">{icon}</span>
      <h3 className="mt-4 font-display text-base font-extrabold tracking-tight text-foreground sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{text}</p>
    </article>
  );
}