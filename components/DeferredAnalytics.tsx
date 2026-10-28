"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

// Carrega o GA só depois da primeira interação ou de 4s, para não competir com o load inicial
export default function DeferredAnalytics({ gaId }: { gaId: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);
    const events = ["scroll", "pointerdown", "keydown", "touchstart"] as const;
    const timer = window.setTimeout(start, 4000);
    events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    return () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, start));
    };
  }, []);

  return ready ? <GoogleAnalytics gaId={gaId} /> : null;
}
