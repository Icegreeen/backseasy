import localFont from "next/font/local";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import Link from "next/link";

const hanson = localFont({
  src: "./hanson.woff2",
  display: "swap",
});

export default function Home() {
  const allProjects = getProjectMetadata();

  const butterflyProjects = allProjects.filter((project) => {
    return project.type === "butterfly"; 
  });

  const blackProjects = allProjects.filter((project) => {
    return project.type === "black";
  });

  const squareProjects = allProjects.filter((project) => {
    return project.type === "square";
  });

  const skyProjects = allProjects.filter((project) => {
    return project.type === "sky";
  });

  const whiteProjects = allProjects.filter((project) => {
    return project.type === "white";
  });

  const animatedProjects = allProjects.filter((project) => {
    return project.type === "animated";
  });

  // Mapear os projetos em pré-visualizações
  const butterflyProjectPreviews = butterflyProjects.map((project) => (
    <ProjectPreview category={"butterfly"} key={project.slug} {...project} />
  ));

  const blackProjectPreviews = blackProjects.map((project) => (
    <ProjectPreview category={"black"} key={project.slug} {...project} />
  ));

  const squareProjectPreviews = squareProjects.map((project) => (
    <ProjectPreview category={"square"} key={project.slug} {...project} />
  ));

  const skyProjectPreviews = skyProjects.map((project) => (
    <ProjectPreview category={"sky"} key={project.slug} {...project} />
  ));

  const whiteProjectPreviews = whiteProjects.map((project) => (
    <ProjectPreview category={"white"} key={project.slug} {...project} />
  ));

  const animatedProjectPreviews = animatedProjects.map((project) => (
    <ProjectPreview category={"animated"} key={project.slug} {...project} />
  ));

  return (
    <>
      <div className="flex flex-col max-w-[1800px] w-full pt-[120px] py-[50px] gap-24">
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`${hanson.className} text-[56px] max-[670px]:text-1 max-[450px]:text-2 leading-none`}
          >
            Backseasy
          </h1>
          <p className="text-body">Make the best background for your aplications</p>
        </div>

        <div className="flex  justify-center items-center">
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

        <div className="flex flex-wrap gap-24 justify-center items-center">
          <PrimaryButton text="Explorer" type="primary" link="#projects" />
          <SecondaryButton
            text="Tutorial"
            type="secondary"
            link="/blogs"
          />
        </div>
      </div>
     
      <div className="flex flex-col md:flex-row w-full">
        <div className="border border-stroke-1 flex-1 rounded-out max-w-[1800px] p-6 md:p-64 gap-6 md:gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24 md:mr-12" id="projects">
          <h2 className="text-3 font-medium">Backgrounds concepts</h2>
          <h2>Black</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6 md:gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {blackProjectPreviews}
          </div>

          <h2>Square </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6 md:gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {squareProjectPreviews}
          </div>

          <h2>Sky </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6 md:gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {skyProjectPreviews}
          </div>

          <h2>Butterfly </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6 md:gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {butterflyProjectPreviews}
          </div>

          <h2>White</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6 md:gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {whiteProjectPreviews}
          </div>
        </div>

        <div className="border border-stroke-1 flex-1 rounded-out max-w-[1800px] p-6 md:p-64 gap-6 md:gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
          <h2 className="text-3 font-medium">Animated backgrounds</h2>
          <h2>Animated</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6 md:gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {animatedProjectPreviews}
          </div>
        </div>
      </div>
      
      <div className="border border-stroke-1 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip" id="about">
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

      {/*
      <div
        className="border border-stroke-1 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip"
        id="streams"
      >
        <Image
          src={"/screenshots/mc2.png"}
          alt={""}
          width={500}
          height={500}
          className="w-full h-full"
        />
        <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[1280px]:gap-24 h-fit items-end">
          <h2 className="text-2 font-medium text-right">Live Streams</h2>
          <p className="text-body text-right leading-[220%]">
            dukc streams every {sunday} and {thursday} on Twitch. <br />
            The vods, and clips are uploaded to YouTube. <br />
            The dates are local to your timezone. Current game: Valheim
          </p>

          <div className="flex flex-wrap gap-12">
            <Link
              href={"https://www.twitch.tv/"}
              className="bg-purple/75 border-stroke-2 text-white hover:bg-purple active:bg-purple/50 disabled:bg-purple/25
        text-body border w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in
        hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30"
            >
              Twitch
            </Link>
            <Link
              href={"https://www.youtube.com"}
              className="bg-red/75 border-stroke-2 text-white hover:bg-red active:bg-red/50 disabled:bg-red/25
        text-body border w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in
        hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
      */}

      <div
        className="border border-stroke-1 rounded-out max-w-[1800px] w-full flex max-[880px]:flex-col overflow-clip"
        id="streams"
      >
        <Image
          src={"/exit.png"}
          alt={"testimonials"}
          width={600}
          height={600}
          quality={100}
          className="w-fscreen h-auto"
        />
        <div className="w-full flex flex-col p-64 gap-24 max-[580px]:p-32 max-[1280px]:gap-24 h-fit items-end">
          <h2 className="text-2 font-medium text-left">Do you want to feature on our page as a testimonial?</h2>
          <p className="text-body text-right leading-[200%]">
            Send your experience with Backseasy solutions, the outcome (link to the project you used), and your position job via DM on LinkedIn.
          </p>

          <div className="flex flex-wrap gap-12">
          <Link
              href={"https://www.linkedin.com/in/flavioaquila/"}
                className="bg-indigo-600 border-stroke-2 text-white hover:bg-purple active:bg-indigo-800 
            text-body border w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in
            hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30"
              >
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

