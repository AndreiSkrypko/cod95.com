/**
 * Stylized SVG map: pulsing city nodes (Минск / Варшава / Вильнюс) joined by
 * animated dashed routes. Coordinates are a simple lon/lat projection.
 * On < md and with prefers-reduced-motion the map renders static (see styles.css).
 */
const CITIES = [
  { id: "waw", name: "Варшава", x: 364, y: 200, main: true, labelDx: -14, labelDy: 30, anchor: "end" as const },
  { id: "vno", name: "Вильнюс", x: 484, y: 97, main: true, labelDx: 0, labelDy: -20, anchor: "middle" as const },
  { id: "msq", name: "Минск", x: 548, y: 140, main: true, labelDx: 16, labelDy: 30, anchor: "start" as const },
  { id: "ber", name: "Берлин", x: 151, y: 188, main: false },
  { id: "prg", name: "Прага", x: 180, y: 291, main: false },
  { id: "vie", name: "Вена", x: 234, y: 369, main: false },
  { id: "kyv", name: "Киев", x: 630, y: 275, main: false },
  { id: "kiv", name: "Кишинёв", x: 584, y: 420, main: false },
];

const ROUTES = [
  { d: "M548 140 Q 460 120 364 200", main: true },
  { d: "M364 200 Q 410 120 484 97", main: true },
  { d: "M484 97 Q 520 108 548 140", main: true },
  { d: "M364 200 Q 260 170 151 188", main: false },
  { d: "M364 200 Q 270 230 180 291", main: false },
  { d: "M364 200 Q 300 300 234 369", main: false },
  { d: "M630 275 Q 480 230 364 200", main: false },
  { d: "M584 420 Q 470 300 364 200", main: false },
];

export function RouteMap() {
  return (
    <svg
      viewBox="0 0 700 480"
      role="img"
      aria-label="Схема маршрутов: Минск, Варшава, Вильнюс и страны Европы"
      className="h-full w-full"
    >
      <defs>
        <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="var(--color-foreground)" opacity="0.13" />
        </pattern>
        <radialGradient id="mapFade" cx="60%" cy="45%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="mapMask">
          <rect width="700" height="480" fill="url(#mapFade)" />
        </mask>
        <linearGradient id="routeGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-primary-glow)" />
        </linearGradient>
      </defs>

      <rect width="700" height="480" fill="url(#dots)" mask="url(#mapMask)" />

      {ROUTES.map((r, i) => (
        <g key={i}>
          <path d={r.d} fill="none" stroke="var(--color-primary)" strokeOpacity={r.main ? 0.18 : 0.08} strokeWidth={r.main ? 6 : 3} />
          <path
            d={r.d}
            fill="none"
            stroke={r.main ? "url(#routeGrad)" : "var(--color-primary)"}
            strokeOpacity={r.main ? 1 : 0.45}
            strokeWidth={r.main ? 2 : 1.2}
            strokeDasharray="6 8"
            strokeLinecap="round"
            className="route-anim animate-route"
            style={{ animationDuration: `${r.main ? 1.6 : 3 + i * 0.3}s` }}
          />
        </g>
      ))}

      {CITIES.map((c, i) => (
        <g key={c.id}>
          {c.main && (
            <circle
              cx={c.x}
              cy={c.y}
              r="7"
              fill="var(--color-primary)"
              opacity="0.5"
              className="pulse-anim animate-pulse-ring"
              style={{ transformOrigin: `${c.x}px ${c.y}px`, transformBox: "view-box", animationDelay: `${i * 0.5}s` }}
            />
          )}
          <circle
            cx={c.x}
            cy={c.y}
            r={c.main ? 6 : 3.5}
            fill={c.main ? "var(--color-primary)" : "var(--color-muted-foreground)"}
            stroke="var(--color-background)"
            strokeWidth="2"
          />
          {c.main ? (
            <text
              x={c.x + (c.labelDx ?? 0)}
              y={c.y + (c.labelDy ?? 0)}
              textAnchor={c.anchor}
              className="font-display"
              fontSize="17"
              fontWeight="700"
              fill="var(--color-foreground)"
            >
              {c.name}
            </text>
          ) : (
            <text x={c.x + 8} y={c.y + 4} fontSize="11" fill="var(--color-muted-foreground)" opacity="0.8">
              {c.name}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
