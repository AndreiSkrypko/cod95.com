import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/landing/BookingDialog";
import { Reveal } from "@/components/landing/Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  ctaTo = "/zapis",
  ctaLabel = "Записаться на консультацию",
  service,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  ctaTo?: string;
  ctaLabel?: string;
  service?: string;
}) {
  return (
    <section className="noise relative overflow-hidden border-b border-border bg-background-deep pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mesh absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="container-page">
        <Reveal>
          {eyebrow && <p className="eyebrow eyebrow-rule">{eyebrow}</p>}
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-6xl">
            {title}
          </h1>
          {lead && <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{lead}</p>}
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
        </Reveal>
      </div>
    </section>
  );
}
