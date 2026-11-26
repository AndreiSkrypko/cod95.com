import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOME } from "@/i18n/home-copy";
import { PAGES } from "@/i18n/pages-copy";
import classroom from "@/assets/classroom.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import truckPractice from "@/assets/truck-practice.jpg";
import classDetail from "@/assets/class-detail.jpg";
import lifeBriefing from "@/assets/life-briefing.jpg";
import lifeNight from "@/assets/life-night.jpg";
import offerJob from "@/assets/offer-job.jpg";
import offerResidence from "@/assets/offer-residence.jpg";
import consultOffice from "@/assets/consult-office.jpg";
import { ABOUT_PHOTOS } from "@/assets/baza/about-photos";
import { ContactAside } from "./ContactAside";
import { BookButton, useBooking } from "./BookingDialog";
import { heroPhone, useLocale } from "@/i18n/locale";
import { FaqList } from "./FaqList";
import { Reveal } from "./Reveal";

const OFFERS = [
  {
    id: "employment",
    title: "Работа водителем в Европе",
    text: "Официальное трудоустройство по территории ЕС после обучения.",
    points: ["Проверенные перевозчики-партнёры", "Помощь с опытом и без опыта"],
    cta: "Найти работу",
    image: offerJob,
    alt: "Водитель у тягача на площадке в сумерках",
  },
  {
    id: "short-course",
    title: "Короткий курс обучения",
    text: "Для водителей, у которых категория «С» получена до 09.09.2009.",
    points: ["3–5 рабочих дней", "Экзамен сдавать не нужно"],
    cta: "Записаться на курс",
    image: classroom,
    alt: "Учебный класс с видом на город",
  },
  {
    id: "long-course",
    title: "Длинный курс обучения",
    text: "Для водителей, у которых категория «С» получена после 09.09.2009.",
    points: ["Стационарный", "Онлайн", "Без экзамена — по ситуации"],
    cta: "Записаться на курс",
    image: trainingTrucks,
    alt: "Учебный автопарк на площадке",
    variants: true,
  },
  {
    id: "residence",
    title: "ВНЖ и карта побыту",
    text: "Документы для легальной жизни и работы в Польше — вместо отдельной чип-карты.",
    points: ["Подбор основания", "Подача и контроль сроков", "Сопровождение семьи"],
    cta: "Оставить заявку",
    image: offerResidence,
    alt: "Вечерняя улица у жилых домов",
  },
];

const PERKS = [
  { title: "Прозрачная цена", text: "Стоимость фиксируем в договоре до старта. Чеки на каждый платёж." },
  { title: "Учебный центр", text: "Занятия в Варшаве, консультации на русском — по телефону и онлайн." },
  { title: "Документы в одном месте", text: "КОД 95, замена прав, ВНЖ, приглашение, ADR — без беготни по инстанциям." },
  { title: "Сопровождение", text: "От заявки до документов на руках. Менеджер на связи в рабочее время." },
  { title: "Практика на технике", text: "Учебная площадка и современные тягачи, дополнительные часы вождения." },
  { title: "Офисы в ЕС и дома", text: "Помогаем водителям из Беларуси, Украины, Молдовы, России и ЕС." },
  { title: "Жильё на время курса", text: "Подскажем варианты проживания рядом с учебным центром в Варшаве." },
  { title: "Опытные преподаватели", text: "Объясняем правила ЕС простым языком, без зубрёжки тестов вслепую." },
  { title: "Работа после курса", text: "Помогаем выйти к перевозчикам — с опытом и без." },
  { title: "Официальный договор", text: "Работаем как юрлицо. Споры решаются по договору, а не «на словах»." },
  { title: "Пакет со скидкой", text: "Две услуги и больше — персональная скидка, размер на консультации." },
  { title: "Нетипичные ситуации", text: "Литовский код, смена прав, виза — разбираем случай отдельно, а не по шаблону." },
];

const LIFE = [
  { src: lifeBriefing, alt: "Инструктор у учебного тягача", wide: true },
  { src: trainingTrucks, alt: "Учебный автопарк" },
  { src: classroom, alt: "Занятие в классе" },
  { src: truckPractice, alt: "Практика на площадке" },
  { src: lifeNight, alt: "Ночной рейс по трассе", wide: true },
  { src: classDetail, alt: "Материалы курса" },
];

