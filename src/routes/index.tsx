import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { HomePage } from "@/components/landing/HomePage";

const TITLE = "DrivePrime — КОД 95 в Польше и Литве, ВНЖ, замена прав";
const DESCRIPTION =
  "Официальное обучение на КОД 95 в Варшаве, литовский КОД 95, замена прав на польские, открытие транспортной компании и ВНЖ в Польше. Офисы в Минске и Варшаве.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  );
}
