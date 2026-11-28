import type { ServiceId } from "@/content/landing";
import classroom from "@/assets/classroom.jpg";
import articleBelarus from "@/assets/articles/article-belarus-varshava.jpg";
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
  articles: { src: articleBelarus, alt: "Статьи BAZA: КОД 95, документы и подготовка в Польше" },
} as const satisfies Record<string, PageVisual>;

const SERVICE_VISUALS: Record<ServiceId, PageVisual> = {
  "short-course": { src: classroom, alt: "Учебный класс с видом на город" },
  "long-course": { src: trainingTrucks, alt: "Учебный автопарк на площадке" },
  "code95-lt-short": { src: europeMap, alt: "Периодическое обучение КОД 95 в Литве" },
  "code95-lt-long": { src: europeMap, alt: "Первоначальная квалификация КОД 95 в Литве" },
  "driver-card": { src: classDetail, alt: "Подготовка документов для карты водителя" },
  "lt-retrain": { src: lifeNight, alt: "Рейс по европейской трассе" },
};

export function getServiceVisual(id: ServiceId): PageVisual {
  return SERVICE_VISUALS[id];
}
