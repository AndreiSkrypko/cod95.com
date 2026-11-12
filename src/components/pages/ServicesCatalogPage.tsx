import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/content/landing";
import { Reveal } from "@/components/landing/Reveal";
import { SERVICE_ICONS } from "@/components/landing/serviceIcons";
import { PageHero } from "./PageHero";

export function ServicesCatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="Наши услуги"
        title={<>Полный каталог для водителей‑международников</>}
        lead="Обучение КОД 95, документы, ADR, ВНЖ и трудоустройство — без чип‑карт. Каждая услуга на отдельной странице с подробностями."
        ctaTo="/zapis"
      />

      <section className="section-y border-t border-border bg-background-deep">
        <div className="container-page">
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.id];
              return (
                <Reveal key={s.id} delay={(i % 3) * 50} as="li">
                  <Link
                    to="/uslugi/$serviceId"
                    params={{ serviceId: s.id }}
                    className="surface-card card-interactive group flex h-full flex-col rounded-3xl p-6 md:p-8"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid size-12 place-items-center rounded-2xl border border-primary/45 bg-primary/12 text-primary">
                        <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      {s.isNew && <Badge variant="new">Новинка</Badge>}
                    </div>
                    <h2 className="mt-5 text-xl font-extrabold text-foreground">{s.title}</h2>
                    <p className="mt-3 flex-1 text-muted-foreground">{s.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-primary">
                      Подробнее
                      <span className="grid size-9 place-items-center rounded-full border border-border-strong transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
