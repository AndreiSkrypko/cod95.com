import {
  ArrowUpRight,
  Building,
  CreditCard,
  GraduationCap,
  Home,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import classroom from "@/assets/classroom.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import { Reveal, SectionHeading } from "./Reveal";

function ServiceCard({
  className,
  index,
  icon: Icon,
  title,
  text,
  tags,
  badge,
  image,
  highlight,
  delay,
  imageFill,
}: {
  className?: string;
  index: number;
  icon: LucideIcon;
  title: string;
  text: string;
  tags?: string[];
  badge?: ReactNode;
  image?: { src: string; alt: string };
  highlight?: boolean;
  delay?: number;
  imageFill?: boolean;
}) {
  return (
    <Reveal
      delay={delay}
      as="article"
      className={cn(
        "surface-card card-interactive spotlight group relative flex flex-col overflow-hidden rounded-3xl",
        highlight && "border-primary/35",
        className,
      )}
    >
      {image && (
        <Reveal
          variant="clip"
          className={cn(
            "relative h-64 overflow-hidden md:h-72",
            imageFill && "md:h-80 lg:h-auto lg:min-h-[26rem] lg:flex-1",
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width={1440}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        </Reveal>
      )}
      {!image && (
        <Icon
          className="pointer-events-none absolute -bottom-12 -right-8 size-64 text-primary opacity-[0.05] transition-[opacity,transform] duration-1000 ease-out-expo group-hover:-translate-y-2 group-hover:opacity-[0.1]"
          strokeWidth={0.8}
          aria-hidden="true"
        />
      )}
      {highlight && (
        <div
          className="mesh pointer-events-none absolute inset-0 -z-10 opacity-70"
          aria-hidden="true"
        />
      )}

      <div className={cn("relative flex flex-col p-8 md:p-10", !imageFill && "flex-1")}>
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-2xl border border-primary/30 bg-accent text-primary">
              <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="font-serif text-2xl italic text-ink-soft">0{index}</span>
          </span>
          {badge}
        </div>
        <h3 className="mt-8 text-2xl font-extrabold text-foreground md:text-[2rem]">{title}</h3>
        <p className="mt-4 max-w-xl text-muted-foreground">{text}</p>
        {tags && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t}>
                <Badge variant="chip">{t}</Badge>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-8">
          {/* Placeholder CTA: service pages don't exist yet. */}
          <a
            href="#contacts"
            aria-label={`Подробнее: ${title}`}
            className="inline-flex items-center gap-3 font-display text-sm font-bold text-foreground"
          >
            <span className="relative">
              Подробнее
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
            </span>
            <span className="grid size-10 place-items-center rounded-full border border-border-strong transition-all duration-700 ease-out-expo group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-y border-t border-border bg-background-deep"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Услуги"
            title={
              <span id="services-title">
                Всё для легальной работы <span className="accent-serif">водителем в&nbsp;ЕС</span>
              </span>
            }
          />
          <Reveal className="max-w-md text-lg text-muted-foreground lg:pb-3">
            Пять направлений, которые закрывают путь от квалификации до собственной компании в
            Польше.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12 xl:mt-20">
          <ServiceCard
            className="lg:col-span-7 lg:row-span-2"
            index={1}
            icon={GraduationCap}
            title="Обучение на КОД 95 в Польше"
            text="Официальное обучение в аккредитованном центре в Варшаве. Длинный курс — для первичной квалификации, короткий — для продления. Сопровождаем от записи до получения документов."
            tags={["Длинный курс", "Короткий курс", "Варшава", "Сопровождение"]}
            image={{ src: classroom, alt: "Учебный класс в Варшаве с видом на город" }}
            imageFill
          />
          <ServiceCard
            className="lg:col-span-5"
            index={2}
            highlight
            delay={80}
            icon={Sparkles}
            title="Литовский КОД 95"
            text="Новое направление: квалификация в Литве, признаётся во всех странах ЕС. Удобно для работы с литовскими перевозчиками."
            badge={<Badge variant="new">Новинка</Badge>}
          />
          <ServiceCard
            className="lg:col-span-5"
            index={3}
            delay={140}
            icon={CreditCard}
            title="Замена прав на польские"
            text="Обмен водительского удостоверения на польское: проверим документы, подготовим заявление, проведём через все этапы."
          />
          <ServiceCard
            className="lg:col-span-6"
            index={4}
            delay={80}
            icon={Building}
            title="Транспортная компания в Польше"
            text="Регистрация компании, получение лицензий и дальнейшая поддержка — чтобы вы работали на себя легально."
            tags={["Регистрация", "Лицензии", "Поддержка"]}
            image={{ src: trainingTrucks, alt: "Автопарк грузовиков на площадке" }}
          />
          <ServiceCard
            className="lg:col-span-6"
            index={5}
            delay={140}
            icon={Home}
            title="ВНЖ в Польше"
            text="Оформление вида на жительство для водителей и их семей: подбор основания, сбор документов, подача и контроль сроков."
            tags={["Подбор основания", "Документы", "Контроль сроков"]}
          />
        </div>
      </div>
    </section>
  );
}
