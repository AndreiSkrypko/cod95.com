import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import { cn } from "@/lib/utils";
import { usePageBreadcrumbItems } from "./usePageBreadcrumbItems";

export function PageBreadcrumbs({ className }: { className?: string }) {
  const items = usePageBreadcrumbItems();
  const { locale } = useLocale();
  if (items.length === 0) return null;

  return (
    <Breadcrumb
      aria-label={PAGES[locale].crumbs.label}
      className={cn("eyebrow eyebrow-rule flex w-full max-w-full text-left", className)}
    >
      <BreadcrumbList className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-inherit sm:gap-x-2.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isHome = index === 0;
          return (
            <Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem className="inline-flex">
                {isLast ? (
                  <BreadcrumbPage className="block max-w-40 truncate font-bold uppercase tracking-[0.22em] text-accent-foreground sm:max-w-72">
                    {item.label}
                  </BreadcrumbPage>
                ) : item.to ? (
                  <BreadcrumbLink asChild>
                    <Link
                      to={item.to}
                      className={cn(
                        "text-[0.75rem] font-bold uppercase tracking-[0.22em] transition-colors",
                        isHome
                          ? "text-muted-foreground hover:text-accent-foreground"
                          : "text-accent-foreground/80 hover:text-accent-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-accent-foreground">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast ? (
                <BreadcrumbSeparator className="text-accent-foreground/45 [&>svg]:size-3" />
              ) : null}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}