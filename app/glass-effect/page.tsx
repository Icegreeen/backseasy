import FrostedGlassGenerator from "../components/Gradient/FrostedGlassBackground";

export default function GlassEffect() {

  return (
    <div id="frosted" className="border border-stroke-1 my-18 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip">
        <div className="w-full flex flex-col p-[30px] gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
            <FrostedGlassGenerator />
        </div>
    </div>
  );
}