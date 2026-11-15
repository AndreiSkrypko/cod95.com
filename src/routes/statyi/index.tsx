import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticlesCatalogPage } from "@/components/pages/ArticlesCatalogPage";

export const Route = createFileRoute("/statyi/")({
  head: () => ({
    meta: [
      { title: "Статьи о КОД 95 — DrivePrime" },
      {
        name: "description",
        content:
          "Гайды для водителей: короткий и длинный курс, КОД 95 в Варшаве для белорусов, польский и литовский код.",
      },
    ],
  }),
  component: StatyiIndex,
});

function StatyiIndex() {
  return (
    <SiteLayout>
      <ArticlesCatalogPage />
    </SiteLayout>
  );
}