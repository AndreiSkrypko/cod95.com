import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/landing/BookingDialog";
import { PageBreadcrumbs } from "@/components/layout/PageBreadcrumbs";
import { usePageBreadcrumbItems } from "@/components/layout/usePageBreadcrumbItems";
import heroTruck from "@/assets/hero-truck.webp";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  lead,
  leadParagraphs,
  ctaTo = "/zapis",
  ctaLabel,
  service,
  heroActions,
  image = heroTruck,
  imageAlt = "",
  imagePosition = "72% center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  lead?: string;
  leadParagraphs?: string[];
  ctaTo?: string;
  ctaLabel?: string;
  service?: string;
  /** Заменяет одну кнопку по умолчанию (например, две CTA на «О нас»). */
  heroActions?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}) {
  const { locale } = useLocale();
  const label = ctaLabel ?? PAGES[locale].article.cta;
  const crumbs = usePageBreadcrumbItems();
  const hasCrumbs = crumbs.length > 0;
  const showDefaultCta =
    !heroActions &&
    (ctaLabel !== undefined || lead !== undefined || eyebrow !== undefined || hasCrumbs);
  const isDefaultTruck = image === heroTruck;

  return (
    <section data-page-hero className="page-hero hero-viewport">
      <div className="hero-backdrop">
        <img
          src={image}
          alt={imageAlt}
          className={cn(isDefaultTruck ? "hero-backdrop-photo" : "page-hero-photo")}
          style={isDefaultTruck ? undefined : { objectPosition: imagePosition }}
        />
      </div>
      <div className="hero-backdrop-scrim-dark" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--background)_0%,oklch(0.16_0.03_260/85%)_34%,transparent_62%)]"
      />
      <div className="page-hero-fade-bottom" aria-hidden="true" />

      <div className="container-page relative z-[1] flex min-h-[82svh] flex-col pt-page-intro pb-10 md:pb-12 lg:pb-14">
        <PageBreadcrumbs />
        {!hasCrumbs && eyebrow ? <p className="eyebrow eyebrow-rule mt-0">{eyebrow}</p> : null}
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-xl lg:max-w-2xl">
            <h1
              className={cn(
                "type-page-hero-title text-foreground",
                hasCrumbs || eyebrow ? "mt-4" : "mt-0",
              )}
            >
              {title}
            </h1>
            {subtitle && <p className="type-subtitle mt-3 text-foreground">{subtitle}</p>}
            {leadParagraphs && leadParagraphs.length > 0 ? (
              <div className="mt-4 max-w-lg space-y-3">
                {leadParagraphs.map((p) => (
                  <p key={p.slice(0, 32)} className="type-lead">
                    {p}
                  </p>
                ))}
              </div>
            ) : (
              lead && <p className="type-lead mt-4 max-w-lg">{lead}</p>
            )}
            {heroActions ? (
              <div className="mt-7">{heroActions}</div>
            ) : showDefaultCta ? (
              ctaTo === "/zapis" ? (
                <BookButton
                  {...(service ? { service } : {})}
                  variant="hero"
                  size="xl"
                  className="mt-7"
                >
                  {label}
                  <ArrowRight aria-hidden="true" />
                </BookButton>
              ) : (
                <Button asChild variant="hero" size="xl" className="mt-7">
                  <Link to={ctaTo}>
                    {label}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              )
            ) : null}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[1] flex justify-center">
          <span className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/50 motion-safe:animate-bounce">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m6 9 6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
