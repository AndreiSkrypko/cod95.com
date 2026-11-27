import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Building2, MapPin, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageBreadcrumbs } from "@/components/layout/PageBreadcrumbs";
import { BookButton } from "./BookingDialog";
import heroTruck from "@/assets/hero-truck.jpg";
import { useLocale } from "@/i18n/locale";
import { CountryFlag, COUNTRY_STRIPE } from "@/components/CountryFlag";
import type { ServiceId } from "@/content/landing";

const PROGRAM_IDS = [
  "short-course",
  "long-course",
  "code95-lt-short",
  "code95-lt-long",
] as const satisfies readonly ServiceId[];
const ADVANTAGE_ICONS = [Building2, Warehouse, MapPin] as const;

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

/** Первый экран: ночное фото + программы на стекле внизу того же экрана. */
export function Hero() {
  const photo = useParallax<HTMLDivElement>();
  const { m } = useLocale();
  const advantages = m.bazaAdvantages;

  return (
    <section id="top" data-home-hero className="hero-viewport isolate">
      <div ref={photo} className="hero-backdrop">
        <img
          src={heroTruck}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className="hero-backdrop-photo"
        />
      </div>
      <div className="hero-backdrop-scrim-dark" aria-hidden />
      <div className="hero-aura" aria-hidden />

      <div className="container-page relative z-[1] flex min-h-svh flex-col gap-4 pt-page-intro pb-7 lg:pb-8">
        <PageBreadcrumbs className="[--accent-foreground:var(--primary-glow)]" />
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,21fr)_minmax(0,20fr)] lg:gap-8 xl:gap-14">
          <div className="max-w-xl lg:max-w-none">
            <h1 className="type-hero-display text-hero-foreground">
              {m.hero.headline}
              <br />
              <span className="hero-serif-accent">{m.hero.line2}</span>
            </h1>
            <p className="type-subtitle hero-copy mt-2.5 lg:mt-3 text-hero-foreground">
              {m.hero.subtitle}
            </p>
            <p className="type-lead hero-copy mt-3 lg:mt-4 max-w-lg text-hero-ink">{m.hero.lead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton variant="hero" size="xl" className="max-sm:w-full">
                {m.hero.book}
                <ArrowRight aria-hidden />
              </BookButton>
              <Button asChild variant="subtle" size="xl" className="max-sm:w-full">
                <Link to="/uslugi">{m.hero.services}</Link>
              </Button>
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 lg:mt-6">
              {advantages.cards.map((card, i) => {
                const Icon = ADVANTAGE_ICONS[i] ?? Building2;
                return (
                  <li key={card.shortTitle} className="flex items-center gap-2">
                    <Icon className="size-4 text-primary-glow" strokeWidth={2} aria-hidden />
                    <span className="font-display text-[0.8125rem] font-bold text-hero-foreground/85">
                      {card.shortTitle}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            id="programs"
            className="mt-8 scroll-mt-24 lg:mt-0"
            aria-labelledby="home-programs-title"
          >
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
              <div>
                <h2
                  id="home-programs-title"
                  className="font-display text-lg font-extrabold tracking-tight text-hero-foreground lg:text-xl"
                >
                  {m.hero.programsTitle}
                </h2>
                <p className="mt-0.5 text-sm text-hero-ink/75">{m.hero.programsLead}</p>
              </div>
              <Link
                to="/informaciya"
                hash="kurs"
                className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-md border border-primary/40 bg-primary/15 px-4 py-2 font-display text-[0.8125rem] font-bold text-primary-glow backdrop-blur-md transition hover:bg-primary/25 hover:text-white max-sm:order-3 max-sm:w-full max-sm:justify-center lg:min-h-12"
              >
                {m.hero.coursePick}
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>

            <ul className="mt-3 flex flex-col gap-2 lg:mt-5 lg:grid lg:grid-cols-2 lg:gap-3 xl:gap-3.5">
              {PROGRAM_IDS.map((serviceId, i) => (
                <li key={serviceId}>
                  <Link
                    to="/uslugi/$serviceId"
                    params={{ serviceId }}
                    className={`hero-program-card hero-program-reveal hero-program-reveal-${i + 1} group relative flex h-full items-center gap-3 overflow-hidden rounded-md border border-white/15 bg-[oklch(0.19_0.03_262/55%)] px-3.5 py-2.5 backdrop-blur-xl transition-all duration-300 lg:min-h-[8.75rem] lg:flex-col lg:items-stretch lg:gap-0 lg:px-4 lg:py-4 lg:pt-5 xl:px-5`}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 opacity-90"
                      style={{
                        background: COUNTRY_STRIPE[serviceId.startsWith("code95-lt") ? "lt" : "pl"],
                      }}
                    />
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="mb-1 flex items-center gap-2 font-display text-[0.625rem] font-bold uppercase tracking-[0.14em] text-hero-muted lg:mb-1.5">
                        <CountryFlag
                          country={serviceId.startsWith("code95-lt") ? "lt" : "pl"}
                          className="h-3.5 w-[1.3125rem]"
                        />
                        {serviceId.startsWith("code95-lt") ? m.hero.country.lt : m.hero.country.pl}
                      </span>
                      <span className="font-display text-[0.9375rem] font-extrabold leading-snug tracking-tight text-hero-foreground lg:text-base">
                        {m.hero.tiles[i]!.label}
                      </span>
                      <span className="mt-1 hidden text-[0.8125rem] leading-snug text-hero-muted lg:mt-1.5 lg:block lg:flex-1">
                        {m.hero.tiles[i]!.note}
                      </span>
                    </span>
                    <span className="shrink-0 font-display text-[0.8125rem] font-extrabold tracking-wide text-primary-glow lg:mt-3 lg:text-sm">
                      {m.hero.tiles[i]!.fact}
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-primary-glow transition-transform duration-300 group-hover:rotate-45 lg:absolute lg:right-5 lg:top-4"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <span
        aria-hidden
        className="hero-scroll-cue absolute bottom-5 left-1/2 z-[1] hidden h-9 w-px -translate-x-1/2 bg-primary-glow/70 lg:block"
      />
    </section>
  );
}
