import type { Locale } from "./messages";

const ru = {
  story: {
    eyebrow: "О ШКОЛЕ BAZA",
    title: "Больше, чем обучение КОД 95",
    p1: "BAZA — академия профессиональных водителей в Польше, созданная командой, которая знает международные перевозки изнутри.",
    p2: "Мы самостоятельно проводим польские программы КОД 95 в Варшаве. Консультация, документы и запись — в офисе в Минске.",
    p3: "Здесь можно получить консультацию, пройти обучение и узнать, как устроена работа на международных маршрутах.",
    accent: "BAZA — место, где водитель чувствует себя как дома.",
    cta: "Познакомиться со школой",
    imageAlt: "Занятие в учебном центре BAZA",
  },
  offers: {
    title: "Услуги",
    lead: "Курс, работа в Европе и документы для легального пребывания.",
    variants: "Возможные варианты обучения:",
    reply: "Ответ в рабочее время",
    all: "Все услуги →",
    items: {
      employment: {
        title: "Работа водителем в Европе",
        text: "Официальное трудоустройство по территории ЕС после обучения.",
        points: ["Проверенные перевозчики-партнёры", "Помощь с опытом и без опыта"],
        cta: "Найти работу",
        alt: "Водитель у тягача на площадке в сумерках",
      },
      "short-course": {
        title: "Короткий курс обучения",
        text: "Для водителей, у которых категория «С» получена до 09.09.2009.",
        points: ["3–5 рабочих дней", "Экзамен сдавать не нужно"],
        cta: "Узнать стоимость",
        alt: "Учебный класс с видом на город",
      },
      "long-course": {
        title: "Длинный курс обучения",
        text: "Для водителей, у которых категория «С» получена после 09.09.2009.",
        points: ["Стационарный", "Онлайн", "Без экзамена — по ситуации"],
        cta: "Узнать стоимость",
        alt: "Учебный автопарк на площадке",
      },
      residence: {
        title: "ВНЖ и карта побыту",
        text: "Документы для легальной жизни и работы в Польше — вместо отдельной чип-карты.",
        points: ["Подбор основания", "Подача и контроль сроков", "Сопровождение семьи"],
        cta: "Задать вопрос",
        alt: "Вечерняя улица у жилых домов",
      },
    },
  },
  consult: {
    title: "Получите бесплатную консультацию",
    p1: "Менеджер свяжется в ближайшее рабочее время и скажет, какой курс ваш.",
    p2: "Профессия водителя востребована в Евросоюзе. Чтобы работать легально, нужны не только права, но и КОД 95. В учебном центре BAZA вы проходите обучение по польским программам и получаете поддержку на каждом этапе подготовки.",
    cta: "Задать вопрос",
    imageAlt: "Консультация в учебном центре",
  },
  code95: {
    title: "Что значит Код 95",
    p1: "Это квалификация для водителей категорий C, CE или D, без которой нельзя легально работать на дорогах Евросоюза. Её получают на коротком или длинном курсе.",
    p2: "Короткий курс — если категория «С» выдана до 09.09.2009: обычно 3–5 дней и без экзамена. Длинный — если после этой даты: теория, практика и экзамен в WORD. На консультации сразу говорим, какой вариант ваш.",
    p3: "После сертификата код вписывают в права и указывают срок действия. Повторный курс лучше не откладывать — иначе можно остаться без допуска к рейсу.",
    quiz: "Какой курс подойдёт",
    more: "Подробнее о КОД 95",
    imageAlt: "Инструктаж перед практикой на тягаче",
  },
  perks: {
    eyebrow: "ПОЧЕМУ BAZA",
    title: "Наши преимущества",
    lead: "Учебный центр в Польше с офисом в Минске: от первой консультации до практики на площадке и документов.",
    caption: "Учебная площадка и тягачи, на которых отрабатывают навыки до выхода на международные маршруты.",
    imageAlt: "Практическое занятие на учебной площадке BAZA",
    items: [
      {
        title: "Офис в Минске",
        text: "Консультация, проверка прав и договор до поездки — не нужно сразу ехать в Варшаву с непроверенным пакетом документов.",
      },
      {
        title: "Своя учебная база",
        text: "Класс, гараж, площадка и симулятор на нашей территории в Варшаве — всё в одном месте, без «арендованного угла».",
      },
      {
        title: "Проводим обучение сами",
        text: "Польские программы КОД 95 ведём в аккредитованном центре, а не передаём вас сторонней школе.",
      },
      {
        title: "Прозрачный договор",
        text: "Стоимость фиксируем до старта, работаем как юрлицо. Оплата с подтверждением, без доплат «по ходу».",
      },
      {
        title: "Понятно на русском",
        text: "Требования ЕС, WORD и выбор курса объясняем простым языком — без лишней бюрократической терминологии.",
      },
      {
        title: "Практика на технике",
        text: "Не только теория в классе: отработка на учебных тягачах и площадке, при необходимости — дополнительные часы.",
      },
      {
        title: "Дорога и жильё",
        text: "Помогаем спланировать поездку из Минска и региона, подскажем варианты проживания рядом с центром на время курса.",
      },
      {
        title: "Подбор под вашу ситуацию",
        text: "Короткий или длинный курс, онлайн-теория, литовский код — итог зависит от даты категории C и документов, разбираем на консультации.",
      },
    ],
  },
  faqTitle: "Частые вопросы",
  faqMore: "ответов — полный разбор на странице информации.",
  school: {
    title: "Жизнь школы",
    lead: "Класс в Варшаве, учебная площадка и техника, на которой отрабатывают рейс. Не постановочный офис, а то, что видит водитель на курсе.",
    alts: [
      "Инструктор у учебного тягача",
      "Учебный автопарк",
      "Занятие в классе",
      "Практика на площадке",
      "Ночной рейс по трассе",
      "Материалы курса",
    ],
  },
  contacts: {
    title: "Контакты",
    page: "Страница контактов",
    imageAlt: "Вечерняя улица у офиса в городе",
    missing: "Не нашли то, что искали?",
    lead: "Оставьте заявку — перезвоним в рабочее время.",
    cta: "Задать вопрос",
  },
  articles: {
    eyebrow: "Полезное",
    title: "Статьи для водителей",
    lead: "Разбираем выбор курса, документы и отличия польского и литовского КОД 95 — без воды, с опорой на практику.",
    all: "Все статьи",
  },
};

