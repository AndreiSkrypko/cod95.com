import { FileSignature, Receipt, Wallet, Route } from "lucide-react";
import europeMap from "@/assets/europe-map.jpg";
import { STATS } from "@/content/landing";
import { CountUp, Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
  {
    icon: Receipt,
    title: "Цена без скрытых платежей",
    text: "Стоимость фиксируем до старта. Никаких «доплат на месте» и внезапных сборов.",
  },
  {
    icon: FileSignature,
    title: "Официальный договор",
    text: "Работаем как юрлицо: договор, акты и чеки на каждый платёж.",
  },
  {
    icon: Wallet,
    title: "Оплата частями",
    text: "Разбиваем сумму на удобные этапы — начинайте обучение без большой единовременной оплаты.",
  },
  {
    icon: Route,
    title: "12+ лет в перевозках",
    text: "Сами из международной логистики — знаем, что важно водителю и перевозчику.",
  },
];

const GEO = ["Беларусь", "Украина", "Молдова", "Россия", "Страны ЕС", "ЕАЭС"];

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="section-y">
      <div className="container-page grid gap-14 xl:grid-cols-12 xl:gap-10">
        <div className="xl:col-span-5">
          <div className="xl:sticky xl:top-32">
            <SectionHeading
              eyebrow="Почему DrivePrime"
              title={
                <span id="why-title">
                  Прозрачно, как в&nbsp;<span className="accent-serif">хорошей</span> логистике
                </span>
              }
              lead="Мы отвечаем за результат: от первой консультации до документов на руках."
            />
          </div>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 xl:col-span-7">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 90}
              className="spotlight group flex min-h-72 flex-col bg-surface p-8 transition-colors duration-700 hover:bg-surface-raised md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-primary/30 bg-accent transition-transform duration-700 ease-out-expo group-hover:-translate-y-1">
                  <Icon className="size-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="font-serif text-3xl italic text-ink-soft">0{i + 1}</span>
              </div>
              <h3 className="mt-auto pt-10 text-xl font-bold text-foreground md:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Full-bleed geography band */}
      <Reveal
        variant="clip"
        className="relative mt-20 overflow-hidden border-y border-border bg-background-deep xl:mt-28"
      >
        <img
          src={europeMap}
          alt="Карта Европы с маршрутами клиентов"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-deep via-background-deep/80 to-background-deep/10" />
        <div className="container-page relative grid gap-12 py-20 md:py-28 xl:grid-cols-12 xl:items-end">
          <div className="xl:col-span-6">
            <p className="eyebrow eyebrow-rule">География клиентов</p>
            <p className="mt-6 font-display text-4xl font-extrabold tracking-[-0.035em] text-foreground md:text-6xl">
              <CountUp value={1500} suffix="+" /> водителей уже работают в&nbsp;Европе{" "}
              <span className="accent-serif">с нашей помощью</span>
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {GEO.map((g) => (
                <li
                  key={g}
                  className="rounded-full border border-border-strong bg-background-deep/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <dl className="grid grid-cols-2 gap-8 xl:col-span-5 xl:col-start-8">
            {STATS.filter((s) => s.value !== 1500)
              .slice(0, 2)
              .map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col-reverse justify-end border-l border-primary/40 pl-6"
                >
                  <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="font-display text-6xl font-extrabold tracking-[-0.04em] text-gradient md:text-7xl">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
