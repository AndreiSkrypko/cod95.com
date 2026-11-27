import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOME } from "@/i18n/home-copy";
import { PAGES } from "@/i18n/pages-copy";
import { CountryFlag } from "@/components/CountryFlag";
import { SERVICES_CATALOG, type CatalogItem } from "@/i18n/services-catalog";
import advantagesInstructor from "@/assets/advantages-instructor.jpg";
import classroom from "@/assets/classroom.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import truckPractice from "@/assets/truck-practice.jpg";
import classDetail from "@/assets/class-detail.jpg";
import lifeBriefing from "@/assets/life-briefing.jpg";
import lifeNight from "@/assets/life-night.jpg";
import offerResidence from "@/assets/offer-residence.jpg";
import consultOffice from "@/assets/consult-office.jpg";
import { ContactAside } from "./ContactAside";
import { BookButton, useBooking } from "./BookingDialog";
import { heroPhone, useLocale } from "@/i18n/locale";
import { FaqList } from "./FaqList";
import { Reveal } from "./Reveal";


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
    <section className="home-band section-y text-foreground" aria-labelledby="home-story-title">
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
            <p className="type-accent-quote mt-8 border-l-2 border-primary pl-5 text-accent-foreground">
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

function OfferCard({ item }: { item: CatalogItem }) {
  const openBooking = useBooking();
  const isCourse = item.country === "pl" || item.country === "lt";
  const inner = (
    <>
      <span className="flex items-start justify-between gap-2">
        {isCourse ? (
          <span />
        ) : (
          <span className="text-[0.6875rem] font-semibold uppercase tracking-wide text-primary">
            {item.subtitle}
          </span>
        )}
        <CountryFlag country={item.country} className={item.country === "lt-pl" ? "[&>span]:h-4 [&>span]:w-6" : "h-4 w-6"} />
      </span>
      <h3 className="mt-1.5 font-display text-lg font-extrabold leading-snug text-foreground">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {item.short}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary transition-all group-hover:gap-2.5">
        {item.cta}
        <ArrowRight className="size-3.5" aria-hidden />
      </span>
    </>
  );
  const className =
    "surface-card card-interactive group relative flex h-full flex-col overflow-hidden p-5 text-left";
  if (item.action.kind === "book") {
    return (
      <button type="button" onClick={() => openBooking()} className={className}>
        {inner}
      </button>
    );
  }
  return (
    <Link to="/uslugi/$serviceId" params={{ serviceId: item.action.serviceId }} className={className}>
      {inner}
    </Link>
  );
}

