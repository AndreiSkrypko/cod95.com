import { ArrowUpRight, Building, CreditCard, GraduationCap, Home, Sparkles, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import classroom from "@/assets/classroom.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import { Reveal, SectionHeading } from "./Reveal";

function MoreButton({ label }: { label: string }) {
  // Placeholder CTA: service pages don't exist yet.
  return (
    <Button asChild variant="subtle" size="sm" className="h-10 px-4">
      <a href="#contacts" aria-label={`Подробнее: ${label}`}>
        Подробнее
        <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}

function ServiceCard({
  className,
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
        "surface-card card-interactive group relative flex flex-col overflow-hidden rounded-3xl",
        highlight && "border-primary/40 shadow-glow",
        className,
      )}
    >
      {image && (
        <div className={cn("relative h-56 overflow-hidden", imageFill && "md:h-auto md:flex-1")}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width={1440}
            height={1088}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
        </div>
      )}
      {!image && (
        <Icon
          className="pointer-events-none absolute -bottom-10 -right-6 size-56 text-primary opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]"
          strokeWidth={1}
          aria-hidden="true"
        />
      )}
      {highlight && (
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      )}
      <div className="relative flex flex-1 flex-col p-7 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-accent text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          {badge}
        </div>
        <h3 className="mt-6 text-2xl font-extrabold text-foreground">{title}</h3>
        <p className="mt-3 text-muted-foreground">{text}</p>
        {tags && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t}>
                <Badge variant="chip">{t}</Badge>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-7">
          <MoreButton label={title} />
        </div>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y border-t border-border">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Услуги"
            title={<span id="services-title">Всё для легальной работы водителем в&nbsp;ЕС</span>}
          />
          <Reveal className="max-w-sm text-muted-foreground">
            Пять направлений, которые закрывают путь от квалификации до собственной компании в Польше.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
          <ServiceCard
            className="lg:col-span-7 lg:row-span-2"
            icon={GraduationCap}
            title="Обучение на КОД 95 в Польше"
            text="Официальное обучение в аккредитованном центре в Варшаве. Длинный курс — для первичной квалификации, короткий — для продления. Сопровождаем от записи до получения документов."
            tags={["Длинный курс", "Короткий курс", "Варшава", "Сопровождение"]}
            image={{ src: classroom, alt: "Учебный класс в Варшаве с проектором" }}
            imageFill
          />
          <ServiceCard
            className="lg:col-span-5"
            highlight
            delay={80}
            icon={Sparkles}
            title="Литовский КОД 95"
            text="Новое направление: квалификация в Литве, признаётся во всех странах ЕС. Удобно для работы с литовскими перевозчиками."
            badge={<Badge variant="new">Новинка</Badge>}
          />
          <ServiceCard
            className="lg:col-span-5"
            delay={140}
            icon={CreditCard}
            title="Замена прав на польские"
            text="Обмен водительского удостоверения на польское: проверим документы, подготовим заявление, проведём через все этапы."
          />
          <ServiceCard
            className="lg:col-span-6"
            delay={80}
            icon={Building}
            title="Транспортная компания в Польше"
            text="Регистрация компании, получение лицензий и дальнейшая поддержка — чтобы вы работали на себя легально."
            tags={["Регистрация", "Лицензии", "Поддержка"]}
            image={{ src: trainingTrucks, alt: "Учебные грузовики на площадке" }}
          />
          <ServiceCard
            className="lg:col-span-6"
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
