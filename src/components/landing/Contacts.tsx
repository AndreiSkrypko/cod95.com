import { Link } from "@tanstack/react-router";
import truckPractice from "@/assets/truck-practice.jpg";
import { ContactAside } from "./ContactAside";
import { BookButton } from "./BookingDialog";
import { Reveal } from "./Reveal";

export function Contacts() {
  return (
    <section
      id="contacts"
      aria-labelledby="contacts-title"
      className="noise section-y relative overflow-hidden border-t border-border"
    >
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <img
          src={truckPractice}
          alt=""
          width={1440}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>
      <div className="container-page grid gap-14 xl:grid-cols-12 xl:gap-10">
        <Reveal className="xl:col-span-5">
          <p className="eyebrow eyebrow-rule">Контакты</p>
          <h2
            id="contacts-title"
            className="mt-5 text-[2.25rem] font-extrabold text-foreground md:text-6xl xl:text-[4.25rem]"
          >
            Получите <span className="accent-serif">бесплатную</span> консультацию
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground md:text-xl">
            Расскажите о вашей ситуации — подберём курс и рассчитаем стоимость под ваши задачи.
          </p>
          <ContactAside />
          <Link to="/kontakty" className="mt-6 inline-block text-sm font-semibold text-primary">
            Страница контактов →
          </Link>
        </Reveal>
        <Reveal delay={120} className="xl:col-span-6 xl:col-start-7">
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <p className="font-display text-2xl font-extrabold text-foreground">Заявка на консультацию</p>
            <p className="mt-3 text-muted-foreground">Форма откроется в окне и не уведёт со страницы.</p>
            <BookButton variant="hero" size="xl" className="mt-8">
              Записаться
            </BookButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
