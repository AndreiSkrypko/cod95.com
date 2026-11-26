import { SERVICES, type ServiceId } from "@/content/landing";
import type { Locale } from "./messages";

const pl: Record<ServiceId, string[]> = {
  "short-course": ["3–5 dni", "Bez egzaminu", "Warszawa"],
  "long-course": ["~21 dni", "Egzamin WORD", "Akredytowane centrum"],
  "long-no-exam": ["Indywidualnie", "Konsultacja"],
  "long-online": ["Teoria online", "Egzamin w WORD"],
  "code95-lt": ["Litwa", "Uznawany w UE"],
  "code95-lt-short": ["Litwa", "Szkolenie okresowe"],
  "code95-lt-long": ["Litwa", "Kwalifikacja wstępna"],
  "driver-card": ["Tachograf", "Dokumenty"],
  residence: ["Pobyt", "Dokumenty", "Wsparcie"],
  adr: ["ADR", "Towary niebezpieczne"],
  invitation: ["Wiza D", "Legalny wjazd"],
  license: ["Wymiana prawa jazdy", "Wsparcie"],
  "extra-driving": ["Praktyka", "DAF / SCANIA"],
  "lt-retrain": ["Litwa → Polska", "Konsultacja"],
  employment: ["Praca w UE", "Z doświadczeniem i bez"],
  company: ["Rejestracja", "Licencje"],
};

const uk: Record<ServiceId, string[]> = {
  "short-course": ["3–5 днів", "Без іспиту", "Варшава"],
  "long-course": ["~21 день", "Іспит WORD", "Акредитований центр"],
  "long-no-exam": ["Індивідуально", "Консультація"],
  "long-online": ["Онлайн-теорія", "Іспит у WORD"],
  "code95-lt": ["Литва", "Визнається в ЄС"],
  "code95-lt-short": ["Литва", "Періодичне навчання"],
  "code95-lt-long": ["Литва", "Первинна кваліфікація"],
  "driver-card": ["Тахограф", "Документи"],
  residence: ["ПМП", "Документи", "Супровід"],
  adr: ["ADR", "Небезпечні вантажі"],
  invitation: ["Віза D", "Легальний в'їзд"],
  license: ["Обмін прав", "Супровід"],
  "extra-driving": ["Практика", "DAF / SCANIA"],
  "lt-retrain": ["Литва → Польща", "Консультація"],
  employment: ["Робота в ЄС", "З досвідом і без"],
  company: ["Реєстрація", "Ліцензії"],
};

export function localizedTags(locale: Locale, id: ServiceId): string[] {
  if (locale === "pl") return pl[id];
  if (locale === "uk") return uk[id];
  return SERVICES.find((service) => service.id === id)?.tags ?? [];
}
