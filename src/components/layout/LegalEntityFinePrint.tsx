import type { ReactNode } from "react";
import type { AboutPageCopy } from "@/i18n/about-copy";
import { ABOUT_PAGE } from "@/i18n/about-copy";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/utils";

type LegalCopy = AboutPageCopy["legal"];

/** Юр. реквизиты для индексации — без визуального акцента. */
export function LegalEntityFinePrint({
  legal,
  variant = "page",
  className,
}: {
  legal: LegalCopy;
  variant?: "page" | "footer";
  className?: string;
}) {
  if (variant === "footer") {
    const facts = legal.rows.filter(
      (row) => !row.value.startsWith("[") && row.label !== "Юридическое лицо",
    );
    return (
      <p className={cn("max-w-4xl text-[0.6875rem] leading-relaxed text-foreground/45", className)}>
        {legal.intro}{" "}
        {facts.map((row, i) => (
          <span key={row.label}>
            {i > 0 ? " · " : ""}
            {/^[A-ZА-ЯЁ]+$/.test(row.label) ? `${row.label} ` : ""}
            {row.value}
          </span>
        ))}
        .
      </p>
    );
  }

  return (
    <aside id="legal" className={cn("scroll-mt-28", className)} aria-labelledby="legal-heading">
      <h2 id="legal-heading" className="text-xs font-medium text-foreground/55">
        {legal.h2}
      </h2>
      <p className="mt-2 text-xs leading-relaxed text-foreground/50">{legal.intro}</p>
      <dl className="mt-3 space-y-1.5 text-[0.6875rem] leading-snug text-foreground/45">
        {legal.rows.map((row) => (
          <div key={row.label} className="flex flex-wrap gap-x-1.5 gap-y-0">
            <dt className="text-foreground/40">{row.label}:</dt>
            <dd className="min-w-0">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[0.6875rem] leading-relaxed text-foreground/40">{legal.note}</p>
    </aside>
  );
}

export function FooterLegalFinePrint() {
  const { locale } = useLocale();
  const legal = ABOUT_PAGE[locale].legal;
  return (
    <div className="container-page border-t border-border/80 pb-5 pt-5">
      <LegalEntityFinePrint legal={legal} variant="footer" />
    </div>
  );
}
