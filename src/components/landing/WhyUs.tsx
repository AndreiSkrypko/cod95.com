import { FileSignature, Receipt, Wallet, Route } from "lucide-react";
import europeMap from "@/assets/europe-map.jpg";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
  { icon: Receipt, title: "Цена без скрытых платежей", text: "Стоимость фиксируем до старта. Никаких «доплат на месте» и внезапных сборов." },
  { icon: FileSignature, title: "Официальный договор", text: "Работаем как юрлицо: договор, акты и чеки на каждый платёж." },
  { icon: Wallet, title: "Оплата частями", text: "Разбиваем сумму на удобные этапы — начинайте обучение без большой единовременной оплаты." },
  { icon: Route, title: "12+ лет в перевозках", text: "Сами из международной логистики — знаем, что важно водителю и перевозчику." },
];

const GEO = ["Беларусь", "Украина", "Молдова", "Россия", "Страны ЕС", "ЕАЭС"];

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Почему DrivePrime"
          title={<span id="why-title">Прозрачно, как&nbsp;в&nbsp;хорошей логистике</span>}
          lead="Мы отвечаем за результат: от первой консультации до документов на руках."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="surface-card card-interactive rounded-2xl p-6">
              <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-accent">
                <Icon className="size-5 text-primary" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-[0.98rem] text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="surface-card relative mt-4 overflow-hidden rounded-3xl">
          <img
            src={europeMap}
            alt="Абстрактная карта Европы с маршрутами"
            width={1920}
            height={1088}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent" />
          <div className="relative grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
            <div className="max-w-lg">
              <p className="eyebrow">География клиентов</p>
              <p className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                1500+ водителей уже работают в Европе с нашей помощью
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {GEO.map((g) => (
                  <li key={g} className="rounded-full border border-border bg-background/60 px-3 py-1 text-sm text-muted-foreground backdrop-blur">
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-2 gap-6 md:gap-10">
              <div>
                <dt className="text-sm text-muted-foreground">Опыт</dt>
                <dd className="font-display text-5xl font-extrabold text-gradient">12+</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Офиса</dt>
                <dd className="font-display text-5xl font-extrabold text-gradient">2</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
