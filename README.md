# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

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

**Colors (oklch, full dark theme)**
- `--background` midnight navy (~#0B1220) · `--surface` / `--surface-raised` card layers (~#121A2E)
- `--foreground` warm off-white · `--muted-foreground` warm gray body text (AA+) · `--ink-soft` captions
- `--primary` electric cyan (~#22D3EE) — the only accent line · `--primary-glow` lighter cyan for gradients
- `--accent` 12% cyan tint (icon tiles, chips) · `--accent-foreground` cyan text on dark
- `--border` 1px white @ 9% · `--border-strong` @ 16% · `--ring` cyan focus
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
