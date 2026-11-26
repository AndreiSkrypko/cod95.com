import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ArticleCover } from "@/components/articles/ArticleCover";
import { ContentPageIntro } from "@/components/pages/ContentPageIntro";
import { localizedArticles } from "@/i18n/articles-copy";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

export function ArticlesCatalogPage() {
  const { locale } = useLocale();
  const copy = PAGES[locale];
  useDocumentMeta(copy.meta.articlesTitle, copy.meta.articlesDescription);
  const articles = localizedArticles(locale);

  return (
    <>
      <ContentPageIntro
        compact
        title={
          <>
            {copy.article.catalogTitleBefore} <span className="accent-serif">{copy.article.catalogTitleAccent}</span>{" "}
            {copy.article.catalogTitleAfter}
          </>
        }
        lead={copy.article.catalogLead}
      />

      <section className="border-t border-border pb-16 pt-8 md:pb-20 md:pt-10 bg-background">
        <div className="container-page">
          <ul className="grid gap-4 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  to="/statyi/$slug"
                  params={{ slug: article.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card shadow-card"
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