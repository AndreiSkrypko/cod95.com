import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const STEPS = ["КОД 95", "Замена прав", "ВНЖ"];

export function Bundle() {
  return (
    <section aria-labelledby="bundle-title" className="pb-20 lg:pb-28">
      <div className="container-page">
        <Reveal className="noise relative overflow-hidden rounded-3xl border border-primary/30 bg-surface p-8 md:p-14">
          <div className="mesh absolute inset-0 -z-10 opacity-80" aria-hidden="true" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow inline-flex items-center gap-2">
                <Layers className="size-4" aria-hidden="true" />
                Выгоднее вместе
              </p>
              <h2 id="bundle-title" className="mt-4 text-3xl font-extrabold text-foreground md:text-5xl">
                Скидка при пакете услуг
              </h2>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Закажите две услуги и больше — например, обучение на КОД 95 и замену прав — и получите
                персональную скидку. Размер рассчитаем на консультации.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-8">
                <a href="#contacts">
                  Рассчитать пакет
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <ol className="flex flex-col gap-3" aria-label="Пример пакета">
              {STEPS.map((s, i) => (
                <li key={s} className="glass flex items-center gap-4 rounded-2xl px-5 py-4">
                  <span className="font-display text-sm font-bold text-accent-foreground">0{i + 1}</span>
                  <span className="font-display text-lg font-bold text-foreground">{s}</span>
                  {i < STEPS.length - 1 && <span className="ml-auto text-2xl font-light text-primary">+</span>}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