export function OfferRow() {
  const { locale } = useLocale();
  const offers = HOME[locale].offers;
  const items = SERVICES_CATALOG[locale].categories.flatMap((c) => c.items);
  return (
    <section id="services" className="home-band section-y border-t border-border">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow eyebrow-rule">{offers.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{offers.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{offers.lead}</p>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item, i) => (
              <li key={item.title} className="h-full">
                <Reveal delay={i * 45} className="h-full">
                  <OfferCard item={item} />
                </Reveal>
              </li>
            ))}
            <li className="h-full">
              <Reveal delay={items.length * 45} className="h-full">
              <Link
                to="/informaciya"
                hash="kurs"
                className="card-interactive group flex h-full flex-col rounded-md border border-border bg-[linear-gradient(150deg,oklch(0.68_0.2_48/22%)_0%,oklch(0.68_0.2_48/7%)_55%,transparent_100%),var(--surface)] p-5 text-left hover:border-primary/50"
              >
                <p className="inline-flex w-fit items-center rounded-full bg-primary/20 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-primary-glow ring-1 ring-primary/40">
                  {offers.pick.eyebrow}
                </p>
                <h3 className="mt-2.5 font-display text-lg font-extrabold leading-snug text-foreground">
                  {offers.pick.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {offers.pick.text}
                </p>
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-accent px-4 py-2 font-display text-sm font-bold text-primary-foreground transition-all group-hover:gap-2.5">
                  {offers.pick.cta}
                  <ArrowRight className="size-3.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          </li>
        </ul>
        <p className="mt-8">
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
    <section className="home-band-warm section-y border-t border-border">
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

/** Scroll-driven parallax with inertia: the mover eases toward its scroll-driven target instead of snapping to it, so the descent feels smooth. No-op on mobile (track height collapses to content). */
function useDescendParallax() {
  const trackRef = useRef<HTMLDivElement>(null);
  const moverRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let running = false;
    let current = -1;
    let target = 0;

    const measure = () => {
      const track = trackRef.current;
      const mover = moverRef.current;
      if (!track || !mover) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / rect.height));
      const maxShift = Math.max(0, track.offsetHeight - mover.offsetHeight);
      target = progress * maxShift;
    };

    const tick = () => {
      const mover = moverRef.current;
      if (!mover) {
        running = false;
        return;
      }
      if (current < 0) current = target;
      current += (target - current) * 0.09;
      if (Math.abs(target - current) < 0.3) current = target;
      mover.style.transform = `translate3d(0, ${current.toFixed(1)}px, 0)`;
      if (current !== target) {
        frame = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const onScroll = () => {
      measure();
      if (!running) {
        running = true;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(tick);
      }
    };

    measure();
    if (trackRef.current && moverRef.current) {
      current = target;
      moverRef.current.style.transform = `translate3d(0, ${current.toFixed(1)}px, 0)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return { trackRef, moverRef };
}

/** Раздел «Наши преимущества» на главной. */
export function Perks() {
  const { locale } = useLocale();
  const perks = HOME[locale].perks;
  const { trackRef, moverRef } = useDescendParallax();
  return (
    <section id="advantages" className="home-band-warm section-y border-t border-border">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow eyebrow-rule">{perks.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{perks.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{perks.lead}</p>
        </Reveal>
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4 lg:self-stretch">
            <div ref={trackRef} className="relative h-full">
              <div ref={moverRef} className="will-change-transform">
                <figure>
                  <div className="overflow-hidden rounded-md shadow-lift">
                    <img
                      src={advantagesInstructor}
                      alt={perks.imageAlt}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </Reveal>
          <ul className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
            {perks.items.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 35} className="surface-card h-full p-5">
                  <span aria-hidden="true" className="mb-3 block font-display text-xs font-bold tabular-nums tracking-widest text-accent-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
    <section id="faq" className="section-y border-t border-border bg-background-deep">
      <div className="container-page grid gap-12 xl:grid-cols-12 xl:gap-10">
        <div className="xl:col-span-5">
          <div className="xl:sticky xl:top-32">
            <Reveal>
              <p className="eyebrow eyebrow-rule">{home.faqEyebrow}</p>
              <h2 className="type-section-title mt-4">{home.faqTitle}</h2>
              <p className="mt-4 max-w-md text-muted-foreground">{home.faqLead}</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BookButton variant="hero" size="xl">
                  {home.faqAsk}
                  <ArrowRight aria-hidden="true" />
                </BookButton>
                <Button asChild variant="subtle" size="lg">
                  <Link to="/informaciya">{home.faqAll}</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-ink-soft">
                {PAGES[locale].faq.length} {home.faqMore}
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal className="xl:col-span-7">
          <FaqList />
        </Reveal>
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
    <section id="contacts" className="home-band section-y border-t border-border">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-extrabold">{contacts.title}</h2>
          <ContactAside />
          <Button asChild variant="subtle" className="mt-8">
            <Link to="/kontakty">{contacts.page}</Link>
          </Button>
        </div>
        <div className="surface-card overflow-hidden">
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
        className="grid size-14 place-items-center rounded-md border border-border bg-surface text-foreground shadow-card"
        aria-label={m.dock.request}
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 6h14v10H8l-3 3z" />
        </svg>
      </button>
    </div>
  );
}
