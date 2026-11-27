import type { Locale } from "./messages";

export type AboutPageCopy = {
  meta: { title: string; description: string };
  hero: {
    h1: string;
    subtitle: string;
    lead: string[];
    ctaCourse: string;
    ctaConsult: string;
    imageAlt: string;
  };
  philosophy: {
    eyebrow: string;
    h2: string;
    paragraphs: string[];
    imageAlt: string;
  };
  history: {
    eyebrow: string;
    h2: string;
    paragraphs: string[];
    imageAlt: string;
  };
  base: {
    h2: string;
    paragraphs: string[];
    gallery: { src: string; alt: string }[];
    galleryAlts: {
      class: string;
      truck: string;
      yard: string;
      sim: string;
      lesson: string;
    };
  };
  practice: {
    eyebrow: string;
    h2: string;
    paragraphs: string[];
    accent: string;
    imageAlt: string;
  };
  path: {
    h2: string;
    intro: string;
    steps: { title: string; text: string }[];
    cta: string;
  };
  legal: {
    h2: string;
    intro: string;
    rows: { label: string; value: string }[];
    note: string;
    footerLink: string;
  };
  finale: {
    h2: string;
    text: string;
    ctaCourse: string;
    ctaConsult: string;
  };
};

const ru: AboutPageCopy = {
  meta: {
    title: "О школе BAZA — Академия профессиональных водителей | КОД 95 в Польше",
    description:
      "Познакомьтесь с BAZA: офис в Минске, обучение КОД 95 в Варшаве, опыт международных перевозок и поддержка водителей.",
  },
  hero: {
    h1: "BAZA — Академия профессиональных водителей",
    subtitle: "Ваша база в профессии.",
    lead: [
      "BAZA — учебный центр в Польше, где профессиональное обучение КОД 95 сочетается с опытом международных перевозок и внимательным отношением к водителям.",
      "Консультация и проверка документов начинаются в офисе в Минске — обучение проходит на базе в Варшаве.",
      "Мы помогаем разобраться в требованиях, подобрать программу и подготовиться к следующему этапу профессиональной карьеры.",
    ],
    ctaCourse: "Подобрать курс КОД 95",
    ctaConsult: "Получить консультацию",
    imageAlt: "Учебный тягач DAF на площадке BAZA",
  },
  philosophy: {
    eyebrow: "НАША ФИЛОСОФИЯ",
    h2: "Что для нас значит слово «база»",
    paragraphs: [
      "Для нас BAZA — больше, чем название учебного центра. В профессии водителя база — это место, куда можно вернуться, где водителя понимают, выслушивают и помогают разобраться в сложных вопросах.",
      "Мы хотим, чтобы именно такую атмосферу водитель находил в BAZA: здесь можно спокойно задать вопрос, получить понятный ответ и узнать, с чего начать подготовку к работе в Европе.",
      "Часто всё начинается не с лекции, а с вопросов: какие документы нужны, какой КОД 95 подходит, как организовано обучение и какие шаги предстоят дальше.",
      "Мы помогаем разобраться в требованиях и составить предварительный план действий с учётом квалификации и документов водителя.",
    ],
    imageAlt: "Учебный класс BAZA с наглядными материалами",
  },
  history: {
    eyebrow: "НАША ИСТОРИЯ",
    h2: "Опыт международных перевозок с 2013 года",
    paragraphs: [
      "Школу создали люди, которые работают в международных перевозках с 2013 года. Мы знаем требования перевозчиков, особенности профессии и повседневные задачи водителей изнутри.",
      "Этот опыт помогает нам смотреть на обучение не только через программу занятий, но и через реальные условия будущей работы.",
    ],
    imageAlt: "Учебный автопарк и площадка BAZA",
  },
  base: {
    h2: "Своя база для профессиональной подготовки",
    paragraphs: [
      "В BAZA есть инфраструктура для обучения КОД 95 в Польше: оборудованный учебный класс, грузовик, практическая площадка, симулятор вождения и учебные материалы.",
      "Мы самостоятельно организуем обучение по польским программам КОД 95. Формат теоретических и практических занятий зависит от выбранной программы.",
    ],
    gallery: [],
    galleryAlts: {
      class: "Учебный класс BAZA",
      truck: "Учебный грузовик BAZA",
      yard: "Практическая площадка BAZA",
      sim: "Симулятор и дополнительные педали управления BAZA",
      lesson: "Занятие с цифровыми учебными материалами BAZA",
    },
  },
  practice: {
    eyebrow: "НЕ ТОЛЬКО ТЕОРИЯ",
    h2: "Знания преподавателей и практический опыт профессии",
    paragraphs: [
      "Мы считаем, что подготовка водителя не должна ограничиваться учебными материалами и лекциями.",
      "В BAZA знания преподавателей сочетаются с практическим опытом людей, которые работают в международных перевозках.",
    ],
    accent: "Реальный опыт помогает лучше понять профессию ещё во время подготовки.",
    imageAlt: "Учебный тягач BAZA на площадке",
  },
  path: {
    h2: "От первого вопроса до понятного плана действий",
    intro:
      "Необязательно заранее знать, какая программа вам нужна. Мы поможем оценить исходную ситуацию и определить следующие шаги.",
    steps: [
      {
        title: "Первая консультация",
        text: "Обсуждаем цели, имеющуюся квалификацию и вопросы подготовки к работе в ЕС.",
      },
      {
        title: "Предварительная проверка документов",
        text: "Объясняем, какие сведения и подтверждения потребуются для выбора программы и записи.",
      },
      {
        title: "План подготовки",
        text: "Предлагаем подходящий вариант обучения и согласовываем предварительную последовательность действий.",
      },
      {
        title: "Обучение КОД 95",
        text: "Проводим занятия по выбранной польской программе. Формат (онлайн или очно) зависит от программы.",
      },
      {
        title: "Что дальше",
        text: "Рассказываем, что делать после курса и как двигаться дальше.",
      },
    ],
    cta: "Получить консультацию",
  },
  legal: {
    h2: "Официальная информация об учебном центре",
    intro:
      "BAZA — бренд учебного центра, деятельность которого в Польше осуществляет AROXEN Sp. z o.o.",
    rows: [
      { label: "Юридическое лицо", value: "AROXEN Sp. z o.o." },
      {
        label: "Юридический адрес",
        value: "ul. Wolska 84/86, lok. 217, 01-141 Warszawa",
      },
      { label: "NIP", value: "5273231534" },
      { label: "REGON", value: "545441653" },
      { label: "E-mail", value: "info@cod95.com" },
      { label: "KRS", value: "[владелец: добавить из выписки]" },
      { label: "Адрес занятий", value: "[владелец: добавить отдельно от юридического]" },
      {
        label: "Лицензия / данные реестра учебного центра",
        value: "[владелец: орган, номер, статус — из документа]",
      },
    ],
    note: 'Слово «академия» — часть бренда, а не указание на статус учебного заведения. Формулировки о лицензии и реестре брать дословно из официального документа.',
    footerLink: "Полные реквизиты",
  },
  finale: {
    h2: "Начните свой путь с BAZA",
    text: "Не знаете, какой КОД 95 вам подходит и с чего начать? Расскажите о своей квалификации и документах — мы поможем разобраться в требованиях и определить предварительные дальнейшие шаги.",
    ctaCourse: "Подобрать курс КОД 95",
    ctaConsult: "Получить консультацию",
  },
};

