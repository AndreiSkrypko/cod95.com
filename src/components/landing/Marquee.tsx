import { MARQUEE } from "@/content/landing";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <section aria-label="Рекомендуют коллеги" className="border-b border-border py-8">
      <div className="container-page mb-5">
        <p className="eyebrow text-center text-ink-soft">Рекомендуют коллеги</p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <li key={i} aria-hidden={i >= MARQUEE.length} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-semibold text-muted-foreground">
              {t}
              <span className="size-1.5 rounded-full bg-primary/60" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
