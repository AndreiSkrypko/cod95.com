import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ArticleCover } from "@/components/articles/ArticleCover";
import { ARTICLES } from "@/content/articles";
import { PAGE_VISUALS } from "@/content/serviceVisuals";
import { PageHero } from "./PageHero";

export function ArticlesCatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="Статьи"
        title={
          <>
            Гайды по <span className="accent-serif">КОД 95</span> и документам
          </>
        }
        lead="Практические материалы для водителей-международников: выбор курса, поездка в Варшаву, Польша и Литва."
        image={PAGE_VISUALS.articles.src}
        imageAlt={PAGE_VISUALS.articles.alt}
        ctaTo="/zapis"
        ctaLabel="Консультация"
      />

      <section className="section-y border-t border-border bg-background-deep">
        <div className="container-page">
          <ul className="grid gap-4 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <li key={article.slug}>
                <Link
                  to="/statyi/$slug"
                  params={{ slug: article.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card"
                >
                  <ArticleCover
                    image={article.image}
                    className="aspect-[16/10]"
                    imgClassName="transition duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      {article.readTime}
                    </span>
                    <span className="mt-2 flex items-start justify-between gap-3">
                      <h2 className="font-display text-xl font-extrabold text-foreground">{article.title}</h2>
                      <ArrowUpRight
                        className="mt-1 size-4 shrink-0 text-primary transition group-hover:rotate-45"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{article.description}</p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}