/** PL / UA — структура как RU; тексты уточняет владелец. Meta и ключевые формулировки по ТЗ. */
const pl: AboutPageCopy = {
  ...ru,
  meta: {
    title: "O szkole BAZA — Akademia Kierowców Zawodowych | Kod 95 w Polsce",
    description:
      "Poznaj BAZA: szkolenia kod 95 w Polsce, własna baza szkoleniowa, doświadczenie w transporcie międzynarodowym i wsparcie dla kierowców zawodowych.",
  },
  hero: {
    h1: "BAZA — Akademia kierowców zawodowych",
    subtitle: "Twoja baza w zawodzie.",
    lead: [
      "BAZA to ośrodek szkoleniowy w Polsce, gdzie profesjonalne szkolenie kod 95 łączy się z doświadczeniem w transporcie międzynarodowym i uważnym podejściem do kierowców.",
      "Pomagamy zrozumieć wymagania, dobrać program i przygotować się do kolejnego etapu kariery.",
    ],
    ctaCourse: "Dobierz kurs kod 95",
    ctaConsult: "Uzyskaj konsultację",
    imageAlt: "Instruktor BAZA i ciężarówka szkoleniowa",
  },
  philosophy: {
    eyebrow: "NASZA FILOZOFIA",
    h2: "Co dla nas znaczy słowo «baza»",
    paragraphs: ru.philosophy.paragraphs,
    imageAlt: "Konsultacja w klasie BAZA",
  },
  history: {
    eyebrow: "NASZA HISTORIA",
    h2: "Doświadczenie w transporcie międzynarodowym od 2013 roku",
    paragraphs: ru.history.paragraphs,
    imageAlt: "Zespół BAZA",
  },
  base: {
    h2: "Własna baza do szkolenia zawodowego",
    paragraphs: ru.base.paragraphs,
    gallery: [],
    galleryAlts: {
      class: "Sala szkoleniowa BAZA",
      truck: "Ciężarówka szkoleniowa BAZA",
      yard: "Plac manewrowy BAZA",
      sim: "Symulator i dodatkowe pedały w BAZA",
      lesson: "Zajęcia z materiałami cyfrowymi BAZA",
    },
  },
  practice: {
    eyebrow: "NIE TYLKO TEORIA",
    h2: "Wiedza wykładowców i praktyka zawodu",
    paragraphs: ru.practice.paragraphs,
    accent: "Prawdziwe doświadczenie pomaga lepiej zrozumieć zawód już podczas przygotowania.",
    imageAlt: "Zajęcia praktyczne BAZA",
  },
  path: {
    h2: "Od pierwszego pytania do jasnego planu",
    steps: ru.path.steps,
    cta: "Uzyskaj konsultację",
  },
  legal: ru.legal,
  finale: {
    h2: "Zacznij swoją drogę z BAZA",
    text: ru.finale.text,
    ctaCourse: "Dobierz kurs kod 95",
    ctaConsult: "Uzyskaj konsultację",
  },
};

