import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/landing/BookingDialog";
import heroTruck from "@/assets/hero-truck.jpg";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

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
    <section
      data-page-hero
      className="page-hero relative flex min-h-[68svh] flex-col justify-end overflow-hidden pb-12 pt-32 md:pb-16 md:pt-36"
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.985_0.012_80/92%)_0%,oklch(0.985_0.012_80/78%)_48%,oklch(0.985_0.012_80/55%)_100%)] lg:bg-[linear-gradient(100deg,oklch(0.985_0.012_80)_0%,oklch(0.985_0.012_80/92%)_28%,oklch(0.985_0.012_80/30%)_48%,transparent_68%)]"
        aria-hidden="true"
      />
      <div className="container-page">
        {eyebrow && <p className="eyebrow eyebrow-rule">{eyebrow}</p>}
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-foreground md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl font-display text-xl font-semibold text-foreground md:text-2xl">{subtitle}</p>
        )}
        {leadParagraphs && leadParagraphs.length > 0 ? (
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/85 md:text-xl">
            {leadParagraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        ) : (
          lead && <p className="mt-6 max-w-xl text-lg text-foreground/80 md:text-xl">{lead}</p>
        )}
        {heroActions ? (
          <div className="mt-8">{heroActions}</div>
        ) : showDefaultCta ? (
          ctaTo === "/zapis" ? (
            <BookButton {...(service ? { service } : {})} variant="hero" size="xl" className="mt-8">
              {label}
              <ArrowRight aria-hidden="true" />
            </BookButton>
          ) : (
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to={ctaTo}>
                {label}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          )
        ) : null}
      </div>
    </section>
  );
}
