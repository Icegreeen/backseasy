"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  /** "K" abrevia (12400 -> 12.4K). Sem compact mostra o inteiro. */
  compact?: boolean;
  suffix?: string;
  duration?: number;
}

const format = (n: number, compact?: boolean) => {
  if (compact && n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (compact && n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return Math.round(n).toLocaleString("en-US");
};

// O servidor renderiza o valor final (bom para SEO e sem layout shift); no cliente conta de 0 até ele
// quando o número entra na tela. Respeita prefers-reduced-motion.
export default function CountUp({ value, compact, suffix = "", duration = 1100 }: Props) {
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        // o timestamp do rAF pode vir antes do performance.now() inicial: sem o max(0) o numero ficava negativo
        const t = Math.min(Math.max((now - start) / duration, 0), 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setShown(value * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      setShown(0);
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(shown, compact)}
      {suffix}
    </span>
  );
}
