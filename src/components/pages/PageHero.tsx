import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/landing/BookingDialog";
import heroTruck from "@/assets/hero-truck.jpg";
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
  const showDefaultCta = !heroActions && (ctaLabel !== undefined || lead !== undefined || eyebrow !== undefined);
  const isDefaultTruck = image === heroTruck;

  return (
    <section data-page-hero className="page-hero hero-viewport">
      <div className="hero-backdrop">
        <img
          src={image}
          alt={imageAlt}
          className={cn(isDefaultTruck ? "hero-backdrop-photo" : "absolute inset-0 h-full w-full object-cover")}
          style={isDefaultTruck ? undefined : { objectPosition: imagePosition }}
        />
      </div>
      <div className="hero-backdrop-scrim" aria-hidden="true" />

      <div className="container-page hero-viewport-content pb-10 pt-[calc(4.5rem+1.5rem)] md:pb-12 lg:pb-14 lg:pt-28">
        <div className="max-w-xl lg:max-w-2xl">
          {eyebrow && <p className="eyebrow eyebrow-rule">{eyebrow}</p>}
          <h1 className={cn("type-page-hero-title text-foreground", eyebrow ? "mt-4" : "mt-0")}>{title}</h1>
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
              <BookButton {...(service ? { service } : {})} variant="hero" size="xl" className="mt-7">
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
    </section>
  );
}