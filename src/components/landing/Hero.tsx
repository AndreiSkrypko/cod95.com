import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Signpost } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "./BookingDialog";
import heroTruck from "@/assets/hero-truck.jpg";
import { useLocale } from "@/i18n/locale";
import type { ServiceId } from "@/content/landing";

const PROGRAMS = [
  { serviceId: "short-course", country: "pl" },
  { serviceId: "long-course", country: "pl" },
  { serviceId: "code95-lt-short", country: "lt" },
  { serviceId: "code95-lt-long", country: "lt" },
] as const satisfies readonly { serviceId: ServiceId; country: "pl" | "lt" }[];

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

function RouteTrace() {
  return (
    <svg viewBox="0 0 160 52" className="hero-route-trace" fill="none" aria-hidden="true">
      <path d="M1 40h41l24-24h34l12 12h47M12 10h24l32 32h39l12-12h40" />
      <path className="hero-route-line" d="M5 33h30l18-18h37l21 21h17l22-22" />
      <g className="hero-route-stops">
        <circle cx="5" cy="33" r="3" />
        <circle cx="90" cy="15" r="3" />
        <circle cx="150" cy="14" r="3" />
      </g>
    </svg>
  );
}

export function Hero() {
  const photo = useParallax<HTMLDivElement>();
  const { m } = useLocale();

  return (
    <section id="top" aria-labelledby="home-hero-title" className="hero-viewport isolate bg-ink">
      <div ref={photo} className="hero-backdrop hero-road-scene">
        <img
          src={heroTruck}
          alt=""
          width={1280}
          height={720}
          fetchPriority="high"
          className="hero-backdrop-photo"
        />
      </div>
      <div className="hero-backdrop-scrim-dark" aria-hidden />
      <div className="hero-layout container-page text-hero-foreground">
        <div className="min-w-0">
          <p className="hero-kicker flex items-center gap-3">
            <span aria-hidden className="hero-lane-mark" />
            {m.hero.eyebrow}
          </p>
          <h1 id="home-hero-title" className="type-hero-display mt-4 lg:mt-6">
            {m.hero.headline} <span className="hero-serif-accent">{m.hero.line2}</span>
          </h1>
          <p className="mt-4 max-w-lg text-pretty font-display text-base font-medium leading-snug sm:text-xl lg:mt-6 lg:text-2xl">
            {m.hero.subtitle}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2.5 lg:mt-7">
            <BookButton variant="signal" size="sign">
              {m.hero.book}
              <ArrowRight aria-hidden />
            </BookButton>
            <Button variant="signalOutline" size="sign" asChild>
              <Link to="/uslugi">{m.hero.services}</Link>
            </Button>
          </div>
        </div>

        <section
          id="programs"
          aria-labelledby="home-programs-title"
          className="hero-board scroll-mt-24"
        >
          <div className="hero-board-head relative flex items-center justify-between gap-3">
            <div>
              <p className="hero-kicker text-hero-ink">
                PL <span aria-hidden>/</span> LT
              </p>
              <h2
                id="home-programs-title"
                className="mt-1 font-display text-xl font-extrabold leading-tight tracking-tight lg:text-3xl"
              >
                {m.hero.programsTitle}
              </h2>
            </div>
            <RouteTrace />
          </div>
          <ul className="hero-board-grid grid grid-cols-2">
            {PROGRAMS.map(({ serviceId, country }, i) => (
              <li key={serviceId} className="min-w-0">
                <Link
                  to="/uslugi/$serviceId"
                  params={{ serviceId }}
                  className="hero-program-card group"
                >
                  <span className="hero-kicker flex items-center gap-2 text-hero-ink">
                    <span aria-hidden className="hero-flag" data-country={country} />
                    {m.hero.country[country]}
                    <span aria-hidden className="ml-auto font-mono tabular-nums opacity-65">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="mt-2 font-display text-base font-extrabold leading-tight tracking-tight sm:text-xl lg:mt-3.5 xl:text-2xl">
                    {m.hero.tiles[serviceId].label}
                  </span>
                  <span className="mt-1 hidden text-sm leading-tight text-hero-ink sm:block">
                    {m.hero.tiles[serviceId].note}
                  </span>
                  <span className="mt-auto flex items-end justify-between gap-1.5 pt-2 text-xs font-semibold text-primary-glow sm:text-sm lg:pt-4">
                    {m.hero.tiles[serviceId].fact}
                    <ArrowUpRight
                      className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/informaciya" hash="kurs" className="hero-course-picker group">
            <Signpost className="size-4 shrink-0 text-primary-glow" aria-hidden />
            {m.hero.coursePick}
            <ArrowRight
              className="ml-auto size-4 shrink-0 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </section>

        <dl className="hero-stations">
          <div>
            <dt>{m.hero.office}</dt>
            <dd>{m.contacts.minsk}</dd>
          </div>
          <div>
            <dt>{m.hero.base}</dt>
            <dd>{m.contacts.warsaw}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
