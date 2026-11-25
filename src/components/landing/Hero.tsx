import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "./BookingDialog";
import { HeroAdvantageStrip } from "./BazaAdvantages";
import heroTruck from "@/assets/hero-truck.jpg";
import classroom from "@/assets/classroom.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import classDetail from "@/assets/class-detail.jpg";
import truckCab from "@/assets/truck-cab.jpg";
import { useLocale } from "@/i18n/locale";

function useParallax<T extends HTMLElement>(speed = 0.15) {
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

const TILE_META = [
  { params: { serviceId: "short-course" as const }, image: classroom },
  { params: { serviceId: "long-course" as const }, image: trainingTrucks },
  { params: { serviceId: "code95-lt" as const }, image: classDetail },
  { params: { serviceId: "lt-retrain" as const }, image: truckCab },
];

export function Hero() {
  const photo = useParallax<HTMLDivElement>();
  const { m } = useLocale();

  return (
    <section id="top" className="relative overflow-x-clip">
      <div ref={photo} className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroTruck}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full max-w-none origin-center animate-hero-drive object-cover object-[70%_center] lg:left-[-26%] lg:w-[118%] lg:object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.985_0.012_80/94%)_0%,oklch(0.985_0.012_80/58%)_55%,oklch(0.985_0.012_80/22%)_100%)] lg:bg-[linear-gradient(105deg,oklch(0.99_0.01_80)_0%,oklch(0.985_0.012_80/88%)_24%,oklch(0.985_0.012_80/45%)_42%,oklch(0.985_0.012_80/18%)_58%,transparent_76%)]"
        aria-hidden
      />

      <div className="container-page relative z-[1] flex min-h-[min(100svh,56rem)] flex-col justify-center pb-20 pt-[calc(4.5rem+1.5rem)] lg:pb-16 lg:pt-32 xl:pr-28">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(17.5rem,20rem)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-14">
          <div className="max-w-xl xl:max-w-2xl">
            <p className="eyebrow eyebrow-rule">{m.hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-[clamp(2.75rem,10vw,6.25rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-foreground">
              {m.hero.headline}
            </h1>
            <p className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{m.hero.subtitle}</p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/85 md:text-lg">{m.hero.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookButton variant="hero" size="xl">
                {m.hero.book}
                <ArrowRight aria-hidden />
              </BookButton>
              <Button asChild variant="subtle" size="xl">
                <Link to="/o-nas">{m.hero.services}</Link>
              </Button>
            </div>
            <div className="mt-8 lg:mt-10">
              <HeroAdvantageStrip compact />
            </div>
          </div>

          <aside className="w-full lg:max-w-[21rem] lg:justify-self-end" aria-labelledby="hero-programs-title">
            <h2 id="hero-programs-title" className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
              {m.hero.programsTitle}
            </h2>
            <p className="mt-1 text-sm font-semibold text-foreground/90">{m.hero.programsLead}</p>

            <ul className="mt-4 flex flex-col gap-2.5">
              {TILE_META.map((t, i) => (
                <li key={t.params.serviceId}>
                  <Link
                    to="/uslugi/$serviceId"
                    params={t.params}
                    className="group flex items-center gap-3 rounded-2xl hero-glass p-2 pr-3 transition duration-300 hover:-translate-y-0.5"
                  >
                    <span className="relative block size-14 shrink-0 overflow-hidden rounded-xl sm:size-16">
                      <img
                        src={t.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-700 ease-out-expo group-hover:scale-105"
                      />
                    </span>
                    <span className="min-w-0 flex-1 py-0.5">
                      <span className="flex items-start justify-between gap-1">
                        <span className="font-display text-sm font-bold leading-snug">{m.hero.tiles[i]!.label}</span>
                        <ArrowUpRight className="size-3.5 shrink-0 text-primary transition group-hover:rotate-45" />
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-foreground/85">{m.hero.tiles[i]!.note}</span>
                      <span className="mt-1 block font-display text-xs font-bold text-primary">{m.hero.tiles[i]!.fact}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm font-semibold text-foreground">{m.hero.unsure}</p>
            <Button asChild variant="ink" className="mt-2 h-11 w-full px-5 text-sm">
              <Link to="/informaciya" hash="kurs">
                {m.hero.coursePick}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}