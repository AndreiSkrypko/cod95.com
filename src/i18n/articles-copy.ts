import { ARTICLES, type Article, type ArticleSlug } from "@/content/articles";
import type { Locale } from "./messages";

type ArticleText = Pick<Article, "title" | "description" | "readTime" | "sections"> & {
  imageAlt: string;
  checklist?: string[];
};

const pl: Record<ArticleSlug, ArticleText> = {
  "korotkiy-ili-dlinnyy-kurs": {
    title: "Krótki czy długi kurs KOD 95: jak zrozumieć, który jest Twój",
    description:
      "Lista po dacie kategorii C, porównanie terminów i egzaminu WORD — bez zgadywania przed zapisem do Warszawy.",
    readTime: "7 min",
    imageAlt: "Sala i praktyka na placu — wybór krótkiego lub długiego kursu KOD 95",
    sections: [
      {
        title: "Główna zasada: data kategorii C",
        paragraphs: [
          "W UE rozróżnia się szkolenie okresowe (krótki kurs) i kwalifikację wstępną (długi kurs). Klucz to moment uzyskania kategorii C lub CE.",
          "Jeśli kategorię wydano przed 9 września 2009 roku, w większości przypadków pasuje krótki kurs: 3–5 dni roboczych w akredytowanym centrum, bez egzaminu w WORD.",
          "Jeśli kategorię C wydano później — potrzebny jest długi kurs: teoria, praktyka i obowiązkowy egzamin z komisją.",
        ],
      },
      {
        title: "Krótki kurs — komu i po co",
        paragraphs: [
          "Krótki kurs jest dla kierowców ze stażem i «starym» prawem jazdy C/CE. Program jest zwarty, ale prawnie to pełne szkolenie okresowe KOD 95.",
          "Na konsultacji sprawdzamy wyciąg z prawa jazdy, tłumaczenie jeśli trzeba i ADR — terminy grupy mogą się lekko przesunąć.",
        ],
      },
      {
        title: "Długi kurs — co obejmuje",
        paragraphs: [
          "Długi kurs trwa około trzech tygodni. Teoria i praktyka odbywają się w Warszawie, finał to egzamin w WORD.",
          "Jest format z teorią online: mniej wyjazdów, ale egzamin i tak stacjonarny. Wariant «bez egzaminu» jest możliwy tylko w wybranych sytuacjach — nie da się go wybrać «na życzenie».",
        ],
      },
      {
        title: "Typowe błędy przed zapisem",
        paragraphs: [
          "Mylenie daty wydania prawa jazdy z datą egzaminu na kategorię — patrzymy na datę kategorii w dokumencie.",
          "Przeterminowane prawo jazdy albo brak legalnego pobytu w Polsce na czas kursu — bez tego centrum nie przyjmie do grupy.",
          "Nadzieja «jakoś na krótki» przy prawach po 2009 roku kończy się odmową; lepiej od razu planować długi kurs.",
        ],
      },
    ],
    checklist: [
      "Paszport i ważne prawo jazdy z kategorią C/CE",
      "Potwierdzenie legalnego wjazdu i pobytu",
      "Badania i test psychologiczny — podpowiemy, gdzie zrobić",
      "Zapas czasu na drogę Mińsk — Warszawa przy krótkim kursie",
    ],
  },
  "kod-95-belarus-varshava": {
    title: "KOD 95 w Polsce dla kierowców z Białorusi: dokumenty, terminy, wyjazd do Warszawy",
    description:
      "Jak przygotować się do szkolenia w Warszawie z Mińska: dokumenty, logistyka wyjazdu i co ustalić przed startem.",
    readTime: "8 min",
    imageAlt: "Nocna trasa do Europy i konsultacja przed wyjazdem na KOD 95 do Warszawy",
    sections: [
      {
        title: "Dlaczego Warszawa i jak prowadzimy z Mińska",
        paragraphs: [
          "Polski KOD 95 wydaje się w akredytowanych centrach — nasza baza jest w Warszawie, a konsultacja i sprawdzenie dokumentów zaczynają się w biurze w Mińsku.",
          "Kierowcy z Brześcia, Grodna i innych miast często jadą przez Mińsk: łatwiej sprawdzić pakiet przed wizytą i podpisać umowę.",
        ],
      },
      {
        title: "Podstawowy pakiet dokumentów",
        paragraphs: [
          "Paszport, ważne prawo jazdy właściwej kategorii, potwierdzenie legalnego przekroczenia granicy i pobytu w Polsce na czas szkolenia.",
          "Badania i test psychologiczny są obowiązkowe przed kursem albo w trakcie; listę damy wcześniej pod Twój typ kursu.",
          "Na długi kurs zakładaj około trzech tygodni w Warszawie, na krótki — kilka dni roboczych plus drogę.",
        ],
      },
      {
        title: "Legalny wjazd i pobyt",
        paragraphs: [
          "Szkolenie nie zastępuje zasad wizowych: na daty kursu musisz mieć legalną podstawę pobytu w Polsce.",
          "Jeśli potrzebne jest zaproszenie od pracodawcy albo karta pobytu — to osobna usługa, ale można ją połączyć z przygotowaniem do KOD 95, żeby nie jechać dwa razy.",
        ],
      },
      {
        title: "Praktyka wyjazdu: nocleg i grafik",
        paragraphs: [
          "Polecamy nocleg obok centrum — podpowiemy sprawdzone opcje.",
          "Płatność według umowy, możliwa rata; pracodawca może opłacić kurs — ustalimy na konsultacji.",
          "Po szkoleniu pomagamy z wymianą prawa jazdy na polskie i zatrudnieniem u partnerów, jeśli planujesz zostać w UE.",
        ],
      },
    ],
    checklist: [
      "Sprawdzenie daty kategorii C — krótki czy długi kurs",
      "Bilety i zapas dni na drogę i szkolenie",
      "Kopie dokumentów — papierowe i elektroniczne",
      "Kontakt z menedżerem przed wyjazdem — aktualny adres centrum i grafik",
    ],
  },
  "polskiy-i-litovskiy-kod-95": {
    title: "Polski KOD 95 i litewski: jaka jest różnica i co wybrać",
    description:
      "Porównanie polskiej i litewskiej kwalifikacji dla kierowców międzynarodowych: uznanie w UE, terminy i przekwalifikowanie.",
    readTime: "6 min",
    imageAlt: "Mapa Europy z trasami — polski i litewski KOD 95",
    sections: [
      {
        title: "Obie kwalifikacje działają w UE",
        paragraphs: [
          "I polski, i litewski KOD 95 to karta kwalifikacji kierowcy, uznawana w Unii przy zachowaniu zasad szkolenia okresowego.",
          "Wybór kraju częściej zależy nie od «siły» dokumentu, tylko od pracodawcy, języka wsparcia, grafiku grup i Twojej logistyki.",
        ],
      },
      {
        title: "Kiedy wybierają Polskę",
        paragraphs: [
          "Polskie centrum w Warszawie, egzamin w WORD, wsparcie po rosyjsku — znana trasa dla kierowców z Białorusi i Ukrainy.",
          "Wygodne, jeśli planujesz pracę u polskiego przewoźnika, wymianę prawa jazdy albo pobyt.",
        ],
      },
      {
        title: "Kiedy patrzą w stronę Litwy",
        paragraphs: [
          "Litewski KOD 95 ma sens, gdy pracodawca albo kontrakt jest związany z Litwą, albo bliższy jest kalendarz grup.",
          "Po kursie może być potrzebne przekwalifikowanie pod polskie procedury — mamy osobne wsparcie «Litwa → Polska».",
        ],
      },
      {
        title: "Jak zdecydować bez ryzyka",
        paragraphs: [
          "Przynieś prawo jazdy, kontrakt albo list od pracodawcy — porównamy terminy, koszt i kolejne kroki z dokumentami.",
          "Nie odkładaj: bez ważnego kodu nie dopuszczą Cię do trasy międzynarodowej, a poprawki zjadają czas i pieniądze.",
        ],
      },
    ],
  },
};

