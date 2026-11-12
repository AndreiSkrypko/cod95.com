import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import { ABOUT_LEAD, ABOUT_VALUES } from "@/content/about";
import { PAGE_VISUALS } from "@/content/serviceVisuals";
import lifeBriefing from "@/assets/life-briefing.jpg";
import { STATS } from "@/content/landing";
import { CountUp, Reveal } from "@/components/landing/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "О компании — DrivePrime" },
      {
        name: "description",
        content:
          "DrivePrime: сопровождение водителей-международников — КОД 95, документы, ВНЖ. Офисы в Минске и Варшаве.",
      },
    ],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="О нас"
        title={<>DrivePrime — ваш партнёр на пути в&nbsp;Европу</>}
        lead={ABOUT_LEAD.mission}
        image={PAGE_VISUALS.about.src}
        imageAlt={PAGE_VISUALS.about.alt}
      />
      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">Наша цель</h2>
            <p className="mt-4 text-lg text-muted-foreground">{ABOUT_LEAD.goal}</p>
          </Reveal>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src={lifeBriefing}
              alt="Инструктор у учебного тягача"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
        <dl className="container-page mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="surface-card rounded-2xl p-6">
                <dt className="text-sm text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-4xl font-extrabold text-foreground">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
        </dl>
        <ul className="container-page mt-16 grid gap-4 md:grid-cols-2">
          {ABOUT_VALUES.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 60}
              className="surface-card rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-foreground">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </ul>
        <div className="container-page mt-12">
          <Button asChild variant="subtle" size="lg">
            <Link to="/uslugi">
              Смотреть услуги
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
