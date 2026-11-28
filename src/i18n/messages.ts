import type { ServiceId } from "@/content/landing";

type ServiceCopy = Record<ServiceId, { title: string; text: string }>;

const ruServices: ServiceCopy = {
  "short-course": {
    title: "Короткий курс обучения",
    text: "Для водителей, у которых категория «С» получена до 09.09.2009. 3–5 рабочих дней, экзамен сдавать не нужно.",
  },
  "long-course": {
    title: "Длинный курс обучения",
    text: "Первичная квалификация КОД 95: теория и практика, экзамен в WORD. Сопровождаем на русском языке.",
  },
  "code95-lt-short": {
    title: "Литовский короткий КОД 95",
    text: "Подбор программы периодического обучения в Литве и организация записи в соответствующий учебный центр.",
  },
  "code95-lt-long": {
    title: "Литовский длинный КОД 95",
    text: "Консультация по первоначальной квалификации в Литве и сопровождение записи в учебную организацию.",
  },
  "driver-card": {
    title: "Карта водителя для тахографа",
    text: "Консультация и помощь с подготовкой заявления через официальный сервис Info-Car (PWPW).",
  },
  "lt-retrain": {
    title: "Литовский КОД 95 → Польский КОД 95",
    text: "Консультация и сопровождение: документы, подача заявления, условия определяются индивидуально.",
  },
};

const plServices: ServiceCopy = {
  "short-course": {
    title: "Krótki kurs",
    text: "Dla kierowców z kategorią C uzyskaną przed 09.09.2009. 3–5 dni roboczych, bez egzaminu.",
  },
  "long-course": {
    title: "Długi kurs",
    text: "Kwalifikacja wstępna KOD 95: teoria i praktyka, egzamin w WORD. Towarzyszymy po rosyjsku.",
  },
  "code95-lt-short": {
    title: "Litewski krótki KOD 95",
    text: "Dobór programu szkolenia okresowego na Litwie i organizacja zapisu w ośrodku szkoleniowym.",
  },
  "code95-lt-long": {
    title: "Litewski długi KOD 95",
    text: "Konsultacja kwalifikacji wstępnej na Litwie i wsparcie zapisu w placówce szkoleniowej.",
  },
  "driver-card": {
    title: "Karta kierowcy do tachografu",
    text: "Konsultacja i pomoc w przygotowaniu wniosku przez serwis Info-Car (PWPW).",
  },
  "lt-retrain": {
    title: "Litewski KOD 95 → Polski KOD 95",
    text: "Konsultacja i wsparcie: dokumenty, złożenie wniosku — warunki indywidualnie.",
  },
};

const ukServices: ServiceCopy = {
  "short-course": {
    title: "Короткий курс",
    text: "Для водіїв, у яких категорію C отримано до 09.09.2009. 3–5 робочих днів, іспит складати не потрібно.",
  },
  "long-course": {
    title: "Довгий курс",
    text: "Первинна кваліфікація КОД 95: теорія і практика, іспит у WORD. Супроводжуємо російською.",
  },
  "code95-lt-short": {
    title: "Литовський короткий КОД 95",
    text: "Підбір програми періодичного навчання в Литві та організація запису в навчальний центр.",
  },
  "code95-lt-long": {
    title: "Литовський довгий КОД 95",
    text: "Консультація з первинної кваліфікації в Литві та супровід запису в навчальну організацію.",
  },
  "driver-card": {
    title: "Карта водія для тахографа",
    text: "Консультація та допомога з підготовкою заяви через сервіс Info-Car (PWPW).",
  },
  "lt-retrain": {
    title: "Литовський КОД 95 → Польський КОД 95",
    text: "Консультація та супровід: документи, подання заяви — умови визначаються індивідуально.",
  },
};

