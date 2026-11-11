import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CONTACTS, SERVICE_OPTIONS } from "@/content/landing";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80, "Слишком длинное имя"),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s()-]{7,20}$/, "Укажите телефон в международном формате"),
  service: z.string().min(1, "Выберите услугу"),
  comment: z.string().trim().max(1000, "Не более 1000 символов").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass = "h-12 rounded-xl border-input bg-background/60 text-base";

export function Contacts() {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const parsed = schema.safeParse({
      name: data.get("name"),
      phone: data.get("phone"),
      service,
      comment: data.get("comment") || undefined,
    });
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        next[key] ??= issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    // TODO: connect to a real backend / CRM. Currently a front-end demo only.
    toast.success("Заявка принята", { description: "Мы перезвоним вам в рабочее время." });
    form.reset();
    setService("");
  };

  return (
    <section id="contacts" aria-labelledby="contacts-title" className="section-y border-t border-border">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Контакты</p>
          <h2 id="contacts-title" className="mt-4 text-3xl font-extrabold text-foreground md:text-5xl">
            Получите бесплатную консультацию
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Расскажите о вашей ситуации — подберём курс и рассчитаем стоимость под ваши задачи.
          </p>

          <ul className="mt-10 space-y-5">
            {CONTACTS.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="group flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full border border-border bg-secondary/60 transition-colors group-hover:border-primary/50">
                    <Phone className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-xl font-bold text-foreground">{p.display}</span>
                    <span className="block text-sm text-muted-foreground">Офис в {p.label === "Минск" ? "Минске" : "Варшаве"}</span>
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
              <a href={CONTACTS.phones[0].href}>
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
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="surface-card rounded-3xl p-6 md:p-10" aria-label="Заявка на консультацию">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-display font-semibold text-foreground">Имя</Label>
                <Input id="name" name="name" autoComplete="name" placeholder="Как к вам обращаться" className={fieldClass} aria-invalid={!!errors.name} />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-display font-semibold text-foreground">Телефон</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+375 29 000-00-00" className={fieldClass} aria-invalid={!!errors.phone} />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="service" className="font-display font-semibold text-foreground">Услуга</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="service" className={fieldClass} aria-invalid={!!errors.service}>
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_OPTIONS.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="comment" className="font-display font-semibold text-foreground">Комментарий</Label>
              <Textarea id="comment" name="comment" rows={4} placeholder="Например: есть права категории C+E, хочу пройти КОД 95 в марте" className="rounded-xl border-input bg-background/60 text-base" />
              {errors.comment && <p className="text-sm text-destructive">{errors.comment}</p>}
            </div>

            <Button type="submit" variant="hero" size="xl" className="mt-7 w-full">
              Отправить заявку
            </Button>
            <p className="mt-4 text-sm text-ink-soft">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Мы используем их только
              для связи с вами и не передаём третьим лицам.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
