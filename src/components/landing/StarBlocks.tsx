import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  Check,
  GraduationCap,
  Home,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/content/landing";
import classroom from "@/assets/classroom.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import truckCab from "@/assets/truck-cab.jpg";
import truckPractice from "@/assets/truck-practice.jpg";
import classDetail from "@/assets/class-detail.jpg";
import { ContactAside } from "./ContactAside";
import { BookButton, useBooking } from "./BookingDialog";
import { FaqList } from "./FaqList";
import { Reveal } from "./Reveal";

const OFFERS = [
  {
    id: "employment",
    title: "Работа водителем в Европе",
    text: "Официальное трудоустройство по территории ЕС после обучения.",
    points: ["Проверенные перевозчики-партнёры", "Помощь с опытом и без опыта"],
    cta: "Найти работу",
    tone: "dark" as const,
    Icon: Truck,
  },
  {
    id: "short-course",
    title: "Короткий курс обучения",
    text: "Для водителей, у которых категория «С» получена до 09.09.2009.",
    points: ["3–5 рабочих дней", "Экзамен сдавать не нужно"],
    cta: "Записаться на курс",
    tone: "light" as const,
    Icon: GraduationCap,
  },
  {
    id: "long-course",
    title: "Длинный курс обучения",
    text: "Для водителей, у которых категория «С» получена после 09.09.2009.",
    points: ["Стационарный", "Онлайн", "Без экзамена — по ситуации"],
    cta: "Записаться на курс",
    tone: "light" as const,
    Icon: GraduationCap,
    variants: true,
  },
  {
    id: "residence",
    title: "ВНЖ и карта побыту",
    text: "Документы для легальной жизни и работы в Польше — вместо отдельной чип-карты.",
    points: ["Подбор основания", "Подача и контроль сроков", "Сопровождение семьи"],
    cta: "Оставить заявку",
    tone: "hot" as const,
    Icon: Home,
  },
];

const PERKS = [
  { title: "Прозрачная цена", text: "Стоимость фиксируем в договоре до старта. Чеки на каждый платёж." },
  { title: "Два офиса", text: "Минск и Варшава — консультация на родном языке и очное сопровождение." },
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
  { src: trainingTrucks, alt: "Учебный автопарк" },
  { src: classroom, alt: "Занятие в классе" },
  { src: classDetail, alt: "Материалы курса" },
  { src: truckPractice, alt: "Практика на площадке" },
  { src: truckCab, alt: "Кабина тягача" },
];

export function StoryBlock() {
  return (
    <section className="bg-paper text-ink section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">О школе</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Путь водителя в ЕС — по шагам, без сюрпризов
          </h2>
          <div className="mt-6 space-y-4 text-lg text-ink-muted">
            <p>
              DrivePrime вырос из международной логистики: мы сами знаем, что без КОД 95 водителя просто не
              допустят к рейсу по Европе, а экзамен и бумаги на чужом языке останавливают сильнее, чем дорога.
            </p>
            <p>
              Сегодня сопровождаем от выбора курса до документов и, если нужно, до трудоустройства. Офисы в
              Минске и Варшаве, договор и фиксированная цена.
            </p>
            <p>
              Больше 1 500 водителей уже прошли этот путь с нами — с опытом и без.
            </p>
          </div>
          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link to="/o-nas">Узнать больше о школе</Link>
          </Button>
        </Reveal>
        <Reveal delay={80} className="overflow-hidden rounded-3xl">
          <img src={truckCab} alt="Кабина современного тягача" className="aspect-[4/5] w-full object-cover" />
        </Reveal>
      </div>
      <div className="container-page mt-16">
        <p className="max-w-3xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
          Наша главная цель —{" "}
          <span className="text-primary">легальные документы, понятное обучение и подготовка водителя без скрытых доплат.</span>
        </p>
      </div>
    </section>
  );
}

