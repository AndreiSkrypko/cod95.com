import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "./BookingDialog";
import { HeroAdvantageStrip } from "./BazaAdvantages";
import heroTruck from "@/assets/hero-truck.jpg";
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

export function Hero() {
  const photo = useParallax<HTMLDivElement>();
  const { m } = useLocale();

  return (
    <section id="top" className="hero-viewport">
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
      <div className="hero-backdrop-scrim" aria-hidden />

      <div className="container-page hero-viewport-content pb-12 pt-[calc(4.5rem+1.5rem)] lg:pb-14 lg:pt-28">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="eyebrow eyebrow-rule">{m.hero.eyebrow}</p>
          <h1 className="type-hero-display mt-4 text-foreground">{m.hero.headline}</h1>
          <p className="type-subtitle mt-3 text-foreground">{m.hero.subtitle}</p>
          <p className="type-lead mt-4 max-w-lg">{m.hero.lead}</p>
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
      </div>
    </section>
  );
}