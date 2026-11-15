import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleDetailPage } from "@/components/pages/ArticleDetailPage";
import { getArticleBySlug, isArticleSlug } from "@/content/articles";

export const Route = createFileRoute("/statyi/$slug")({
  beforeLoad: ({ params }) => {
    if (!isArticleSlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const article = isArticleSlug(params.slug) ? getArticleBySlug(params.slug) : undefined;
    const title = article ? `${article.title} — DrivePrime` : "Статья — DrivePrime";
    const description = article?.description ?? "";
    return { meta: [{ title }, { name: "description", content: description }] };
  },
  component: ArticleRoute,
});

function ArticleRoute() {
  const { slug } = Route.useParams();
  const article = getArticleBySlug(slug);
  if (!article) throw notFound();
  return (
    <SiteLayout>
      <ArticleDetailPage article={article} />
    </SiteLayout>
  );
}