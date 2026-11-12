import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { FaqList } from "./FaqList";

export function FaqTeaser() {
  return (
    <section id="faq" aria-labelledby="faq-teaser-title" className="section-y border-t border-border bg-background-deep">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Вопросы"
          title={<span id="faq-teaser-title">Частые вопросы</span>}
          lead="Кратко на главной. Полная информация о КОД 95 и услугах — на отдельной странице."
        />
        <Reveal>
          <FaqList limit={4} />
          <Button asChild variant="subtle" size="lg" className="mt-6 h-12">
            <Link to="/informaciya">
              Вся информация
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
