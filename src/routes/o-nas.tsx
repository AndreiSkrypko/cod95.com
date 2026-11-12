import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import { ABOUT_LEAD, ABOUT_VALUES } from "@/content/about";
import { STATS } from "@/content/landing";
import { CountUp, Reveal } from "@/components/landing/Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
      />
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Наша цель</h2>
            <p className="mt-4 text-lg text-muted-foreground">{ABOUT_LEAD.goal}</p>
          </Reveal>
          <dl className="grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="surface-card rounded-2xl p-6">
                <dt className="text-sm text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-4xl font-extrabold text-foreground">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
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
