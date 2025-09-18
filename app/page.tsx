
import Image from "next/image";

import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import dynamic from "next/dynamic";
import Hero from "./components/Landing/Hero";
import NebulaEffect from "./components/NebulaEffect/NebulaEffect";
// import BackgroundGenerator from "./test";
import BlackHoleCustomizer from "./black-hole/background-customizatizer";

const NavigationAllBackgrounds = dynamic(() => import("@/components/NavigationAllBackgrounds"), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-800 h-12 w-full rounded"></div>
});

const SenjaForm = dynamic(() => import("@/components/SenjaForm"), { 
  ssr: false,
  loading: () => null
});
// const PickerExample = dynamic(() => import("@/components/PickerExample"), { 
//   ssr: false,
//   loading: () => <div className="animate-pulse bg-gray-800 h-32 w-full rounded"></div>
// });
// const BackgroundCustomizer = dynamic(() => import("./components/Gradient/GradientCustomizer"), { 
//   ssr: false,
//   loading: () => <div className="animate-pulse bg-gray-800 h-64 w-full rounded"></div>
// });
// const FrostedGlassGenerator = dynamic(() => import("./components/Gradient/FrostedGlassBackground"), { 
//   ssr: false,
//   loading: () => <div className="animate-pulse bg-gray-800 h-64 w-full rounded"></div>
// });

