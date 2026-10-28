
import BlackHoleCustomizer from "./background-customizatizer";
import type { Metadata } from "next";
import GeneratorShell from "@/components/GeneratorShell";

export const metadata: Metadata = {
  title: "Black Hole Background Generator",
  description: "Create an animated black hole background, tweak colors and speed, and copy the code.",
  alternates: { canonical: "https://backseasy.com/black-hole/" },
};

export default function BlackHole() {
  return (
    <GeneratorShell id="blackhole" title="Black Hole Effect" description="An animated black hole. Recolor it, change the speed and copy the code.">
      <BlackHoleCustomizer />
    </GeneratorShell>
  );
}
