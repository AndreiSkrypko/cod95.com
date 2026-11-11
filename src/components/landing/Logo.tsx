export function Logo() {
  return (
    <a href="#top" className="group inline-flex items-center gap-2.5" aria-label="DrivePrime — на главную">
      <span className="relative grid size-8 place-items-center rounded-lg bg-gradient-accent shadow-glow">
        <svg viewBox="0 0 24 24" className="size-4 text-primary-foreground" aria-hidden="true">
          <path d="M4 17 L10 7 L14 13 L20 5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-foreground">DrivePrime</span>
      <span className="rounded-full border border-primary/40 bg-accent px-2 py-0.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent-foreground">
        КОД 95
      </span>
    </a>
  );
}
