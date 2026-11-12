import type { ServiceId } from "@/content/landing";
import classroom from "@/assets/classroom.jpg";
import classDetail from "@/assets/class-detail.jpg";
import consultOffice from "@/assets/consult-office.jpg";
import europeMap from "@/assets/europe-map.jpg";
import heroTruck from "@/assets/hero-truck.jpg";
import lifeBriefing from "@/assets/life-briefing.jpg";
import lifeNight from "@/assets/life-night.jpg";
import offerJob from "@/assets/offer-job.jpg";
import offerResidence from "@/assets/offer-residence.jpg";
import storyHighway from "@/assets/story-highway.jpg";
import trainingTrucks from "@/assets/training-trucks.jpg";
import truckPractice from "@/assets/truck-practice.jpg";

export type PageVisual = { src: string; alt: string };

export const PAGE_VISUALS = {
  about: { src: storyHighway, alt: "Ночная трасса из кабины тягача" },
  info: { src: lifeBriefing, alt: "Инструктаж перед практикой" },
  contacts: { src: offerResidence, alt: "Вечерняя улица у жилых домов" },
  zapis: { src: consultOffice, alt: "Консультация в учебном центре" },
  thanks: { src: lifeNight, alt: "Ночной рейс по трассе" },
  catalog: { src: heroTruck, alt: "Тягач на вечерней трассе" },
} as const satisfies Record<string, PageVisual>;

const SERVICE_VISUALS: Record<ServiceId, PageVisual> = {
  "short-course": { src: classroom, alt: "Учебный класс с видом на город" },
  "long-course": { src: trainingTrucks, alt: "Учебный автопарк на площадке" },
  "long-no-exam": { src: lifeBriefing, alt: "Инструктор у учебного тягача" },
  "long-online": { src: consultOffice, alt: "Занятие и консультация онлайн" },
  "code95-lt": { src: europeMap, alt: "Маршруты по Европе" },
  residence: { src: offerResidence, alt: "Вечерняя улица у жилых домов" },
  adr: { src: truckPractice, alt: "Практика на учебной площадке" },
  invitation: { src: classDetail, alt: "Подготовка документов" },
  license: { src: classDetail, alt: "Документы для замены прав" },
  "extra-driving": { src: truckPractice, alt: "Дополнительное вождение на тягаче" },
  "lt-retrain": { src: lifeNight, alt: "Рейс по европейской трассе" },
  employment: { src: offerJob, alt: "Водитель у тягача на площадке" },
  company: { src: consultOffice, alt: "Консультация по компании" },
};

export function getServiceVisual(id: ServiceId): PageVisual {
  return SERVICE_VISUALS[id];
}
