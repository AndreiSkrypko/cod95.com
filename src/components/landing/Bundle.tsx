import { ArrowRight, Layers } from "lucide-react";
import { BookButton } from "./BookingDialog";
import truckCab from "@/assets/truck-cab.jpg";
import { Reveal } from "./Reveal";

const STEPS = ["КОД 95", "Замена прав", "ВНЖ"];

export function Bundle() {
  return (
    <section aria-labelledby="bundle-title" className="bg-background-deep pb-24 lg:pb-32">
      <div className="container-page">
        <Reveal className="noise relative grid overflow-hidden rounded-[2rem] border border-primary/25 bg-surface lg:grid-cols-12">
          <div className="mesh absolute inset-0 -z-10 opacity-80" aria-hidden="true" />

          <div className="relative p-8 md:p-14 lg:col-span-7 xl:p-20">
            <p className="eyebrow eyebrow-rule">
              <Layers className="size-4" aria-hidden="true" />
              Выгоднее вместе
            </p>
            <h2
              id="bundle-title"
              className="mt-6 text-4xl font-extrabold text-foreground md:text-6xl xl:text-7xl"
            >
              Скидка при <span className="accent-serif">пакете</span> услуг
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Закажите две услуги и больше — например, обучение на КОД 95 и замену прав — и получите
              персональную скидку. Размер рассчитаем на консультации.
            </p>

            <ol
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              aria-label="Пример пакета"
            >
              {STEPS.map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="glass flex items-center gap-3 rounded-full py-2.5 pl-2.5 pr-5">
                    <span className="grid size-8 place-items-center rounded-full bg-accent font-display text-xs font-bold text-accent-foreground">
                      0{i + 1}
                    </span>
                    <span className="font-display font-bold text-foreground">{s}</span>
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="hidden font-serif text-3xl italic text-primary sm:inline">
                      +
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <BookButton variant="hero" size="xl" className="mt-10">
              Рассчитать пакет
              <ArrowRight aria-hidden="true" />
            </BookButton>
          </div>

          <Reveal
            variant="clip"
            delay={150}
            className="relative min-h-80 lg:col-span-5 lg:min-h-full"
          >
            <img
              src={truckCab}
              alt="Кабина современного грузовика на закате"
              width={1440}
              height={1080}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-surface lg:via-surface/10" />
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
