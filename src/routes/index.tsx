import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { WhyUs } from "@/components/landing/WhyUs";
import { Services } from "@/components/landing/Services";
import { Bundle } from "@/components/landing/Bundle";
import { Process } from "@/components/landing/Process";
import { Gallery } from "@/components/landing/Gallery";
import { Reviews } from "@/components/landing/Reviews";
import { Faq } from "@/components/landing/Faq";
import { Contacts } from "@/components/landing/Contacts";
import { SiteFooter } from "@/components/landing/SiteFooter";

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
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <WhyUs />
        <Services />
        <Bundle />
        <Process />
        <Gallery />
        <Reviews />
        <Faq />
        <Contacts />
      </main>
      <SiteFooter />
    </>
  );
}
