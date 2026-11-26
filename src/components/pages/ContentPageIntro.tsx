import type { ReactNode } from "react";
import { PageBreadcrumbs } from "@/components/layout/PageBreadcrumbs";
import { usePageBreadcrumbItems } from "@/components/layout/usePageBreadcrumbItems";
import { cn } from "@/lib/utils";

/** Внутренние страницы без полноэкранного hero — заголовок под шапкой. */
export function ContentPageIntro({
  title,
  lead,
  meta,
  actions,
  className,
  compact = false,
}: {
  title: ReactNode;
  lead?: string;
  meta?: ReactNode;
  actions?: ReactNode;
  className?: string;
  compact?: boolean;
}) {
  const crumbs = usePageBreadcrumbItems();
  const hasCrumbs = crumbs.length > 0;

  return (
    <section className={cn("border-b border-border bg-background text-left", className)}>
      <div
        className={cn(
          "container-page w-full pt-[calc(4.5rem+0.75rem)] lg:pt-[5.25rem]",
          compact ? "pb-5 md:pb-6" : "pb-8 md:pb-10",
        )}
      >
        <PageBreadcrumbs />
        <h1 className={cn("type-page-hero-title max-w-4xl text-left text-foreground", hasCrumbs ? "mt-4" : "mt-0")}>
          {title}
        </h1>
        {lead ? <p className="type-lead mt-4 max-w-2xl text-left text-muted-foreground">{lead}</p> : null}
        {meta ? <div className="mt-4 text-sm font-semibold text-ink-soft">{meta}</div> : null}
        {actions ? <div className="mt-6">{actions}</div> : null}
      </div>
    </section>
  );
}