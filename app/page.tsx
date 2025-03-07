
import Image from "next/image";

import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import dynamic from "next/dynamic";
import Hero from "./components/Landing/Hero";
import NebulaEffect from "./components/NebulaEffect/NebulaEffect";

const NavigationAllBackgrounds = dynamic(() => import("@/components/NavigationAllBackgrounds"), { ssr: false });

const SenjaForm = dynamic(() => import("@/components/SenjaForm"), { ssr: false });
const PickerExample = dynamic(() => import("@/components/PickerExample"), { ssr: false });
const BackgroundCustomizer = dynamic(() => import("./components/Gradient/GradientCustomizer"), { ssr: false });
const FrostedGlassGenerator = dynamic(() => import("./components/Gradient/FrostedGlassBackground"), { ssr: false });

export default function Home() {
  const allProjects = getProjectMetadata();

  const projectCategories: Record<string, typeof allProjects> = {
    butterfly: [],
    black: [],
    square: [],
    sky: [],
    white: [],
    animated: [],
    svg: [],
    objects: [],
    atmosphere: [],
  };

  allProjects.forEach((project) => {
    if (projectCategories[project.type]) {
      projectCategories[project.type].push(project);
    }
  });

  const projectPreviews = Object.entries(projectCategories).reduce(
    (acc, [category, projects]) => {
      acc[category] = projects.map((project) => (
        <ProjectPreview category={category} key={project.slug} {...project} />
      ));
      return acc;
    },
    {} as Record<string, JSX.Element[]>
  );

  return (
    <>
        <div>
         <Hero />
        </div>

        <div className="max-w-[1800px] w-full flex flex-wrap justify-between gap-4 pb-4" id="projects">
          {[
            { href: "/glass-effect", img: "/cubo.png", title: "Frosted Glass Effect", desc: "Background with mirror effect" },
            { href: "/nebula-effect", img: "/nebula1.png", title: "Nebula Spin Effect", desc: "A dynamic spinning nebula effect!" },
            { href: "/", img: "/plant.png", title: "Backgrind Effect", desc: "Next release" },
            { href: "https://buymeacoffee.com/icegreen", img: "/icons/coffee2.svg", title: "Support the project!", desc: "Become a supporter and get a special mention!" }
          ].map(({ href, img, title, desc }, index) => (
            <a key={index} href={href} className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
              <div className="relative cursor-pointer flex items-center justify-between rounded-[10px] p-8 md:p-18 border border-stroke-1 text-white shadow-md h-[60px] transition-all duration-300 ease-in-out hover:scale-[1.02]">
                <div className="flex flex-col">
                  <span className="text-[16px] font-semibold">
                    {title} 
                    <span className="border border-[#14532d] ml-6 px-6 md:px-12 text-[#22c55e] rounded-[10px] w-[50px]">New</span>
                  </span>
                  {desc && <span className="text-[12px] text-gray-400">{desc}</span>}
                </div>
                <img src={img} alt="Asset Icon" className="h-[40px] md:h-[45px] rounded-md transition-all duration-300 ease-in-out hover:scale-110"/>
              </div>
            </a>
          ))}

          {/*
          <div className="inline-flex animate-shine items-center justify-center rounded-[10px] text-sm border 
                border-neutral-800 bg-[linear-gradient(110deg,#050505,45%,#1e2631,55%,#050505)] bg-[length:200%_100%] 
                font-medium text-neutral-400 transition-colors  border-stroke-1 max-w-[800px] p-8 gap-32 flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
                <button 
                  data-senja-collector-open="backseasy"
                  data-project="backseasy"
                  data-form="OdQq6O"
                >
                  Leave a testimonial! <strong className="text-purple/75">Click here ❤️</strong>
                </button> 
                <SenjaForm />
              </div>
          */}
        </div>

        <div id="frosted" className="border border-stroke-1 my-8 rounded-out max-w-[1800px] w-full flex flex-col md:flex-row overflow-clip">
          <div className="w-full flex flex-col p-8 md:p-[30px] gap-8 md:gap-24 h-fit">
            <NebulaEffect />
          </div>
        </div>

        <div
          className="border border-stroke-1 rounded-out max-w-[1800px] w-full p-[30px] flex flex-wrap gap-8"
          id="projects"
        >
          <div className="w-full">
            <h1 className="text-[18px] font-semibold">Background Select</h1>
          </div>

          <div className="flex flex-wrap gap-24 w-full lg:flex-nowrap justify-between  divide-x divide-stroke-1">
            <div className="w-full lg:w-1/2 flex  p-4">
              <PickerExample />
            </div>

            <div className="w-full lg:w-1/2 flex  p-4">
              <BackgroundCustomizer />
            </div>
          </div>
        </div>

        <div id="frosted" className="border border-stroke-1 my-18 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip">
          <div className="w-full flex flex-col p-[30px] gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
            <FrostedGlassGenerator />
          </div>
        </div>

        <div className="border border-stroke-1 my-18 rounded-out max-w-[1800px] w-full flex overflow-clip flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="border border-stroke-1 m-28 p-28 rounded-out">
              <h2 className="text-2 font-medium">Backgrounds SVGS (<span className="text-yellow">New release</span>)</h2>
              <p className="text-white my-18">The best backgrounds used ⭐</p>
              <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-32 w-full h-fit max-w-[980px]">
               {projectPreviews["svg"]?.slice(0, 6)}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="border border-stroke-1 m-28 p-28 rounded-out">
              <h2 className="text-2 font-medium">3D backgrounds... (<span className="text-yellow">Next release</span>)</h2>
              <p className="text-white my-18">Custom 3d backgrounds ready to use.</p>
              
              <br /><br />
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-32 w-full h-fit max-w-[980px]">
                <img className="w-full h-auto max-w-full"  src="ghost.png" alt="" />
                <img className="w-full h-auto max-w-full"  src="aquiles2.png" alt="" />    
              </div>
            </div>
          </div>

        </div>

      <div className="border border-stroke-1 rounded-out max-w-[1800px] w-full p-64 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">  
          <div className="flex">
            <h2 className="text-3 font-medium">Objects</h2>
            <NavigationAllBackgrounds />
          </div>

          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["objects"]?.slice(0, 6)}
          </div>

          <div className="flex">
              <h2 className="text-3 font-medium">Atmosphere</h2>
              <NavigationAllBackgrounds />
          </div>
        
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["atmosphere"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Animated backgrounds ⭐</h2>
            <NavigationAllBackgrounds />
          </div>
        
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["animated"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">
              Svg backgrounds
            </h2>

            <NavigationAllBackgrounds />
          </div>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["svg"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Black</h2>
            <NavigationAllBackgrounds />
          </div>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["black"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Square</h2>
            <NavigationAllBackgrounds />
          </div>

          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["square"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Sky</h2>

            <NavigationAllBackgrounds />
          </div>

          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["sky"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Butterfly</h2>

            <NavigationAllBackgrounds />
          </div>

          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["butterfly"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">White</h2>

            <NavigationAllBackgrounds />
          </div>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["white"]?.slice(0, 6)}
          </div>
      </div>
      
      <div className="border border-stroke-1 my-18 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip" id="about">
        <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
          <h2 className="text-2 font-medium">About</h2>

          <p className="text-body leading-[200%]">
            Here, you find a diverse collection of backgrounds ready to be used in your front-end interfaces. 
            From smooth gradients to stunning images, our library offers a variety of options to bring your screens
            to life and provide elegant visual experiences. Explore our selection and instantly transform the look 
            of your projects with ease and style.
          </p>
        </div>
          <Image
            src={"/3.jpg"}
            alt={"imagem"}
            width={900}
            height={900}
            quality={100}
            className="rounded-md"
          /> 
      </div>
       
    </>
  );
}

