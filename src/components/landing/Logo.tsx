export function Logo() {
  return (
    <a
      href="#top"
      className="group inline-flex items-center gap-3"
      aria-label="DrivePrime — на главную"
    >
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-accent shadow-glow transition-transform duration-700 ease-out-expo group-hover:rotate-[-8deg]">
        <svg
          viewBox="0 0 24 24"
          className="size-[1.1rem] text-primary-foreground"
          aria-hidden="true"
        >
          <path
            d="M4 17 L10 7 L14 13 L20 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-xl font-extrabold tracking-[-0.03em] text-foreground">
        DrivePrime
      </span>
      <span className="hidden rounded-full border border-primary/40 px-2 py-0.5 font-display text-[0.6rem] font-bold uppercase tracking-[0.18em] text-accent-foreground sm:inline">
        КОД 95
      </span>
    </a>
  );
}
