import { SERVICES, type ServiceId } from "@/content/landing";
import { getServicePageDetail, type ServicePageDetail } from "@/content/servicePages";
import type { Locale } from "./messages";

const section = (title: string, paragraphs: string[]): ServicePageDetail["sections"][number] => ({
  title,
  paragraphs,
});

function page(
  lead: string,
  sections: ServicePageDetail["sections"],
  extra?: Pick<ServicePageDetail, "steps" | "checklist">,
): ServicePageDetail {
  return { lead, sections, ...extra };
}

const pl: Record<ServiceId, ServicePageDetail> = {
  "short-course": page(
    "Szkolenie okresowe KOD 95 bez egzaminu — dla kierowców z kategorią C sprzed 09.09.2009.",
    [
      section("Komu pasuje krótki kurs", [
        "Jeśli prawo jazdy kategorii C lub CE wydano przed 9 września 2009 roku, pasuje krótki kurs. Szkolenie trwa 3–5 dni roboczych, zależnie od programu i ADR.",
        "Egzamin w WORD nie jest wymagany — po kursie kwalifikację wystawia się według obowiązujących zasad.",
      ]),
      section("Co obejmuje wsparcie", [
        "Zapis do grupy, sprawdzenie dokumentów, konsultacja o zakwaterowaniu w Warszawie i pomoc do odbioru dokumentów.",
      ]),
    ],
    {
      checklist: [
        "Paszport i ważne prawo jazdy",
        "Dokumenty legalnego pobytu",
        "Zdjęcie do dokumentu (jeśli centrum wymaga)",
        "Badania i test psychologiczny — podpowiemy, gdzie zrobić",
      ],
    },
  ),
  "long-course": page(
    "Kwalifikacja wstępna KOD 95: teoria i praktyka w Warszawie, egzamin końcowy w WORD.",
    [
      section("Komu potrzebny długi kurs", [
        "Kategoria C wydana po 09.09.2009 — to długi kurs. Około trzech tygodni teorii i praktyki.",
        "Na końcu — obowiązkowy egzamin z komisją w WORD.",
      ]),
    ],
    {
      steps: [
        { title: "Konsultacja", text: "Ustalamy kategorię i zapisujemy cenę w umowie." },
        { title: "Dokumenty", text: "Zbieramy i sprawdzamy pakiet przed złożeniem w centrum." },
        {
          title: "Szkolenie",
          text: "Teoria i praktyka w Warszawie, jesteśmy w kontakcie codziennie.",
        },
        { title: "Egzamin", text: "Prowadzimy do odbioru kwalifikacji." },
      ],
    },
  ),
  "code95-lt-short": page(
    "Dobór programu szkolenia okresowego KOD 95 na Litwie i organizacja zapisu w ośrodku szkoleniowym.",
    [
      section("Jak pomagamy", [
        "Ośrodek BAZA nie prowadzi programów litewskich u siebie. Konsultujemy, sprawdzamy dokumenty i organizujemy zapis w placówce na Litwie.",
      ]),
    ],
  ),
  "code95-lt-long": page(
    "Konsultacja programów kwalifikacji wstępnej na Litwie i wsparcie zapisu.",
    [
      section("Jak pomagamy", [
        "Szkolenie odbywa się w litewskim ośrodku, nie w BAZA. Omawiamy dokumenty i warunki udziału.",
      ]),
    ],
  ),
  "driver-card": page(
    "Konsultacja karty kierowcy do tachografu i pomoc w wniosku przez Info-Car (PWPW).",
    [
      section("Ważne", [
        "BAZA nie wydaje karty — decyzję podejmuje uprawniony organ. Możliwość formalności ustalana indywidualnie.",
      ]),
    ],
  ),
  "lt-retrain": page(
    "Przejście z litewskiego KOD 95 na polski — wymiana albo krótki kurs, zależnie od sytuacji.",
    [
      section("Dwa scenariusze", [
        "Jeśli litewski kod działa dłużej niż 3 lata — często wystarczy wymiana na polski plastik.",
        "W przeciwnym razie — krótki kurs 3–5 dni bez egzaminu, jeśli są podstawy.",
      ]),
    ],
    {
      checklist: [
        "Litewski kod i tłumaczenie przysięgłe",
        "Paszport, prawo jazdy, zdjęcie 35×45",
        "Badania i test psychologiczny, jeśli potrzebne",
      ],
    },
  ),
};