export function StoryBlock() {
  const { locale } = useLocale();
  const story = HOME[locale].story;
  return (
    <section className="section-y bg-background text-foreground" aria-labelledby="home-story-title">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="flex flex-col">
          <Reveal>
            <p className="eyebrow eyebrow-rule">{story.eyebrow}</p>
            <h2 id="home-story-title" className="type-section-title mt-4">
              {story.title}
            </h2>
            <div className="type-prose mt-8 space-y-6">
              <p>{story.p1}</p>
              <p>{story.p2}</p>
              <p>{story.p3}</p>
            </div>
            <p className="accent-serif type-accent-quote mt-8">
              {story.accent}
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
              <Link to="/o-nas">{story.cta}</Link>
            </Button>
          </Reveal>
        </div>
        <Reveal delay={80} variant="clip" className="overflow-hidden rounded-md shadow-lift">
          <img
            src={lifeBriefing}
            alt={story.imageAlt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function OfferRow() {
  const openBooking = useBooking();
  const { locale } = useLocale();
  const offers = HOME[locale].offers;
  return (
    <section id="services" className="bg-paper pb-20 text-ink">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">{offers.title}</h2>
          <p className="mt-3 text-ink-muted">{offers.lead}</p>
        </div>
        <ul className="mt-8 grid gap-4 lg:grid-cols-2">
          {OFFERS.map((o) => {
            const copy = offers.items[o.id as keyof typeof offers.items];
            return (
            <li
              key={o.id}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-card text-ink shadow-card sm:flex-row"
            >
              <div className="relative h-36 shrink-0 overflow-hidden sm:h-auto sm:w-44">
                <img
                  src={o.image}
                  alt={copy.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out-expo group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="font-display text-2xl font-extrabold">{copy.title}</h3>
                <p className="mt-3 text-sm text-ink-muted">{copy.text}</p>
                {"variants" in o && o.variants ? (
                  <p className="mt-4 text-sm font-semibold">{offers.variants}</p>
                ) : null}
                <ul className="mt-4 space-y-2 text-sm">
                  {copy.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => openBooking(o.id)}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-5 font-display font-bold text-primary-foreground"
                >
                  {copy.cta}
                </button>
                <p className="mt-3 text-center text-xs text-ink-soft">{offers.reply}</p>
              </div>
            </li>
            );
          })}
        </ul>
        <p className="mt-8 text-center">
          <Link to="/uslugi" className="font-display font-bold text-primary">
            {offers.all}
          </Link>
        </p>
      </div>
    </section>
  );
}

export function ConsultSplit() {
  const { locale } = useLocale();
  const consult = HOME[locale].consult;
  return (
    <section className="section-y border-t border-border bg-background">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <div>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">{consult.title}</h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground">
            <p>{consult.p1}</p>
            <p>{consult.p2}</p>
          </div>
          <BookButton variant="hero" size="xl" className="mt-8">
            {consult.cta}
          </BookButton>
        </div>
        <div className="overflow-hidden rounded-md shadow-card">
          <img
            src={consultOffice}
            alt={consult.imageAlt}
            className="aspect-[16/10] max-h-72 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function Code95Block() {
  const { locale } = useLocale();
  const block = HOME[locale].code95;
  return (
    <section className="section-y border-t border-border bg-background-deep">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <div className="overflow-hidden rounded-md shadow-card">
          <img
            src={lifeBriefing}
            alt={block.imageAlt}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-4xl font-extrabold">{block.title}</h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground">
            <p>{block.p1}</p>
            <p>{block.p2}</p>
            <p>{block.p3}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero">
              <Link to="/informaciya" hash="kurs">
                {block.quiz}
              </Link>
            </Button>
            <Button asChild variant="subtle">
              <Link to="/informaciya">{block.more}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Раздел «Наши преимущества» на главной. */
export function Perks() {
  const { locale } = useLocale();
  const perks = HOME[locale].perks;
  return (
    <section id="advantages" className="section-y border-t border-border bg-paper text-ink">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow eyebrow-rule">{perks.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{perks.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{perks.lead}</p>
        </Reveal>
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal variant="clip" className="lg:col-span-4">
            <figure>
              <div className="overflow-hidden rounded-md shadow-lift">
                <img
                  src={ABOUT_PHOTOS.practice}
                  alt={perks.imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-ink-muted">{perks.caption}</figcaption>
            </figure>
          </Reveal>
          <ul className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-8">
            {perks.items.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 35} className="h-full rounded-md border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function HomeFaq() {
  const { locale } = useLocale();
  const home = HOME[locale];
  return (
    <section id="faq" className="section-y border-t border-border">
      <div className="container-page max-w-3xl">
        <h2 className="font-display text-4xl font-extrabold">{home.faqTitle}</h2>
        <div className="mt-8">
          <FaqList />
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          {PAGES[locale].faq.length} {home.faqMore}
        </p>
      </div>
    </section>
  );
}

export function SchoolLife() {
  const { locale } = useLocale();
  const school = HOME[locale].school;
  return (
    <section className="section-y border-t border-border bg-background-deep">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold">{school.title}</h2>
          <p className="mt-3 text-muted-foreground">{school.lead}</p>
        </div>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LIFE.map((img, i) => (
            <li key={img.src}>
              <figure>
                <div className="overflow-hidden rounded-md">
                  <img src={img.src} alt={school.alts[i] ?? ""} className="aspect-[16/10] w-full object-cover" />
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground">{school.alts[i]}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeContacts() {
  const { locale } = useLocale();
  const contacts = HOME[locale].contacts;
  return (
    <section id="contacts" className="section-y border-t border-border">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-extrabold">{contacts.title}</h2>
          <ContactAside />
          <Button asChild variant="subtle" className="mt-8">
            <Link to="/kontakty">{contacts.page}</Link>
          </Button>
        </div>
        <div className="overflow-hidden rounded-md border border-border bg-card shadow-card">
          <img
            src={offerResidence}
            alt={contacts.imageAlt}
            className="h-36 w-full object-cover"
          />
          <div className="p-8">
            <h3 className="font-display text-2xl font-extrabold">{contacts.missing}</h3>
            <p className="mt-2 text-muted-foreground">{contacts.lead}</p>
            <BookButton variant="hero" size="xl" className="mt-6">
              {contacts.cta}
            </BookButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FloatDock() {
  const openBooking = useBooking();
  const { locale, m } = useLocale();
  const phone = heroPhone(locale);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={phone.href}
        className="grid size-14 place-items-center rounded-md bg-primary text-primary-foreground shadow-glow"
        aria-label={m.dock.call}
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" />
        </svg>
      </a>
      <button
        type="button"
        onClick={() => openBooking()}
        className="grid size-14 place-items-center rounded-md border border-border bg-white text-foreground shadow-card"
        aria-label={m.dock.request}
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 6h14v10H8l-3 3z" />
        </svg>
      </button>
    </div>
  );
}
