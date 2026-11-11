import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/content/landing";
import { Reveal, SectionHeading } from "./Reveal";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section-y border-t border-border bg-background-deep"
    >
      <div className="container-page grid gap-14 xl:grid-cols-12 xl:gap-10">
        <div className="xl:col-span-5">
          <div className="xl:sticky xl:top-32">
            <SectionHeading
              eyebrow="Вопросы"
              title={
                <span id="faq-title">
                  Частые <span className="accent-serif">вопросы</span>
                </span>
              }
              lead="Не нашли ответ? Спросите на консультации — это бесплатно."
            />
            <Reveal delay={120}>
              <Button asChild variant="subtle" size="xl" className="mt-10">
                <a href="#contacts">
                  Задать вопрос
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
        <Reveal className="xl:col-span-7">
          <Accordion type="single" collapsible className="border-t border-border-strong">
            {FAQ.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`q${i}`}
                className="group border-b border-border-strong transition-colors duration-500 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="gap-6 py-7 text-left font-display text-lg font-bold text-foreground hover:no-underline md:text-2xl [&>svg]:size-5 [&>svg]:text-primary">
                  <span className="flex items-baseline gap-5 md:gap-8">
                    <span className="font-serif text-xl font-medium italic text-ink-soft transition-colors duration-500 group-data-[state=open]:text-primary md:text-2xl">
                      0{i + 1}
                    </span>
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pl-10 text-base text-muted-foreground md:pl-16 md:text-lg">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
