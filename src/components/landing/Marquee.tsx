import { MARQUEE } from "@/content/landing";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <section
      aria-label="Рекомендуют коллеги"
      className="border-b border-border bg-background py-10 md:py-14"
    >
      <div className="container-page mb-6 flex items-center gap-6">
        <p className="eyebrow shrink-0 text-ink-soft">Рекомендуют коллеги</p>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-marquee gap-14 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <li
              key={i}
              aria-hidden={i >= MARQUEE.length}
              className="flex items-center gap-14 whitespace-nowrap font-serif text-3xl font-medium italic text-muted-foreground transition-colors duration-500 hover:text-foreground md:text-5xl"
            >
              {t}
              <svg viewBox="0 0 12 12" className="size-3 text-primary" aria-hidden="true">
                <path
                  d="M6 0 L7.2 4.8 L12 6 L7.2 7.2 L6 12 L4.8 7.2 L0 6 L4.8 4.8 Z"
                  fill="currentColor"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
