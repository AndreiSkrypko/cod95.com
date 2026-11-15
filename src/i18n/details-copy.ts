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
        { title: "Szkolenie", text: "Teoria i praktyka w Warszawie, jesteśmy w kontakcie codziennie." },
        { title: "Egzamin", text: "Prowadzimy do odbioru kwalifikacji." },
      ],
    },
  ),
  "long-no-exam": page("Alternatywny format długiego kursu — prawo do udziału sprawdzamy na konsultacji.", [
    section("Jak to działa", [
      "Pasuje ograniczonej grupie kierowców. Menedżer sprawdzi sytuację i powie, czy format bez egzaminu jest dostępny.",
      "Po uzgodnieniu — minimum wizyt: można zmieścić się w jednym przyjeździe według grafiku.",
    ]),
  ]),
  "long-online": page("Teoria online, egzamin w WORD w Warszawie — gdy nie można codziennie być w sali.", [
    section("Format szkolenia", [
      "Teoria zdalna ze wsparciem opiekuna. Na egzamin i część procedur potrzebny jest przyjazd do Polski.",
      "Grafik uzgadniamy wcześniej, żeby pasował do pracy i logistyki.",
    ]),
  ]),
  "code95-lt": page("Litewska kwalifikacja uznawana w całej UE — wygodna przy pracy z litewskimi przewoźnikami.", [
    section("Kiedy wybierają Litwę", [
      "Gdy bliższa jest geografia albo grafik grup na Litwie. Pomożemy porównać z polskim KOD 95.",
    ]),
  ]),
  residence: page("Karta pobytu w Polsce — dobór podstawy, dokumenty i kontrola terminów.", [
    section("Wsparcie", ["Rozkładamy podstawę pobytu, przygotowujemy pakiet, składamy i śledzimy status. Pracujemy z kierowcami i rodzinami."]),
  ]),
  adr: page("ADR — dodatkowa kwalifikacja do przewozu towarów niebezpiecznych w UE.", [
    section("Warianty kursu", ["Kurs podstawowy, cysterny i rozszerzone klasy — na życzenie i pod specjalizację."]),
  ]),
  invitation: page("Zaproszenie wojewódzkie — legalna podstawa pracy i wizy typu D.", [
    section("Co robimy", [
      "Sprawdzamy dokumenty, przygotowujemy wniosek przez partnerów i prowadzimy do wyniku. Typowy termin — od 2 do 3 miesięcy.",
      "Po zaproszeniu pomożemy z KOD 95 i zatrudnieniem.",
    ]),
  ]),
  license: page("Wymiana zagranicznego prawa jazdy na polskie, ze wsparciem na każdym kroku.", [
    section("Etapy", ["Sprawdzenie kategorii, tłumaczenia, złożenie w urzędzie. Zmniejszamy ryzyko odmowy przez błędy w pakiecie."]),
  ]),
  "extra-driving": page("Dodatkowe godziny na placu i ciągnikach DAF/SCANIA — pewność przed wyjazdem w trasę.", [
    section("Dla kogo", ["Gdy po kursie potrzebna jest praktyka na nowoczesnej flocie albo przed zmianą pracodawcy."]),
  ]),
  "lt-retrain": page("Przejście z litewskiego KOD 95 na polski — wymiana albo krótki kurs, zależnie od sytuacji.", [
    section("Dwa scenariusze", [
      "Jeśli litewski kod działa dłużej niż 3 lata — często wystarczy wymiana na polski plastik.",
      "W przeciwnym razie — krótki kurs 3–5 dni bez egzaminu, jeśli są podstawy.",
    ]),
  ], {
    checklist: ["Litewski kod i tłumaczenie przysięgłe", "Paszport, prawo jazdy, zdjęcie 35×45", "Badania i test psychologiczny, jeśli potrzebne"],
  }),
  employment: page("Zatrudnienie u sprawdzonych przewoźników w UE — z doświadczeniem i bez, po szkoleniu.", [
    section("Jak to działa", ["Konsultacja o wakatach, przygotowanie do rozmowy, kontakt z partnerskimi flotami."]),
  ]),
  company: page("Otwarcie i wsparcie firmy transportowej w Polsce — od rejestracji do licencji.", [
    section("Pod klucz", ["Rejestracja firmy, licencje, konsultacje przy pierwszych trasach. Dla kierowców, którzy chcą pracować na siebie."]),
  ]),
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
  "long-course": page("Первинна кваліфікація КОД 95: теорія і практика у Варшаві, фінальний іспит у WORD.", [
    section("Кому потрібен довгий курс", [
      "Категорію C видано після 09.09.2009 — це довгий курс. Близько трьох тижнів теорії і практики.",
      "Наприкінці — обов’язковий іспит з комісією в WORD.",
    ]),
  ], {
    steps: [
      { title: "Консультація", text: "Визначаємо категорію і фіксуємо вартість у договорі." },
      { title: "Документи", text: "Збираємо і перевіряємо пакет до подання в навчальний центр." },
      { title: "Навчання", text: "Теорія і практика у Варшаві, ми на зв’язку щодня." },
      { title: "Іспит", text: "Супроводжуємо до отримання кваліфікації." },
    ],
  }),
  "long-no-exam": page("Альтернативний формат довгого курсу — право на участь уточнюємо на консультації.", [
    section("Як це працює", [
      "Підходить обмеженому колу водіїв. Менеджер перевірить ситуацію і скаже, чи доступний формат без іспиту.",
      "За погодження — мінімум візитів: можна вкластися в один приїзд за графіком.",
    ]),
  ]),
  "long-online": page("Теорія онлайн, іспит у WORD у Варшаві — для тих, хто не може щодня бути в класі.", [
    section("Формат навчання", [
      "Дистанційна теорія з підтримкою куратора. Для іспиту і частини процедур потрібен приїзд до Польщі.",
      "Розклад узгодимо заздалегідь, щоб збігся з роботою і логістикою.",
    ]),
  ]),
  "code95-lt": page("Литовська кваліфікація, визнана в усьому ЄС — зручний шлях при роботі з литовськими перевізниками.", [
    section("Коли обирають Литву", ["Якщо ближча географія або графік наборів у Литві. Допоможемо порівняти з польським КОД 95."]),
  ]),
  residence: page("Карта побиту і ВНП у Польщі — підбір підстави, документи і контроль строків.", [
    section("Супровід", ["Розбираємо підставу для ВНП, готуємо пакет, подаємо і відстежуємо статус. Працюємо з водіями та їхніми родинами."]),
  ]),
  adr: page("ADR — додаткова кваліфікація для перевезення небезпечних вантажів у ЄС.", [
    section("Варіанти курсу", ["Базовий курс, навчання з цистерн і розширені класи — за запитом і під спеціалізацію."]),
  ]),
  invitation: page("Запрошення воєводи — легальна основа для роботи і візи типу D.", [
    section("Що робимо", [
      "Перевіряємо документи, готуємо заявку через партнерів, супроводжуємо до результату. Типовий строк — від 2 до 3 місяців.",
      "Після запрошення допоможемо з КОД 95 і працевлаштуванням.",
    ]),
  ]),
  license: page("Обмін іноземних прав на польське посвідчення із супроводом на кожному кроці.", [
    section("Етапи", ["Перевірка категорій, переклади, подання в ужонд. Зменшуємо ризик відмови через помилки в пакеті."]),
  ]),
  "extra-driving": page("Додаткові години на майданчику і тягачах DAF/SCANIA — впевненість перед виходом у рейс.", [
    section("Для кого", ["Якщо після курсу потрібна практика на сучасному автопарку або перед зміною роботодавця."]),
  ]),
  "lt-retrain": page("Перехід з литовського КОД 95 на польський — обмін або короткий курс за вашою ситуацією.", [
    section("Два сценарії", [
      "Якщо литовський код діє понад 3 роки — часто достатньо обміну на польський пластик.",
      "Інакше — короткий курс 3–5 днів без іспиту за наявності підстав.",
    ]),
  ], {
    checklist: ["Литовський код і присяжний переклад", "Паспорт, права, фото 35×45", "Медкомісія і психотест за потреби"],
  }),
  employment: page("Працевлаштування до перевірених перевізників в ЄС — з досвідом і без, після навчання.", [
    section("Як влаштовано", ["Консультація щодо вакансій, підготовка до співбесіди, зв’язок із партнерськими автопарками."]),
  ]),
  company: page("Відкриття і супровід транспортної компанії в Польщі — від реєстрації до ліцензій.", [
    section("Під ключ", ["Реєстрація юрособи, ліцензії, консультації щодо перших рейсів. Для водіїв, які хочуть працювати на себе."]),
  ]),
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
