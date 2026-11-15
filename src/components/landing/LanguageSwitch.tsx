import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale";
import type { Locale } from "@/i18n/messages";

const OPTIONS: { id: Locale; label: string }[] = [
  { id: "ru", label: "RU" },
  { id: "pl", label: "PL" },
  { id: "uk", label: "UA" },
];

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, setLocale, m } = useLocale();
  return (
    <div className={cn("flex items-center rounded-full border border-border bg-white p-0.5", className)} role="group" aria-label={m.langLabel}>
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={locale === option.id}
          onClick={() => setLocale(option.id)}
          className={cn(
            "rounded-full px-2.5 py-1 font-display text-xs font-bold tracking-wide",
            locale === option.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function LanguageMenu() {
  const { locale, setLocale, m } = useLocale();
  const current = OPTIONS.find((option) => option.id === locale)?.label ?? "RU";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="subtle"
          className="h-10 gap-1 rounded-full px-3 font-display text-xs font-bold tracking-wide data-[state=open]:border-primary/45 data-[state=open]:[&_svg]:rotate-180 [&_svg]:size-3 [&_svg]:opacity-60 [&_svg]:transition-transform"
          aria-label={m.langLabel}
        >
          {current}
          <ChevronDown aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={6} className="z-[80] w-16 min-w-0 rounded-2xl border-border p-1 shadow-card">
        {OPTIONS.map((option) => {
          const active = locale === option.id;
          return (
            <DropdownMenuItem
              key={option.id}
              onSelect={() => setLocale(option.id)}
              className={cn(
                "justify-center rounded-full px-0 py-1.5 font-display text-xs font-bold tracking-wide",
                active
                  ? "bg-primary text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                  : "text-foreground focus:bg-secondary",
              )}
            >
              {option.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
