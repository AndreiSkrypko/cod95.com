import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BookButton } from "@/components/landing/BookingDialog";
import { Reveal } from "@/components/landing/Reveal";
import { PAGE_VISUALS } from "@/content/serviceVisuals";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import type { CatalogCategory, CatalogItem } from "@/i18n/services-catalog";
import { SERVICES_CATALOG } from "@/i18n/services-catalog";
import { PageHero } from "./PageHero";

function isProgramGrid(category: CatalogCategory) {
  return category.items.length === 4 && category.items.every((item) => item.body.length === 1);
}

function CatalogCta({ item, compact }: { item: CatalogItem; compact?: boolean }) {
  const className = compact
    ? "mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary"
    : "mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary transition hover:gap-2";

  if (item.action.kind === "book") {
    return (
      <BookButton variant="link" className={className}>
        {item.cta}
        <ArrowRight className="size-3.5" aria-hidden />
      </BookButton>
    );
  }
  return (
    <Link to="/uslugi/$serviceId" params={{ serviceId: item.action.serviceId }} className={className}>
      {item.cta}
      <ArrowRight className="size-3.5" aria-hidden />
    </Link>
  );
}

const compactCtaClass =
  "mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary";

function ProgramGridCard({ item, wholeCardLink }: { item: CatalogItem; wholeCardLink?: boolean }) {
  return (
    <article className="flex h-full flex-col bg-card px-4 py-4 sm:px-5 sm:py-5">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-primary">{item.subtitle}</p>
      <h3 className="mt-1.5 font-display text-base font-extrabold leading-snug text-foreground">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">{item.body[0]}</p>
      {wholeCardLink ? (
        <span className={compactCtaClass}>
          {item.cta}
          <ArrowRight className="size-3.5" aria-hidden />
        </span>
      ) : (
        <CatalogCta item={item} compact />
      )}
    </article>
  );
}

function StandardCatalogCard({ item }: { item: CatalogItem }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.subtitle}</p>
      <h3 className="mt-2 font-display text-xl font-extrabold leading-snug text-foreground">{item.title}</h3>
      <div className="mt-3 flex-1 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {item.body.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
      <CatalogCta item={item} />
    </article>
  );
}

export function ServicesCatalogPage() {
  const { locale } = useLocale();
  const copy = PAGES[locale];
  const catalog = SERVICES_CATALOG[locale];
  useDocumentMeta(copy.meta.servicesTitle, copy.meta.servicesDescription);

  return (
    <>
      <PageHero
        eyebrow={catalog.eyebrow}
        title={catalog.title}
        leadParagraphs={catalog.intro}
        image={PAGE_VISUALS.catalog.src}
        imageAlt={PAGE_VISUALS.catalog.alt}
        ctaTo="/zapis"
      />

      <section className="section-y border-t border-border bg-background">
        <div className="container-page space-y-14 md:space-y-16">
          {catalog.categories.map((category, ci) => (
            <Reveal key={category.title} delay={ci * 50}>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                {category.title}
              </h2>
              {isProgramGrid(category) ? (
                <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-border shadow-sm">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                    {category.items.map((item) => (
                      <li
                        key={item.title}
                        className="group border-b border-border last:border-b-0 sm:[&:nth-child(odd)]:border-r xl:border-b-0 xl:border-r xl:last:border-r-0"
                      >
                        {item.action.kind === "service" ? (
                          <Link
                            to="/uslugi/$serviceId"
                            params={{ serviceId: item.action.serviceId }}
                            className="block h-full transition-colors hover:bg-secondary/30"
                          >
                            <ProgramGridCard item={item} wholeCardLink />
                          </Link>
                        ) : (
                          <ProgramGridCard item={item} />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                  {category.items.map((item, i) => (
                    <li key={item.title}>
                      <Reveal delay={i * 40}>
                        <StandardCatalogCard item={item} />
                      </Reveal>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background-deep py-10 md:py-12">
        <div className="container-page max-w-3xl">
          <h2 className="text-sm font-medium text-foreground/70">{catalog.legalTitle}</h2>
          <ul className="mt-4 space-y-3 text-[0.8125rem] leading-relaxed text-foreground/55">
            {catalog.legal.map((p) => (
              <li key={p.slice(0, 48)}>{p}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
