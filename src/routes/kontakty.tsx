import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import { ContactAside } from "@/components/landing/ContactAside";
import { PAGE_VISUALS } from "@/content/serviceVisuals";
import consultOffice from "@/assets/consult-office.jpg";
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
        image={PAGE_VISUALS.contacts.src}
        imageAlt={PAGE_VISUALS.contacts.alt}
      />
      <section className="section-y border-t border-border">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground">Офисы и график</h2>
            <ContactAside />
          </Reveal>
          <Reveal delay={80} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <img src={consultOffice} alt="Консультация в офисе" className="aspect-[16/9] w-full object-cover" />
            <div className="p-8">
              <h3 className="font-display text-2xl font-extrabold">Оставить заявку</h3>
              <p className="mt-2 text-muted-foreground">Перезвоним в рабочее время и подберём курс.</p>
              <BookButton variant="hero" size="xl" className="mt-6">
                Записаться
              </BookButton>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
