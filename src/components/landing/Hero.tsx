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
    <section id="top" className="relative flex flex-col overflow-x-clip">
      <div ref={photo} className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroTruck}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full max-w-none origin-center animate-hero-drive object-cover object-[72%_center] lg:right-auto lg:left-[-28%] lg:w-[124%] lg:object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.985_0.012_80/92%)_0%,oklch(0.985_0.012_80/62%)_50%,oklch(0.985_0.012_80/28%)_100%)] lg:bg-[linear-gradient(100deg,oklch(0.985_0.012_80)_0%,oklch(0.985_0.012_80/86%)_22%,oklch(0.985_0.012_80/48%)_40%,oklch(0.985_0.012_80/32%)_55%,oklch(0.985_0.012_80/22%)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[min(50%,28rem)] bg-[linear-gradient(270deg,oklch(0.98_0.012_80/92%)_0%,oklch(0.985_0.012_80/58%)_50%,oklch(0.985_0.012_80/28%)_100%)] lg:block"
        aria-hidden="true"
      />
      <div className="container-page relative z-[1] flex flex-col pb-24 pt-[calc(4.5rem+1.75rem)] lg:min-h-[min(100svh,54rem)] lg:pb-14 lg:pt-36">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-14">
          <div className="max-w-xl xl:max-w-2xl">
            <p className="eyebrow eyebrow-rule animate-fade-up">{m.hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-[clamp(3.25rem,11vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-foreground">
              <span className="line-mask">
                <span className="block animate-line-up">{m.hero.headline}</span>
              </span>
            </h1>
            <p
              className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground/90 animate-fade-up sm:text-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              {m.hero.subtitle}
            </p>
            <p
              className="mt-4 max-w-md animate-fade-up text-base leading-relaxed text-foreground/80 md:text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              {m.hero.lead}
            </p>
            <div className="mt-7 flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: "0.32s" }}>
              <BookButton variant="hero" size="xl">
                {m.hero.book}
                <ArrowRight aria-hidden="true" />
              </BookButton>
              <Button asChild variant="subtle" size="xl">
                <Link to="/uslugi">{m.hero.services}</Link>
              </Button>
            </div>

            <div className="mt-8 animate-fade-up lg:mt-10" style={{ animationDelay: "0.4s" }}>
              <HeroAdvantageStrip compact />
            </div>
          </div>

          <aside
            className="animate-fade-up w-full sm:ml-auto lg:mr-[12.5rem] lg:max-w-[19rem] lg:justify-self-end xl:mr-[11.5rem] xl:max-w-[20rem]"
            style={{ animationDelay: "0.15s" }}
            aria-labelledby="hero-programs-title"
          >
            <h2 id="hero-programs-title" className="font-display text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              {m.hero.programsTitle}
            </h2>
            <p className="mt-1 text-sm font-semibold text-foreground">{m.hero.programsLead}</p>

            <ul className="mt-4 flex flex-col gap-3">
              {TILE_META.map((t, i) => (
                <li key={t.params.serviceId}>
                  <Link
                    to="/uslugi/$serviceId"
                    params={t.params}
                    className="group flex items-center gap-3 transition-opacity hover:opacity-90"
                  >
                    <span className="relative block size-14 shrink-0 overflow-hidden rounded-xl shadow-card sm:size-16">
                      <img
                        src={t.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-700 ease-out-expo group-hover:scale-105"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-1">
                        <span className="font-display text-sm font-bold leading-snug text-foreground">{m.hero.tiles[i]!.label}</span>
                        <ArrowUpRight className="size-3.5 shrink-0 text-primary transition group-hover:rotate-45" />
                      </span>
                      <span className="mt-0.5 line-clamp-2 text-xs leading-snug text-foreground/88">{m.hero.tiles[i]!.note}</span>
                      <span className="mt-1 block font-display text-xs font-bold text-primary">{m.hero.tiles[i]!.fact}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm font-semibold leading-snug text-foreground">{m.hero.unsure}</p>
            <Button asChild variant="ink" className="mt-2.5 h-11 w-full max-w-full px-5 text-sm lg:max-w-[18.5rem]">
              <Link to="/informaciya" hash="kurs">
                {m.hero.coursePick}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}