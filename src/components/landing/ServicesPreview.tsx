import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/content/landing";
import { Reveal, SectionHeading } from "./Reveal";
import { SERVICE_ICONS } from "./serviceIcons";

const PREVIEW = SERVICES.slice(0, 6);

export function ServicesPreview() {
  return (
    <section id="services" aria-labelledby="services-preview-title" className="section-y border-t border-border bg-background-deep">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Услуги"
            title={
              <span id="services-preview-title">
                Популярные <span className="accent-serif">направления</span>
              </span>
            }
            lead="У каждой услуги — отдельная страница с подробностями. Ниже популярные направления, полный каталог в разделе «Наши услуги»."
          />
          <Reveal>
            <Button asChild variant="subtle" size="lg" className="h-12">
              <Link to="/uslugi">
                Все {SERVICES.length} услуг
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW.map((s, i) => {
            const Icon = SERVICE_ICONS[s.id];
            return (
              <li key={s.id}>
                <Reveal delay={i * 60}>
                  <Link
                    to="/uslugi/$serviceId"
                    params={{ serviceId: s.id }}
                    className="surface-card card-interactive group flex h-full flex-col rounded-3xl p-6"
                  >
                    <span className="grid size-11 place-items-center rounded-xl border border-primary/40 bg-primary/12 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{s.text}</p>
                    {s.isNew && (
                      <Badge variant="new" className="mt-3 w-fit">
                        Новинка
                      </Badge>
                    )}
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                      Страница услуги
                      <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
