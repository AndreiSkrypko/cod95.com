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

export function SiteBreadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = getBreadcrumbItems(pathname);

  if (items.length === 0) return null;

  return (
    <div
      data-site-breadcrumbs
      className="mt-[4.5rem] border-b border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="container-page py-3">
        <Breadcrumb aria-label="Хлебные крошки">
          <BreadcrumbList className="font-display text-xs font-semibold sm:text-sm">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const isHome = index === 0;
              return (
                <Fragment key={`${item.label}-${index}`}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="max-w-[min(100%,28rem)] truncate">{item.label}</BreadcrumbPage>
                    ) : item.to ? (
                      <BreadcrumbLink asChild>
                        <Link
                          to={item.to}
                          className={isHome ? "text-muted-foreground hover:text-primary" : undefined}
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