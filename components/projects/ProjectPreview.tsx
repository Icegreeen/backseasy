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

export default function ProjectPreview(props: ProjectMetadata & { category: string }) {
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
      className="w-full"
    >
      <Tilt options={tiltOptions}>
        <Link
          href={`/projects/${props.slug}`}
          className="bg-cover bg-center bg-clip-padding w-full h-auto aspect-[3/1.7] flex flex-col justify-end items-end p-32 md:p-16 sm:p-8 rounded-in border border-stroke-1 hover:scale-[1.05] active:scale-[.75] duration-150"
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.65)), url(${props.image})`,
          }}
        >
          <div className="w-full">
            <h3 className="text-3 font-medium sm:text-body">{props.title}</h3>
            <p className="text-sub">{props.type}</p>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
}
