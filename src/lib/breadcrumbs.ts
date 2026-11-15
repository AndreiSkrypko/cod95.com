import { getArticleBySlug, isArticleSlug } from "@/content/articles";
import { getServiceById, isServiceId } from "@/content/servicePages";

export type BreadcrumbItem = {
  label: string;
  to?: "/" | "/o-nas" | "/informaciya" | "/statyi" | "/uslugi" | "/kontakty" | "/zapis" | "/spasibo";
};

const TOP_LEVEL: Record<string, BreadcrumbItem> = {
  "o-nas": { label: "О нас", to: "/o-nas" },
  informaciya: { label: "Информация", to: "/informaciya" },
  statyi: { label: "Статьи", to: "/statyi" },
  uslugi: { label: "Наши услуги", to: "/uslugi" },
  kontakty: { label: "Контакты", to: "/kontakty" },
  zapis: { label: "Запись на курс", to: "/zapis" },
  spasibo: { label: "Спасибо за заявку", to: "/spasibo" },
};

function truncateLabel(text: string, max = 52) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

/** Пустой массив — главная, крошки не показываем */
export function getBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/") return [];

  const segments = clean.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [{ label: "Главная", to: "/" }];

  const root = segments[0];
  const child = segments[1];

  if (root === "uslugi") {
    items.push(TOP_LEVEL.uslugi);
    if (child && isServiceId(child)) {
      const service = getServiceById(child);
      if (service) items.push({ label: truncateLabel(service.title) });
    }
    return items;
  }

  if (root === "statyi") {
    items.push(TOP_LEVEL.statyi);
    if (child && isArticleSlug(child)) {
      const article = getArticleBySlug(child);
      if (article) items.push({ label: truncateLabel(article.title) });
    }
    return items;
  }

  const top = TOP_LEVEL[root];
  if (top) items.push(top);
  else items.push({ label: "Страница" });

  return items;
}