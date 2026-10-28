import FrostedGlassGenerator from "../components/Gradient/FrostedGlassBackground";
import type { Metadata } from "next";
import GeneratorShell from "@/components/GeneratorShell";

export const metadata: Metadata = {
  title: "Frosted Glass Effect Generator",
  description: "Create a frosted glass (glassmorphism) background with live preview and copy the CSS for your website.",
  alternates: { canonical: "https://backseasy.com/glass-effect/" },
};

export default function GlassEffect() {
  return (
    <GeneratorShell id="glass" title="Frosted Glass Effect" description="Build a glassmorphism panel: tune blur, tint and saturation, then copy the CSS.">
      <FrostedGlassGenerator />
    </GeneratorShell>
  );
}
