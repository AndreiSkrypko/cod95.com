import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import { BookButton } from "@/components/landing/BookingDialog";
import { ContactAside } from "@/components/landing/ContactAside";
import { Reveal } from "@/components/landing/Reveal";
import { isServiceId } from "@/content/servicePages";
import { PAGE_VISUALS } from "@/content/serviceVisuals";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

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
      <ZapisPage service={service} />
    </SiteLayout>
  );
}

function ZapisPage({ service }: { service: string }) {
  const { locale } = useLocale();
  const copy = PAGES[locale];
  const page = copy.zapis;
  useDocumentMeta(copy.meta.zapisTitle, copy.meta.zapisDescription);
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={<>{page.title}</>}
        lead={page.lead}
        ctaTo="/kontakty"
        ctaLabel={page.call}
        image={PAGE_VISUALS.zapis.src}
        imageAlt={page.eyebrow}
      />
      <section className="section-y border-t border-border bg-background-deep">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <BookButton {...(service ? { service } : {})} variant="hero" size="xl">
              {page.open}
            </BookButton>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-xl font-bold text-foreground">{page.quick}</h2>
            <ContactAside />
          </Reveal>
        </div>
      </section>
    </>
  );
}
