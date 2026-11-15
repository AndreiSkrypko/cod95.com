import { ArticlesBlock } from "@/components/landing/ArticlesBlock";
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
