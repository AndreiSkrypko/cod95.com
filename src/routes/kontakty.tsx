import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/pages/PageHero";
import { ContactAside } from "@/components/landing/ContactAside";
import { PAGE_VISUALS } from "@/content/serviceVisuals";
import consultOffice from "@/assets/consult-office.jpg";
import { BookButton } from "@/components/landing/BookingDialog";
import { Reveal } from "@/components/landing/Reveal";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

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
      <ContactsPage />
    </SiteLayout>
  );
}

function ContactsPage() {
  const { locale } = useLocale();
  const copy = PAGES[locale];
  const page = copy.contactsPage;
  useDocumentMeta(copy.meta.contactsTitle, copy.meta.contactsDescription);
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={
          <>
            {page.titleBefore} <span className="accent-serif">DrivePrime</span>
          </>
        }
        lead={page.lead}
        ctaTo="/zapis"
        ctaLabel={page.cta}
        image={PAGE_VISUALS.contacts.src}
        imageAlt={page.imageAlt}
      />
      <section className="section-y border-t border-border">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground">{page.offices}</h2>
            <ContactAside />
          </Reveal>
          <Reveal delay={80} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <img src={consultOffice} alt={page.imageAlt} className="aspect-[16/9] w-full object-cover" />
            <div className="p-8">
              <h3 className="font-display text-2xl font-extrabold">{page.formTitle}</h3>
              <p className="mt-2 text-muted-foreground">{page.formLead}</p>
              <BookButton variant="hero" size="xl" className="mt-6">
                {page.book}
              </BookButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
