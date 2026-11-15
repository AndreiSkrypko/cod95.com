import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

export function FaqList({ limit }: { limit?: number }) {
  const { locale } = useLocale();
  const faq = PAGES[locale].faq;
  const items = limit ? faq.slice(0, limit) : faq;
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-3">
      {items.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`q${i}`}
          className="surface-card rounded-2xl border px-6 data-[state=open]:border-primary/50"
        >
          <AccordionTrigger className="gap-6 py-5 text-left font-display text-base font-bold text-foreground hover:no-underline md:text-lg [&>svg]:size-5 [&>svg]:text-primary">
            <span className="flex items-baseline gap-5 md:gap-8">
              <span className="font-serif text-xl font-medium italic text-ink-soft transition-colors group-data-[state=open]:text-primary md:text-2xl">
                0{i + 1}
              </span>
              {item.q}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-5 pl-10 text-base text-muted-foreground md:pl-16 md:text-lg">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
