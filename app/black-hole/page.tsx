
import BlackHoleCustomizer from "./background-customizatizer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Hole Background Generator",
  description: "Create an animated black hole background, tweak colors and speed, and copy the code.",
  alternates: { canonical: "https://backseasy.com/black-hole/" },
};

export default function BlackHole() {

  return (
    <>
    <h1 className="sr-only">Black Hole Background Generator</h1>
    <div id="frosted" className="border border-stroke-1 my-18 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip">
        <div className="w-full flex flex-col p-[30px] gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
            <BlackHoleCustomizer />
        </div>
    </div>
    </>
  );
}