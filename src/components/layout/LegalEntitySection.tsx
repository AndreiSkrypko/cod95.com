import type { AboutPageCopy } from "@/i18n/about-copy";
import { ABOUT_PAGE } from "@/i18n/about-copy";
import { useLocale } from "@/i18n/locale";
import { Reveal } from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";

function LegalValue({ label, value }: { label: string; value: string }) {
  const pending = value.startsWith("[");
  if (label === "E-mail" && !pending) {
    return (
      <a href={`mailto:${value}`} className="font-medium text-primary underline-offset-4 hover:underline">
        {value}
      </a>
    );
  }
  return (
    <span className={cn(pending && "text-muted-foreground italic")}>{value}</span>
  );
}

export function LegalEntitySection({ legal }: { legal?: AboutPageCopy["legal"] }) {
  const { locale } = useLocale();
  const copy = legal ?? ABOUT_PAGE[locale].legal;

  return (
    <section
      id="legal"
      className="scroll-mt-28 border-t border-border bg-paper py-12 md:py-16"
      aria-labelledby="contacts-legal-heading"
    >
      <div className="container-page max-w-4xl">
        <Reveal>
          <h2 id="contacts-legal-heading" className="type-section-title">
            {copy.h2}
          </h2>
          <p className="type-lead mt-6 text-foreground">{copy.intro}</p>

          <dl className="mt-10 overflow-hidden rounded-md border border-border bg-background shadow-card">
            {copy.rows.map((row, index) => (
              <div
                key={row.label}
                className={cn(
                  "grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,11rem)_1fr] sm:items-baseline sm:gap-6 sm:px-6 sm:py-5",
                  index > 0 && "border-t border-border",
                )}
              >
                <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="type-prose min-w-0 text-foreground">
                  <LegalValue label={row.label} value={row.value} />
                </dd>
              </div>
            ))}
          </dl>

          <p className="type-prose mt-8 border-l-2 border-primary/35 pl-5 text-muted-foreground md:pl-6">{copy.note}</p>
        </Reveal>
      </div>
    </section>
  );
}