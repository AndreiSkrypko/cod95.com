import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SERVICE_OPTIONS } from "@/content/landing";

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

const fieldClass =
  "h-13 rounded-xl border-input bg-background-deep/50 text-base transition-colors focus-visible:border-primary/60";

export function LeadForm({
  title = "Заявка на консультацию",
  defaultService = "",
  formId,
  plain = false,
}: {
  title?: string;
  defaultService?: string;
  formId?: string;
  plain?: boolean;
}) {
  const navigate = useNavigate();
  const [service, setService] = useState(defaultService);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    setService(defaultService);
  }, [defaultService]);

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
    form.reset();
    void navigate({ to: "/spasibo" });
  };

  return (
    <form
      id={formId}
      onSubmit={onSubmit}
      noValidate
      className={plain ? "space-y-0" : "glass rounded-[2rem] p-6 shadow-card md:p-12"}
      aria-label={title || "Заявка на консультацию"}
    >
      {title ? (
        <p className="mb-8 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground md:text-3xl">
          {title}
        </p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${formId ?? "lead"}-name`} className="font-display font-semibold text-foreground">
            Имя
          </Label>
          <Input
            id={`${formId ?? "lead"}-name`}
            name="name"
            autoComplete="name"
            placeholder="Как к вам обращаться"
            className={fieldClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${formId ?? "lead"}-phone`} className="font-display font-semibold text-foreground">
            Телефон
          </Label>
          <Input
            id={`${formId ?? "lead"}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+375 29 000-00-00"
            className={fieldClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <Label htmlFor={`${formId ?? "lead"}-service`} className="font-display font-semibold text-foreground">
          Услуга
        </Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger
            id={`${formId ?? "lead"}-service`}
            className={fieldClass}
            aria-invalid={!!errors.service}
          >
            <SelectValue placeholder="Выберите услугу" />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
      </div>
      <div className="mt-5 space-y-2">
        <Label htmlFor={`${formId ?? "lead"}-comment`} className="font-display font-semibold text-foreground">
          Комментарий
        </Label>
        <Textarea
          id={`${formId ?? "lead"}-comment`}
          name="comment"
          rows={4}
          placeholder="Расскажите о вашей ситуации"
          className="rounded-xl border-input bg-background-deep/50 text-base transition-colors focus-visible:border-primary/60"
        />
      </div>
      <Button type="submit" variant="hero" size="xl" className="mt-7 w-full">
        Отправить заявку
      </Button>
      <p className="mt-4 text-sm text-ink-soft">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
