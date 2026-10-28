import Link from "next/link";

const LINKS = [
  { text: "All backgrounds", href: "/all_backgrounds/" },
  { text: "Mesh Gradient", href: "/mesh-gradient" },
  { text: "Particle System", href: "/particle-system" },
  { text: "Black Hole", href: "/black-hole" },
  { text: "Glass Effect", href: "/glass-effect" },
  { text: "Nebula Effect", href: "/nebula-effect" },
  { text: "GitHub", href: "https://github.com/Icegreeen/backseasy" },
];

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-16 mt-[20px] py-[26px] border-t border-stroke-1 max-w-[1440px] w-full text-[13.5px] text-white/60">
      <Link href="/" className="hover:text-white">
        © Backseasy — made by Flávio Áquila
      </Link>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-24 gap-y-8">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-white">
            {l.text}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
