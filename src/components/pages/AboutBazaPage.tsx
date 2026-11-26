import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ABOUT_PHOTOS } from "@/assets/baza/about-photos";
import { BookButton } from "@/components/landing/BookingDialog";
import { Reveal } from "@/components/landing/Reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/pages/PageHero";
import { LegalEntityFinePrint } from "@/components/layout/LegalEntityFinePrint";
import { ABOUT_PAGE } from "@/i18n/about-copy";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import { cn } from "@/lib/utils";

const GALLERY_KEYS = ["class", "truck", "yard", "sim", "lesson"] as const;

export function AboutBazaPage() {
  const { locale } = useLocale();
  const copy = ABOUT_PAGE[locale];
  const pages = PAGES[locale];
  useDocumentMeta(copy.meta.title, copy.meta.description);

  const heroCtas = (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
      <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
        <Link to="/informaciya" hash="kurs">
          {copy.hero.ctaCourse}
          <ArrowRight aria-hidden />
        </Link>
      </Button>
      <BookButton variant="subtle" size="lg" className="w-full sm:w-auto">
        {copy.hero.ctaConsult}
      </BookButton>
    </div>
  );

  return (
    <article>
      <PageHero
        eyebrow={pages.about.eyebrow}
        title={copy.hero.h1}
        subtitle={copy.hero.subtitle}
        leadParagraphs={copy.hero.lead}
        heroActions={heroCtas}
        image={ABOUT_PHOTOS.hero}
        imageAlt={copy.hero.imageAlt}
        imagePosition="50% center"
      />

      <AboutSection variant="plain" image={ABOUT_PHOTOS.philosophy} imageAlt={copy.philosophy.imageAlt} imageSide="right">
        <p className="eyebrow eyebrow-rule">{copy.philosophy.eyebrow}</p>
        <h2 className="type-section-title mt-4">{copy.philosophy.h2}</h2>
        <div className="type-prose mt-8 space-y-6">
          {copy.philosophy.paragraphs.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </div>
      </AboutSection>

      <AboutSection variant="deep" image={ABOUT_PHOTOS.history} imageAlt={copy.history.imageAlt} imageSide="left">
        <p className="eyebrow eyebrow-rule">{copy.history.eyebrow}</p>
        <h2 className="type-section-title mt-4">{copy.history.h2}</h2>
        <div className="type-prose mt-8 space-y-6">
          {copy.history.paragraphs.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </div>
      </AboutSection>

      <section className="section-y border-t border-border bg-background">
        <div className="container-page">
          <Reveal>
            <h2 className="type-section-title">{copy.base.h2}</h2>
            <div className="type-prose mt-8 max-w-3xl space-y-6">
              {copy.base.paragraphs.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-12 lg:gap-3">
            {GALLERY_KEYS.map((key, i) => (
              <li
                key={key}
                className={cn(
                  i === 0 && "col-span-2 aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto",
                  i === 1 && "aspect-[4/3] lg:col-span-5",
                  i === 2 && "aspect-[4/3] lg:col-span-4",
                  i === 3 && "aspect-[4/3] lg:col-span-4",
                  i === 4 && "aspect-[4/3] lg:col-span-4",
                )}
              >
                <Reveal delay={i * 40} variant="clip" className="h-full overflow-hidden rounded-2xl shadow-lift sm:rounded-3xl">
                  <img
                    src={ABOUT_PHOTOS.gallery[key]}
                    alt={copy.base.galleryAlts[key]}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AboutSection variant="deep" image={ABOUT_PHOTOS.practice} imageAlt={copy.practice.imageAlt} imageSide="right">
        <p className="eyebrow eyebrow-rule">{copy.practice.eyebrow}</p>
        <h2 className="type-section-title mt-4">{copy.practice.h2}</h2>
        <div className="type-prose mt-8 space-y-6">
          {copy.practice.paragraphs.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </div>
        <p className="accent-serif type-accent-quote mt-8">{copy.practice.accent}</p>
      </AboutSection>

      <section className="section-y border-t border-border bg-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="type-section-title">{copy.path.h2}</h2>
              <p className="type-prose mt-8">{copy.path.intro}</p>
            </Reveal>
          </div>
          <ol className="mt-10 max-w-3xl border-t border-border">
            {copy.path.steps.map((step, i) => (
              <li key={step.title} className="border-b border-border">
                <Reveal delay={i * 40} className="flex gap-6 py-8 sm:gap-8 sm:py-9">
                  <span className="w-12 shrink-0 font-display text-2xl font-extrabold leading-none text-primary tabular-nums sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{step.title}</h3>
                    <p className="type-lead mt-2">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <BookButton variant="hero" size="xl" className="mt-10 max-w-3xl">
            {copy.path.cta}
            <ArrowRight aria-hidden />
          </BookButton>
        </div>
      </section>

      <section className="section-y border-t border-border">
        <div className="container-page max-w-3xl">
          <h2 className="type-section-title">{copy.finale.h2}</h2>
          <p className="type-prose mt-8">{copy.finale.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/informaciya" hash="kurs">
                {copy.finale.ctaCourse}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <BookButton variant="subtle" size="xl">
              {copy.finale.ctaConsult}
            </BookButton>
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-background">
        <div className="container-page max-w-3xl py-10 md:py-12">
          <LegalEntityFinePrint legal={copy.legal} />
        </div>
      </div>
    </article>
  );
}

function AboutSection({
  children,
  image,
  imageAlt,
  imageSide,
  variant,
}: {
  children: ReactNode;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  variant: "plain" | "deep";
}) {
  const imageBlock = (
    <Reveal
      variant="clip"
      className={cn("overflow-hidden rounded-3xl shadow-lift", imageSide === "left" ? "order-2 lg:order-1" : "order-2")}
    >
      <img src={image} alt={imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
    </Reveal>
  );
  const textBlock = (
    <Reveal className={cn("order-1 max-w-xl lg:max-w-none", imageSide === "left" ? "lg:order-2" : "")}>
      {children}
    </Reveal>
  );

  return (
    <section
      className={cn(
        "section-y border-t border-border",
        variant === "deep" ? "bg-background-deep" : "bg-background",
      )}
    >
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {imageSide === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}