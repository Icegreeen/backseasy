
import NebulaEffect from "../components/NebulaEffect/NebulaEffect";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebula Spin Effect Background",
  description: "Customize an animated spinning nebula background and copy the code for your website.",
  alternates: { canonical: "https://backseasy.com/nebula-effect/" },
};

export default function GlassEffect() {

  return (
    <>
    <h1 className="sr-only">Nebula Spin Effect Background</h1>
    <div id="frosted" className="border border-stroke-1 my-18 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip">
        <div className="w-full flex flex-col p-[30px] gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
            <NebulaEffect />
        </div>
    </div>
    </>
  );
}