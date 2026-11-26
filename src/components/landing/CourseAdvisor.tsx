import { useState } from "react";
import { useLocale } from "@/i18n/locale";
import { PAGES, type PagesCopy } from "@/i18n/pages-copy";
import { BookButton } from "./BookingDialog";

type Issued = "before" | "after" | "unsure";
type Category = "C" | "CE";

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "C", label: "C" },
  { value: "CE", label: "CE" },
];

function advice(issued: Issued, category: Category, copy: PagesCopy["advisor"]) {
  if (issued === "unsure") {
    return {
      service: undefined,
      title: copy.unsureTitle,
      text: copy.unsureText,
      cta: copy.unsureCta,
    };
  }
  if (issued === "before") {
    return {
      service: "short-course",
      title: copy.shortTitle,
      text: copy.shortText(category),
      cta: copy.shortCta,
    };
  }
  return {
    service: "long-course",
    title: copy.longTitle,
    text: copy.longText(category),
    cta: copy.longCta,
  };
}

export function CourseAdvisor() {
  const { locale } = useLocale();
  const copy = PAGES[locale].advisor;
  const [issued, setIssued] = useState<Issued>("before");
  const [category, setCategory] = useState<Category>("C");
  const result = advice(issued, category, copy);
  const issuedOptions = [
    { value: "before" as const, label: copy.before },
    { value: "after" as const, label: copy.after },
    { value: "unsure" as const, label: copy.unsure },
  ];

  return (
    <section className="section-y border-t border-border bg-background">
      <div
        id="kurs"
        className="container-page grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
      >
        <div className="rounded-md border border-border bg-card p-6 shadow-card md:p-8">
          <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{copy.lead}</p>

          <fieldset className="mt-8">
            <legend className="font-display font-bold text-foreground">{copy.issuedLegend}</legend>
            <div className="mt-3 grid gap-2">
              {issuedOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-3 rounded-md border border-border px-4 py-3 has-[:checked]:border-primary has-[:checked]:bg-primary/10"
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
            <legend className="font-display font-bold text-foreground">{copy.categoryLegend}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-3 rounded-md border border-border px-4 py-3 has-[:checked]:border-primary has-[:checked]:bg-primary/10"
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

        <aside className="rounded-md border border-border bg-card p-6 shadow-card md:p-8 lg:sticky lg:top-28">
          <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
            {copy.result}
          </p>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-foreground">{result.title}</h3>
          <p className="mt-3 text-muted-foreground">{result.text}</p>
          <p className="mt-4 text-sm text-muted-foreground">{copy.disclaimer}</p>
          <BookButton {...(result.service ? { service: result.service } : {})} variant="hero" size="lg" className="mt-6">
            {result.cta}
          </BookButton>
        </aside>
      </div>
    </section>
  );
}
