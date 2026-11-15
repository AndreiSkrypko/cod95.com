import { Link, useRouterState } from "@tanstack/react-router";
import { useLocale } from "@/i18n/locale";
import { PAGES } from "@/i18n/pages-copy";

export function Logo() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { locale } = useLocale();

  return (
    <Link
      to="/"
      hash="top"
      className="inline-flex shrink-0 items-center"
      aria-label={`DrivePrime — ${PAGES[locale].crumbs.home}`}
      onClick={(event) => {
        if (pathname !== "/") return;
        event.preventDefault();
        document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.location.hash !== "#top") {
          window.history.replaceState(null, "", "/#top");
        }
      }}
    >
      <img src="/logo.png" alt="" className="h-8 w-auto sm:h-9" />
    </Link>
  );
}
