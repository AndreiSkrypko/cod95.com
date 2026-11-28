import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import infoHeroClassroom from "@/assets/baza/info-hero-classroom.webp";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import infoDetailDocuments from "@/assets/baza/info-detail-documents.webp";
import { BookButton } from "@/components/landing/BookingDialog";
import { CourseAdvisor } from "@/components/landing/CourseAdvisor";
import { Reveal } from "@/components/landing/Reveal";
import { FaqList } from "@/components/landing/FaqList";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/informaciya")({
  head: () => ({
    meta: [
      { title: "Информация о КОД 95 — BAZA" },
      {
        name: "description",
        content: "Что такое КОД 95, кому нужен короткий и длинный курс, ответы на частые вопросы.",
      },
    ],
  }),
  component: InfoRoute,
});

function InfoRoute() {
  return (
    <SiteLayout>
      <InfoPage />
    </SiteLayout>
  );
}

function InfoPage() {
  const { locale } = useLocale();
  const copy = PAGES[locale];
  const info = copy.info;
  useDocumentMeta(copy.meta.infoTitle, copy.meta.infoDescription);
  return (
    <>
      <PageHero
        eyebrow={info.eyebrow}
        title={
          <>
            {info.titleBefore} <span className="accent-serif">{info.titleAccent}</span>{" "}
            {info.titleAfter}
          </>
        }
        lead={info.lead}
        image={infoHeroClassroom}
        imageAlt={info.imageAlt}
      />
      <section className="section-y border-t border-border">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-foreground">
              {info.explainerTitle}
            </h2>
            {info.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-5 text-lg text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>
          <div className="overflow-hidden rounded-md shadow-card">
            <img
              loading="lazy"
              decoding="async"

              src={infoDetailDocuments}
              alt={info.imageAlt}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>
      <CourseAdvisor />
      <section className="section-y border-t border-border bg-background-deep">
        <div className="container-page grid gap-12 xl:grid-cols-12 xl:gap-10">
          <div className="xl:col-span-5">
            <div className="xl:sticky xl:top-32">
              <Reveal>
                <p className="eyebrow eyebrow-rule">{info.faqEyebrow}</p>
                <h2 className="type-section-title mt-4">{info.faqTitle}</h2>
                <p className="mt-4 max-w-md text-muted-foreground">{info.faqLead}</p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8">
                  <BookButton variant="hero" size="xl">
                    {info.ask}
                    <ArrowRight aria-hidden="true" />
                  </BookButton>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal className="xl:col-span-7">
            <FaqList />
          </Reveal>
        </div>
      </section>
    </>
  );
}
