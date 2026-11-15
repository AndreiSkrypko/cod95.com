import type { ReactNode } from "react";
import { BookingProvider } from "@/components/landing/BookingDialog";
import { LocaleProvider } from "@/i18n/locale";
import { FloatDock } from "@/components/landing/StarBlocks";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteBreadcrumbs } from "@/components/layout/SiteBreadcrumbs";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { useSpotlight } from "@/components/landing/useSpotlight";

export function SiteLayout({ children }: { children: ReactNode }) {
  useSpotlight();
  return (
    <LocaleProvider>
    <BookingProvider>
      <SiteHeader />
      <main>
        <SiteBreadcrumbs />
        {children}
      </main>
      <SiteFooter />
      <FloatDock />
    </BookingProvider>
    </LocaleProvider>
  );
}
