import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import { ContactAside } from "@/components/landing/ContactAside";
import { BookButton } from "@/components/landing/BookingDialog";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/kontakty")({
  head: () => ({
    meta: [
      { title: "Контакты — DrivePrime" },
      { name: "description", content: "Телефоны Минск и Варшава, график работы, заявка на консультацию." },
    ],
  }),
  component: ContactsRoute,
});

function ContactsRoute() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Контакты"
        title={
          <>
            Связь с <span className="accent-serif">DrivePrime</span>
          </>
        }
        lead="Позвоните или оставьте заявку — перезвоним в рабочее время."
        ctaTo="/zapis"
        ctaLabel="Записаться"
      />
      <section className="section-y border-t border-border">
        <div className="container-page grid gap-12 xl:grid-cols-12">
          <Reveal className="xl:col-span-5">
            <h2 className="font-display text-2xl font-bold text-foreground">Офисы и график</h2>
            <ContactAside />
          </Reveal>
          <Reveal delay={80} className="xl:col-span-6 xl:col-start-7">
            <BookButton variant="hero" size="xl">
              Оставить заявку
            </BookButton>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
