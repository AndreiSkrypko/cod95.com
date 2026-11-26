import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Внутренние страницы без полноэкранного hero — заголовок под шапкой. */
export function ContentPageIntro({
  eyebrow,
  title,
  lead,
  meta,
  actions,
  className,
  compact = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  meta?: ReactNode;
  actions?: ReactNode;
  className?: string;
  /** Меньше отступа снизу — каталог сразу показывает контент */
  compact?: boolean;
}) {
  return (
    <section className={cn("border-b border-border bg-background text-left", className)}>
      <div
        className={cn(
          "container-page w-full pt-[calc(4.5rem+1.75rem)] lg:pt-24",
          compact ? "pb-5 md:pb-6" : "pb-8 md:pb-10",
        )}
      >
        {eyebrow ? <p className="eyebrow eyebrow-rule">{eyebrow}</p> : null}
        <h1 className={cn("type-page-hero-title max-w-4xl text-left text-foreground", eyebrow ? "mt-4" : "mt-0")}>
          {title}
        </h1>
        {lead ? <p className="type-lead mt-4 max-w-2xl text-left text-muted-foreground">{lead}</p> : null}
        {meta ? <div className="mt-4 text-sm font-semibold text-ink-soft">{meta}</div> : null}
        {actions ? <div className="mt-6">{actions}</div> : null}
      </div>
    </section>
  );
}