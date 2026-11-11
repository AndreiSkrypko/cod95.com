import { useRef, type MouseEvent } from "react";
import { ArrowRight, Award, Building2, GraduationCap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTruck from "@/assets/hero-truck.jpg";
import { RouteMap } from "./RouteMap";

const TRUST = [
  { icon: Award, text: "12+ лет опыта" },
  { icon: GraduationCap, text: "1500+ обученных водителей" },
  { icon: Building2, text: "Офисы в Минске и Варшаве" },
];

/** Subtle magnetic pull for the primary CTA. */
function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const onMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.18;
    const y = (e.clientY - r.top - r.height / 2) * 0.25;
    el.style.translate = `${x}px ${y}px`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.translate = "0 0";
  };
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

export function Hero() {
  const magnetic = useMagnetic<HTMLAnchorElement>();

  return (
    <section id="top" aria-labelledby="hero-title" className="noise relative flex min-h-[90vh] flex-col overflow-hidden pt-28 md:pt-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroTruck}
          alt="Европейский грузовик на магистрали в сумерках"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover object-[70%_center] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>
      <div className="mesh absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page grid flex-1 items-center gap-12 pb-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div>
          <p className="eyebrow inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1.5" style={{ animationDelay: "0.05s" }}>
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Официально · по договору · с сопровождением
          </p>

          <h1
            id="hero-title"
            className="mt-6 animate-fade-up text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[4.5rem]"
            style={{ animationDelay: "0.12s" }}
          >
            КОД 95 в Польше —{" "}
            <span className="text-gradient">легально, быстро и&nbsp;без&nbsp;сюрпризов</span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: "0.24s" }}
          >
            Обучение в Варшаве, литовский КОД 95, замена прав, открытие транспортной компании и ВНЖ.
            Для водителей-международников из Беларуси, Украины, Молдовы, России и ЕС.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.36s" }}>
            <Button asChild variant="hero" size="xl" className="transition-[translate,transform] duration-300">
              <a href="#contacts" {...magnetic}>
                Получить консультацию
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#services">Наши услуги</a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="glass relative aspect-[700/520] overflow-hidden rounded-3xl p-3 shadow-card">
            <div className="flex items-center justify-between px-3 pt-2">
              <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Маршрут клиента
              </span>
              <span className="inline-flex items-center gap-2 font-display text-xs font-semibold text-accent-foreground">
                <span className="size-2 rounded-full bg-primary shadow-glow" />
                Минск → Варшава
              </span>
            </div>
            <RouteMap />
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-border bg-background/40 backdrop-blur-sm">
        <ul className="container-page flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          {TRUST.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 font-display text-sm font-semibold text-foreground md:text-base">
              <span className="grid size-9 place-items-center rounded-full border border-border bg-secondary/60">
                <Icon className="size-4 text-primary" aria-hidden="true" />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
