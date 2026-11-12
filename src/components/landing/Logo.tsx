import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center" aria-label="DrivePrime — на главную">
      <img src="/logo.png" alt="DrivePrime" className="h-8 w-auto sm:h-9" />
    </Link>
  );
}
