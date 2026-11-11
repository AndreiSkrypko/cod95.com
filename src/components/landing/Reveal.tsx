import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number | undefined;
  as?: ElementType;
  /** fade: lift + fade. clip: curtain-opening image reveal. line: hairline that draws itself. */
  variant?: "fade" | "clip" | "line";
};

const VARIANT_CLASS = { fade: "reveal", clip: "reveal-clip", line: "reveal-line" } as const;

function useInView<T extends Element>(onEnter: (el: T) => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            onEnter(entry.target as T);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

/** Reveals its children when scrolled into view. Disabled by prefers-reduced-motion in CSS. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "fade",
}: RevealProps) {
  const ref = useInView<HTMLElement>((el) => el.setAttribute("data-in", "true"));

  return (
    <Tag
      ref={ref}
      className={cn(VARIANT_CLASS[variant], className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Counts up from 0 to `value` once visible. Renders the final value on the server. */
export function CountUp({
  value,
  suffix = "",
  duration = 1800,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [n, setN] = useState(value);
  const ref = useInView<HTMLSpanElement>(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setN(t < 1 ? Math.round(value * (1 - Math.pow(2, -10 * t))) : value);
      if (t < 1) requestAnimationFrame(tick);
    };
    setN(0);
    requestAnimationFrame(tick);
  });

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow eyebrow-rule">{eyebrow}</p>
      <h2 className="mt-5 text-[2.25rem] font-extrabold text-foreground md:text-6xl xl:text-[4.25rem]">
        {title}
      </h2>
      {lead && <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{lead}</p>}
    </Reveal>
  );
}
