import Link from "next/link";

interface ButtonProps {
    text: string;
    type: string;
    link: string;
}

export default function PrimaryButton({ text, type, link }: ButtonProps) {
    return (
        <Link href={link} className="bg-brand-blue/75 border-stroke-2 text-white hover:bg-brand-blue active:bg-brand-blue/50 disabled:bg-brand-blue/25
        text-body border w-fit h-[42px] shadow-fg flex items-center gap-6 ease-out duration-150 px-24 rounded-out
        hover:-translate-y-[2px] active:translate-y-6 disabled:cursor-not-allowed disabled:text-white/30">
            {text}
        </Link>
    );
}
