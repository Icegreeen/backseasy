import Link from "next/link";
import { GENERATORS } from "@/components/home/data";
import { fraunces, jetbrains } from "@/components/home/fonts";

interface Props {
  /** id em GENERATORS (home/data.ts); usado para não listar a própria página em "More generators" */
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

/**
 * Casco padrão das telas de gerador (/glass-effect, /nebula-effect, /black-hole, /mesh-gradient...):
 * breadcrumb, H1 editorial, descrição, painel com o gerador e links para os outros geradores.
 */
export default function GeneratorShell({ id, title, description, children }: Props) {
  const others = GENERATORS.filter((g) => g.href && g.id !== id);

  return (
    <div className="w-full max-w-[1440px] mt-[56px]">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-8 text-[13px] text-white/50 mb-24">
        <Link href="/" className="hover:text-white">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#generators" className="hover:text-white">Generators</Link>
        <span aria-hidden="true">/</span>
        <span className="text-white/80">{title}</span>
      </nav>

      <h1 className={`${fraunces.className} text-[clamp(40px,6.4vw,92px)] leading-[0.98] tracking-[-0.04em]`}>{title}</h1>
      <p className="mt-24 max-w-[640px] text-[18px] leading-[1.6] text-white/70">{description}</p>
      <p className={`${jetbrains.className} mt-12 text-[12px] text-white/45`}>free · live preview · copy the code</p>

      <div className="mt-[36px] min-w-0 overflow-x-auto rounded-24 border border-stroke-1 bg-white/[.015] p-[18px] max-[580px]:p-12">
        {children}
      </div>

      <section className="mt-[80px] border-t border-stroke-1 pt-[32px]" aria-labelledby="more-generators">
        <h2 id="more-generators" className={`${fraunces.className} text-[clamp(26px,3vw,38px)] tracking-[-0.03em] mb-24`}>
          More generators
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {others.map((g) => (
            <li key={g.id}>
              <Link
                href={g.href!}
                className="group flex h-full flex-col gap-4 rounded-out border border-stroke-1 px-[18px] py-[16px] hover:border-accent/60 hover:bg-accent/5 duration-200"
              >
                <b className="text-[17px] font-medium group-hover:text-accent duration-200">{g.label}</b>
                <span className="text-[13px] text-white/55">{g.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
