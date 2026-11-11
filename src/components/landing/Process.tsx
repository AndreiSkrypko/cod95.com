import { ClipboardList, FileCheck2, GraduationCap, MessageSquare } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  { icon: ClipboardList, title: "Заявка", text: "Оставляете заявку на сайте или звоните — перезвоним в рабочее время в течение часа." },
  { icon: MessageSquare, title: "Консультация", text: "Разбираем вашу ситуацию, подбираем курс и фиксируем стоимость в договоре." },
  { icon: FileCheck2, title: "Документы", text: "Готовим и проверяем пакет документов, записываем в ближайшую группу." },
  { icon: GraduationCap, title: "Обучение в Польше", text: "Проходите обучение в Варшаве, мы на связи на каждом этапе до получения кода." },
];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-y border-t border-border bg-surface/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Как мы работаем"
          title={<span id="process-title">Четыре шага до КОД 95</span>}
          lead="Понятный маршрут без лишних поездок и очередей."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-[1.375rem] top-0 h-full w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-0 md:top-[1.375rem] md:h-px md:w-full md:bg-gradient-to-r" aria-hidden="true" />
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="relative pl-16 md:pl-0">
              <span className="absolute left-0 top-0 grid size-11 place-items-center rounded-full border border-primary/40 bg-background shadow-glow md:relative">
                <Icon className="size-5 text-primary" aria-hidden="true" />
              </span>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-ink-soft md:mt-7">Шаг {i + 1}</p>
              <h3 className="mt-2 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
