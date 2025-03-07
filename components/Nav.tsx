/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
    },
  };
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Glass Effect", link: "/glass-effect" },
    { text: "Nebula Effect", link: "/nebula-effect" },
    { text: "About", link: "/#about" },
    { text: "Blog", link: "/blogs" },
  ];
  return (
    <nav className="top-28 max-[630px]:top-24 place-self-center z-50 flex flex-col gap-12 max-w-[1800px] w-full mx-20">
      <div className="px-128 py-16 flex max-[630px]:px-32 w-full z-50 place-content-between place-items-center backdrop-blur-main border border-stroke-1 rounded-out max-[1300px]:border-x-0 max-[1300px]:rounded-none">
        <Link href={"/"}>
          <Image
            src={"/logo2.png"}
            width={33}
            height={33}
            alt="Logo"
            className="hover-active-effect"
          />
        </Link>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={containerVars}
          className="flex items-center gap-32 max-[630px]:gap-16 max-[700px]:hidden"
        >
          {navItems.map((link, index) => {
            return <NavLink text={link.text} link={link.link} key={index} />;
          })}  

              <Link
                href={"/auth"}
                className="bg-purple/75 border-stroke-2 text-white hover:bg-purple active:bg-purple/50 disabled:bg-purple/25
                          text-body border w-fit h-[40px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in
                          hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30"
              >
                Get Plus
                <img className="h-18" src="star.png" alt="star" />
              </Link>

              <Link href={"https://buymeacoffee.com/icegreen"}>
                <Image
                  src={"/icons/coffee2.svg"}
                  alt={"bymycoffee"}
                  width={22}
                  height={20}
                  className="hover-active-effect"
                />
              </Link>
             
        </motion.div>
        <button
          onClick={() => setNavbar(!navbar)}
          className="hidden text-[28px] max-[700px]:block"
        >
          {navbar ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>
      
      {/* Mobile */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVars}
        className={`flex-col py-36 items-center content-center gap-32 max-[630px]:px-32 w-full z-50 place-content-between place-items-center backdrop-blur-main bg-bg-1 border border-stroke-1 rounded-out max-[1300px]:border-x-0 max-[1300px]:rounded-none ${
          navbar ? "flex" : "hidden"
        }`}
      >
        {navItems.map((link, index) => {
          return (
            <NavLink textBig text={link.text} link={link.link} key={index} />
          );
        })}
              <Link
                href={"/auth"}
                className="bg-purple/75 border-stroke-2 text-white hover:bg-purple active:bg-purple/50 disabled:bg-purple/25
                          text-body border w-fit h-[40px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-in
                          hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30"
              >
                Get Plus
                <img className="h-18" src="star.png" alt="star" />
              </Link>
      </motion.div>
    </nav>
  );
}

const childVars = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
};
const NavLink = ({
  text,
  link,
  textBig,
}: {
  text: string;
  link: string;
  textBig?: boolean;
}) => {
  return (
    <motion.div variants={childVars}>
      <Link
        href={link}
        className={`hover:text-selected active:text-selected/75 duration-150 ${
          textBig ? "text-3" : "text-sub"
        }`}
      >
        {text}
      </Link>
    </motion.div>
  );
};