export function OfferRow() {
  const openBooking = useBooking();
  return (
    <section id="services" className="bg-paper pb-20 text-ink">
      <div className="container-page">
        <h2 className="text-center font-display text-4xl font-extrabold md:text-5xl">Услуги</h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {OFFERS.map((o) => (
            <li
              key={o.id}
              className={
                o.tone === "dark"
                  ? "flex flex-col rounded-3xl bg-ink p-6 text-paper md:p-7"
                  : o.tone === "hot"
                    ? "flex flex-col rounded-3xl bg-primary p-6 text-primary-foreground md:p-7"
                    : "flex flex-col rounded-3xl border border-black/10 bg-white p-6 text-ink shadow-sm md:p-7"
              }
            >
              <o.Icon className="size-12" strokeWidth={1.4} />
              <h3 className="mt-6 font-display text-2xl font-extrabold">{o.title}</h3>
              <p className="mt-3 text-sm opacity-80">{o.text}</p>
              {o.variants && <p className="mt-4 text-sm font-semibold">Возможные варианты обучения:</p>}
              <ul className="mt-4 space-y-2 text-sm">
                {o.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openBooking(o.id)}
                className={
                  o.tone === "light"
                    ? "mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 font-display font-bold text-primary-foreground"
                    : "mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white/15 px-5 font-display font-bold"
                }
              >
                {o.cta}
              </button>
              <p className="mt-3 text-center text-xs opacity-70">Ответ в рабочее время</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <Link to="/uslugi" className="font-display font-bold text-primary">
            Все услуги →
          </Link>
        </p>
      </div>
    </section>
  );
}

export function ConsultSplit() {
  return (
    <section className="section-y border-t border-border bg-background">
      <div className="container-page grid items-start gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            Получите бесплатную консультацию
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Заполните форму — менеджер свяжется с вами в ближайшее рабочее время.
          </p>
          <BookButton variant="hero" size="xl" className="mt-8">
            Оставить заявку
          </BookButton>
        </div>
        <div className="text-lg text-muted-foreground">
          <p>
            Профессия водителя-дальнобойщика востребована в Евросоюзе. Чтобы работать легально, нужны не
            только права нужной категории, но и КОД 95.
          </p>
          <p className="mt-4">
            DrivePrime в Варшаве и Минске закрывает путь целиком: курс, документы, при необходимости ВНЖ и
            выход на работу.
          </p>
          <img
            src={classroom}
            alt="Учебный класс"
            className="mt-8 aspect-video w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function Code95Block() {
  return (
    <section className="section-y border-t border-border bg-background-deep">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <img src={classDetail} alt="Материалы курса КОД 95" className="rounded-3xl object-cover" />
        <div>
          <h2 className="font-display text-4xl font-extrabold">Что значит Код 95</h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground">
            <p>
              Это квалификация для водителей категорий C, CE или D, без которой нельзя легально работать на
              дорогах Евросоюза. Её получают на коротком или длинном курсе.
            </p>
            <p>
              После сертификата код вписывают в права и указывают срок действия. Повторный курс лучше не
              откладывать — иначе можно остаться без допуска к рейсу.
            </p>
          </div>
          <Button asChild variant="hero" className="mt-8">
            <Link to="/informaciya">Подробнее</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Perks() {
  return (
    <section className="bg-paper section-y text-ink">
      <div className="container-page">
        <h2 className="font-display text-4xl font-extrabold">Наши преимущества</h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((p) => (
            <li key={p.title}>
              <details className="group rounded-2xl border border-black/10 bg-white p-5 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display font-bold">
                  <span className="flex items-center gap-3">
                    <ShieldCheck className="size-5 text-primary" />
                    {p.title}
                  </span>
                  <Briefcase className="size-4 text-ink-muted group-open:rotate-12" />
                </summary>
                <p className="mt-3 text-sm text-ink-muted">{p.text}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeFaq() {
  return (
    <section id="faq" className="section-y border-t border-border">
      <div className="container-page max-w-3xl">
        <h2 className="font-display text-4xl font-extrabold">Частые вопросы</h2>
        <div className="mt-8">
          <FaqList />
        </div>
        <p className="mt-4 text-sm text-ink-soft">{FAQ.length} ответов — полный разбор на странице информации.</p>
      </div>
    </section>
  );
}

export function SchoolLife() {
  return (
    <section className="section-y border-t border-border bg-background-deep">
      <div className="container-page">
        <h2 className="font-display text-4xl font-extrabold">Жизнь школы</h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {LIFE.map((img) => (
            <li key={img.alt} className="overflow-hidden rounded-2xl">
              <img src={img.src} alt={img.alt} className="aspect-[3/4] h-full w-full object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeContacts() {
  return (
    <section id="contacts" className="section-y border-t border-border">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-extrabold">Контакты</h2>
          <ContactAside />
          <Button asChild variant="subtle" className="mt-8">
            <Link to="/kontakty">Страница контактов</Link>
          </Button>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-surface p-8">
          <h3 className="font-display text-2xl font-extrabold">Не нашли то, что искали?</h3>
          <p className="mt-2 text-muted-foreground">Оставьте заявку — перезвоним в рабочее время.</p>
          <BookButton variant="hero" size="xl" className="mt-6">
            Оставить заявку
          </BookButton>
        </div>
      </div>
    </section>
  );
}

export function FloatDock() {
  const openBooking = useBooking();
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="tel:+375293565778"
        className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow"
        aria-label="Позвонить"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" />
        </svg>
      </a>
      <button
        type="button"
        onClick={() => openBooking()}
        className="grid size-14 place-items-center rounded-full border border-border bg-white text-foreground shadow-card"
        aria-label="Оставить заявку"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 6h14v10H8l-3 3z" />
        </svg>
      </button>
    </div>
  );
}
