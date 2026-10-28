
import NebulaEffect from "../components/NebulaEffect/NebulaEffect";
import type { Metadata } from "next";
import GeneratorShell from "@/components/GeneratorShell";

export const metadata: Metadata = {
  title: "Nebula Spin Effect Background",
  description: "Customize an animated spinning nebula background and copy the code for your website.",
  alternates: { canonical: "https://backseasy.com/nebula-effect/" },
};

export default function NebulaEffectPage() {
  return (
    <GeneratorShell id="nebula" title="Nebula Spin Effect" description="A spinning nebula background. Pick the colors and speed, then copy the code.">
      <NebulaEffect />
    </GeneratorShell>
  );
}
