import { Fragment } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getBreadcrumbItems } from "@/lib/breadcrumbs";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import { localizedArticle } from "@/i18n/articles-copy";
import type { ServiceId } from "@/content/landing";

export function SiteBreadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { locale, m } = useLocale();
  const pages = PAGES[locale];
  const items = getBreadcrumbItems(pathname, {
    crumbs: pages.crumbs,
    serviceTitle: (id) => m.services[id as ServiceId].title,
    articleTitle: (slug) => localizedArticle(locale, slug)?.title ?? slug,
  });

  if (items.length === 0) return null;

  return (
    <div
      data-site-breadcrumbs
      className="mt-[4.5rem] border-b border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="container-page py-3">
        <Breadcrumb aria-label={pages.crumbs.label}>
          <BreadcrumbList className="font-display text-xs font-semibold sm:text-sm">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const isHome = index === 0;
              return (
                <Fragment key={`${item.label}-${index}`}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="max-w-[min(100%,28rem)] truncate">
                        {item.label}
                      </BreadcrumbPage>
                    ) : item.to ? (
                      <BreadcrumbLink asChild>
                        <Link
                          to={item.to}
                          className={
                            isHome ? "text-muted-foreground hover:text-primary" : undefined
                          }
                        >
                          {item.label}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
