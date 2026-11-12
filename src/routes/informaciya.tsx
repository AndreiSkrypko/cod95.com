import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import { CODE95_EXPLAINER } from "@/content/info";
import { BookButton } from "@/components/landing/BookingDialog";
import { Reveal, SectionHeading } from "@/components/landing/Reveal";
import { FaqList } from "@/components/landing/FaqList";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/informaciya")({
  head: () => ({
    meta: [
      { title: "Информация о КОД 95 — DrivePrime" },
      { name: "description", content: "Что такое КОД 95, кому нужен короткий и длинный курс, ответы на частые вопросы." },
    ],
  }),
  component: InfoRoute,
});

function InfoRoute() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Информация"
        title={
          <>
            Всё о <span className="accent-serif">КОД 95</span> и документах
          </>
        }
        lead="Справочник для водителей: курсы, сроки, оплата и сопутствующие услуги."
      />
      <section className="section-y border-t border-border">
        <div className="container-page max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-foreground">{CODE95_EXPLAINER.title}</h2>
            {CODE95_EXPLAINER.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-5 text-lg text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="section-y border-t border-border bg-background-deep">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
          <Reveal className="mt-10 max-w-3xl">
            <FaqList />
          </Reveal>
          <BookButton variant="hero" size="lg" className="mt-10">
            Задать вопрос менеджеру
            <ArrowRight aria-hidden="true" />
          </BookButton>
        </div>
      </section>
    </SiteLayout>
  );
}
