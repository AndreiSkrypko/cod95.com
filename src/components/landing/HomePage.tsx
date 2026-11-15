import { ArticlesBlock } from "@/components/landing/ArticlesBlock";
import { useDocumentMeta } from "@/i18n/document";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import { Hero } from "@/components/landing/Hero";
import { Reviews } from "@/components/landing/Reviews";
import {
  Code95Block,
  ConsultSplit,
  HomeContacts,
  HomeFaq,
  OfferRow,
  Perks,
  SchoolLife,
  StoryBlock,
} from "@/components/landing/StarBlocks";

export function HomePage() {
  const { locale } = useLocale();
  const meta = PAGES[locale].meta;
  useDocumentMeta(meta.homeTitle, meta.homeDescription);
  return (
    <>
      <Hero />
      <StoryBlock />
      <OfferRow />
      <ConsultSplit />
      <Code95Block />
      <Perks />
      <Reviews />
      <ArticlesBlock />
      <HomeFaq />
      <SchoolLife />
      <HomeContacts />
    </>
  );
}