const ru = {
  langLabel: "Язык",
  nav: {
    zapis: "Регистрация на курс",
    about: "О нас",
    info: "Информация",
    articles: "Статьи",
    services: "Наши услуги",
    contacts: "Контакты",
  },
  header: {
    consult: "Задать вопрос",
    menu: "Меню",
    nav: "Основная навигация",
    catalog: "Открыть каталог",
    consultService: "Получить консультацию по услуге",
    badgeNew: "Новинка",
  },
  bazaAdvantages: {
    title: "Преимущества учебного центра",
    cards: [
      {
        shortTitle: "Учебный центр",
        title: "Учебный центр в реестре",
        text: "Профессиональное обучение КОД 95 в Польше сами проводим — вы обучаетесь у официального центра.",
      },
      {
        shortTitle: "Своя учебная база",
        title: "Собственная учебная база",
        text: "Гараж, учебный класс, площадка и симулятор вождения — всё на нашей территории.",
      },
      {
        shortTitle: "Минск",
        title: "Офис в Минске",
        text: "Консультация и документы перед поездкой. Обучение — на базе в Варшаве.",
      },
    ],
  },
  hero: {
    programsTitle: "Программы",
    programsLead: "Четыре курса и подбор",
    country: { pl: "Польша", lt: "Литва" },
    headline: "КОД 95",
    subtitle: "Профессиональная подготовка водителей",
    line2: "в Польше",
    lead: "Обучение КОД 95 в Варшаве. Консультация и запись — в офисе в Минске. Короткие и длинные программы с подбором под вашу квалификацию.",
    book: "Подобрать курс",
    services: "Все услуги",
    unsure: "Не знаете, какой курс вам подходит?",
    coursePick: "Подобрать курс за 2 минуты",
    stats: [
      { kicker: "Работаем на рынке", unit: "лет" },
      { kicker: "Обучили уже более", unit: "водителей" },
      { kicker: "Учебная база", unit: "Варшава" },
    ],
    tiles: [
      {
        label: "Польский короткий КОД 95",
        note: "Периодическое обучение",
        fact: "3–5 дней",
      },
      {
        label: "Польский длинный КОД 95",
        note: "Первичная квалификация",
        fact: "≈21 день",
      },
      {
        label: "Литовский короткий КОД 95",
        note: "Периодическое обучение",
        fact: "в Литве",
      },
      {
        label: "Литовский длинный КОД 95",
        note: "Первичная квалификация",
        fact: "переквалификация",
      },
    ],
  },
  footer: {
    blurb:
      "BAZA — академия профессиональных водителей. Офис в Минске, обучение КОД 95 в Варшаве, поддержка на каждом этапе.",
    discuss: "Обсудить вашу ситуацию",
    sections: "Разделы",
    contact: "Связь",
    rights: "© 2026 BAZA. Все права защищены.",
  },
  contacts: { minsk: "Минск", warsaw: "Варшава", weekdays: "Пн–Пт", saturday: "Сб" },
  dock: { call: "Позвонить", request: "Задать вопрос" },
  booking: {
    title: "Запись на консультацию",
    description: "Оставьте имя и телефон — перезвоним в рабочее время.",
  },
  form: {
    title: "Заявка на консультацию",
    name: "Имя",
    namePh: "Как к вам обращаться",
    phone: "Телефон",
    phonePh: "+375 29 000-00-00",
    service: "Услуга",
    servicePh: "Выберите услугу",
    comment: "Комментарий",
    commentPh: "Расскажите о вашей ситуации",
    submit: "Отправить заявку",
    submitting: "Отправляем…",
    consent: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных.",
    errSubmit:
      "Не удалось отправить заявку. Попробуйте ещё раз, откройте форму Bitrix24 ниже или позвоните нам.",
    bitrixConfirm: "Подтвердите заявку в форме Bitrix24 (данные скопированы в буфер). Услуга:",
    bitrixFallback: "Заполните открывшуюся форму Bitrix24 и нажмите «Отправить заявку».",
    bitrixAlt: "Не получилось? Открыть форму Bitrix24",
    bitrixAltUnavailable: "Форма Bitrix24 сейчас недоступна. Отключите VPN или позвоните нам.",
    errName: "Укажите имя",
    errNameLong: "Слишком длинное имя",
    errPhone: "Укажите телефон в международном формате",
    errService: "Выберите услугу",
    errComment: "Не более 1000 символов",
  },
  services: ruServices,
};

export type Messages = typeof ru;

