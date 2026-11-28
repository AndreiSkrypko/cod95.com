/** Реальные фото учебного центра BAZA — страница «О нас». */

import aboutHeroDaf from "./about-hero-daf.webp";
import aboutClassroomMain from "./about-classroom-main.webp";
import aboutClassPosters from "./about-class-posters.webp";
import aboutClassDigital from "./about-class-digital.webp";
import aboutClassProjector from "./about-class-projector.webp";
import aboutYardFleet from "./about-yard-fleet.webp";
import aboutYardWide from "./about-yard-wide.webp";
import aboutTruckPractice from "./about-truck-practice.webp";
import aboutTruckRedCab from "./about-truck-red-cab.webp";
import aboutSimulatorPedals from "./about-simulator-pedals.webp";

export const ABOUT_PHOTOS = {
  hero: aboutHeroDaf,
  philosophy: aboutClassroomMain,
  history: aboutYardFleet,
  practice: aboutTruckRedCab,
  finale: aboutClassProjector,
  gallery: {
    class: aboutClassPosters,
    truck: aboutTruckPractice,
    yard: aboutYardWide,
    sim: aboutSimulatorPedals,
    lesson: aboutClassDigital,
  },
} as const;
