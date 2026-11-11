import { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATS } from "@/content/landing";
import heroTruck from "@/assets/hero-truck.jpg";
import { RouteMap } from "./RouteMap";
import { CountUp } from "./Reveal";

const LINES = [
  <>КОД 95 в Польше —</>,
  <>легально, быстро</>,
  <>
    и <span className="accent-serif pr-[0.08em]">без сюрпризов</span>
  </>,
];

/** Background drifts slower than the page for depth. */
function useParallax<T extends HTMLElement>(speed = 0.28) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight * 1.2);
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
  const parallax = useParallax<HTMLDivElement>();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="noise relative flex min-h-[100svh] flex-col overflow-hidden bg-background-deep pt-32 md:pt-40"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-20">
        <div ref={parallax} className="absolute inset-0 will-change-transform">
          <img
            src={heroTruck}
            alt="Европейский грузовик на мокрой магистрали в синий час"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="h-full w-full animate-kenburns object-cover object-[68%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-deep via-background-deep/75 to-background-deep/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background-deep/70" />
        <div className="column-guides absolute inset-0 opacity-60" aria-hidden="true" />
      </div>

      <div className="container-page grid flex-1 items-center gap-14 pb-16 xl:grid-cols-12 xl:items-end xl:gap-10 xl:pb-24">
        <div className="xl:col-span-8">
          <p
            className="eyebrow animate-fade-up rounded-full border border-primary/30 bg-background-deep/40 px-4 py-2 backdrop-blur"
            style={{ animationDelay: "0.1s" }}
          >
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Официально · по договору · с сопровождением
          </p>

          <h1
            id="hero-title"
            className="mt-8 text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-7xl xl:text-[5.4rem] 2xl:text-[6.1rem]"
          >
            {LINES.map((line, i) => (
              <span key={i} className="line-mask">
                <span
                  className="block animate-line-up"
                  style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-8 max-w-2xl animate-fade-up text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: "0.6s" }}
          >
            Обучение в Варшаве, литовский КОД 95, замена прав, открытие транспортной компании и ВНЖ.
            Для водителей-международников из Беларуси, Украины, Молдовы, России и ЕС.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.72s" }}
          >
            <Button asChild variant="hero" size="xl">
              <a href="#contacts">
                Получить консультацию
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#services">Наши услуги</a>
            </Button>
          </div>
        </div>

        <div
          className="relative hidden animate-fade-up xl:col-span-4 xl:block"
          style={{ animationDelay: "0.85s" }}
        >
          <div className="glass relative overflow-hidden rounded-3xl p-3 shadow-card">
            <div className="flex items-center justify-between px-3 pt-2">
              <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Маршрут клиента
              </span>
              <span className="inline-flex items-center gap-2 font-display text-xs font-semibold text-accent-foreground">
                <span className="size-1.5 rounded-full bg-primary shadow-glow" />
                Минск → Варшава
              </span>
            </div>
            <div className="aspect-[700/480]">
              <RouteMap />
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-border-strong bg-background/35 backdrop-blur-md">
        <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="flex animate-fade-up flex-col-reverse justify-end border-border py-6 pr-4 odd:border-r lg:border-r lg:py-8 lg:pl-8 lg:first:pl-0 lg:last:border-r-0 [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0 max-lg:even:pl-6"
              style={{ animationDelay: `${0.9 + i * 0.08}s` }}
            >
              <dt className="mt-1 text-sm text-muted-foreground md:text-base">{s.label}</dt>
              <dd className="font-display text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
