import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { LegalEntitySection } from "@/components/layout/LegalEntitySection";
import { ContactChannels } from "@/components/landing/ContactChannels";
import { BookButton } from "@/components/landing/BookingDialog";
import { Reveal } from "@/components/landing/Reveal";
import { PAGE_VISUALS } from "@/content/serviceVisuals";
import consultOffice from "@/assets/consult-office.jpg";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

export function ContactsPageContent() {
  const { locale } = useLocale();
  const copy = PAGES[locale];
  const page = copy.contactsPage;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={
          <>
            {page.titleBefore} <span className="accent-serif">BAZA</span>
          </>
        }
        lead={page.lead}
        ctaTo="/zapis"
        ctaLabel={page.cta}
        image={PAGE_VISUALS.contacts.src}
        imageAlt={page.imageAlt}
      />

      <section className="section-y border-t border-border bg-background" aria-labelledby="contacts-offices-heading">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow eyebrow-rule">{page.channelsEyebrow}</p>
            <h2 id="contacts-offices-heading" className="type-section-title mt-4">
              {page.offices}
            </h2>
            <p className="type-lead mt-4 max-w-2xl text-muted-foreground">{page.channelsLead}</p>
          </Reveal>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-7">
              <ContactChannels />
            </Reveal>
            <Reveal delay={60} className="lg:col-span-5">
              <article className="overflow-hidden rounded-md border border-border bg-card shadow-card">
                <img src={consultOffice} alt={page.imageAlt} className="aspect-[16/10] w-full object-cover" loading="lazy" />
                <div className="border-t border-border p-6 sm:p-8">
                  <h3 className="font-display text-xl font-extrabold text-foreground sm:text-2xl">{page.formTitle}</h3>
                  <p className="type-lead mt-3 text-muted-foreground">{page.formLead}</p>
                  <BookButton variant="hero" size="xl" className="mt-6 w-full sm:w-auto">
                    {page.book}
                    <ArrowRight aria-hidden />
                  </BookButton>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <LegalEntitySection />
    </>
  );
}