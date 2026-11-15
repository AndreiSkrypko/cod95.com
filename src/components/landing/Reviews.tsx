import { ArrowUpRight, Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL, REVIEWS, SAME_TEAM, TAXOCARD_URL } from "@/content/reviews";
import { Reveal, SectionHeading } from "./Reveal";

function Stars() {
  return (
    <div className="flex gap-1" aria-label="Оценка 5 из 5">
      {Array.from({ length: 5 }).map((_, s) => (
        <Star key={s} className="size-3.5 fill-primary text-primary" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="section-y border-t border-border"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Отзывы"
            title={
              <span id="reviews-title">
                Водители <span className="accent-serif">о нас</span>
              </span>
            }
            lead={SAME_TEAM}
          />
          <Reveal className="flex items-center gap-5 lg:pb-3">
            <span className="font-display text-6xl font-extrabold tracking-[-0.04em] text-foreground">
              5.0
            </span>
            <span>
              <Stars />
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-muted-foreground hover:text-primary"
              >
                1100+ отзывов в Google у Taxocard
              </a>
              <a
                href={TAXOCARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 font-display text-sm font-bold text-primary"
              >
                taxocard.by
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </span>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 80}
              as="figure"
              className="surface-card card-interactive spotlight relative flex flex-col overflow-hidden rounded-3xl p-6"
            >
              <span
                className="pointer-events-none absolute -top-4 right-4 font-serif text-7xl italic leading-none text-primary/15"
                aria-hidden="true"
              >
                “
              </span>
              <Stars />
              <blockquote className="relative mb-6 mt-4 text-sm leading-relaxed text-foreground">
                {r.text}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                <span className="grid size-10 place-items-center rounded-full bg-gradient-accent font-display font-extrabold text-primary-foreground">
                  {r.name[0]}
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-foreground">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.topic}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