const pl: Messages = {
  langLabel: "Język",
  nav: {
    zapis: "Zapis na kurs",
    about: "O nas",
    info: "Informacje",
    articles: "Artykuły",
    services: "Nasze usługi",
    contacts: "Kontakt",
  },
  header: {
    consult: "Zadaj pytanie",
    menu: "Menu",
    nav: "Nawigacja główna",
    catalog: "Otwórz katalog",
    consultService: "Konsultacja w sprawie usługi",
    badgeNew: "Nowość",
  },
  bazaAdvantages: {
    title: "Zalety ośrodka szkoleniowego",
    cards: [
      {
        shortTitle: "Ośrodek szkoleniowy",
        title: "Ośrodek w rejestrze",
        text: "Profesjonalne szkolenie kod 95 w Polsce prowadzimy sami — uczysz się w oficjalnym centrum.",
      },
      {
        shortTitle: "Własna baza",
        title: "Własna baza szkoleniowa",
        text: "Garaż, sala, plac i symulator jazdy — wszystko na naszym terenie.",
      },
      {
        shortTitle: "Mińsk",
        title: "Biuro w Mińsku",
        text: "Konsultacja i dokumenty przed wyjazdem. Szkolenie — baza w Warszawie.",
      },
    ],
  },
  hero: {
    programsTitle: "Programy",
    programsLead: "Cztery kursy i dobór",
    country: { pl: "Polska", lt: "Litwa" },
    headline: "KOD 95",
    subtitle: "Profesjonalne szkolenie kierowców",
    line2: "w Polsce",
    lead: "Szkolenie kod 95 w Warszawie. Konsultacja i zapis — w biurze w Mińsku. Krótkie i długie programy dopasowane do kwalifikacji.",
    book: "Dobierz kurs",
    services: "Wszystkie usługi",
    unsure: "Nie wiesz, który kurs Ci pasuje?",
    coursePick: "Dobierz kurs w 2 minuty",
    stats: [
      { kicker: "Działamy na rynku", unit: "lat" },
      { kicker: "Przeszkoliliśmy już ponad", unit: "kierowców" },
      { kicker: "Baza szkoleniowa", unit: "Warszawa" },
    ],
    tiles: [
      { label: "Polski krótki KOD 95", note: "Szkolenie okresowe", fact: "3–5 dni" },
      { label: "Polski długi KOD 95", note: "Kwalifikacja wstępna", fact: "≈21 dni" },
      { label: "Litewski krótki KOD 95", note: "Szkolenie okresowe", fact: "na Litwie" },
      { label: "Litewski długi KOD 95", note: "Kwalifikacja wstępna", fact: "przekwalifikowanie" },
    ],
  },
  footer: {
    blurb:
      "BAZA — akademia kierowców zawodowych. Biuro w Mińsku, szkolenie kod 95 w Warszawie, wsparcie na każdym etapie.",
    discuss: "Omówić Twoją sytuację",
    sections: "Działy",
    contact: "Kontakt",
    rights: "© 2026 BAZA. Wszelkie prawa zastrzeżone.",
  },
  contacts: { minsk: "Mińsk", warsaw: "Warszawa", weekdays: "Pn–Pt", saturday: "Sb" },
  dock: { call: "Zadzwoń", request: "Zadaj pytanie" },
  booking: {
    title: "Zapis na konsultację",
    description: "Zostaw imię i telefon — oddzwonimy w godzinach pracy.",
  },
  form: {
    title: "Zgłoszenie na konsultację",
    name: "Imię",
    namePh: "Jak się do Ciebie zwracać",
    phone: "Telefon",
    phonePh: "+48 78 000-00-00",
    service: "Usługa",
    servicePh: "Wybierz usługę",
    comment: "Komentarz",
    commentPh: "Opisz swoją sytuację",
    submit: "Wyślij zgłoszenie",
    submitting: "Wysyłanie…",
    consent: "Klikając przycisk, zgadzasz się na przetwarzanie danych osobowych.",
    errSubmit:
      "Nie udało się wysłać zgłoszenia. Spróbuj ponownie, otwórz formularz Bitrix24 lub zadzwoń.",
    bitrixConfirm: "Potwierdź zgłoszenie w formularzu Bitrix24 (dane w schowku). Usługa:",
    bitrixFallback: "Uzupełnij formularz Bitrix24 i kliknij «Wyślij zgłoszenie».",
    bitrixAlt: "Nie udało się? Otwórz formularz Bitrix24",
    bitrixAltUnavailable: "Formularz Bitrix24 jest niedostępny. Wyłącz VPN lub zadzwoń.",
    errName: "Podaj imię",
    errNameLong: "Zbyt długie imię",
    errPhone: "Podaj telefon w formacie międzynarodowym",
    errService: "Wybierz usługę",
    errComment: "Nie więcej niż 1000 znaków",
  },
  services: plServices,
};

