import classroom from "@/assets/classroom.jpg";
import classDetail from "@/assets/class-detail.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import truckPractice from "@/assets/truck-practice.jpg";
import truckCab from "@/assets/truck-cab.jpg";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const ROWS = [
  [
    { src: classroom, alt: "Учебный класс с проектором и видом на город", caption: "Учебный класс", span: "md:col-span-2" },
    { src: classDetail, alt: "Учебные материалы курса КОД 95 на столе", caption: "Материалы курса", span: "" },
  ],
  [
    { src: truckPractice, alt: "Тягач на учебной площадке", caption: "Практика на площадке", span: "" },
    { src: truckCab, alt: "Кабина современного грузовика", caption: "Современные кабины", span: "" },
    { src: trainingTrucks, alt: "Учебные грузовики в ряд на полигоне", caption: "Учебный автопарк", span: "" },
  ],
];

export function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow="Галерея" title={<span id="gallery-title">Классы и техника</span>} />
        <div className="mt-12 space-y-4">
          {ROWS.map((row, r) => (
            <div key={r} className="grid gap-4 md:grid-cols-3">
              {row.map((img, i) => (
                <Reveal key={img.caption} delay={i * 80} as="figure" className={cn("group relative overflow-hidden rounded-3xl border border-border", img.span)}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1440}
                    height={1088}
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] md:aspect-auto md:h-72"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-4 left-5 font-display text-sm font-bold text-foreground">{img.caption}</figcaption>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