const uk: Record<ArticleSlug, ArticleText> = {
  "korotkiy-ili-dlinnyy-kurs": {
    title: "Короткий чи довгий курс КОД 95: як зрозуміти, що потрібен саме вам",
    description:
      "Чек-лист за датою категорії C, порівняння строків і іспиту WORD — без здогадок перед записом до Варшави.",
    readTime: "7 хв",
    imageAlt: "Навчальний клас і практика на майданчику — вибір короткого або довгого курсу КОД 95",
    sections: [
      {
        title: "Головне правило: дата категорії C",
        paragraphs: [
          "У ЄС розрізняють періодичне навчання (короткий курс) і первинну кваліфікацію (довгий курс). Ключовий орієнтир — коли ви отримали категорію C або CE.",
          "Якщо категорію видано до 9 вересня 2009 року, у більшості випадків підходить короткий курс: 3–5 робочих днів в акредитованому центрі, іспит у WORD не потрібен.",
          "Якщо категорію C оформлено після цієї дати — потрібен довгий курс: теорія, практика і обов’язковий іспит з комісією.",
        ],
      },
      {
        title: "Короткий курс — кому і навіщо",
        paragraphs: [
          "Короткий курс розрахований на водіїв із підтвердженим стажем і «старими» правами категорії C/CE. Програма компактна, але юридично це повноцінне періодичне навчання КОД 95.",
          "На консультації звіряємо виписку з прав, переклад за потреби і наявність ADR — строки групи можуть трохи зсунутися.",
        ],
      },
      {
        title: "Довгий курс — що входить",
        paragraphs: [
          "Довгий курс триває близько трьох тижнів. Теорія і практика проходять у Варшаві, фінал — іспит у WORD.",
          "Є формат з онлайн-теорією: менше поїздок, але іспит усе одно очний. Варіант «без іспиту» можливий лише в окремих ситуаціях — його не можна обрати «за бажанням».",
        ],
      },
      {
        title: "Типові помилки перед записом",
        paragraphs: [
          "Плутанина між датою видачі прав і датою складання іспиту на категорію — дивимося саме дату категорії в посвідченні.",
          "Прострочені права або відсутність легального перебування в Польщі на час курсу — без цього центр не прийме в групу.",
          "Надія «якось на короткий» за прав після 2009 року призведе до відмови; краще одразу планувати довгий курс.",
        ],
      },
    ],
    checklist: [
      "Паспорт і чинні права з категорією C/CE",
      "Підтвердження легального в’їзду і перебування",
      "Медкомісія і психотест — підкажемо, де пройти",
      "Запас часу на дорогу Мінськ — Варшава за короткого курсу",
    ],
  },
  "kod-95-belarus-varshava": {
    title: "КОД 95 у Польщі для водіїв з Білорусі: документи, строки, поїздка до Варшави",
    description:
      "Як підготуватися до навчання у Варшаві з Мінська: документи, логістика поїздки і що врахувати до старту курсу.",
    readTime: "8 хв",
    imageAlt: "Нічна траса в Європу і консультація перед поїздкою на КОД 95 до Варшави",
    sections: [
      {
        title: "Чому Варшава і як супроводжуємо з Мінська",
        paragraphs: [
          "Польський КОД 95 оформлюють в акредитованих центрах — у нас база у Варшаві, а консультація і перевірка документів починаються в офісі в Мінську.",
          "Водії з Бреста, Гродно та інших міст часто будують маршрут через Мінськ: так простіше звірити пакет до візиту і зафіксувати договір.",
        ],
      },
      {
        title: "Базовий пакет документів",
        paragraphs: [
          "Паспорт, чинні права потрібної категорії, підтвердження легального перетину кордону і перебування в Польщі на час навчання.",
          "Медкомісія і психотест — обов’язковий етап до або під час курсу; список дамо заздалегідь під ваш тип курсу.",
          "Для довгого курсу закладайте близько трьох тижнів у Варшаві, для короткого — кілька робочих днів плюс дорога.",
        ],
      },
      {
        title: "Легальний в’їзд і перебування",
        paragraphs: [
          "Навчання не замінює візові правила: важливо, щоб на дати курсу у вас була законна підстава перебувати в Польщі.",
          "Якщо потрібне запрошення від роботодавця або оформлення карти побиту — це окрема послуга, але її можна поєднати з підготовкою до КОД 95, щоб не їхати двічі.",
        ],
      },
      {
        title: "Практика поїздки: житло і графік",
        paragraphs: [
          "Рекомендуємо житло поруч із навчальним центром — підкажемо перевірені варіанти.",
          "Оплата за договором, можлива розстрочка; роботодавець може оплатити курс — уточнимо на консультації.",
          "Після навчання допомагаємо із заміною прав на польські і працевлаштуванням у партнерів-перевізників, якщо плануєте залишатися в ЄС.",
        ],
      },
    ],
    checklist: [
      "Звірка дати категорії C — короткий чи довгий курс",
      "Квитки і запас днів на дорогу і навчання",
      "Копії документів — паперові й електронні",
      "Зв’язок із менеджером до виїзду — актуальна адреса центру і розклад",
    ],
  },
  "polskiy-i-litovskiy-kod-95": {
    title: "Польський КОД 95 і литовський: у чому різниця і що обрати",
    description:
      "Порівняння польської та литовської кваліфікації для водіїв-міжнародників: визнання в ЄС, строки і перекваліфікація.",
    readTime: "6 хв",
    imageAlt: "Карта Європи з маршрутами — польський і литовський КОД 95",
    sections: [
      {
        title: "Обидві кваліфікації діють у ЄС",
        paragraphs: [
          "І польський, і литовський КОД 95 — це karta kwalifikacji kierowcy, визнана в країнах Євросоюзу за дотримання правил періодичного навчання.",
          "Вибір країни навчання частіше пов’язаний не з «силою» документа, а з роботодавцем, мовою супроводу, графіком наборів і вашою логістикою.",
        ],
      },
      {
        title: "Коли обирають Польщу",
        paragraphs: [
          "Польський центр у Варшаві, іспит у WORD, супровід російською — звичний маршрут для водіїв з Білорусі та України.",
          "Зручно, якщо ви вже плануєте працювати в польського перевізника, міняти права на польські або оформлювати ВНП.",
        ],
      },
      {
        title: "Коли дивляться в бік Литви",
        paragraphs: [
          "Литовський КОД 95 актуальний, якщо роботодавець або контракт зав’язані на Литву, або ближче підходить календар груп.",
          "Після курсу може знадобитися перекваліфікація під польські процедури — у нас є окремий супровід «Литва → Польща».",
        ],
      },
      {
        title: "Як ухвалити рішення без ризику",
        paragraphs: [
          "Принесіть права, контракт або лист від роботодавця — порівняємо строки, вартість і наступні кроки з документами.",
          "Не відкладайте: без чинного коду вас не допустять до міжнародного рейсу, а перескладання і переробки з’їдають час і гроші.",
        ],
      },
    ],
  },
};

const PACK: Partial<Record<Locale, Record<ArticleSlug, ArticleText>>> = { pl, uk };

export function localizedArticles(locale: Locale): Article[] {
  const pack = PACK[locale];
  if (!pack) return ARTICLES;
  return ARTICLES.map((article) => {
    const text = pack[article.slug];
    return {
      ...article,
      title: text.title,
      description: text.description,
      readTime: text.readTime,
      sections: text.sections,
      image: { ...article.image, alt: text.imageAlt },
      ...(text.checklist ? { checklist: text.checklist } : {}),
    };
  });
}

export function localizedArticle(locale: Locale, slug: string): Article | undefined {
  return localizedArticles(locale).find((article) => article.slug === slug);
}
