import { useState } from "react";
import { BookButton } from "./BookingDialog";

type Issued = "before" | "after" | "unsure";
type Category = "C" | "CE";

const ISSUED: { value: Issued; label: string }[] = [
  { value: "before", label: "До 10 сентября 2009 года" },
  { value: "after", label: "10 сентября 2009 года или позже" },
  { value: "unsure", label: "Не помню / не уверен" },
];

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "C", label: "C" },
  { value: "CE", label: "CE" },
];

function advice(issued: Issued, category: Category) {
  if (issued === "unsure") {
    return {
      service: undefined,
      title: "Нужна сверка по правам",
      text: "По памяти дату не стоит угадывать. На консультации посмотрим удостоверение и скажем, короткий курс или длинный.",
      cta: "Уточнить на консультации",
    };
  }
  if (issued === "before") {
    return {
      service: "short-course",
      title: "Вероятно, вам подойдёт короткий курс КОД 95",
      text: `Категория ${category} получена до 10 сентября 2009 года — обычно это периодическое обучение: 3–5 дней, экзамен сдавать не нужно.`,
      cta: "Записаться на короткий курс",
    };
  }
  return {
    service: "long-course",
    title: "Вероятно, вам подойдёт длинный курс КОД 95",
    text: `Категория ${category} получена 10 сентября 2009 года или позже — это первичная квалификация: теория, практика и экзамен в WORD.`,
    cta: "Записаться на длинный курс",
  };
}

export function CourseAdvisor() {
  const [issued, setIssued] = useState<Issued>("before");
  const [category, setCategory] = useState<Category>("C");
  const result = advice(issued, category);

  return (
    <section id="kurs" className="section-y scroll-mt-28 border-t border-border bg-background">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
          <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
            Какой курс вам подойдёт?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Два ответа — и станет ясно, короткий курс или длинный. Это ориентир, не замена консультации.
          </p>

          <fieldset className="mt-8">
            <legend className="font-display font-bold text-foreground">Когда впервые получена категория C?</legend>
            <div className="mt-3 grid gap-2">
              {ISSUED.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border px-4 py-3 has-[:checked]:border-primary has-[:checked]:bg-primary/10"
                >
                  <input
                    type="radio"
                    name="issued"
                    value={option.value}
                    checked={issued === option.value}
                    onChange={() => setIssued(option.value)}
                    className="size-4 accent-primary"
                  />
                  <span className="text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="font-display font-bold text-foreground">Какая категория у вас сейчас?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border px-4 py-3 has-[:checked]:border-primary has-[:checked]:bg-primary/10"
                >
                  <input
                    type="radio"
                    name="category"
                    value={option.value}
                    checked={category === option.value}
                    onChange={() => setCategory(option.value)}
                    className="size-4 accent-primary"
                  />
                  <span className="font-display font-bold text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <aside className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8 lg:sticky lg:top-28">
          <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
            Предварительный результат
          </p>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-foreground">{result.title}</h3>
          <p className="mt-3 text-muted-foreground">{result.text}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Точный вид обучения зависит также от ранее полученной квалификации, её срока действия и документов
            водителя.
          </p>
          <BookButton {...(result.service ? { service: result.service } : {})} variant="hero" size="lg" className="mt-6">
            {result.cta}
          </BookButton>
        </aside>
      </div>
    </section>
  );
}
