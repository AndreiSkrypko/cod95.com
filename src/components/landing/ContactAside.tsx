import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS, PRIMARY_PHONE } from "@/content/landing";

export function ContactAside() {
  return (
  <div>
    <ul className="mt-6 space-y-5">
      {CONTACTS.phones.map((p) => (
        <li key={p.href}>
          <a href={p.href} className="group flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-full border border-border bg-secondary/60 transition-colors group-hover:border-primary/50">
              <Phone className="size-5 text-primary" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-xl font-bold text-foreground">{p.display}</span>
              <span className="block text-sm text-muted-foreground">
                Офис в {p.label === "Минск" ? "Минске" : "Варшаве"}
              </span>
            </span>
          </a>
        </li>
      ))}
      <li className="flex items-center gap-4">
        <span className="grid size-12 place-items-center rounded-full border border-border bg-secondary/60">
          <Clock className="size-5 text-primary" aria-hidden="true" />
        </span>
        <span className="text-muted-foreground">
          {CONTACTS.hours.map((h) => (
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
        <span className="text-muted-foreground">Собственные офисы: Минск и Варшава</span>
      </li>
    </ul>
    <div className="mt-10 flex flex-wrap gap-3">
      <Button asChild variant="hero" size="lg" className="h-12 px-6">
        <a href={PRIMARY_PHONE.href}>
          <Phone aria-hidden="true" />
          Позвонить
        </a>
      </Button>
      <Button asChild variant="subtle" size="lg" className="h-12 px-6">
        <a href="#" aria-label="Написать в WhatsApp">
          <MessageCircle aria-hidden="true" />
          WhatsApp
        </a>
      </Button>
      <Button asChild variant="subtle" size="lg" className="h-12 px-6">
        <a href="#" aria-label="Написать в Telegram">
          <Send aria-hidden="true" />
          Telegram
        </a>
      </Button>
    </div>
  </div>
  );
}
