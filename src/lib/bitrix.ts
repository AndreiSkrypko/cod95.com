import type { ServiceId } from "@/content/landing";

/** CRM portal (same as taxocard.by embedded forms). */
export const BITRIX_DOMAIN = "b24-90sm2q.bitrix24.by";

export const BITRIX_CALL_TRACKER =
  "https://cdn-ru.bitrix24.by/b27507608/crm/tag/call.tracker.js";

export type BitrixFormKey =
  | "consult"
  | "cost"
  | "promo"
  | "course"
  | "delivery"
  | "application"
  | "pricing"
  | "employment"
  | "otherA"
  | "otherB";

export const BITRIX_FORMS: Record<
  BitrixFormKey,
  { id: number; sec: string; loader: string }
> = {
  consult: { id: 1, sec: "edorcb", loader: "/assets/bitrix/crm/form/loader_1.js" },
  cost: { id: 7, sec: "7z7rba", loader: "/assets/bitrix/crm/form/loader_7.js" },
  promo: { id: 9, sec: "d5iuyz", loader: "/assets/bitrix/crm/form/loader_9.js" },
  course: { id: 11, sec: "mdyvzm", loader: "/assets/bitrix/crm/form/loader_11.js" },
  delivery: { id: 13, sec: "s4p1io", loader: "/assets/bitrix/crm/form/loader_13.js" },
  application: { id: 17, sec: "vqtplx", loader: "/assets/bitrix/crm/form/loader_17.js" },
  pricing: { id: 15, sec: "63g1ck", loader: "/assets/bitrix/crm/form/loader_15.js" },
  otherA: { id: 19, sec: "jwdns1", loader: "/assets/bitrix/crm/form/loader_19.js" },
  otherB: { id: 21, sec: "44b55v", loader: "/assets/bitrix/crm/form/loader_21.js" },
  employment: { id: 23, sec: "vglqhi", loader: "/assets/bitrix/crm/form/loader_23.js" },
};

const COURSE_SERVICE_IDS = new Set<ServiceId>([
  "short-course",
  "long-course",
  "long-no-exam",
  "long-online",
  "code95-lt",
  "lt-retrain",
  "extra-driving",
]);

/** Which CRM form to use for a BAZA service (default: общая заявка). */
export function resolveBitrixFormKey(serviceId: string): BitrixFormKey {
  if (serviceId === "employment" || serviceId === "company") return "employment";
  if (COURSE_SERVICE_IDS.has(serviceId as ServiceId)) return "course";
  if (serviceId === "residence" || serviceId === "invitation") return "delivery";
  if (serviceId === "adr" || serviceId === "license") return "pricing";
  return "application";
}

export type LeadPayload = {
  name: string;
  phone: string;
  serviceLabel: string;
  comment?: string;
  pageUrl: string;
};

export { submitBitrixLead } from "@/lib/bitrix-api";

const loadedLoaders = new Set<string>();

/** Loads Bitrix click-form embed (same loaders as taxocard.by). */
export function ensureBitrixLoader(loaderPath: string): void {
  if (typeof document === "undefined" || loadedLoaders.has(loaderPath)) return;
  loadedLoaders.add(loaderPath);

  const sibling = document.querySelector(`script[data-b24-loader="${loaderPath}"]`);
  if (sibling) return;

  const script = document.createElement("script");
  script.async = true;
  script.dataset.b24Loader = loaderPath;
  script.src = `${loaderPath}?${Math.floor(Date.now() / 180000)}`;
  document.head.appendChild(script);
}

/** Preload one embed (e.g. before opening Bitrix popup). Avoid loading all loaders at once. */
export function preloadBitrixForm(formKey: BitrixFormKey): void {
  ensureBitrixLoader(BITRIX_FORMS[formKey].loader);
}