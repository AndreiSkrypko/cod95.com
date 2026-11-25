import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { BookButton } from "@/components/landing/BookingDialog";
import type { Article } from "@/content/articles";
import { localizedArticles } from "@/i18n/articles-copy";
import { metaTitle } from "@/i18n/brand";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import { Reveal } from "@/components/landing/Reveal";
import { PageHero } from "./PageHero";

export function ArticleDetailPage({ article }: { article: Article }) {
  const { locale, m } = useLocale();
  const copy = PAGES[locale].article;
  const localized = localizedArticles(locale).find((item) => item.slug === article.slug) ?? article;
  useDocumentMeta(metaTitle(localized.title), localized.description);
  const otherArticles = localizedArticles(locale).filter((a) => a.slug !== article.slug).slice(0, 2);
  const relatedServices = article.relatedServices;
  const primaryService = relatedServices[0];

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={<>{localized.title}</>}
        lead={localized.description}
        image={localized.image.src}
        imageAlt={localized.image.alt}
        imagePosition={localized.image.objectPosition ?? "center"}
        ctaTo="/zapis"
        ctaLabel={copy.cta}
        {...(primaryService ? { service: primaryService } : {})}
      />

      <section className="section-y border-t border-border">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <p className="text-sm font-semibold text-ink-soft">
              {copy.read} {localized.readTime}
            </p>

            {localized.sections.map((sec, i) => (
              <Reveal key={sec.title} delay={i * 60} className="mt-10">
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">{sec.title}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="mt-4 text-lg text-muted-foreground">
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}

            {localized.checklist && (
              <Reveal className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">{copy.checklist}</h2>
                <ul className="mt-6 space-y-3">
                  {localized.checklist.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </article>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal className="surface-card rounded-3xl p-6 md:p-8">
                <p className="font-display text-lg font-bold text-foreground">{copy.consult}</p>
                <p className="mt-2 text-sm text-muted-foreground">{copy.consultLead}</p>
                <BookButton {...(primaryService ? { service: primaryService } : {})} variant="hero" size="lg" className="mt-6 w-full">
                  {copy.request}
                  <ArrowRight aria-hidden="true" />
                </BookButton>
                <Link
                  to="/statyi"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  {copy.all}
                </Link>
              </Reveal>

              {relatedServices.length > 0 && (
                <Reveal delay={80} className="mt-6">
                  <p className="eyebrow text-ink-soft">{copy.related}</p>
                  <ul className="mt-3 space-y-2">
                    {relatedServices.map((id) => (
                      <li key={id}>
                        <Link
                          to="/uslugi/$serviceId"
                          params={{ serviceId: id }}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {m.services[id].title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {otherArticles.length > 0 && (
                <Reveal delay={120} className="mt-6">
                  <p className="eyebrow text-ink-soft">{copy.more}</p>
                  <ul className="mt-3 space-y-2">
                    {otherArticles.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to="/statyi/$slug"
                          params={{ slug: a.slug }}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}