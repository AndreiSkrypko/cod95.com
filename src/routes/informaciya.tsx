import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import { PAGE_VISUALS } from "@/content/serviceVisuals";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import classroom from "@/assets/classroom.jpg";
import { BookButton } from "@/components/landing/BookingDialog";
import { CourseAdvisor } from "@/components/landing/CourseAdvisor";
import { Reveal, SectionHeading } from "@/components/landing/Reveal";
import { FaqList } from "@/components/landing/FaqList";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/informaciya")({
  head: () => ({
    meta: [
      { title: "Информация о КОД 95 — BAZA" },
      { name: "description", content: "Что такое КОД 95, кому нужен короткий и длинный курс, ответы на частые вопросы." },
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
            {info.titleBefore} <span className="accent-serif">{info.titleAccent}</span> {info.titleAfter}
          </>
        }
        lead={info.lead}
        image={PAGE_VISUALS.info.src}
        imageAlt={info.imageAlt}
      />
      <section className="section-y border-t border-border">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-foreground">{info.explainerTitle}</h2>
            {info.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-5 text-lg text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>
          <div className="overflow-hidden rounded-md shadow-card">
            <img src={classroom} alt={info.imageAlt} className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>
      <CourseAdvisor />
      <section className="section-y border-t border-border bg-background-deep">
        <div className="container-page">
          <SectionHeading eyebrow={info.faqEyebrow} title={info.faqTitle} />
          <Reveal className="mt-10 max-w-3xl">
            <FaqList />
          </Reveal>
          <BookButton variant="hero" size="lg" className="mt-10">
            {info.ask}
            <ArrowRight aria-hidden="true" />
          </BookButton>
        </div>
      </section>
    </>
  );
}