export default function Home() {
  const allProjects = getProjectMetadata();
  
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://backseasy.com"
      }
    ]
  };

  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Backseasy Background Collection",
    "description": "Free collection of customizable backgrounds for web designers and developers",
    "url": "https://backseasy.com",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": allProjects.length,
      "itemListElement": allProjects.slice(0, 10).map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": `Free ${project.type} background for web design`,
          "url": `https://backseasy.com/projects/${project.slug}`,
          "image": project.image.startsWith('http') ? project.image : `https://backseasy.com${project.image}`,
          "author": {
            "@type": "Person",
            "name": project.author
          },
          "genre": project.type
        }
      }))
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData),
        }}
      />
        <div>
         <Hero />
        </div>

        <div className="max-w-[1800px] w-full flex flex-wrap justify-between gap-4 pb-4" id="projects">
          {[
            { href: "/glass-effect", img: "/cubo.png", title: "Frosted Glass Effect", desc: "Background with mirror effect" },
            { href: "/nebula-effect", img: "/nebula1.png", title: "Nebula Spin Effect", desc: "A dynamic spinning nebula effect!" },
            { href: "/black-hole", img: "/nebula2.png", title: "Black Hole Effect", desc: "Create beautiful Black Hole" },
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
                <Image 
                  src={img} 
                  alt={`${title} - Background Generator Tool`} 
                  width={45} 
                  height={45} 
                  className="h-[40px] md:h-[45px] rounded-md transition-all duration-300 ease-in-out hover:scale-110"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </a>
          ))}

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
        </div>

        <div id="frosted" className="border border-stroke-1 my-8 rounded-out max-w-[1800px] w-full flex flex-col md:flex-row overflow-clip">
          <div className="w-full flex flex-col p-8 md:p-[30px] gap-8 md:gap-24 h-fit">
            <div className="text-center text-gray-400">
              <h3 className="text-xl font-semibold mb-4">Background Generator</h3>
              <p>Coming soon...</p>
            </div>
          </div>
        </div>

        <div id="frosted" className="border border-stroke-1 my-8 rounded-out max-w-[1800px] w-full flex flex-col md:flex-row overflow-clip">
          <div className="w-full flex flex-col p-8 md:p-[30px] gap-8 md:gap-24 h-fit">
          <BlackHoleCustomizer />
          </div>
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
            <h1 className="text-[18px] font-semibold">Free Background Generator & Customizer</h1>
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
              <h2 className="text-2 font-medium">Free SVG Backgrounds Collection (<span className="text-yellow">New release</span>)</h2>
              <p className="text-white my-18">High-quality vector backgrounds for modern web design ⭐</p>
              <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-32 w-full h-fit max-w-[980px]">
               {projectPreviews["svg"]?.slice(0, 6)}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="border border-stroke-1 m-28 p-28 rounded-out">
              <h2 className="text-2 font-medium">3D Web Backgrounds Collection (<span className="text-yellow">Next release</span>)</h2>
              <p className="text-white my-18">Immersive 3D backgrounds for modern web applications and landing pages.</p>
              
              <br /><br />
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-32 w-full h-fit max-w-[980px]">
                <Image className="w-full h-auto max-w-full" src="/ghost.png" alt="3D Ghost Background Preview" width={400} height={300} quality={85} loading="lazy" />
                <Image className="w-full h-auto max-w-full" src="/aquiles2.png" alt="3D Character Background Preview" width={400} height={300} quality={85} loading="lazy" />    
              </div>
            </div>
          </div>

        </div>

      <div className="border border-stroke-1 rounded-out max-w-[1800px] w-full p-64 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">  
          <div className="flex">
            <h2 className="text-3 font-medium">Object Backgrounds for Web Design</h2>
            <NavigationAllBackgrounds />
          </div>

          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["objects"]?.slice(0, 6)}
          </div>

          <div className="flex">
              <h2 className="text-3 font-medium">Atmospheric Background Effects</h2>
              <NavigationAllBackgrounds />
          </div>
        
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["atmosphere"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Animated CSS Backgrounds ⭐</h2>
            <NavigationAllBackgrounds />
          </div>
        
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["animated"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">
              Vector SVG Backgrounds
            </h2>

            <NavigationAllBackgrounds />
          </div>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["svg"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Dark Mode Backgrounds</h2>
            <NavigationAllBackgrounds />
          </div>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["black"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Geometric Pattern Backgrounds</h2>
            <NavigationAllBackgrounds />
          </div>

          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["square"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Sky & Nature Backgrounds</h2>

            <NavigationAllBackgrounds />
          </div>

          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["sky"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Artistic Butterfly Backgrounds</h2>

            <NavigationAllBackgrounds />
          </div>

          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["butterfly"]?.slice(0, 6)}
          </div>

          <div className="flex">
            <h2 className="text-3 font-medium">Light Mode & Minimalist Backgrounds</h2>

            <NavigationAllBackgrounds />
          </div>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {projectPreviews["white"]?.slice(0, 6)}
          </div>
      </div>
      
        <div className="border border-stroke-1 my-18 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip" id="about">
        <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[580px]:gap-24 h-fit">
          <h2 className="text-2 font-medium">About Backseasy - Free Background Generator</h2>

          <p className="text-body leading-[200%]">
            Backseasy is the ultimate <strong>free background generator</strong> for web designers and developers. 
            Our comprehensive collection features <strong>animated CSS backgrounds</strong>, <strong>gradient generators</strong>, 
            <strong>glassmorphism effects</strong>, and <strong>modern UI patterns</strong> that are perfect for 
            <strong>Next.js projects</strong>, <strong>React applications</strong>, and <strong>Tailwind CSS designs</strong>.
          </p>
          
          <p className="text-body leading-[200%]">
            Whether you need <strong>dark mode backgrounds</strong>, <strong>responsive patterns</strong>, 
            <strong>SVG backgrounds</strong>, or <strong>3D web backgrounds</strong>, our library provides 
            high-quality, customizable options that enhance your <strong>frontend development</strong> workflow. 
            All backgrounds are optimized for performance and ready to download instantly.
          </p>
        </div>
          <Image
            src={"/3.jpg"}
            alt="Backseasy Background Generator - About Section"
            width={900}
            height={900}
            quality={85}
            className="rounded-md"
            loading="lazy"
            priority={false}
          /> 
      </div>
       
    </>
  );
}

