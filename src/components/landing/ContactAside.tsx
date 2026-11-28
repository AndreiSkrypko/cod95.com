import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS } from "@/content/landing";
import { consultPhone, PHONE_BY, PHONE_PL, useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

export function ContactAside() {
  const { locale, m } = useLocale();
  const callPhone = consultPhone(locale);
  const copy = PAGES[locale].contactsPage;
  const phones = [
    { ...PHONE_BY, label: copy.officeMinsk, note: copy.officeMinskNote },
    { ...PHONE_PL, label: copy.officeWarsaw, note: copy.officeWarsawNote },
  ];
  const hours = [
    { days: m.contacts.weekdays, time: CONTACTS.hours[0]?.time ?? "" },
    { days: m.contacts.saturday, time: CONTACTS.hours[1]?.time ?? "" },
  ];

  return (
    <div>
      <ul className="mt-6 space-y-5">
        {phones.map((p) => (
          <li key={p.href}>
            <a href={p.href} className="group flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-full border border-border bg-secondary/60 transition-colors group-hover:border-primary/50">
                <Phone className="size-5 text-primary" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-xl font-bold text-foreground">
                  {p.display}
                </span>
                <span className="block text-sm font-semibold text-foreground">{p.label}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{p.note}</span>
              </span>
            </a>
          </li>
        ))}
        <li className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-full border border-border bg-secondary/60">
            <Clock className="size-5 text-primary" aria-hidden="true" />
          </span>
          <span className="text-muted-foreground">
            {hours.map((h) => (
              <span key={h.days} className="block">
                <span className="font-display font-semibold text-foreground">{h.days}</span>{" "}
                {h.time}
              </span>
            ))}
          </span>
        </li>
        <li className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border bg-secondary/60">
            <MapPin className="size-5 text-primary" aria-hidden="true" />
          </span>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-display font-semibold text-foreground">{copy.officeMinsk}</span>
              {" — "}
              {copy.minskLine}
            </p>
            <p>
              <span className="font-display font-semibold text-foreground">
                {copy.officeWarsaw}
              </span>
              {" — "}
              {copy.warsawLine}
            </p>
          </div>
        </li>
      </ul>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild variant="hero" size="lg" className="h-12 px-6">
          <a href={callPhone.href}>
            <Phone aria-hidden="true" />
            {copy.call}
          </a>
        </Button>
        <Button asChild variant="subtle" size="lg" className="h-12 px-6">
          <a href="#" aria-label={copy.whatsapp}>
            <MessageCircle aria-hidden="true" />
            WhatsApp
          </a>
        </Button>
        <Button asChild variant="subtle" size="lg" className="h-12 px-6">
          <a href="#" aria-label={copy.telegram}>
            <Send aria-hidden="true" />
            Telegram
          </a>
        </Button>
      </div>
    </div>
  );
}
