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
import { SERVICES } from "@/content/landing";
import { useLocale } from "@/i18n/locale";

function leadSchema(m: ReturnType<typeof useLocale>["m"]) {
  return z.object({
    name: z.string().trim().min(2, m.form.errName).max(80, m.form.errNameLong),
    phone: z
      .string()
      .trim()
      .regex(/^[+\d][\d\s()-]{7,20}$/, m.form.errPhone),
    service: z.string().min(1, m.form.errService),
    comment: z.string().trim().max(1000, m.form.errComment).optional(),
  });
}

type Errors = {
  name?: string;
  phone?: string;
  service?: string;
  comment?: string;
};

const fieldClass =
  "h-13 rounded-xl border-input bg-background-deep/50 text-base transition-colors focus-visible:border-primary/60";

export function LeadForm({
  title,
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
  const { m } = useLocale();
  const schema = leadSchema(m);
  const formTitle = title ?? m.form.title;
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
      aria-label={formTitle || m.form.title}
    >
      {formTitle ? (
        <p className="mb-8 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground md:text-3xl">
          {formTitle}
        </p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${formId ?? "lead"}-name`} className="font-display font-semibold text-foreground">
            {m.form.name}
          </Label>
          <Input
            id={`${formId ?? "lead"}-name`}
            name="name"
            autoComplete="name"
            placeholder={m.form.namePh}
            className={fieldClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${formId ?? "lead"}-phone`} className="font-display font-semibold text-foreground">
            {m.form.phone}
          </Label>
          <Input
            id={`${formId ?? "lead"}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={m.form.phonePh}
            className={fieldClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <Label htmlFor={`${formId ?? "lead"}-service`} className="font-display font-semibold text-foreground">
          {m.form.service}
        </Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger
            id={`${formId ?? "lead"}-service`}
            className={fieldClass}
            aria-invalid={!!errors.service}
          >
            <SelectValue placeholder={m.form.servicePh} />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((o) => (
              <SelectItem key={o.id} value={o.id}>
                {m.services[o.id].title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
      </div>
      <div className="mt-5 space-y-2">
        <Label htmlFor={`${formId ?? "lead"}-comment`} className="font-display font-semibold text-foreground">
          {m.form.comment}
        </Label>
        <Textarea
          id={`${formId ?? "lead"}-comment`}
          name="comment"
          rows={4}
          placeholder={m.form.commentPh}
          className="rounded-xl border-input bg-background-deep/50 text-base transition-colors focus-visible:border-primary/60"
        />
      </div>
      <Button type="submit" variant="hero" size="xl" className="mt-7 w-full">
        {m.form.submit}
      </Button>
      <p className="mt-4 text-sm text-ink-soft">{m.form.consent}</p>
    </form>
  );
}
