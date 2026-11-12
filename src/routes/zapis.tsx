import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import { BookButton } from "@/components/landing/BookingDialog";
import { ContactAside } from "@/components/landing/ContactAside";
import { Reveal } from "@/components/landing/Reveal";
import { isServiceId } from "@/content/servicePages";
import { PAGE_VISUALS } from "@/content/serviceVisuals";

export const Route = createFileRoute("/zapis")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    const raw = search["service"];
    if (typeof raw === "string" && isServiceId(raw)) return { service: raw };
    return {};
  },
  head: () => ({
    meta: [
      { title: "Запись на курс КОД 95 — DrivePrime" },
      { name: "description", content: "Онлайн-заявка на обучение КОД 95 и сопутствующие услуги." },
    ],
  }),
  component: ZapisRoute,
});

function ZapisRoute() {
  const { service = "" } = Route.useSearch();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Запись"
        title={<>Запись на курс и&nbsp;услуги</>}
        lead="Работаем на рынке 12+ лет. Подберём программу и зафиксируем стоимость в договоре."
        ctaTo="/kontakty"
        ctaLabel="Позвонить в офис"
        image={PAGE_VISUALS.zapis.src}
        imageAlt={PAGE_VISUALS.zapis.alt}
      />
      <section className="section-y border-t border-border bg-background-deep">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <BookButton service={service} variant="hero" size="xl">
              Открыть форму записи
            </BookButton>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-xl font-bold text-foreground">Нужен быстрый ответ?</h2>
            <ContactAside />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
