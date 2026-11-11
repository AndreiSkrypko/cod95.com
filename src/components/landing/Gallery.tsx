import classroom from "@/assets/classroom.jpg";
import classDetail from "@/assets/class-detail.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import truckPractice from "@/assets/truck-practice.jpg";
import truckCab from "@/assets/truck-cab.jpg";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const IMAGES = [
  {
    src: trainingTrucks,
    alt: "Учебные грузовики в ряд на полигоне",
    caption: "Учебный автопарк",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    src: classroom,
    alt: "Учебный класс с видом на Варшаву",
    caption: "Классы в Варшаве",
    span: "md:col-span-2",
  },
  {
    src: classDetail,
    alt: "Учебные материалы курса КОД 95 на столе",
    caption: "Материалы курса",
    span: "md:col-span-2",
  },
  {
    src: truckPractice,
    alt: "Тягач на учебной площадке",
    caption: "Практика на площадке",
    span: "md:col-span-3",
  },
  {
    src: truckCab,
    alt: "Кабина современного грузовика",
    caption: "Современные кабины",
    span: "md:col-span-3",
  },
];

export function Gallery() {
  return (
    <section
      aria-labelledby="gallery-title"
      className="section-y border-t border-border bg-background-deep"
    >
      <div className="container-page flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Галерея"
          title={
            <span id="gallery-title">
              Классы <span className="accent-serif">и техника</span>
            </span>
          }
        />
        <Reveal className="max-w-md text-lg text-muted-foreground lg:pb-3">
          Аккредитованный центр, современный автопарк и учебные площадки — всё, что нужно для
          уверенного старта.
        </Reveal>
      </div>

      <div className="mt-16 grid auto-rows-[18rem] gap-3 px-3 md:mt-20 md:grid-cols-6 md:auto-rows-[20rem] md:px-4 xl:auto-rows-[24rem]">
        {IMAGES.map((img, i) => (
          <Reveal
            key={img.caption}
            variant="clip"
            delay={(i % 3) * 120}
            as="figure"
            className={cn("group relative overflow-hidden rounded-2xl", img.span)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1440}
              height={1080}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background-deep/0 transition-colors duration-700 group-hover:bg-background-deep/20" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background-deep/85 to-transparent" />
            <figcaption className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-4">
              <span className="font-display text-lg font-bold text-foreground md:text-xl">
                {img.caption}
              </span>
              <span className="font-serif text-xl italic text-primary">0{i + 1}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
