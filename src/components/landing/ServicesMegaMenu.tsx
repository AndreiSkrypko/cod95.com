import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/content/landing";
import { cn } from "@/lib/utils";
import { useBooking } from "./BookingDialog";
import { SERVICE_ICONS } from "./serviceIcons";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
};

export function ServicesMegaMenu({ open, onOpenChange, className }: Props) {
  const openBooking = useBooking();
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-full z-50 opacity-0 transition-[opacity,transform] duration-300 ease-out-expo",
        open && "pointer-events-auto translate-y-0 opacity-100",
        !open && "-translate-y-2",
        className,
      )}
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <div className="border-t border-border bg-white shadow-card">
        <div className="container-page py-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
            <p className="eyebrow eyebrow-rule text-primary">Наши услуги</p>
            <Link
              to="/uslugi"
              onClick={() => onOpenChange(false)}
              className="text-sm font-semibold text-primary hover:text-accent-foreground"
            >
              Открыть каталог
            </Link>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.id];
              return (
                <li key={s.id}>
                  <Link
                    to="/uslugi/$serviceId"
                    params={{ serviceId: s.id }}
                    onClick={() => onOpenChange(false)}
                    className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-colors duration-300 hover:border-primary/35 hover:bg-accent"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/15 text-primary">
                      <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="font-display text-sm font-bold text-foreground">{s.title}</span>
                        {s.isNew && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-primary-foreground">
                            Новинка
                          </span>
                        )}
                      </span>
                      <span className="mt-1 line-clamp-2 text-sm text-muted-foreground">{s.text}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => {
              onOpenChange(false);
              openBooking();
            }}
            className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-primary transition-colors hover:text-accent-foreground"
          >
            Получить консультацию по услуге
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
