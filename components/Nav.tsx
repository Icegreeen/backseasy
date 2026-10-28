"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const navItems = [
  { text: "Backgrounds", link: "/all_backgrounds" },
  { text: "Generators", link: "/#generators" },
  { text: "Black Hole", link: "/black-hole" },
  { text: "Glass Effect", link: "/glass-effect" },
  { text: "Nebula Effect", link: "/nebula-effect" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main" className="relative z-50 w-full max-w-[1440px] flex flex-col gap-8">
      <div className="flex items-center justify-between h-[56px] px-24 max-[630px]:px-16 border border-stroke-1 rounded-out bg-black/70 backdrop-blur-main">
        <Link href="/" aria-label="Backseasy home" className="flex items-center h-[44px]">
          <Image src="/logo2.png" width={31} height={33} alt="Backseasy" className="h-[33px] w-auto hover-active-effect" priority />
        </Link>

        <div className="flex items-center gap-[26px] max-[700px]:hidden">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="text-sub text-white/70 hover:text-selected active:text-selected/75 duration-150"
            >
              {item.text}
            </Link>
          ))}
          {/*
          <Link href="https://buymeacoffee.com/icegreen" aria-label="Buy me a coffee" className="flex items-center">
            <Image src="/icons/coffee2.svg" alt="" width={22} height={20} className="hover-active-effect" />
          </Link>
          */}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="hidden max-[700px]:flex items-center justify-center w-[44px] h-[44px] -mr-8 text-[28px]"
        >
          {open ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${open ? "flex" : "hidden"
          } min-[701px]:hidden flex-col items-center gap-24 py-32 border border-stroke-1 rounded-out bg-black/90 backdrop-blur-main`}
      >
        {navItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            onClick={() => setOpen(false)}
            className="text-3 hover:text-selected active:text-selected/75 duration-150"
          >
            {item.text}
          </Link>
        ))}
        {/*
        <Link
          href="https://buymeacoffee.com/icegreen"
          onClick={() => setOpen(false)}
          className="text-3 hover:text-selected duration-150"
        >
          Buy me a coffee
        </Link>*/}
      </div>
    </nav>
  );
}
