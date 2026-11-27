import { cn } from "@/lib/utils";

function FlagPl({ className }: { className?: string }) {
  return (
    <span
      aria-label="Польша"
      title="Польша"
      className={cn(
        "flex h-3 w-[1.125rem] shrink-0 flex-col overflow-hidden rounded-[2px] ring-1 ring-white/15",
        className,
      )}
    >
      <span className="flex-1 bg-white/90" />
      <span className="flex-1 bg-[#dc143c]" />
    </span>
  );
}

function FlagLt({ className }: { className?: string }) {
  return (
    <span
      aria-label="Литва"
      title="Литва"
      className={cn(
        "flex h-3 w-[1.125rem] shrink-0 flex-col overflow-hidden rounded-[2px] ring-1 ring-white/15",
        className,
      )}
    >
      <span className="flex-1 bg-[#fdb913]" />
      <span className="flex-1 bg-[#006a44]" />
      <span className="flex-1 bg-[#c1272d]" />
    </span>
  );
}

export const COUNTRY_STRIPE: Record<"pl" | "lt" | "lt-pl", string> = {
  pl: "linear-gradient(90deg, oklch(0.96 0.005 90) 0% 50%, #dc143c 50% 100%)",
  lt: "linear-gradient(90deg, #fdb913 0% 33.3%, #006a44 33.3% 66.6%, #c1272d 66.6% 100%)",
  "lt-pl":
    "linear-gradient(90deg, #fdb913 0% 16.6%, #006a44 16.6% 33.3%, #c1272d 33.3% 50%, oklch(0.96 0.005 90) 50% 75%, #dc143c 75% 100%)",
};

/** Small country flag chip for service cards. `lt-pl` renders both flags side by side. */
export function CountryFlag({ country, className }: { country?: "pl" | "lt" | "lt-pl"; className?: string }) {
  if (!country) return null;
  if (country === "lt-pl") {
    return (
      <span className={cn("inline-flex items-center gap-1", className)}>
        <FlagLt />
        <FlagPl />
      </span>
    );
  }
  return country === "pl" ? <FlagPl className={className} /> : <FlagLt className={className} />;
}
