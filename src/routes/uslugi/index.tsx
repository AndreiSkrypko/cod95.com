import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ServicesCatalogPage } from "@/components/pages/ServicesCatalogPage";

export const Route = createFileRoute("/uslugi/")({
  head: () => ({
    meta: [
      { title: "Наши услуги — DrivePrime" },
      {
        name: "description",
        content:
          "Короткий и длинный курс КОД 95, ВНЖ, ADR, замена прав, трудоустройство и другие услуги для водителей.",
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
