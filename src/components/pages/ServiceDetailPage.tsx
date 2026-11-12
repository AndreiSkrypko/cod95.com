import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { BookButton } from "@/components/landing/BookingDialog";
import { Badge } from "@/components/ui/badge";
import type { LandingService } from "@/content/landing";
import { SERVICES } from "@/content/landing";
import { getServicePageDetail } from "@/content/servicePages";
import { getServiceVisual } from "@/content/serviceVisuals";
import { Reveal } from "@/components/landing/Reveal";
import { SERVICE_ICONS } from "@/components/landing/serviceIcons";
import { PageHero } from "./PageHero";

export function ServiceDetailPage({ service }: { service: LandingService }) {
  const Icon = SERVICE_ICONS[service.id];
  const detail = getServicePageDetail(service);
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 4);
  const visual = getServiceVisual(service.id);

  return (
    <>
      <PageHero
        eyebrow="Услуга"
        title={
          <>
            {service.title}
            {service.isNew && (
              <Badge variant="new" className="ml-3 align-middle">
                Новинка
              </Badge>
            )}
          </>
        }
        lead={detail.lead}
        image={visual.src}
        imageAlt={visual.alt}
        ctaTo="/zapis"
        ctaLabel="Записаться на услугу"
        service={service.id}
      />

      <section className="section-y border-t border-border">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal className="flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-2xl border border-primary/45 bg-primary/12 text-primary">
                <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <ul className="flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <li key={t}>
                    <Badge variant="chip">{t}</Badge>
                  </li>
                ))}
              </ul>
            </Reveal>

            {detail.sections.map((sec, i) => (
              <Reveal key={sec.title} delay={i * 80} className="mt-10">
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">{sec.title}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-lg text-muted-foreground">
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}

            {detail.steps && (
              <Reveal className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">Как проходит оформление</h2>
                <ol className="mt-6 space-y-4">
                  {detail.steps.map((step, i) => (
                    <li
                      key={step.title}
                      className="surface-card flex gap-4 rounded-2xl p-5 md:p-6"
                    >
                      <span className="font-serif text-2xl italic text-primary">0{i + 1}</span>
                      <span>
                        <span className="font-display font-bold text-foreground">{step.title}</span>
                        <p className="mt-1 text-muted-foreground">{step.text}</p>
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}

            {detail.checklist && (
              <Reveal className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">Документы и требования</h2>
                <ul className="mt-6 space-y-3">
                  {detail.checklist.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal className="surface-card rounded-3xl p-6 md:p-8">
                <p className="font-display text-lg font-bold text-foreground">Нужна консультация?</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Подберём курс и рассчитаем стоимость под вашу ситуацию — бесплатно.
                </p>
                <BookButton service={service.id} variant="hero" size="lg" className="mt-6 w-full">
                  Оставить заявку
                  <ArrowRight aria-hidden="true" />
                </BookButton>
                <Link
                  to="/uslugi"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Все услуги
                </Link>
              </Reveal>

              <Reveal delay={100} className="mt-6">
                <p className="eyebrow text-ink-soft">Другие услуги</p>
                <ul className="mt-3 space-y-2">
                  {related.map((s) => (
                    <li key={s.id}>
                      <Link
                        to="/uslugi/$serviceId"
                        params={{ serviceId: s.id }}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