const uk: Messages = {
  langLabel: "Мова",
  nav: {
    zapis: "Запис на курс",
    about: "Про нас",
    info: "Інформація",
    articles: "Статті",
    services: "Наші послуги",
    contacts: "Контакти",
  },
  header: {
    consult: "Задати питання",
    menu: "Меню",
    nav: "Основна навігація",
    catalog: "Відкрити каталог",
    consultService: "Отримати консультацію щодо послуги",
    badgeNew: "Новинка",
  },
  bazaAdvantages: {
    title: "Переваги навчального центру",
    cards: [
      {
        shortTitle: "Навчальний центр",
        title: "Центр у реєстрі",
        text: "Професійне навчання КОД 95 у Польщі проводимо самі — ви навчаєтесь у офіційному центрі.",
      },
      {
        shortTitle: "Своя база",
        title: "Власна навчальна база",
        text: "Гараж, клас, майданчик і симулятор — усе на нашій території.",
      },
      {
        shortTitle: "Мінськ",
        title: "Офіс у Мінську",
        text: "Консультація та документи перед поїздкою. Навчання — база у Варшаві.",
      },
    ],
  },
  hero: {
    programsTitle: "Програми",
    programsLead: "Чотири курси та підбір",
    country: { pl: "Польща", lt: "Литва" },
    headline: "КОД 95",
    subtitle: "Професійна підготовка водіїв",
    line2: "у Польщі",
    lead: "Навчання КОД 95 у Варшаві. Консультація та запис — в офісі в Мінську. Короткі та довгі програми під вашу кваліфікацію.",
    book: "Підібрати курс",
    services: "Усі послуги",
    unsure: "Не знаєте, який курс вам підходить?",
    coursePick: "Підібрати курс за 2 хвилини",
    stats: [
      { kicker: "Працюємо на ринку", unit: "років" },
      { kicker: "Навчили вже понад", unit: "водіїв" },
      { kicker: "Навчальна база", unit: "Варшава" },
    ],
    tiles: [
      { label: "Польський короткий КОД 95", note: "Періодичне навчання", fact: "3–5 днів" },
      { label: "Польський довгий КОД 95", note: "Первинна кваліфікація", fact: "≈21 день" },
      { label: "Литовський короткий КОД 95", note: "Періодичне навчання", fact: "у Литві" },
      {
        label: "Литовський довгий КОД 95",
        note: "Первинна кваліфікація",
        fact: "перекваліфікація",
      },
    ],
  },
  footer: {
    blurb:
      "BAZA — академія професійних водіїв. Офіс у Мінську, навчання КОД 95 у Варшаві, підтримка на кожному етапі.",
    discuss: "Обговорити вашу ситуацію",
    sections: "Розділи",
    contact: "Зв’язок",
    rights: "© 2026 BAZA. Усі права захищено.",
  },
  contacts: { minsk: "Мінськ", warsaw: "Варшава", weekdays: "Пн–Пт", saturday: "Сб" },
  dock: { call: "Зателефонувати", request: "Задати питання" },
  booking: {
    title: "Запис на консультацію",
    description: "Залиште ім’я і телефон — передзвонимо в робочий час.",
  },
  form: {
    title: "Заявка на консультацію",
    name: "Ім’я",
    namePh: "Як до вас звертатися",
    phone: "Телефон",
    phonePh: "+375 29 000-00-00",
    service: "Послуга",
    servicePh: "Оберіть послугу",
    comment: "Коментар",
    commentPh: "Розкажіть про вашу ситуацію",
    submit: "Надіслати заявку",
    submitting: "Надсилаємо…",
    consent: "Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.",
    errSubmit:
      "Не вдалося надіслати заявку. Спробуйте ще раз, відкрийте форму Bitrix24 або зателефонуйте.",
    bitrixConfirm: "Підтвердіть заявку у формі Bitrix24 (дані в буфері). Послуга:",
    bitrixFallback: "Заповніть форму Bitrix24 і натисніть «Надіслати заявку».",
    bitrixAlt: "Не вийшло? Відкрити форму Bitrix24",
    bitrixAltUnavailable: "Форма Bitrix24 зараз недоступна. Вимкніть VPN або зателефонуйте.",
    errName: "Вкажіть ім’я",
    errNameLong: "Надто довге ім’я",
    errPhone: "Вкажіть телефон у міжнародному форматі",
    errService: "Оберіть послугу",
    errComment: "Не більше 1000 символів",
  },
  services: ukServices,
};

export type Locale = "ru" | "pl" | "uk";

export const messages: Record<Locale, Messages> = { ru, pl, uk };

export const NAV_LINKS = [
  { to: "/zapis", key: "zapis" },
  { to: "/o-nas", key: "about" },
  { to: "/informaciya", key: "info" },
  { to: "/uslugi", key: "services" },
  { to: "/statyi", key: "articles" },
  { to: "/kontakty", key: "contacts" },
] as const;
