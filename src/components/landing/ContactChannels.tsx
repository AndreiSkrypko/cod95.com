import type { ReactNode } from "react";
import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS } from "@/content/landing";
import { consultPhone, PHONE_BY, PHONE_PL, useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

export function ContactChannels() {
  const { locale, m } = useLocale();
  const callPhone = consultPhone(locale);
  const copy = PAGES[locale].contactsPage;

  const offices = [
    { phone: PHONE_BY, title: copy.officeMinsk, note: copy.officeMinskNote, line: copy.minskLine },
    { phone: PHONE_PL, title: copy.officeWarsaw, note: copy.officeWarsawNote, line: copy.warsawLine },
  ];

  const hours = [
    { days: m.contacts.weekdays, time: CONTACTS.hours[0]?.time ?? "" },
    { days: m.contacts.saturday, time: CONTACTS.hours[1]?.time ?? "" },
  ];

  return (
    <div className="space-y-6">
      <ul className="grid gap-4 sm:grid-cols-2">
        {offices.map((office) => (
          <li key={office.phone.href}>
            <a
              href={office.phone.href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-background p-5 shadow-card transition-shadow hover:shadow-lift sm:rounded-3xl sm:p-6"
            >
              <span className="grid size-11 place-items-center rounded-full border border-border bg-secondary/60 transition-colors group-hover:border-primary/45">
                <Phone className="size-5 text-primary" aria-hidden />
              </span>
              <span className="mt-4 font-display text-lg font-extrabold text-foreground group-hover:text-primary">
                {office.phone.display}
              </span>
              <span className="mt-1 font-display text-sm font-bold text-foreground">{office.title}</span>
              <span className="mt-2 text-sm leading-relaxed text-muted-foreground">{office.note}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl border border-border bg-background p-5 shadow-card sm:rounded-3xl sm:p-6">
        <InfoBlock icon={Clock} title={copy.hoursTitle}>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {hours.map((h) => (
              <li key={h.days}>
                <span className="font-display font-bold text-foreground">{h.days}</span> {h.time}
              </li>
            ))}
          </ul>
        </InfoBlock>

        <div className="mt-6 border-t border-border pt-6">
          <InfoBlock icon={MapPin} title={copy.locationsTitle}>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {offices.map((office) => (
                <li key={office.title}>
                  <span className="font-display font-bold text-foreground">{office.title}</span>
                  <span className="mt-0.5 block leading-relaxed">{office.line}</span>
                </li>
              ))}
            </ul>
          </InfoBlock>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button asChild variant="hero" size="lg" className="h-12 px-6">
          <a href={callPhone.href}>
            <Phone aria-hidden />
            {copy.call}
          </a>
        </Button>
        <Button asChild variant="subtle" size="lg" className="h-12 px-6">
          <a href="#" aria-label={copy.whatsapp}>
            <MessageCircle aria-hidden />
            WhatsApp
          </a>
        </Button>
        <Button asChild variant="subtle" size="lg" className="h-12 px-6">
          <a href="#" aria-label={copy.telegram}>
            <Send aria-hidden />
            Telegram
          </a>
        </Button>
      </div>
    </div>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-secondary/60">
        <Icon className="size-5 text-primary" aria-hidden />
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-sm font-bold text-foreground">{title}</h3>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}