import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ProjectMetadata } from "@/components/projects/ProjectMetadata";

export default function ProjectCard({ project }: { project: ProjectMetadata }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative isolate block overflow-hidden aspect-[3/1.7] rounded-out border border-stroke-1 hover:border-white/20 hover:-translate-y-[3px] duration-200"
    >
      <SafeImage
        src={project.image}
        alt={`${project.title} background preview`}
        fill
        loading="lazy"
        quality={60}
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
        className="object-cover -z-10 group-hover:scale-[1.06] duration-[600ms]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/70" />
      <div className="absolute left-16 right-16 bottom-12 flex items-end justify-between gap-8">
        <div>
          <h3 className="text-[15px] font-medium">{project.title}</h3>
          <p className="text-sub text-white/60 capitalize">{project.type}</p>
        </div>
        {project.type === "new" && (
          <span className="text-[10.5px] px-8 py-[2px] rounded-full border border-[#14532d] text-[#22c55e]">New</span>
        )}
      </div>
    </Link>
  );
}