const pl: typeof ru = {
  story: {
    eyebrow: "O SZKOLE BAZA",
    title: "Więcej niż szkolenie kod 95",
    p1: "BAZA — akademia kierowców zawodowych w Polsce, stworzona przez zespół, który zna międzynarodowy transport od środka.",
    p2: "Samodzielnie prowadzimy polskie programy kod 95, pomagamy zrozumieć wymagania i wybrać właściwą ścieżkę zawodowej przygotowania.",
    p3: "Tutaj możesz uzyskać konsultację, przejść szkolenie i dowiedzieć się, jak wygląda praca na trasach międzynarodowych.",
    accent: "BAZA — miejsce, w którym kierowca czuje się jak u siebie.",
    cta: "Poznaj szkołę",
    imageAlt: "Zajęcia w ośrodku szkoleniowym BAZA",
  },
  offers: {
    title: "Usługi",
    lead: "Kurs, praca w Europie i dokumenty do legalnego pobytu.",
    variants: "Możliwe warianty szkolenia:",
    reply: "Odpowiedź w godzinach pracy",
    all: "Wszystkie usługi →",
    items: {
      employment: {
        title: "Praca kierowcy w Europie",
        text: "Oficjalne zatrudnienie na terenie UE po szkoleniu.",
        points: ["Sprawdzeni przewoźnicy-partnerzy", "Pomoc z doświadczeniem i bez"],
        cta: "Znajdź pracę",
        alt: "Kierowca przy ciągniku na placu o zmierzchu",
      },
      "short-course": {
        title: "Krótki kurs",
        text: "Dla kierowców z kategorią C uzyskaną przed 09.09.2009.",
        points: ["3–5 dni roboczych", "Bez egzaminu"],
        cta: "Sprawdź cenę",
        alt: "Sala szkoleniowa z widokiem na miasto",
      },
      "long-course": {
        title: "Długi kurs",
        text: "Dla kierowców z kategorią C uzyskaną po 09.09.2009.",
        points: ["Stacjonarny", "Online", "Bez egzaminu — zależnie od sytuacji"],
        cta: "Sprawdź cenę",
        alt: "Flota szkoleniowa na placu",
      },
      residence: {
        title: "Pobyt i karta pobytu",
        text: "Dokumenty do legalnego życia i pracy w Polsce.",
        points: ["Dobór podstawy", "Złożenie i terminy", "Wsparcie dla rodziny"],
        cta: "Zadaj pytanie",
        alt: "Wieczorna ulica przy domach",
      },
    },
  },
  consult: {
    title: "Bezpłatna konsultacja",
    p1: "Menedżer oddzwoni w najbliższych godzinach pracy i powie, który kurs jest Twój.",
    p2: "Zawód kierowcy jest potrzebny w Unii. Do legalnej pracy potrzebne są nie tylko prawo jazdy, ale i kod 95. W BAZA przechodzisz szkolenia według polskich programów ze wsparciem na każdym etapie.",
    cta: "Zadaj pytanie",
    imageAlt: "Konsultacja w centrum szkoleniowym",
  },
  code95: {
    title: "Co oznacza Kod 95",
    p1: "To kwalifikacja dla kierowców kategorii C, CE lub D, bez której nie można legalnie pracować na drogach Unii. Zdobywa się ją na krótkim albo długim kursie.",
    p2: "Krótki kurs — jeśli kategoria C została wydana przed 09.09.2009: zwykle 3–5 dni i bez egzaminu. Długi — jeśli później: teoria, praktyka i egzamin w WORD. Na konsultacji od razu mówimy, który wariant jest Twój.",
    p3: "Po certyfikacie kod wpisują do prawa jazdy i podają termin ważności. Odnowienia lepiej nie odkładać — inaczej można stracić dopuszczenie do trasy.",
    quiz: "Który kurs pasuje",
    more: "Więcej o KOD 95",
    imageAlt: "Odprawa przed praktyką na ciągniku",
  },
  perks: {
    eyebrow: "DLACZEGO BAZA",
    title: "Nasze atuty",
    lead: "Ośrodek w Polsce z biurem w Mińsku — od pierwszej konsultacji po praktykę na placu i dokumenty.",
    caption: "Plac i ciągniki, na których kierowcy ćwiczą przed trasami międzynarodowymi.",
    imageAlt: "Praktyka na placu szkoleniowym BAZA",
    items: [
      {
        title: "Biuro w Mińsku",
        text: "Konsultacja, dokumenty i umowa przed wyjazdem — bez jedzenia od razu do Warszawy z niepełnym pakietem.",
      },
      {
        title: "Własna baza",
        text: "Sala, garaż, plac i symulator na naszym terenie w Warszawie — wszystko w jednym miejscu.",
      },
      {
        title: "Szkolenie u nas",
        text: "Polskie programy KOD 95 prowadzimy sami w akredytowanym centrum.",
      },
      {
        title: "Jasna umowa",
        text: "Koszt przed startem, praca jako firma. Płatność z potwierdzeniem, bez dopłat w trakcie.",
      },
      {
        title: "Po rosyjsku",
        text: "Wymagania UE, WORD i wybór kursu — jasnym językiem, bez zbędnego urzędniczego żargonu.",
      },
      {
        title: "Praktyka na sprzęcie",
        text: "Nie tylko teoria: ciągniki szkoleniowe, plac, w razie potrzeby dodatkowe godziny jazdy.",
      },
      {
        title: "Dojazd i nocleg",
        text: "Pomagamy zaplanować wyjazd z Mińska i regionu, podpowiemy nocleg blisko centrum na czas kursu.",
      },
      {
        title: "Dobór pod Twoją sytuację",
        text: "Kurs krótki lub długi, teoria online, litewski kod — zależy od daty kategorii C i dokumentów.",
      },
    ],
  },
  faqTitle: "Częste pytania",
  faqMore: "odpowiedzi — pełne omówienie na stronie informacji.",
  school: {
    title: "Życie szkoły",
    lead: "Sala w Warszawie, plac i sprzęt, na którym ćwiczy się trasę. Nie dekoracyjne biuro, tylko to, co widzi kierowca na kursie.",
    alts: [
      "Instruktor przy ciągniku szkoleniowym",
      "Flota szkoleniowa",
      "Zajęcia w sali",
      "Praktyka na placu",
      "Nocna trasa",
      "Materiały kursu",
    ],
  },
  contacts: {
    title: "Kontakt",
    page: "Strona kontaktów",
    imageAlt: "Wieczorna ulica przy biurze",
    missing: "Nie znalazłeś tego, czego szukasz?",
    lead: "Zostaw zgłoszenie — oddzwonimy w godzinach pracy.",
    cta: "Zadaj pytanie",
  },
  articles: {
    eyebrow: "Przydatne",
    title: "Artykuły dla kierowców",
    lead: "Wybór kursu, dokumenty i różnice między polskim a litewskim KOD 95 — na podstawie praktyki.",
    all: "Wszystkie artykuły",
  },
};

