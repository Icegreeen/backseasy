import Link from "next/link";

export default function SupportCta() {
  return (
    <section className="w-full max-w-[1440px] mt-[26px] flex flex-wrap items-center justify-between gap-16 px-[26px] py-[22px] rounded-24 border border-stroke-1 bg-white/[.02]">
      <div>
        <b className="block text-[20px] font-medium">Like it? Keep it free.</b>
        <p className="text-[14px] text-white/60 mt-[2px]">Become a supporter and get a special mention.</p>
      </div>
      <Link
        href="https://www.buymeacoffee.com/icegreen"
        className="inline-flex items-center gap-8 px-24 h-[42px] rounded-out bg-white text-black text-body font-medium hover:bg-white/85 hover:-translate-y-[2px] duration-150"
      >
        ☕ Buy me a coffee
      </Link>
    </section>
  );
}
