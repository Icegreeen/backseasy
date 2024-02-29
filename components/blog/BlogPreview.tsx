"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogMetadata } from "./BlogMetadata";

import { motion } from "framer-motion";
import moment from "moment";

export default function BlogPreview(props: BlogMetadata) {
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
      <Link
        href={`/blog/${props.slug}`}
        className="w-full h-fit flex max-[520px]:flex-col max-[520px]:border-b max-[520px]:border-stroke-2 max-[520px]:pb-32 gap-24 group items-center"
      >
        <Image
          src={props.image}
          width={1220}
          height={714}
          alt="Banner"
          className="aspect-video h-256 w-auto max-[520px]:w-full max-[520px]:h-auto border border-stroke-2 rounded-in group-hover:-translate-y-4 group-active:translate-y-8 duration-150 ease-out"
        />
        <div className="flex flex-col gap-24 w-full">
          <h3 className="text-2 w-full font-medium group-hover:text-selected duration-150 ease-out">
            {props.title}
          </h3>
          <div className="flex max-[800px]:flex-col justify-between gap-16 gap-y-8 w-full">
            <p className="text-sub whitespace-nowrap">{props.type}</p>
            <p className="text-body max-[800px]:hidden">-</p>

            <p className="text-3 whitespace-nowrap">By: {props.author}</p>
            <p className="text-body max-[800px]:hidden">-</p>

            <p className="text-sub whitespace-nowrap">
              {moment(props.date).format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
