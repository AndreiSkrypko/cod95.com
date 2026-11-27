# BAZA — КОД 95

Сайт академии профессиональных водителей BAZA (КОД 95).

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Design tokens (DrivePrime landing)

All tokens live in `src/styles.css` (Tailwind v4, `@theme inline` + `:root`). Components use semantic classes only.

**Colors (graphite dark theme, всё через токены в `src/styles.css`)**
- `--background` graphite `#1e2630` · `--background-deep` `#191f28` · `--surface` / `--surface-raised` слои карточек
- `--foreground` warm off-white · `--muted-foreground` warm gray body text · `--ink-soft` captions
- `--primary` BAZA orange — единственный акцент · `--primary-glow` lighter orange for gradients
- `--accent` 12% orange tint (icon tiles, chips) · `--accent-foreground` orange text on dark
- `--border` white @ 20% · `--border-strong` @ 35% · `--ring` orange focus
- Gradients: `--gradient-accent` (buttons), `--gradient-text` (headline highlight), `--gradient-surface` (card sheen)

**Typography** — loaded via `<link>` in `src/routes/__root.tsx`
- `font-display` Manrope 600–800, tracking −0.025em (H1 −0.035em, 42 → 72px)
- `font-sans` Source Sans 3 400–600, body 17px / 1.65
- `.eyebrow` — 12px uppercase, tracking 0.16em, cyan

**Radii** — `--radius: 1rem`; cards `rounded-2xl`/`rounded-3xl`, buttons and chips `rounded-full`

**Shadows** — `--shadow-card` (inset highlight + soft drop), `--shadow-lift` (hover, with cyan ring), `--shadow-glow` (CTA)

**Utilities** — `container-page` (max 1240px), `section-y`, `surface-card`, `card-interactive` (lift + glow on hover), `glass` (nav / hero overlay only), `noise`, `dot-grid`, `mesh` (animated gradient), `reveal`, `text-gradient`

**Components** — Button variants `hero` / `glass` / `subtle`, size `xl`; Badge variants `new` / `chip`

**Motion** — `animate-fade-up` (hero stagger 0.05–0.36s), `animate-marquee`, `animate-mesh`, `animate-route` (dashed routes), `animate-pulse-ring`. All disabled under `prefers-reduced-motion`; hero map is static below `md`.

**Breakpoints** — Tailwind defaults: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280
