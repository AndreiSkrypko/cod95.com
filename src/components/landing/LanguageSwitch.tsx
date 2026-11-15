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
