/** Единый суффикс title и имя бренда на сайте BAZA. */
export const SITE_BRAND = "BAZA";

export function metaTitle(page: string) {
  return `${page} — ${SITE_BRAND}`;
}
