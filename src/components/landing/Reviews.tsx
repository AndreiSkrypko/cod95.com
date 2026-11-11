import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const REVIEWS = [
  {
    name: "Виктор",
    city: "Гродно",
    topic: "КОД 95 · Польша",
    text: "Прошёл длинный курс в Варшаве. Всё по договору, цену назвали сразу и она не поменялась. Ребята помогли с жильём на время обучения и подсказали по документам — сдал с первого раза. Сейчас работаю на польского перевозчика.",
    featured: true,
  },
  {
    name: "Павел",
    city: "Брест",
    topic: "ВНЖ · Польша",
    text: "Оформлял ВНЖ через DrivePrime. Объяснили, какое основание подходит именно мне, собрали пакет и следили за сроками. Без нервов и лишних поездок.",
  },
  {
    name: "Влад",
    city: "Минск",
    topic: "Замена прав",
    text: "После КОД 95 поменял права на польские. Удобно, что всё в одном месте и со скидкой за пакет. Оплачивал частями, на каждый платёж — чек.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="Оценка 5 из 5">
      {Array.from({ length: 5 }).map((_, s) => (
        <Star key={s} className="size-4 fill-primary text-primary" aria-hidden="true" />
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
            lead="Реальные истории тех, кто уже прошёл путь вместе с нами."
          />
          <Reveal className="flex items-center gap-5 lg:pb-3">
            <span className="font-display text-6xl font-extrabold tracking-[-0.04em] text-foreground">
              5.0
            </span>
            <span>
              <Stars />
              <span className="mt-1 block text-sm text-muted-foreground">
                Средняя оценка клиентов
              </span>
            </span>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12 xl:mt-20">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 100}
              as="figure"
              className={cn(
                "surface-card card-interactive spotlight relative flex flex-col overflow-hidden rounded-3xl p-8 md:p-12",
                r.featured ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5",
              )}
            >
              <span
                className="pointer-events-none absolute -top-10 right-8 font-serif text-[12rem] italic leading-none text-primary/15 md:text-[16rem]"
                aria-hidden="true"
              >
                “
              </span>
              <Stars />
              <blockquote
                className={cn(
                  "relative mb-10 mt-8 text-foreground",
                  r.featured
                    ? "font-serif text-3xl italic leading-[1.25] md:text-[2.6rem]"
                    : "text-lg leading-relaxed",
                )}
              >
                {r.text}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 border-t border-border pt-6">
                <span className="grid size-12 place-items-center rounded-full bg-gradient-accent font-display text-lg font-extrabold text-primary-foreground">
                  {r.name[0]}
                </span>
                <span>
                  <span className="block font-display font-bold text-foreground">
                    {r.name}, {r.city}
                  </span>
                  <span className="block text-sm text-muted-foreground">{r.topic}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
