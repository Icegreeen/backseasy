import FrostedGlassGenerator from "../components/Gradient/FrostedGlassBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frosted Glass Effect Generator",
  description: "Create a frosted glass (glassmorphism) background with live preview and copy the CSS for your website.",
  alternates: { canonical: "https://backseasy.com/glass-effect/" },
};

export default function GlassEffect() {

  return (
    <>
    <h1 className="sr-only">Frosted Glass Effect Generator</h1>
    <div id="frosted" className="border border-stroke-1 my-18 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip">
        <div className="w-full flex flex-col p-[30px] gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
            <FrostedGlassGenerator />
        </div>
    </div>
    </>
  );
}