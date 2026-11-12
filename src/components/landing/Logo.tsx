import { Link, useRouterState } from "@tanstack/react-router";

export function Logo() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Link
      to="/"
      hash="top"
      className="inline-flex shrink-0 items-center"
      aria-label="DrivePrime — на главную"
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
