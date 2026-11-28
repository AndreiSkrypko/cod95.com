import { SERVICES, type ServiceId } from "@/content/landing";
import type { Locale } from "./messages";

const pl: Record<ServiceId, string[]> = {
  "short-course": ["3–5 dni", "Bez egzaminu", "Warszawa"],
  "long-course": ["~21 dni", "Egzamin WORD", "Akredytowane centrum"],
  "code95-lt-short": ["Litwa", "Szkolenie okresowe"],
  "code95-lt-long": ["Litwa", "Kwalifikacja wstępna"],
  "driver-card": ["Tachograf", "Dokumenty"],
  "lt-retrain": ["Litwa → Polska", "Konsultacja"],
};

const uk: Record<ServiceId, string[]> = {
  "short-course": ["3–5 днів", "Без іспиту", "Варшава"],
  "long-course": ["~21 день", "Іспит WORD", "Акредитований центр"],
  "code95-lt-short": ["Литва", "Періодичне навчання"],
  "code95-lt-long": ["Литва", "Первинна кваліфікація"],
  "driver-card": ["Тахограф", "Документи"],
  "lt-retrain": ["Литва → Польща", "Консультація"],
};

export function localizedTags(locale: Locale, id: ServiceId): string[] {
  if (locale === "pl") return pl[id];
  if (locale === "uk") return uk[id];
  return SERVICES.find((service) => service.id === id)?.tags ?? [];
}
