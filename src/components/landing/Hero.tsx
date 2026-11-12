import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "./BookingDialog";
import heroTruck from "@/assets/hero-truck.jpg";
import classroom from "@/assets/classroom.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import classDetail from "@/assets/class-detail.jpg";
import truckCab from "@/assets/truck-cab.jpg";
import { CountUp } from "./Reveal";

const TILES = [
  {
    params: { serviceId: "short-course" as const },
    label: "Короткий курс",
    note: "Для категории C, полученной до 2009 года",
    fact: "3–5 дней · без экзамена",
    image: classroom,
  },
  {
    params: { serviceId: "long-course" as const },
    label: "Длинный курс",
    note: "Теория, практика и экзамен в WORD",
    fact: "около 21 дня",
    image: trainingTrucks,
  },
  {
    params: { serviceId: "license" as const },
    label: "Замена прав",
    note: "Обмен удостоверения на польские",
    fact: "пакет и сопровождение",
    image: classDetail,
  },
  {
    params: { serviceId: "employment" as const },
    label: "Трудоустройство",
    note: "Выход к проверенным перевозчикам",
    fact: "с опытом и без",
    image: truckCab,
  },
];

const HERO_STATS = [
  { kicker: "Работаем на рынке", value: 12, suffix: "+", unit: "лет" },
  { kicker: "Обучили уже более", value: 1500, suffix: "", unit: "водителей" },
  { kicker: "Собственных офиса", value: 2, suffix: "", unit: "Минск и Варшава" },
];

function useParallax<T extends HTMLElement>(speed = 0.18) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        if (ref.current) ref.current.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);
  return ref;
}

export function Hero() {
  const photo = useParallax<HTMLDivElement>();

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden lg:h-[100svh]">
      <div ref={photo} className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroTruck}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full max-w-none origin-center animate-hero-drive object-cover object-[78%_center]"
        />
      </div>
      {/* Light field only behind the copy — the cab stays in the open middle */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.985_0.012_80/92%)_0%,oklch(0.985_0.012_80/72%)_46%,oklch(0.985_0.012_80/40%)_100%)] lg:bg-[linear-gradient(100deg,oklch(0.985_0.012_80)_0%,oklch(0.985_0.012_80/92%)_22%,oklch(0.985_0.012_80/22%)_40%,transparent_56%)]"
        aria-hidden="true"
      />

      <div className="container-page relative flex flex-1 flex-col justify-end gap-6 pb-6 pt-28 lg:grid lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-center lg:gap-8 lg:pb-8 xl:grid-cols-[minmax(0,1fr)_23rem]">
        <div className="max-w-xl xl:max-w-2xl">
          <p className="eyebrow eyebrow-rule animate-fade-up">Запись на курс КОД 95</p>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] text-foreground sm:text-7xl xl:text-8xl">
            <span className="line-mask">
              <span className="block animate-line-up">КОД 95</span>
            </span>
            <span className="line-mask">
              <span className="block animate-line-up text-primary" style={{ animationDelay: "0.12s" }}>
                в Польше
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-md animate-fade-up text-lg text-foreground/80 md:text-xl" style={{ animationDelay: "0.28s" }}>
            Запись на курс Код 95 для работы в Европе. Офисы в Минске и Варшаве.
          </p>
          <div className="mt-8 flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: "0.4s" }}>
            <BookButton variant="hero" size="xl">
              Записаться
              <ArrowRight aria-hidden="true" />
            </BookButton>
            <Button asChild variant="subtle" size="xl">
              <Link to="/uslugi">Все услуги</Link>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-xl animate-fade-up grid-cols-3 gap-4" style={{ animationDelay: "0.5s" }}>
            {HERO_STATS.map((s) => (
              <div key={s.kicker}>
                <dt className="text-xs leading-snug text-foreground/70 md:text-sm">{s.kicker}</dt>
                <dd className="mt-1 font-display text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <p className="text-sm font-medium text-foreground">{s.unit}</p>
              </div>
            ))}
          </dl>
        </div>

        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {TILES.map((t, i) => (
            <li key={t.label} className="animate-fade-up" style={{ animationDelay: `${0.35 + i * 0.08}s` }}>
              <Link
                to="/uslugi/$serviceId"
                params={t.params}
                className="group flex h-full items-center gap-3 overflow-hidden rounded-2xl glass p-2 pr-3 shadow-card transition duration-500 hover:-translate-y-1"
              >
                <span className="relative block size-14 shrink-0 overflow-hidden rounded-xl sm:size-16">
                  <img
                    src={t.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 ease-out-expo group-hover:scale-105"
                  />
                </span>
                <span className="min-w-0 py-1">
                  <span className="flex items-center justify-between gap-1">
                    <span className="font-display text-sm font-bold text-foreground">{t.label}</span>
                    <ArrowUpRight className="size-3.5 shrink-0 text-primary transition group-hover:rotate-45" />
                  </span>
                  <span className="mt-0.5 line-clamp-2 text-xs leading-snug text-muted-foreground">{t.note}</span>
                  <span className="mt-1 block font-display text-xs font-bold text-primary">{t.fact}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
