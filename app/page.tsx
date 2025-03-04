import localFont from "next/font/local";
import Image from "next/image";

import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import dynamic from "next/dynamic";

const PrimaryButton = dynamic(() => import("@/components/PrimaryButton"));
const SecondaryButton = dynamic(() => import("@/components/SecondaryButton"));
const NavigationAllBackgrounds = dynamic(() => import("@/components/NavigationAllBackgrounds"), { ssr: false });

const SenjaForm = dynamic(() => import("@/components/SenjaForm"), { ssr: false });
const PickerExample = dynamic(() => import("@/components/PickerExample"), { ssr: false });
const BackgroundCustomizer = dynamic(() => import("./components/Gradient/GradientCustomizer"), { ssr: false });
const FrostedGlassGenerator = dynamic(() => import("./components/Gradient/FrostedGlassBackground"), { ssr: false });

const hanson = localFont({
  src: "./hanson.woff2",
  display: "swap",
});

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
      <div className="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-6xl md:px-12">
          <div className="relative flex-col items-start m-auto align-middle">
                <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                  <div className="relative items-center gap-1 m-auto lg:inline-flex">
                    <div className="max-w-xl lg:text-left">
                      <div className="flex flex-col max-w-[1800px] w-full pt-[120px] py-[50px] gap-24">
                      <div className="flex flex-col ">

                        <p className="text-body mb-8">Made by <a className="text-purple" href="https://github.com/Icegreeen">Flávio Áquila</a></p>
                        
                        <h1
                          className={`${hanson.className} bg-gradient-to-t from-zinc-100 via-slate-300 to-slate-400 bg-clip-text 
                          text-transparent text-[56px] max-[670px]:text-1 max-[450px]:text-2 leading-none`}
                        >
                          Backseasy
                        </h1>

                        <p className="mt-3 text-slate-300">Make the best background for your aplications</p>
                      </div>

                      <div className="flex">
                        <Image
                          src={"/icons/next.svg"}
                          alt={"imagem"}
                          width={40}
                          height={40}
                          className="rounded-md mr-18"
                        />

                        <Image
                          src={"/icons/vue.svg"}
                          alt={"imagem"}
                          width={40}
                          height={40}
                          className="rounded-md mr-18"
                        />

                        <Image
                          src={"/icons/tailwind.svg"}
                          alt={"imagem"}
                          width={40}
                          height={40}
                          className="rounded-md mr-18"
                        />

                        <Image
                          src={"/icons/angular.svg"}
                          alt={"imagem"}
                          width={40}
                          height={40}
                          className="rounded-md mr-18"
                        />
                      </div>

                    <div className="flex flex-wrap gap-24">
                      <PrimaryButton text="Explorer" type="primary" link="/all_backgrounds" />
                      <SecondaryButton
                        text="Tutorial"
                        type="secondary"
                        link="/blogs"
                      />
                    </div>
                  </div> 
                </div>
              </div>
                  <div className="block w-full p-8 mt-12 lg:mt-0 rounded-3xl">
                    <img  src="3.png" alt="hero" className="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl" />
                  </div>
                </div>
              </div>
          </div>

        <div className="max-w-[1800px] w-full flex items-start justify-between pb-12" id="projects">
            <a href="/glass-effect">       
              <div className="relative cursor-pointer flex items-center justify-between rounded-[10px] p-16 border border-stroke-1 text-white rounded-lg shadow-md w-[400px] h-[100px]">
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Frosted Glass Effect <span className="border border-[#14532d] px-12 text-[#22c55e] rounded-[10px] w-[50px]">New</span></span>
                  <span className="text-sm text-gray-400">Background with mirror effect</span>
                </div>
                <img src="/cubo.png" alt="Asset Icon"className="h-[100px] rounded-md"/>
              </div>
            </a>

            <div className="flex gap-8 mt-[55px]">
              <div className="mx-8 inline-flex animate-shine items-center justify-center rounded-[10px] text-sm border 
                border-neutral-800 bg-[linear-gradient(110deg,#050505,45%,#1e2631,55%,#050505)] bg-[length:200%_100%] 
                font-medium text-neutral-400 transition-colors border-stroke-1 max-w-[800px] p-8 gap-32 flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
                <h1>Backgrounds 3D ⭐ (building)...</h1> 
              </div>

              <div className="inline-flex animate-shine items-center justify-center rounded-[10px] text-sm border 
                  border-neutral-800 bg-[linear-gradient(110deg,#050505,45%,#1e2631,55%,#050505)] bg-[length:200%_100%] 
                  font-medium text-neutral-400 transition-colors border-stroke-1 max-w-[800px] p-8 gap-32 flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
                  <h1>Background selector 📌</h1> {/* 📍 */}
              </div>

              <div className="inline-flex animate-shine items-center justify-center rounded-[10px] text-sm border 
                border-neutral-800 bg-[linear-gradient(110deg,#050505,45%,#1e2631,55%,#050505)] bg-[length:200%_100%] 
                font-medium text-neutral-400 transition-colors  border-stroke-1 max-w-[800px] p-8 gap-32 flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
                <button 
                  data-senja-collector-open="backseasy"
                  data-project="backseasy"
                  data-form="OdQq6O"
                >
                  Do you want to contribute a testimonial ? <strong className="text-purple/75">Clique here ❤️</strong>
                </button> 
                <SenjaForm />
              </div>
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

      <div className="fixed bottom-4 right-4">
        <div className="my-12 mr-8 border border-stroke-1 rounded-out max-w-[800px] p-12 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            data-senja-collector-open="backseasy"
            data-project="backseasy"
            data-form="OdQq6O"
          >
            Do you want to contribute a testimonial ? 
          </button>
          <SenjaForm />
        </div>
      </div>
       
    </>
  );
}

