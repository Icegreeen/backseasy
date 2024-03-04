"use client";

import Link from "next/link";
import { ProjectMetadata } from "./ProjectMetadata";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

const tiltOptions = {
  reverse: true,
  max: 8,
  perspective: 1000,
  scale: 1,
  transition: false,
};

export default function ProjectPreview(props: ProjectMetadata & {category: string}) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        duration: 0.4,
        delay: 0.2,
        damping: 15,
      }}
    >
      <Tilt options={tiltOptions}>
        <Link
          href={`/projects/${props.slug}`}
          className="bg-cover bg-center bg-clip-padding w-full h-auto aspect-[3/1.7] max-[500px]:aspect-[1.7/3] flex flex-col place-content-end align-bottom place-items-end p-32 rounded-in border border-stroke-1 hover:scale-[1.05] active:scale-[.75] duration-150 max-[540px]:p-24"
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.65)), url(${props.image})`,
          }}
        >
          <h3 className="text-3 w-full font-medium max-[540px]:text-body">
            {props.title}
          </h3>
          <p className="text-sub w-full">{props.type}</p>
        </Link>
      </Tilt>
    </motion.div>
  );
}
