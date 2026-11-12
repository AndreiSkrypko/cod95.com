import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/content/landing";
import classroom from "@/assets/classroom.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import truckPractice from "@/assets/truck-practice.jpg";
import classDetail from "@/assets/class-detail.jpg";
import storyHighway from "@/assets/story-highway.jpg";
import offerJob from "@/assets/offer-job.jpg";
import offerResidence from "@/assets/offer-residence.jpg";
import consultOffice from "@/assets/consult-office.jpg";
import lifeBriefing from "@/assets/life-briefing.jpg";
import lifeNight from "@/assets/life-night.jpg";
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
  { src: lifeBriefing, alt: "Инструктор у учебного тягача", wide: true },
  { src: trainingTrucks, alt: "Учебный автопарк" },
  { src: classroom, alt: "Занятие в классе" },
  { src: truckPractice, alt: "Практика на площадке" },
  { src: lifeNight, alt: "Ночной рейс по трассе", wide: true },
  { src: classDetail, alt: "Материалы курса" },
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
        <Reveal delay={80} variant="clip" className="overflow-hidden rounded-3xl shadow-card">
          <img
            src={storyHighway}
            alt="Ночная трасса из кабины тягача"
            className="aspect-[4/5] w-full object-cover"
          />
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
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card text-ink shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={o.image}
                  alt={o.alt}
                  className="h-full w-full object-cover transition duration-700 ease-out-expo group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="font-display text-2xl font-extrabold">{o.title}</h3>
                <p className="mt-3 text-sm text-ink-muted">{o.text}</p>
                {"variants" in o && o.variants ? (
                  <p className="mt-4 text-sm font-semibold">Возможные варианты обучения:</p>
                ) : null}
                <ul className="mt-4 space-y-2 text-sm">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => openBooking(o.id)}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 font-display font-bold text-primary-foreground"
                >
                  {o.cta}
                </button>
                <p className="mt-3 text-center text-xs text-ink-soft">Ответ в рабочее время</p>
              </div>
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
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            Получите бесплатную консультацию
          </h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground">
            <p>Менеджер свяжется в ближайшее рабочее время и скажет, какой курс ваш.</p>
            <p>
              Профессия водителя востребована в Евросоюзе. Чтобы работать легально, нужны не только права, но
              и КОД 95. DrivePrime в Варшаве и Минске закрывает путь целиком: курс, документы, при
              необходимости ВНЖ и выход на работу.
            </p>
          </div>
          <BookButton variant="hero" size="xl" className="mt-8">
            Оставить заявку
          </BookButton>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-card">
          <img
            src={consultOffice}
            alt="Консультация в учебном центре"
            className="aspect-[16/10] w-full object-cover lg:aspect-[4/3]"
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
        <div className="overflow-hidden rounded-3xl shadow-card">
          <img
            src={lifeBriefing}
            alt="Инструктаж перед практикой на тягаче"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
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
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <h2 className="font-display text-4xl font-extrabold">Наши преимущества</h2>
          <p className="text-ink-muted">
            Договор, два офиса и практика на той технике, на которой потом едут в рейс.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <div className="overflow-hidden rounded-3xl shadow-card lg:col-span-5">
            <img
              src={lifeNight}
              alt="Ночной рейс по европейской трассе"
              className="h-full min-h-80 w-full object-cover"
            />
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-7">
            {PERKS.map((p) => (
              <li key={p.title} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display font-bold text-ink">{p.title}</p>
                <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
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
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {LIFE.map((img) => (
            <li
              key={img.alt}
              className={img.wide ? "col-span-2 overflow-hidden rounded-3xl" : "overflow-hidden rounded-3xl"}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={img.wide ? "aspect-[16/9] h-full w-full object-cover" : "aspect-[3/4] h-full w-full object-cover"}
              />
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
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <img
            src={offerResidence}
            alt="Вечерняя улица у офиса в городе"
            className="aspect-[16/8] w-full object-cover"
          />
          <div className="p-8">
            <h3 className="font-display text-2xl font-extrabold">Не нашли то, что искали?</h3>
            <p className="mt-2 text-muted-foreground">Оставьте заявку — перезвоним в рабочее время.</p>
            <BookButton variant="hero" size="xl" className="mt-6">
              Оставить заявку
            </BookButton>
          </div>
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
