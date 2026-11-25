import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS } from "@/content/landing";
import { heroPhone, PHONE_BY, PHONE_PL, useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

export function ContactAside() {
  const { locale, m } = useLocale();
  const phone = heroPhone(locale);
  const copy = PAGES[locale].contactsPage;
  const phones = [{ ...PHONE_PL, label: copy.officeWarsaw }];
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
                <span className="block font-display text-xl font-bold text-foreground">{p.display}</span>
                <span className="block text-sm text-muted-foreground">{p.label}</span>
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
                <span className="font-display font-semibold text-foreground">{h.days}</span> {h.time}
              </span>
            ))}
          </span>
        </li>
        <li className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-full border border-border bg-secondary/60">
            <MapPin className="size-5 text-primary" aria-hidden="true" />
          </span>
          <span className="text-muted-foreground">{copy.officesLine}</span>
        </li>
      </ul>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild variant="hero" size="lg" className="h-12 px-6">
          <a href={phone.href}>
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
