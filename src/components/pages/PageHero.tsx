import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/landing/BookingDialog";
import heroTruck from "@/assets/hero-truck.jpg";

export function PageHero({
  eyebrow,
  title,
  lead,
  ctaTo = "/zapis",
  ctaLabel = "Записаться на консультацию",
  service,
  image = heroTruck,
  imageAlt = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  ctaTo?: string;
  ctaLabel?: string;
  service?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative flex min-h-[68svh] flex-col justify-end overflow-hidden pb-12 pt-32 md:pb-16 md:pt-36">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center]"
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
        {lead && <p className="mt-6 max-w-xl text-lg text-foreground/80 md:text-xl">{lead}</p>}
        {ctaTo === "/zapis" ? (
          <BookButton {...(service ? { service } : {})} variant="hero" size="xl" className="mt-8">
            {ctaLabel}
            <ArrowRight aria-hidden="true" />
          </BookButton>
        ) : (
          <Button asChild variant="hero" size="xl" className="mt-8">
            <Link to={ctaTo}>
              {ctaLabel}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
}