const uk: AboutPageCopy = {
  ...ru,
  meta: {
    title: "Про школу BAZA — Академія професійних водіїв | КОД 95 у Польщі",
    description:
      "Познайомтеся з BAZA: навчання КОД 95 у Польщі, навчальна база, досвід міжнародних перевезень і підтримка професійних водіїв.",
  },
  hero: {
    h1: "BAZA — Академія професійних водіїв",
    subtitle: "Ваша база в професії.",
    lead: [
      "BAZA — навчальний центр у Польщі, де професійне навчання КОД 95 поєднується з досвідом міжнародних перевезень і уважним ставленням до водіїв.",
      "Ми допомагаємо розібратися у вимогах, підібрати програму й підготуватися до наступного етапу професійної кар’єри.",
    ],
    ctaCourse: "Підібрати курс КОД 95",
    ctaConsult: "Отримати консультацію",
    imageAlt: "Інструктор BAZA та навчальна вантажівка",
  },
  philosophy: {
    eyebrow: "НАША ФІЛОСОФІЯ",
    h2: "Що для нас означає слово «база»",
    paragraphs: ru.philosophy.paragraphs,
    imageAlt: "Консультація в навчальному класі BAZA",
  },
  history: {
    eyebrow: "НАША ІСТОРІЯ",
    h2: "Досвід міжнародних перевезень з 2013 року",
    paragraphs: ru.history.paragraphs,
    imageAlt: "Команда BAZA",
  },
  base: {
    h2: "Власна база для професійної підготовки",
    paragraphs: ru.base.paragraphs,
    gallery: [],
    galleryAlts: {
      class: "Навчальний клас BAZA",
      truck: "Навчальна вантажівка BAZA",
      yard: "Практичний майданчик BAZA",
      sim: "Симулятор і додаткові педалі керування BAZA",
      lesson: "Заняття з цифровими матеріалами BAZA",
    },
  },
  practice: {
    eyebrow: "НЕ ЛИШЕ ТЕОРІЯ",
    h2: "Знання викладачів і практичний досвід професії",
    paragraphs: ru.practice.paragraphs,
    accent: "Реальний досвід допомагає краще зрозуміти професію ще під час підготовки.",
    imageAlt: "Практичне заняття BAZA",
  },
  path: {
    h2: "Від першого запитання до зрозумілого плану",
    steps: ru.path.steps,
    cta: "Отримати консультацію",
  },
  legal: ru.legal,
  finale: ru.finale,
};

export const ABOUT_PAGE: Record<Locale, AboutPageCopy> = { ru, pl, uk };