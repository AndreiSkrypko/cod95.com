import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { BookButton } from "@/components/landing/BookingDialog";
import type { Article } from "@/content/articles";
import { ARTICLES } from "@/content/articles";
import { getServiceById } from "@/content/servicePages";
import { Reveal } from "@/components/landing/Reveal";
import { PageHero } from "./PageHero";

export function ArticleDetailPage({ article }: { article: Article }) {
  const relatedServices = article.relatedServices
    .map((id) => getServiceById(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);
  const primaryService = article.relatedServices[0];

  return (
    <>
      <PageHero
        eyebrow="Статья"
        title={<>{article.title}</>}
        lead={article.description}
        image={article.image.src}
        imageAlt={article.image.alt}
        imagePosition={article.image.objectPosition ?? "center"}
        ctaTo="/zapis"
        ctaLabel="Записаться на консультацию"
        service={primaryService}
      />

      <section className="section-y border-t border-border">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <p className="text-sm font-semibold text-ink-soft">Время чтения: {article.readTime}</p>

            {article.sections.map((sec, i) => (
              <Reveal key={sec.title} delay={i * 60} className="mt-10">
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">{sec.title}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="mt-4 text-lg text-muted-foreground">
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}

            {article.checklist && (
              <Reveal className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">Чек-лист перед стартом</h2>
                <ul className="mt-6 space-y-3">
                  {article.checklist.map((item) => (
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
                <p className="font-display text-lg font-bold text-foreground">Нужна консультация?</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Разберём вашу ситуацию и подберём курс — бесплатно, с фиксацией цены в договоре.
                </p>
                <BookButton service={primaryService} variant="hero" size="lg" className="mt-6 w-full">
                  Оставить заявку
                  <ArrowRight aria-hidden="true" />
                </BookButton>
                <Link
                  to="/statyi"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Все статьи
                </Link>
              </Reveal>

              {relatedServices.length > 0 && (
                <Reveal delay={80} className="mt-6">
                  <p className="eyebrow text-ink-soft">Связанные услуги</p>
                  <ul className="mt-3 space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          to="/uslugi/$serviceId"
                          params={{ serviceId: s.id }}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {otherArticles.length > 0 && (
                <Reveal delay={120} className="mt-6">
                  <p className="eyebrow text-ink-soft">Ещё почитать</p>
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