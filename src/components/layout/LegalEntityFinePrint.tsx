import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { AboutPageCopy } from "@/i18n/about-copy";
import { ABOUT_PAGE } from "@/i18n/about-copy";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/utils";

type LegalCopy = AboutPageCopy["legal"];

function rowValue(rows: LegalCopy["rows"], labelPrefix: string) {
  return rows.find((r) => r.label.startsWith(labelPrefix) || r.label === labelPrefix)?.value;
}

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
    const nip = rowValue(legal.rows, "NIP");
    const regon = rowValue(legal.rows, "REGON");
    const email = rowValue(legal.rows, "E-mail");
    return (
      <p className={cn("max-w-4xl text-[0.6875rem] leading-relaxed text-foreground/45", className)}>
        {legal.intro}{" "}
        {nip ? <>NIP {nip}</> : null}
        {regon ? <> · REGON {regon}</> : null}
        {email ? <> · {email}</> : null}
        .{" "}
        <Link
          to="/kontakty"
          hash="legal"
          className="text-foreground/50 underline decoration-foreground/15 underline-offset-2 hover:text-foreground/65"
        >
          {legal.footerLink}
        </Link>
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