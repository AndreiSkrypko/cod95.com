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
          className="group surface-card relative overflow-hidden border px-6 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-0.5 hover:shadow-lift data-[state=open]:border-primary/60 data-[state=open]:shadow-glow"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/40 group-data-[state=open]:bg-primary"
          />
          <AccordionTrigger className="gap-6 py-5 text-left font-display text-base font-bold text-foreground hover:no-underline md:text-lg [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:rounded-full [&>svg]:border [&>svg]:border-border-strong [&>svg]:p-1 [&>svg]:box-content [&>svg]:text-primary [&>svg]:transition-all [&>svg]:duration-500 group-data-[state=open]:[&>svg]:border-primary/60 group-data-[state=open]:[&>svg]:bg-primary/15">
            <span className="flex items-baseline gap-5 md:gap-8">
              <span className="font-serif text-xl font-medium italic text-ink-soft transition-colors duration-500 group-hover:text-primary/80 group-data-[state=open]:text-primary md:text-2xl">
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
