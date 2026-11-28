import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ArticleCover } from "@/components/articles/ArticleCover";
import { BookButton } from "@/components/landing/BookingDialog";
import type { Article } from "@/content/articles";
import { localizedArticles } from "@/i18n/articles-copy";
import { metaTitle } from "@/i18n/brand";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PageBreadcrumbs } from "@/components/layout/PageBreadcrumbs";
import { PAGES } from "@/i18n/pages-copy";
import { Reveal } from "@/components/landing/Reveal";

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
      <section className="border-b border-border bg-background">
        <div className="container-page grid items-center gap-10 pt-page-intro pb-10 md:pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div>
            <PageBreadcrumbs />
            <h1 className="type-page-hero-title mt-4 max-w-2xl text-foreground">{localized.title}</h1>
            <p className="type-lead mt-4 max-w-xl text-muted-foreground">{localized.description}</p>
            <p className="mt-4 text-sm font-semibold text-ink-soft">
              {copy.read} {localized.readTime}
            </p>
            <div className="mt-6">
              <Link
                to="/statyi"
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary underline-offset-4 hover:underline"
              >
                <ArrowLeft className="size-4" aria-hidden />
                {copy.all}
              </Link>
            </div>
          </div>
          <Reveal variant="clip" className="overflow-hidden rounded-md shadow-lift">
            <ArticleCover
              image={localized.image}
              className="aspect-[16/10] border border-border"
              imgClassName="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-border">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <article className="lg:col-span-8">
            {localized.sections.map((sec, i) => (
              <Reveal key={sec.title} delay={i * 60} className={i === 0 ? "" : "mt-10"}>
                <h2 className="type-section-title text-foreground">{sec.title}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="type-prose mt-4 text-muted-foreground">
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}

            {localized.checklist && (
              <Reveal className="mt-12">
                <h2 className="type-section-title text-foreground">{copy.checklist}</h2>
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
              <Reveal className="surface-card p-6 md:p-8">
                <p className="font-display text-lg font-bold text-foreground">{copy.consult}</p>
                <p className="mt-2 text-sm text-muted-foreground">{copy.consultLead}</p>
                <BookButton {...(primaryService ? { service: primaryService } : {})} variant="hero" size="lg" className="mt-6 w-full">
                  {copy.request}
                  <ArrowRight aria-hidden="true" />
                </BookButton>
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