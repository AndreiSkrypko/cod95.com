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

      <div className="container-page relative z-[1] flex min-h-[min(72svh,40rem)] flex-col justify-center pb-12 pt-[calc(4.5rem+1.5rem)] lg:min-h-[min(78svh,44rem)] lg:pb-14 lg:pt-28">
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