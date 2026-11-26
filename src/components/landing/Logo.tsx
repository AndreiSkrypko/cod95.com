import { Link, useRouterState } from "@tanstack/react-router";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";
import { BazaMark } from "./BazaMark";

export function Logo({ tagline = false, onDark = false }: { tagline?: boolean; onDark?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { locale } = useLocale();

  return (
    <Link
      to="/"
      hash="top"
      className="inline-flex shrink-0 items-center"
      aria-label={`BAZA — ${PAGES[locale].crumbs.home}`}
      onClick={(event) => {
        if (pathname !== "/") return;
        event.preventDefault();
        document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.location.hash !== "#top") {
          window.history.replaceState(null, "", "/#top");
        }
      }}
    >
      <BazaMark
        showTagline={tagline}
        onDark={onDark}
        className={tagline ? "h-14 sm:h-16" : "h-8 sm:h-9"}
      />
    </Link>
  );
}