const uk: Record<ServiceId, ServicePageDetail> = {
  "short-course": page(
    "Періодичне навчання КОД 95 без іспиту — для водіїв з категорією C до 09.09.2009.",
    [
      section("Кому підходить короткий курс", [
        "Якщо права категорії C або CE видано до 9 вересня 2009 року, вам підходить короткий курс. Навчання триває 3–5 робочих днів залежно від програми і ADR.",
        "Іспит у WORD не потрібен — після курсу кваліфікацію оформлюють за чинними правилами.",
      ]),
      section("Що входить у супровід", [
        "Запис у групу, перевірка документів, консультація щодо проживання у Варшаві і підтримка до отримання документів.",
      ]),
    ],
    {
      checklist: [
        "Паспорт і чинні права",
        "Документи легального перебування",
        "Фото на документ (якщо центр вимагає)",
        "Медкомісія і психотест — підкажемо, де пройти",
      ],
    },
  ),
  "long-course": page(
    "Первинна кваліфікація КОД 95: теорія і практика у Варшаві, фінальний іспит у WORD.",
    [
      section("Кому потрібен довгий курс", [
        "Категорію C видано після 09.09.2009 — це довгий курс. Близько трьох тижнів теорії і практики.",
        "Наприкінці — обов’язковий іспит з комісією в WORD.",
      ]),
    ],
    {
      steps: [
        { title: "Консультація", text: "Визначаємо категорію і фіксуємо вартість у договорі." },
        { title: "Документи", text: "Збираємо і перевіряємо пакет до подання в навчальний центр." },
        { title: "Навчання", text: "Теорія і практика у Варшаві, ми на зв’язку щодня." },
        { title: "Іспит", text: "Супроводжуємо до отримання кваліфікації." },
      ],
    },
  ),
  "code95-lt-short": page(
    "Підбір програми періодичного навчання КОД 95 у Литві та організація запису.",
    [
      section("Як допомагаємо", [
        "Навчальний центр BAZA не проводить литовські програми на своїй майданчику. Консультуємо та організовуємо запис у закладі в Литві.",
      ]),
    ],
  ),
  "code95-lt-long": page("Консультація з первинної кваліфікації в Литві та супровід запису.", [
    section("Як допомагаємо", [
      "Навчання — у литовському центрі, не в BAZA. Розбираємо документи та умови.",
    ]),
  ]),
  "driver-card": page(
    "Консультація з карти водія для тахографа та допомога з заявою через Info-Car.",
    [
      section("Важливо", [
        "BAZA не видає карту. Можливість оформлення визначається індивідуально.",
      ]),
    ],
  ),
  "lt-retrain": page(
    "Перехід з литовського КОД 95 на польський — обмін або короткий курс за вашою ситуацією.",
    [
      section("Два сценарії", [
        "Якщо литовський код діє понад 3 роки — часто достатньо обміну на польський пластик.",
        "Інакше — короткий курс 3–5 днів без іспиту за наявності підстав.",
      ]),
    ],
    {
      checklist: [
        "Литовський код і присяжний переклад",
        "Паспорт, права, фото 35×45",
        "Медкомісія і психотест за потреби",
      ],
    },
  ),
};

export function localizedDetail(locale: Locale, id: ServiceId): ServicePageDetail {
  if (locale === "pl") return pl[id];
  if (locale === "uk") return uk[id];
  const service = SERVICES.find((item) => item.id === id);
  if (!service) {
    return { lead: "", sections: [] };
  }
  return getServicePageDetail(service);
}
