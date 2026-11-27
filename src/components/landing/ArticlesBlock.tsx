import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCover } from "@/components/articles/ArticleCover";
import { localizedArticles } from "@/i18n/articles-copy";
import { HOME } from "@/i18n/home-copy";
import { useLocale } from "@/i18n/locale";
import { Reveal, SectionHeading } from "./Reveal";

export function ArticlesBlock() {
  const { locale } = useLocale();
  const copy = HOME[locale].articles;
  const articles = localizedArticles(locale);
  return (
    <section
      id="statyi"
      aria-labelledby="articles-block-title"
      className="section-y border-t border-border bg-background"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={<span id="articles-block-title">{copy.title}</span>}
          lead={copy.lead}
        />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {articles.map((article, i) => (
            <li key={article.slug} className="h-full">
              <Reveal delay={i * 60} className="h-full">
                <Link
                  to="/statyi/$slug"
                  params={{ slug: article.slug }}
                  className="surface-card card-interactive group flex h-full flex-col overflow-hidden"
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
                      <h3 className="font-display text-lg font-extrabold text-foreground">{article.title}</h3>
                      <ArrowUpRight
                        className="mt-1 size-4 shrink-0 text-primary transition group-hover:rotate-45"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{article.description}</p>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-10">
          <Button asChild variant="subtle" size="lg" className="h-12">
            <Link to="/statyi">
              {copy.all}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}