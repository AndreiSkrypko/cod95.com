import { getArticleBySlug, isArticleSlug } from "@/content/articles";
import { getServiceById, isServiceId } from "@/content/servicePages";
import { PAGES, type PagesCopy } from "@/i18n/pages-copy";

export type BreadcrumbItem = {
  label: string;
  to?:
    "/" | "/o-nas" | "/informaciya" | "/statyi" | "/uslugi" | "/kontakty" | "/zapis" | "/spasibo";
};

function topLevel(crumbs: PagesCopy["crumbs"]): Record<string, BreadcrumbItem> {
  return {
    "o-nas": { label: crumbs.about, to: "/o-nas" },
    informaciya: { label: crumbs.info, to: "/informaciya" },
    statyi: { label: crumbs.articles, to: "/statyi" },
    uslugi: { label: crumbs.services, to: "/uslugi" },
    kontakty: { label: crumbs.contacts, to: "/kontakty" },
    zapis: { label: crumbs.zapis, to: "/zapis" },
    spasibo: { label: crumbs.thanks, to: "/spasibo" },
  };
}

function truncateLabel(text: string, max = 52) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

type CrumbOptions = {
  crumbs?: PagesCopy["crumbs"];
  serviceTitle?: (id: string) => string;
  articleTitle?: (slug: string) => string;
};

export function getBreadcrumbItems(pathname: string, options?: CrumbOptions): BreadcrumbItem[] {
  const crumbs = options?.crumbs ?? PAGES.ru.crumbs;
  const labels = topLevel(crumbs);
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/") return [{ label: crumbs.homeCurrent }];

  const segments = clean.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [{ label: crumbs.home, to: "/" }];

  const root = segments[0];
  const child = segments[1];

  if (root === "uslugi") {
    const servicesCrumb = labels["uslugi"];
    if (servicesCrumb) items.push(servicesCrumb);
    if (child && isServiceId(child)) {
      const service = getServiceById(child);
      const title = options?.serviceTitle?.(child) ?? service?.title;
      if (title) items.push({ label: truncateLabel(title) });
    }
    return items;
  }

  if (root === "statyi") {
    const articlesCrumb = labels["statyi"];
    if (articlesCrumb) items.push(articlesCrumb);
    if (child && isArticleSlug(child)) {
      const article = getArticleBySlug(child);
      const title = options?.articleTitle?.(child) ?? article?.title;
      if (title) items.push({ label: truncateLabel(title) });
    }
    return items;
  }

  const top = root ? labels[root] : undefined;
  if (top) items.push(top);
  else items.push({ label: crumbs.page });

  return items;
}
