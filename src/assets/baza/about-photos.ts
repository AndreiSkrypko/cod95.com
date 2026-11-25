/** Реальные фото учебного центра BAZA — страница «О нас». */

import aboutHeroDaf from "./about-hero-daf.jpg";
import aboutClassroomMain from "./about-classroom-main.jpg";
import aboutClassPosters from "./about-class-posters.jpg";
import aboutClassDigital from "./about-class-digital.jpg";
import aboutClassProjector from "./about-class-projector.jpg";
import aboutYardFleet from "./about-yard-fleet.jpg";
import aboutYardWide from "./about-yard-wide.jpg";
import aboutTruckPractice from "./about-truck-practice.jpg";
import aboutTruckRedCab from "./about-truck-red-cab.jpg";
import aboutSimulatorPedals from "./about-simulator-pedals.jpg";

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