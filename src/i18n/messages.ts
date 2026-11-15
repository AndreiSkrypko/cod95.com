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
  "long-no-exam": {
    title: "Длинный курс без экзамена",
    text: "Подходит не всем — уточним на консультации. Минимум поездок: приезд на 1 день по согласованному графику.",
  },
  "long-online": {
    title: "Длинный курс онлайн",
    text: "Теория дистанционно, экзамен в WORD в Варшаве. Удобно, если сложно быть на площадке каждый день.",
  },
  "code95-lt": {
    title: "Литовский КОД 95",
    text: "Квалификация в Литве, признаётся во всех странах ЕС. Удобно при работе с литовскими перевозчиками.",
  },
  residence: {
    title: "Карта побыту / ВНЖ",
    text: "Оформление вида на жительство: подбор основания, документы, подача и контроль сроков для водителя и семьи.",
  },
  adr: {
    title: "Курс ADR",
    text: "Обучение перевозке опасных грузов: базовый курс, цистерны и полный перечень классов по запросу.",
  },
  invitation: {
    title: "Приглашение от воеводы",
    text: "Официальное приглашение для легальной работы в Польше — основа для рабочей визы типа D и легального въезда.",
  },
  license: {
    title: "Замена прав на польские",
    text: "Обмен водительского удостоверения: проверим пакет, подготовим заявление и проведём через все этапы без переделок.",
  },
  "extra-driving": {
    title: "Дополнительное вождение",
    text: "Индивидуальные занятия на учебной площадке и тягачах DAF/SCANIA — подготовка к работе на реальном автопарке.",
  },
  "lt-retrain": {
    title: "Переквалификация с литовского КОД 95",
    text: "Поможем оформить польский КОД 95 при наличии литовской квалификации — разберём сроки и нужные документы.",
  },
  employment: {
    title: "Трудоустройство",
    text: "Помощь с выходом на работу к проверенным перевозчикам — с опытом и без, после прохождения обучения.",
  },
  company: {
    title: "Транспортная компания в Польше",
    text: "Регистрация фирмы, лицензии и дальнейшая поддержка — чтобы работать на себя легально.",
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
  "long-no-exam": {
    title: "Długi kurs bez egzaminu",
    text: "Nie dla każdego — potwierdzimy na konsultacji. Minimum wizyt: jeden dzień według ustalonego grafiku.",
  },
  "long-online": {
    title: "Długi kurs online",
    text: "Teoria zdalnie, egzamin w WORD w Warszawie. Gdy trudno być na placu każdego dnia.",
  },
  "code95-lt": {
    title: "Litewski KOD 95",
    text: "Kwalifikacja na Litwie, uznawana w całej UE. Wygodne przy pracy z litewskimi przewoźnikami.",
  },
  residence: {
    title: "Karta pobytu",
    text: "Pobyt czasowy: dobór podstawy, dokumenty, złożenie i kontrola terminów dla kierowcy i rodziny.",
  },
  adr: {
    title: "Kurs ADR",
    text: "Szkolenie z przewozu towarów niebezpiecznych: kurs podstawowy, cysterny i klasy na życzenie.",
  },
  invitation: {
    title: "Zaproszenie od wojewody",
    text: "Oficjalne zaproszenie do legalnej pracy w Polsce — podstawa wizy D i legalnego wjazdu.",
  },
  license: {
    title: "Wymiana prawa jazdy",
    text: "Wymiana prawa jazdy na polskie: sprawdzimy komplet, przygotujemy wniosek i przeprowadzimy przez etapy.",
  },
  "extra-driving": {
    title: "Dodatkowa jazda",
    text: "Indywidualne zajęcia na placu i ciągnikach DAF/SCANIA — przygotowanie do pracy na prawdziwej flocie.",
  },
  "lt-retrain": {
    title: "Przekwalifikowanie z litewskiego KOD 95",
    text: "Pomożemy uzyskać polski KOD 95 przy litewskiej kwalifikacji — terminy i dokumenty.",
  },
  employment: {
    title: "Zatrudnienie",
    text: "Wyjście do sprawdzonych przewoźników — z doświadczeniem i bez, po szkoleniu.",
  },
  company: {
    title: "Firma transportowa w Polsce",
    text: "Rejestracja firmy, licencje i dalsze wsparcie — żeby pracować na siebie legalnie.",
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
  "long-no-exam": {
    title: "Довгий курс без іспиту",
    text: "Підходить не всім — уточнимо на консультації. Мінімум поїздок: один день за узгодженим графіком.",
  },
  "long-online": {
    title: "Довгий курс онлайн",
    text: "Теорія дистанційно, іспит у WORD у Варшаві. Зручно, якщо складно бути на майданчику щодня.",
  },
  "code95-lt": {
    title: "Литовський КОД 95",
    text: "Кваліфікація в Литві, визнається в усіх країнах ЄС. Зручно при роботі з литовськими перевізниками.",
  },
  residence: {
    title: "Карта побиту / ВНП",
    text: "Оформлення посвідки на проживання: підстава, документи, подання і контроль строків для водія та родини.",
  },
  adr: {
    title: "Курс ADR",
    text: "Навчання перевезенню небезпечних вантажів: базовий курс, цистерни і класи за запитом.",
  },
  invitation: {
    title: "Запрошення від воєводи",
    text: "Офіційне запрошення для легальної роботи в Польщі — основа робочої візи D і легального в’їзду.",
  },
  license: {
    title: "Заміна прав на польські",
    text: "Обмін посвідчення водія: перевіримо пакет, підготуємо заяву і проведемо через усі етапи.",
  },
  "extra-driving": {
    title: "Додаткове водіння",
    text: "Індивідуальні заняття на майданчику і тягачах DAF/SCANIA — підготовка до роботи на реальному автопарку.",
  },
  "lt-retrain": {
    title: "Перекваліфікація з литовського КОД 95",
    text: "Допоможемо оформити польський КОД 95 за наявності литовської кваліфікації — строки і документи.",
  },
  employment: {
    title: "Працевлаштування",
    text: "Вихід до перевірених перевізників — з досвідом і без, після навчання.",
  },
  company: {
    title: "Транспортна компанія в Польщі",
    text: "Реєстрація фірми, ліцензії і подальша підтримка — щоб працювати на себе легально.",
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
    consult: "Консультация",
    menu: "Меню",
    nav: "Основная навигация",
    catalog: "Открыть каталог",
    consultService: "Получить консультацию по услуге",
    badgeNew: "Новинка",
  },
  hero: {
    eyebrow: "Запись на курс КОД 95",
    line2: "в Польше",
    lead: "Запись на курс Код 95 для работы в Европе. Офисы в Минске и Варшаве.",
    book: "Записаться",
    services: "Все услуги",
    unsure: "Не знаете, какой курс подойдёт?",
    stats: [
      { kicker: "Работаем на рынке", unit: "лет" },
      { kicker: "Обучили уже более", unit: "водителей" },
      { kicker: "Собственных офиса", unit: "Минск и Варшава" },
    ],
    tiles: [
      { label: "Короткий курс", note: "Для категории C, полученной до 2009 года", fact: "3–5 дней · без экзамена" },
      { label: "Длинный курс", note: "Теория, практика и экзамен в WORD", fact: "около 21 дня" },
      { label: "Замена прав", note: "Обмен удостоверения на польские", fact: "пакет и сопровождение" },
      { label: "Трудоустройство", note: "Выход к проверенным перевозчикам", fact: "с опытом и без" },
    ],
  },
  footer: {
    blurb: "Легальное оформление КОД 95 и сопутствующих услуг для водителей-международников. Офисы в Минске и Варшаве.",
    sameTeam: "и DrivePrime — одна команда.",
    discuss: "Обсудить вашу ситуацию",
    sections: "Разделы",
    contact: "Связь",
    rights: "© 2026 DrivePrime / COD95. Все права защищены.",
  },
  contacts: { minsk: "Минск", warsaw: "Варшава", weekdays: "Пн–Пт", saturday: "Сб" },
  dock: { call: "Позвонить", request: "Оставить заявку" },
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
    consent: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных.",
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
    consult: "Konsultacja",
    menu: "Menu",
    nav: "Nawigacja główna",
    catalog: "Otwórz katalog",
    consultService: "Konsultacja w sprawie usługi",
    badgeNew: "Nowość",
  },
  hero: {
    eyebrow: "Zapis na kurs KOD 95",
    line2: "w Polsce",
    lead: "Zapis na kurs Kod 95 do pracy w Europie. Biura w Mińsku i Warszawie.",
    book: "Zapisz się",
    services: "Wszystkie usługi",
    unsure: "Nie wiesz, który kurs wybrać?",
    stats: [
      { kicker: "Działamy na rynku", unit: "lat" },
      { kicker: "Przeszkoliliśmy już ponad", unit: "kierowców" },
      { kicker: "Własne biura", unit: "Mińsk i Warszawa" },
    ],
    tiles: [
      { label: "Krótki kurs", note: "Dla kategorii C uzyskanej przed 2009 rokiem", fact: "3–5 dni · bez egzaminu" },
      { label: "Długi kurs", note: "Teoria, praktyka i egzamin w WORD", fact: "około 21 dni" },
      { label: "Wymiana prawa jazdy", note: "Wymiana dokumentu na polski", fact: "pakiet i wsparcie" },
      { label: "Zatrudnienie", note: "Praca u sprawdzonych przewoźników", fact: "z doświadczeniem i bez" },
    ],
  },
  footer: {
    blurb: "Legalne uzyskanie KOD 95 i usług towarzyszących dla kierowców międzynarodowych. Biura w Mińsku i Warszawie.",
    sameTeam: "i DrivePrime — jeden zespół.",
    discuss: "Omówić Twoją sytuację",
    sections: "Działy",
    contact: "Kontakt",
    rights: "© 2026 DrivePrime / COD95. Wszelkie prawa zastrzeżone.",
  },
  contacts: { minsk: "Mińsk", warsaw: "Warszawa", weekdays: "Pn–Pt", saturday: "Sb" },
  dock: { call: "Zadzwoń", request: "Zostaw zgłoszenie" },
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
    consent: "Klikając przycisk, zgadzasz się na przetwarzanie danych osobowych.",
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
    consult: "Консультація",
    menu: "Меню",
    nav: "Основна навігація",
    catalog: "Відкрити каталог",
    consultService: "Отримати консультацію щодо послуги",
    badgeNew: "Новинка",
  },
  hero: {
    eyebrow: "Запис на курс КОД 95",
    line2: "у Польщі",
    lead: "Запис на курс Код 95 для роботи в Європі. Офіси в Мінську та Варшаві.",
    book: "Записатися",
    services: "Усі послуги",
    unsure: "Не знаєте, який курс підійде?",
    stats: [
      { kicker: "Працюємо на ринку", unit: "років" },
      { kicker: "Навчили вже понад", unit: "водіїв" },
      { kicker: "Власні офіси", unit: "Мінськ і Варшава" },
    ],
    tiles: [
      { label: "Короткий курс", note: "Для категорії C, отриманої до 2009 року", fact: "3–5 днів · без іспиту" },
      { label: "Довгий курс", note: "Теорія, практика та іспит у WORD", fact: "близько 21 дня" },
      { label: "Заміна прав", note: "Обмін посвідчення на польські", fact: "пакет і супровід" },
      { label: "Працевлаштування", note: "Вихід до перевірених перевізників", fact: "з досвідом і без" },
    ],
  },
  footer: {
    blurb: "Легальне оформлення КОД 95 і супутніх послуг для водіїв-міжнародників. Офіси в Мінську та Варшаві.",
    sameTeam: "і DrivePrime — одна команда.",
    discuss: "Обговорити вашу ситуацію",
    sections: "Розділи",
    contact: "Зв’язок",
    rights: "© 2026 DrivePrime / COD95. Усі права захищено.",
  },
  contacts: { minsk: "Мінськ", warsaw: "Варшава", weekdays: "Пн–Пт", saturday: "Сб" },
  dock: { call: "Зателефонувати", request: "Залишити заявку" },
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
    consent: "Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.",
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
  { to: "/statyi", key: "articles" },
  { to: "/uslugi", key: "services", mega: true },
  { to: "/kontakty", key: "contacts" },
] as const;
