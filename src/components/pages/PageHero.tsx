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

  return (
    <section data-page-hero className="page-hero relative overflow-hidden pb-10 pt-6 md:pb-14 md:pt-8">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.985_0.012_80/98%)_0%,oklch(0.985_0.012_80/94%)_55%,oklch(0.975_0.014_80/98%)_100%)] lg:bg-[linear-gradient(100deg,oklch(0.995_0.008_80)_0%,oklch(0.985_0.012_80/97%)_26%,oklch(0.985_0.012_80/92%)_36%,oklch(0.985_0.012_80/78%)_46%,oklch(0.985_0.012_80/45%)_56%,oklch(0.98_0.012_80/18%)_70%,transparent_90%)]"
        aria-hidden="true"
      />

      <div className="container-page relative z-[1]">
        <div className="hero-surface max-w-3xl rounded-3xl p-5 sm:p-6 md:p-8 lg:max-w-[42rem] lg:bg-[oklch(0.995_0.006_80/92%)]">
          {eyebrow && <p className="eyebrow eyebrow-rule">{eyebrow}</p>}
          <h1 className={cn("type-page-hero-title max-w-3xl text-foreground", eyebrow ? "mt-4" : "mt-0")}>{title}</h1>
          {subtitle && <p className="type-subtitle mt-2 max-w-2xl text-foreground">{subtitle}</p>}
          {leadParagraphs && leadParagraphs.length > 0 ? (
            <div className="mt-5 max-w-2xl space-y-3">
              {leadParagraphs.map((p) => (
                <p key={p.slice(0, 32)} className="type-lead">
                  {p}
                </p>
              ))}
            </div>
          ) : (
            lead && (
              <p className="type-lead mt-5 max-w-xl">{lead}</p>
            )
          )}
          {heroActions ? (
            <div className="mt-6">{heroActions}</div>
          ) : showDefaultCta ? (
            ctaTo === "/zapis" ? (
              <BookButton {...(service ? { service } : {})} variant="hero" size="lg" className="mt-6">
                {label}
                <ArrowRight aria-hidden="true" />
              </BookButton>
            ) : (
              <Button asChild variant="hero" size="lg" className="mt-6">
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