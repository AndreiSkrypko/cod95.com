import { Quote, Star } from "lucide-react";
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

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section-y border-t border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Отзывы"
          title={<span id="reviews-title">Водители о нас</span>}
          lead="Реальные истории тех, кто уже прошёл путь вместе с нами."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 90}
              as="figure"
              className={cn(
                "surface-card card-interactive flex flex-col rounded-3xl p-7 md:p-9",
                r.featured ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-6",
              )}
            >
              <div className="flex items-center justify-between">
                <Quote className="size-8 text-primary" aria-hidden="true" />
                <div className="flex gap-0.5" aria-label="Оценка 5 из 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <blockquote className={cn("mt-6 text-foreground", r.featured ? "text-xl leading-relaxed md:text-2xl" : "text-lg")}>
                {r.text}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 pt-8">
                <span className="grid size-11 place-items-center rounded-full bg-gradient-accent font-display font-extrabold text-primary-foreground">
                  {r.name[0]}
                </span>
                <span>
                  <span className="block font-display font-bold text-foreground">{r.name}, {r.city}</span>
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
