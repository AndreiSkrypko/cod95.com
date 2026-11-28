import { useRouterState } from "@tanstack/react-router";
import { getBreadcrumbItems } from "@/lib/breadcrumbs";
import { localizedArticle } from "@/i18n/articles-copy";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import type { ServiceId } from "@/content/landing";

export function usePageBreadcrumbItems() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { locale, m } = useLocale();
  const pages = PAGES[locale];
  return getBreadcrumbItems(pathname, {
    crumbs: pages.crumbs,
    serviceTitle: (id) => m.services[id as ServiceId].title,
    articleTitle: (slug) => localizedArticle(locale, slug)?.title ?? slug,
  });
}
