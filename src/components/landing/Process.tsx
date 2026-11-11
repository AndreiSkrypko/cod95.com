import { ClipboardList, FileCheck2, GraduationCap, MessageSquare } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Заявка",
    text: "Оставляете заявку на сайте или звоните — перезвоним в рабочее время в течение часа.",
  },
  {
    icon: MessageSquare,
    title: "Консультация",
    text: "Разбираем вашу ситуацию, подбираем курс и фиксируем стоимость в договоре.",
  },
  {
    icon: FileCheck2,
    title: "Документы",
    text: "Готовим и проверяем пакет документов, записываем в ближайшую группу.",
  },
  {
    icon: GraduationCap,
    title: "Обучение в Польше",
    text: "Проходите обучение в Варшаве, мы на связи на каждом этапе до получения кода.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="section-y border-t border-border"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Как мы работаем"
            title={
              <span id="process-title">
                Четыре шага <span className="accent-serif">до КОД 95</span>
              </span>
            }
          />
          <Reveal className="max-w-md text-lg text-muted-foreground lg:pb-3">
            Понятный маршрут без лишних поездок и очередей.
          </Reveal>
        </div>

        <div className="relative mt-20">
          <div
            className="absolute inset-x-0 top-6 hidden h-px bg-border md:block"
            aria-hidden="true"
          />
          <Reveal
            variant="line"
            className="absolute inset-x-0 top-6 hidden h-px bg-gradient-accent md:block"
          />
          <div
            className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:hidden"
            aria-hidden="true"
          />

          <ol className="relative grid gap-12 md:grid-cols-4 md:gap-8 xl:gap-14">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={300 + i * 220}
                className="group relative pl-20 md:pl-0"
              >
                <span className="absolute left-0 top-0 grid size-12 place-items-center rounded-full border border-primary/45 bg-background shadow-glow transition-colors duration-500 group-hover:bg-primary md:relative">
                  <Icon
                    className="size-5 text-primary transition-colors duration-500 group-hover:text-primary-foreground"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>
                <p className="font-serif text-5xl italic leading-none text-primary/70 md:mt-10 xl:text-6xl">
                  0{i + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
