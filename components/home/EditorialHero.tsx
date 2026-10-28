import Link from "next/link";
import Image from "next/image";
import BlackHole from "@/app/components/black-hole/black-hole";
import { fraunces, jetbrains } from "./fonts";
import StatsStrip from "./StatsStrip";

interface Props {
  total: number;
  categories: number;
  latest?: string;
}

const TOOLS = [
  { href: "/glass-effect", img: "/cubo.png", title: "Frosted Glass Effect", desc: "Background with mirror effect" },
  { href: "/nebula-effect", img: "/nebula1.png", title: "Nebula Spin Effect", desc: "A dynamic spinning nebula effect!" },
  { href: "/black-hole", img: "/nebula2.png", title: "Black Hole Effect", desc: "Create beautiful Black Hole" },
  { href: "https://buymeacoffee.com/icegreen", img: "/icons/coffee2.svg", title: "Support the project!", desc: "Become a supporter" },
];

export default function EditorialHero({ total, categories, latest }: Props) {
  return (
    <section className="relative w-full max-w-[1440px] mt-[34px] pb-[36px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <BlackHole className="absolute w-[1100px] max-w-none -top-[110px] right-[-360px] rotate-[15deg] mix-blend-screen blur-[1px] contrast-125 max-[900px]:opacity-30 max-[900px]:top-[40px]" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-[14px] text-[13px] text-white/60 mb-24">
          <span>
            Made by{" "}
            <Link className="text-accent" href="https://github.com/Icegreeen">
              Flávio Áquila
            </Link>
          </span>
          <i className="block w-[36px] h-[1px] bg-white/20" />
          <span>Free · open source</span>
        </div>

        <h1 className={`${fraunces.className} text-[clamp(52px,10.4vw,140px)] leading-[0.92] tracking-[-0.045em]`}>
          <span className="sr-only">Backseasy: </span>
          Backgrounds,
          <br />
          <i className="text-[#ff9d2e]">made easy.</i>
        </h1>

        <div className="flex flex-wrap gap-16 mt-32">
          <Link
            href="/all_backgrounds"
            className="inline-flex items-center h-[42px] px-24 rounded-out bg-white text-black text-body font-medium hover:bg-white/85 hover:-translate-y-[2px] duration-150"
          >
            Explore backgrounds
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center h-[42px] px-24 rounded-out border border-white/15 bg-black/40 text-body hover:bg-white/[.08] hover:-translate-y-[2px] duration-150"
          >
            Tutorial
          </Link>
        </div>

        <StatsStrip total={total} categories={categories} latest={latest} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-[40px]">
          {TOOLS.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="flex items-center justify-between gap-12 px-[18px] py-[14px] rounded-[14px] border border-stroke-1 bg-black/40 hover:border-[#ff9d2e] hover:bg-[#ff9d2e]/5 duration-200"
            >
              <div>
                <b className="block text-[15px] font-medium">{t.title}</b>
                <span className={`${jetbrains.className} text-[11px] text-white/55`}>{t.desc}</span>
              </div>
              <Image src={t.img} alt="" width={45} height={40} className="h-[40px] w-[45px] object-contain flex-none" sizes="45px" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