const uk: typeof ru = {
  story: {
    eyebrow: "ПРО ШКОЛУ BAZA",
    title: "Більше, ніж навчання КОД 95",
    p1: "BAZA — академія професійних водіїв у Польщі, створена командою, яка знає міжнародні перевезення зсередини.",
    p2: "Ми самостійно проводимо польські програми КОД 95, допомагаємо розібратися у вимогах і обрати відповідний шлях професійної підготовки.",
    p3: "Тут ви можете отримати консультацію, пройти навчання й дізнатися, як влаштована робота на міжнародних маршрутах.",
    accent: "BAZA — місце, де водій почувається як вдома.",
    cta: "Познайомитися зі школою",
    imageAlt: "Заняття в навчальному центрі BAZA",
  },
  offers: {
    title: "Послуги",
    lead: "Курс, робота в Європі і документи для легального перебування.",
    variants: "Можливі варіанти навчання:",
    reply: "Відповідь у робочий час",
    all: "Усі послуги →",
    items: {
      employment: {
        title: "Робота водієм у Європі",
        text: "Офіційне працевлаштування на території ЄС після навчання.",
        points: ["Перевірені перевізники-партнери", "Допомога з досвідом і без"],
        cta: "Знайти роботу",
        alt: "Водій біля тягача на майданчику в сутінках",
      },
      "short-course": {
        title: "Короткий курс",
        text: "Для водіїв, у яких категорію C отримано до 09.09.2009.",
        points: ["3–5 робочих днів", "Іспит складати не потрібно"],
        cta: "Дізнатися вартість",
        alt: "Навчальний клас з видом на місто",
      },
      "long-course": {
        title: "Довгий курс",
        text: "Для водіїв, у яких категорію C отримано після 09.09.2009.",
        points: ["Стаціонарний", "Онлайн", "Без іспиту — за ситуацією"],
        cta: "Дізнатися вартість",
        alt: "Навчальний автопарк на майданчику",
      },
      residence: {
        title: "ВНП і карта побиту",
        text: "Документи для легального життя і роботи в Польщі.",
        points: ["Підбір підстави", "Подання і контроль строків", "Супровід родини"],
        cta: "Задати питання",
        alt: "Вечірня вулиця біля житлових будинків",
      },
    },
  },
  consult: {
    title: "Отримайте безкоштовну консультацію",
    p1: "Менеджер зв’яжеться в найближчий робочий час і скаже, який курс ваш.",
    p2: "Професія водія затребувана в Євросоюзі. Щоб працювати легально, потрібні не лише права, а й КОД 95. У BAZA ви проходите навчання за польськими програмами з підтримкою на кожному етапі.",
    cta: "Задати питання",
    imageAlt: "Консультація в навчальному центрі",
  },
  code95: {
    title: "Що означає Код 95",
    p1: "Це кваліфікація для водіїв категорій C, CE або D, без якої не можна легально працювати на дорогах Євросоюзу. Її отримують на короткому або довгому курсі.",
    p2: "Короткий курс — якщо категорію C видано до 09.09.2009: зазвичай 3–5 днів і без іспиту. Довгий — якщо після цієї дати: теорія, практика та іспит у WORD. На консультації одразу кажемо, який варіант ваш.",
    p3: "Після сертифіката код вписують у права і вказують строк дії. Повторний курс краще не відкладати — інакше можна залишитися без допуску до рейсу.",
    quiz: "Який курс підійде",
    more: "Докладніше про КОД 95",
    imageAlt: "Інструктаж перед практикою на тягачі",
  },
  perks: {
    eyebrow: "ЧОМУ BAZA",
    title: "Наші переваги",
    lead: "Навчальний центр у Польщі з офісом у Мінську: від першої консультації до практики на майданчику й документів.",
    caption: "Навчальний майданчик і тягачі, на яких відпрацьовують навички перед міжнародними маршрутами.",
    imageAlt: "Практичне заняття на навчальному майданчику BAZA",
    items: [
      {
        title: "Офіс у Мінську",
        text: "Консультація, перевірка прав і договір до поїздки — не обов’язково одразу їхати до Варшави з неперевіреним пакетом.",
      },
      {
        title: "Своя навчальна база",
        text: "Клас, гараж, майданчик і симулятор на нашій території у Варшаві — усе в одному місці.",
      },
      {
        title: "Навчання проводимо самі",
        text: "Польські програми КОД 95 ведемо в акредитованому центрі, а не передаємо вас сторонній школі.",
      },
      {
        title: "Прозорий договір",
        text: "Вартість фіксуємо до старту, працюємо як юрособа. Оплата з підтвердженням, без доплат «по ходу».",
      },
      {
        title: "Зрозуміло російською",
        text: "Вимоги ЄС, WORD і вибір курсу — простою мовою, без зайвої бюрократичної термінології.",
      },
      {
        title: "Практика на техніці",
        text: "Не лише теорія в класі: відпрацювання на навчальних тягачах і майданчику, за потреби — додаткові години.",
      },
      {
        title: "Дорога і житло",
        text: "Допомагаємо спланувати поїздку з Мінська й регіону, підкажемо проживання поруч із центром на час курсу.",
      },
      {
        title: "Підбір під вашу ситуацію",
        text: "Короткий чи довгий курс, онлайн-теорія, литовський код — залежить від дати категорії C і документів.",
      },
    ],
  },
  faqTitle: "Часті питання",
  faqMore: "відповідей — повний розбір на сторінці інформації.",
  school: {
    title: "Життя школи",
    lead: "Клас у Варшаві, навчальний майданчик і техніка, на якій відпрацьовують рейс. Не постановочний офіс, а те, що бачить водій на курсі.",
    alts: [
      "Інструктор біля навчального тягача",
      "Навчальний автопарк",
      "Заняття в класі",
      "Практика на майданчику",
      "Нічний рейс трасою",
      "Матеріали курсу",
    ],
  },
  contacts: {
    title: "Контакти",
    page: "Сторінка контактів",
    imageAlt: "Вечірня вулиця біля офісу",
    missing: "Не знайшли те, що шукали?",
    lead: "Залиште заявку — передзвонимо в робочий час.",
    cta: "Задати питання",
  },
  articles: {
    eyebrow: "Корисне",
    title: "Статті для водіїв",
    lead: "Розбираємо вибір курсу, документи і відмінності польського та литовського КОД 95 — без води, з опорою на практику.",
    all: "Усі статті",
  },
};

export const HOME = { ru, pl, uk } satisfies Record<Locale, typeof ru>;
export type HomeCopy = typeof ru;
