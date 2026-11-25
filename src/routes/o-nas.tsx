import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AboutBazaPage } from "@/components/pages/AboutBazaPage";

export const Route = createFileRoute("/o-nas")({
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <SiteLayout>
      <AboutBazaPage />
    </SiteLayout>
  );
}