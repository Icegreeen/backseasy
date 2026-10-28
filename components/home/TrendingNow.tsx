import Link from "next/link";
import { ProjectMetadata } from "@/components/projects/ProjectMetadata";
import ProjectCard from "./ProjectCard";
import { fraunces } from "./fonts";

export default function TrendingNow({ projects }: { projects: ProjectMetadata[] }) {
  return (
    <section className="w-full max-w-[1440px] mt-[110px]" aria-labelledby="trending-title">
      <div className="flex items-baseline gap-16 mb-24">
        <h2 id="trending-title" className={`${fraunces.className} text-[clamp(32px,4vw,52px)] tracking-[-0.03em]`}>
          Trending now
        </h2>
        <Link href="/all_backgrounds" className="text-sub text-white/60 hover:text-white">
          See all →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
