import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { useLocale } from "@/i18n/locale";
import type { ServiceId } from "@/content/landing";

const PROGRAM_IDS = ["short-course", "long-course", "code95-lt-short", "code95-lt-long"] as const satisfies readonly ServiceId[];

/** Программы — сразу под первым экраном, не в колонке hero. */
export function HeroProgramsBand() {
  const { m } = useLocale();

  return (
    <section id="programs" className="border-t border-border bg-background py-8 md:py-12" aria-labelledby="home-programs-title">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="home-programs-title" className="type-section-title text-2xl md:text-3xl">
              {m.hero.programsTitle}
            </h2>
            <p className="type-lead mt-1">{m.hero.programsLead}</p>
          </div>
          <Button asChild variant="ink" className="h-11 w-full shrink-0 px-5 sm:w-auto">
            <Link to="/informaciya" hash="kurs">
              {m.hero.coursePick}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>

        <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:mt-8 lg:grid-cols-4 lg:gap-3">
          {PROGRAM_IDS.map((serviceId, i) => (
            <li key={serviceId} className="min-w-0">
              <Reveal delay={i * 40}>
                <Link
                  to="/uslugi/$serviceId"
                  params={{ serviceId }}
                  className="group flex h-full min-h-[7.5rem] flex-col rounded-2xl border border-border bg-card px-4 py-4 shadow-card transition hover:border-primary/35 hover:bg-secondary/25 sm:px-5 sm:py-5"
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="font-display text-sm font-bold leading-snug text-foreground lg:text-[0.9375rem]">
                      {m.hero.tiles[i]!.label}
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-primary transition group-hover:rotate-45"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-2 flex-1 text-sm leading-snug text-muted-foreground">{m.hero.tiles[i]!.note}</span>
                  <span className="mt-3 font-display text-sm font-bold text-primary">{m.hero.tiles[i]!.fact}</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-5 lg:mt-6">
          <Link
            to="/informaciya"
            hash="kurs"
            className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary underline-offset-4 transition hover:underline"
          >
            {m.hero.unsure}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  );
}