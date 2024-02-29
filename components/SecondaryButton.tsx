import Link from "next/link";

interface ButtonProps {
    text: string;
    type: string;
    link: string;
}

export default function SecondaryButton({ text, type, link }: ButtonProps) {
    return (
        <Link href={link} className="bg-white/[.04] border-stroke-2 text-white hover:bg-white/[.08] active:bg-white/[.02] disabled:bg-transparent
        text-body border w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-out
        hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30">
            {text}
        </Link>
    );
}
