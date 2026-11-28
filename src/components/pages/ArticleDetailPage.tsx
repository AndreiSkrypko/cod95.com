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
  const otherArticles = localizedArticles(locale)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);
  const relatedServices = article.relatedServices;
  const primaryService = relatedServices[0];

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container-page grid items-center gap-10 pt-page-intro pb-10 md:pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div>
            <PageBreadcrumbs />
            <h1 className="type-page-hero-title mt-4 max-w-2xl text-foreground">
              {localized.title}
            </h1>
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
              <Reveal
                key={sec.title}
                delay={i * 60}
                className={i === 0 ? "" : "mt-12 border-t border-border pt-10"}
              >
                <div className="flex items-baseline gap-4">
                  <span aria-hidden className="eyebrow shrink-0 text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide text-foreground">
                    {sec.title}
                  </h2>
                </div>
                {sec.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="type-prose mt-4 max-w-2xl text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}

            {localized.checklist && (
              <Reveal className="mt-12">
                <div className="surface-card p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide text-foreground">
                    {copy.checklist}
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {localized.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/15"
                        >
                          <Check className="size-3.5 text-primary" aria-hidden="true" />
                        </span>
                        <span className="type-prose">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </article>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal className="surface-card p-6 md:p-8">
                <p className="font-display text-lg font-bold text-foreground">{copy.consult}</p>
                <p className="mt-2 text-sm text-muted-foreground">{copy.consultLead}</p>
                <BookButton
                  {...(primaryService ? { service: primaryService } : {})}
                  variant="hero"
                  size="lg"
                  className="mt-6 w-full"
                >
                  {copy.request}
                  <ArrowRight aria-hidden="true" />
                </BookButton>
              </Reveal>

              {relatedServices.length > 0 && (
                <Reveal delay={80} className="mt-6">
                  <p className="eyebrow text-ink-soft">{copy.related}</p>
                  <ul className="mt-3 divide-y divide-border overflow-hidden rounded-md border border-border bg-surface">
                    {relatedServices.map((id) => (
                      <li key={id}>
                        <Link
                          to="/uslugi/$serviceId"
                          params={{ serviceId: id }}
                          className="group flex items-center justify-between gap-3 px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                        >
                          {m.services[id].title}
                          <ArrowRight
                            aria-hidden="true"
                            className="size-3.5 shrink-0 text-primary opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {otherArticles.length > 0 && (
                <Reveal delay={120} className="mt-6">
                  <p className="eyebrow text-ink-soft">{copy.more}</p>
                  <ul className="mt-3 divide-y divide-border overflow-hidden rounded-md border border-border bg-surface">
                    {otherArticles.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to="/statyi/$slug"
                          params={{ slug: a.slug }}
                          className="group flex items-center justify-between gap-3 px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                        >
                          {a.title}
                          <ArrowRight
                            aria-hidden="true"
                            className="size-3.5 shrink-0 text-primary opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </aside>
        </div>

        {otherArticles.length > 0 && (
          <div className="container-page mt-12 border-t border-border pt-10">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow eyebrow-rule">{copy.more}</p>
              <Link
                to="/statyi"
                className="hidden items-center gap-2 font-display text-sm font-bold text-primary underline-offset-4 hover:underline sm:inline-flex"
              >
                {copy.all}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {otherArticles.map((a) => (
                <li key={a.slug}>
                  <Link
                    to="/statyi/$slug"
                    params={{ slug: a.slug }}
                    className="group surface-card block h-full p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift"
                  >
                    <p className="eyebrow text-ink-soft">{a.readTime}</p>
                    <p className="mt-2 font-display text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {a.title}
                    </p>
                    <span className="mt-3 inline-flex size-8 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                      <ArrowRight
                        aria-hidden="true"
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
