import type { ReactNode } from "react";
import { BookingProvider } from "@/components/landing/BookingDialog";
import { LocaleProvider } from "@/i18n/locale";
import { FloatDock } from "@/components/landing/StarBlocks";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { useSpotlight } from "@/components/landing/useSpotlight";
import { BitrixIntegration } from "@/components/bitrix/BitrixIntegration";

export function SiteLayout({ children }: { children: ReactNode }) {
  useSpotlight();
  return (
    <LocaleProvider>
    <BookingProvider>
      <BitrixIntegration />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <FloatDock />
    </BookingProvider>
    </LocaleProvider>
  );
}
