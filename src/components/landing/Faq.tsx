import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/content/landing";
import { Reveal, SectionHeading } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y border-t border-border bg-surface/40">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Вопросы"
          title={<span id="faq-title">Частые вопросы</span>}
          lead="Не нашли ответ? Спросите на консультации — это бесплатно."
        />
        <Reveal>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`q${i}`} className="surface-card rounded-2xl border px-6 data-[state=open]:border-primary/40">
                <AccordionTrigger className="py-5 font-display text-base font-bold text-foreground hover:no-underline md:text-lg [&>svg]:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
