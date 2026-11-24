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
  bazaAdvantages: {
    title: "Преимущества учебного центра",
    cards: [
      {
        shortTitle: "Учебный центр",
        title: "Учебный центр в реестре",
        text: "Профессиональное обучение Code 95 в Польше сами проводим — вы обучаетесь у официального центра.",
      },
      {
        shortTitle: "Своя учебная база",
        title: "Собственная учебная база",
        text: "Гараж, учебный класс, площадка и симулятор вождения — всё на нашей территории.",
      },
      {
        shortTitle: "Минск и Варшава",
        title: "Минск и Варшава",
        text: "Консультация и оформление документов в Минске, обучение — в Варшаве.",
      },
    ],
  },
  hero: {
    programsTitle: "Программы",
    programsLead: "Четыре курса и подбор",
    eyebrow: "Учебный центр в Польше",
    headline: "КОД 95",
    subtitle: "Профессиональная подготовка водителей",
    line2: "в Польше",
    lead: "Профессиональное обучение Code 95 в нашем учебном центре в Польше. Короткие и длинные программы. Подбор обучения с учётом вашей квалификации.",
    book: "Записаться",
    services: "Все услуги",
    unsure: "Не знаете, какой курс вам подходит?",
    coursePick: "Подобрать курс за 2 минуты",
    stats: [
      { kicker: "Работаем на рынке", unit: "лет" },
      { kicker: "Обучили уже более", unit: "водителей" },
      { kicker: "Собственных офиса", unit: "Минск и Варшава" },
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
    blurb: "BAZA — академия профессиональных водителей. Code 95 в Польше и Литве. Консультации в Минске, обучение в Варшаве.",
    sameTeam: "и DrivePrime / Taxocard — одна команда.",
    discuss: "Обсудить вашу ситуацию",
    sections: "Разделы",
    contact: "Связь",
    rights: "© 2026 BAZA. Все права защищены.",
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
    submitting: "Отправляем…",
    consent: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных.",
    errSubmit:
      "Не удалось отправить заявку. Попробуйте ещё раз, откройте форму Bitrix24 ниже или позвоните нам.",
    bitrixConfirm:
      "Подтвердите заявку в форме Bitrix24 (данные скопированы в буфер). Услуга:",
    bitrixFallback: "Заполните открывшуюся форму Bitrix24 и нажмите «Отправить заявку».",
    bitrixAlt: "Не получилось? Открыть форму Bitrix24 (как на taxocard.by)",
    bitrixAltUnavailable:
      "Форма Bitrix24 сейчас недоступна. Отключите VPN или позвоните нам.",
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
  bazaAdvantages: {
    title: "Zalety ośrodka szkoleniowego",
    cards: [
      {
        shortTitle: "Ośrodek szkoleniowy",
        title: "Ośrodek w rejestrze",
        text: "Profesjonalne szkolenie Code 95 w Polsce prowadzimy sami — uczysz się w oficjalnym centrum.",
      },
      {
        shortTitle: "Własna baza",
        title: "Własna baza szkoleniowa",
        text: "Garaż, sala, plac i symulator jazdy — wszystko na naszym terenie.",
      },
      {
        shortTitle: "Mińsk i Warszawa",
        title: "Mińsk i Warszawa",
        text: "Konsultacja i dokumenty w Mińsku, szkolenie — w Warszawie.",
      },
    ],
  },
  hero: {
    programsTitle: "Programy",
    programsLead: "Cztery kursy i dobór",
    eyebrow: "Ośrodek szkoleniowy w Polsce",
    headline: "KOD 95",
    subtitle: "Profesjonalne szkolenie kierowców",
    line2: "w Polsce",
    lead: "Profesjonalne szkolenie Code 95 w naszym centrum w Polsce. Krótkie i długie programy. Dobór kursu pod Twoją kwalifikację.",
    book: "Zapisz się",
    services: "Wszystkie usługi",
    unsure: "Nie wiesz, który kurs Ci pasuje?",
    coursePick: "Dobierz kurs w 2 minuty",
    stats: [
      { kicker: "Działamy na rynku", unit: "lat" },
      { kicker: "Przeszkoliliśmy już ponad", unit: "kierowców" },
      { kicker: "Własne biura", unit: "Mińsk i Warszawa" },
    ],
    tiles: [
      { label: "Polski krótki KOD 95", note: "Szkolenie okresowe", fact: "3–5 dni" },
      { label: "Polski długi KOD 95", note: "Kwalifikacja wstępna", fact: "≈21 dni" },
      { label: "Litewski krótki KOD 95", note: "Szkolenie okresowe", fact: "na Litwie" },
      { label: "Litewski długi KOD 95", note: "Kwalifikacja wstępna", fact: "przekwalifikowanie" },
    ],
  },
  footer: {
    blurb: "BAZA — akademia kierowców zawodowych. Code 95 w Polsce i na Litwie. Mińsk i Warszawa.",
    sameTeam: "i DrivePrime / Taxocard — jeden zespół.",
    discuss: "Omówić Twoją sytuację",
    sections: "Działy",
    contact: "Kontakt",
    rights: "© 2026 BAZA. Wszelkie prawa zastrzeżone.",
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
    submitting: "Wysyłanie…",
    consent: "Klikając przycisk, zgadzasz się na przetwarzanie danych osobowych.",
    errSubmit:
      "Nie udało się wysłać zgłoszenia. Spróbuj ponownie, otwórz formularz Bitrix24 lub zadzwoń.",
    bitrixConfirm:
      "Potwierdź zgłoszenie w formularzu Bitrix24 (dane w schowku). Usługa:",
    bitrixFallback: "Uzupełnij formularz Bitrix24 i kliknij «Wyślij zgłoszenie».",
    bitrixAlt: "Nie udało się? Otwórz formularz Bitrix24",
    bitrixAltUnavailable:
      "Formularz Bitrix24 jest niedostępny. Wyłącz VPN lub zadzwoń.",
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
  bazaAdvantages: {
    title: "Переваги навчального центру",
    cards: [
      {
        shortTitle: "Навчальний центр",
        title: "Центр у реєстрі",
        text: "Професійне навчання Code 95 у Польщі проводимо самі — ви навчаєтесь у офіційному центрі.",
      },
      {
        shortTitle: "Своя база",
        title: "Власна навчальна база",
        text: "Гараж, клас, майданчик і симулятор — усе на нашій території.",
      },
      {
        shortTitle: "Мінськ і Варшава",
        title: "Мінськ і Варшава",
        text: "Консультація в Мінську, навчання — у Варшаві.",
      },
    ],
  },
  hero: {
    programsTitle: "Програми",
    programsLead: "Чотири курси та підбір",
    eyebrow: "Навчальний центр у Польщі",
    headline: "КОД 95",
    subtitle: "Професійна підготовка водіїв",
    line2: "у Польщі",
    lead: "Професійне навчання Code 95 у нашому центрі в Польщі. Короткі та довгі програми. Підбір навчання з урахуванням вашої кваліфікації.",
    book: "Записатися",
    services: "Усі послуги",
    unsure: "Не знаєте, який курс вам підходить?",
    coursePick: "Підібрати курс за 2 хвилини",
    stats: [
      { kicker: "Працюємо на ринку", unit: "років" },
      { kicker: "Навчили вже понад", unit: "водіїв" },
      { kicker: "Власні офіси", unit: "Мінськ і Варшава" },
    ],
    tiles: [
      { label: "Польський короткий КОД 95", note: "Періодичне навчання", fact: "3–5 днів" },
      { label: "Польський довгий КОД 95", note: "Первинна кваліфікація", fact: "≈21 день" },
      { label: "Литовський короткий КОД 95", note: "Періодичне навчання", fact: "у Литві" },
      { label: "Литовський довгий КОД 95", note: "Первинна кваліфікація", fact: "перекваліфікація" },
    ],
  },
  footer: {
    blurb: "BAZA — академія професійних водіїв. Code 95 у Польщі та Литві. Мінськ і Варшава.",
    sameTeam: "і DrivePrime / Taxocard — одна команда.",
    discuss: "Обговорити вашу ситуацію",
    sections: "Розділи",
    contact: "Зв’язок",
    rights: "© 2026 BAZA. Усі права захищено.",
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
    submitting: "Надсилаємо…",
    consent: "Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.",
    errSubmit:
      "Не вдалося надіслати заявку. Спробуйте ще раз, відкрийте форму Bitrix24 або зателефонуйте.",
    bitrixConfirm:
      "Підтвердіть заявку у формі Bitrix24 (дані в буфері). Послуга:",
    bitrixFallback: "Заповніть форму Bitrix24 і натисніть «Надіслати заявку».",
    bitrixAlt: "Не вийшло? Відкрити форму Bitrix24",
    bitrixAltUnavailable:
      "Форма Bitrix24 зараз недоступна. Вимкніть VPN або зателефонуйте.",
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
