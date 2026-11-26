import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ABOUT_PHOTOS } from "@/assets/baza/about-photos";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { useLocale } from "@/i18n/locale";

const TILE_META = [
  { params: { serviceId: "short-course" as const }, image: ABOUT_PHOTOS.gallery.class },
  { params: { serviceId: "long-course" as const }, image: ABOUT_PHOTOS.gallery.truck },
  { params: { serviceId: "code95-lt-short" as const }, image: ABOUT_PHOTOS.gallery.lesson },
  { params: { serviceId: "code95-lt-long" as const }, image: ABOUT_PHOTOS.practice },
];

/** Программы — сразу под первым экраном, не в колонке hero. */
export function HeroProgramsBand() {
  const { m } = useLocale();

  return (
    <section id="programs" className="border-t border-border bg-background py-10 md:py-14" aria-labelledby="home-programs-title">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="home-programs-title" className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              {m.hero.programsTitle}
            </h2>
            <p className="mt-1 text-muted-foreground">{m.hero.programsLead}</p>
          </div>
          <Button asChild variant="ink" className="h-11 w-full shrink-0 px-5 sm:w-auto">
            <Link to="/informaciya" hash="kurs">
              {m.hero.coursePick}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:gap-4">
          {TILE_META.map((t, i) => (
            <li key={t.params.serviceId}>
              <Reveal delay={i * 50}>
                <Link
                  to="/uslugi/$serviceId"
                  params={t.params}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-3 transition-colors hover:border-primary/35 hover:bg-secondary/30 sm:p-4"
                >
                  <span className="relative block size-16 shrink-0 overflow-hidden rounded-xl sm:size-[4.5rem]">
                    <img
                      src={t.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-start justify-between gap-2">
                      <span className="font-display text-sm font-bold leading-snug text-foreground sm:text-base">
                        {m.hero.tiles[i]!.label}
                      </span>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-primary transition group-hover:rotate-45"
                        aria-hidden
                      />
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{m.hero.tiles[i]!.note}</span>
                    <span className="mt-1 block font-display text-sm font-bold text-primary">{m.hero.tiles[i]!.fact}</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm font-medium text-foreground">{m.hero.unsure}</p>
      </div>
    </section>
  );
}