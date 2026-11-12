import type { ReactNode } from "react";
import { BookingProvider } from "@/components/landing/BookingDialog";
import { FloatDock } from "@/components/landing/StarBlocks";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { useSpotlight } from "@/components/landing/useSpotlight";

export function SiteLayout({ children }: { children: ReactNode }) {
  useSpotlight();
  return (
    <BookingProvider>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <FloatDock />
    </BookingProvider>
  );
}
