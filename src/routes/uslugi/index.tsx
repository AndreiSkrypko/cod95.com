import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ServicesCatalogPage } from "@/components/pages/ServicesCatalogPage";

export const Route = createFileRoute("/uslugi/")({
  head: () => ({
    meta: [
      { title: "Наши услуги — BAZA" },
      {
        name: "description",
        content:
          "Профессиональное обучение КОД 95 в Польше, программы в Литве, сопровождение документов и консультации в учебном центре BAZA.",
      },
    ],
  }),
  component: UslugiIndex,
});

function UslugiIndex() {
  return (
    <SiteLayout>
      <ServicesCatalogPage />
    </SiteLayout>
  );
}
