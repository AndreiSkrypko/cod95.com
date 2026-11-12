import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/content/landing";
import { PAGE_VISUALS, getServiceVisual } from "@/content/serviceVisuals";
import { PageHero } from "./PageHero";

export function ServicesCatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="Наши услуги"
        title={<>Полный каталог для водителей‑международников</>}
        lead="Обучение КОД 95, документы, ADR, ВНЖ и трудоустройство. Выберите направление — расскажем сроки и стоимость."
        image={PAGE_VISUALS.catalog.src}
        imageAlt={PAGE_VISUALS.catalog.alt}
        ctaTo="/zapis"
      />

      <section className="section-y border-t border-border bg-background-deep">
        <div className="container-page">
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s) => {
              const visual = getServiceVisual(s.id);
              return (
                <li key={s.id}>
                  <Link
                    to="/uslugi/$serviceId"
                    params={{ serviceId: s.id }}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card"
                  >
                    <span className="relative block aspect-[4/3] overflow-hidden">
                      <img
                        src={visual.src}
                        alt={visual.alt}
                        className="h-full w-full object-cover transition duration-700 ease-out-expo group-hover:scale-105"
                      />
                      {s.isNew && (
                        <Badge variant="new" className="absolute top-3 left-3">
                          Новинка
                        </Badge>
                      )}
                    </span>
                    <span className="flex flex-1 flex-col p-6">
                      <span className="flex items-start justify-between gap-3">
                        <h2 className="font-display text-xl font-extrabold text-foreground">{s.title}</h2>
                        <ArrowUpRight className="mt-1 size-4 shrink-0 text-primary transition group-hover:rotate-45" />
                      </span>
                      <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.text}</p>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
