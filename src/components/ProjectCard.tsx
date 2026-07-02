import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { DashboardPlaceholder } from "./DashboardPlaceholder";

type ProjectCardProps = {
  project: Project;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.5">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isFeatured = project.featured;

  return (
    <article
      id={isFeatured ? "hovedcase" : undefined}
      className={`group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)] ${
        isFeatured ? "lg:grid lg:grid-cols-[1.08fr_0.92fr]" : "flex h-full flex-col"
      }`}
    >
      <div className={`bg-slate-100 ${isFeatured ? "p-3 sm:p-5" : "p-3"}`}>
        {project.images ? (
          <div className="space-y-3 sm:space-y-4">
            {project.images.map((image, index) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
              >
                <figcaption className="flex items-center justify-between border-b border-slate-200 px-3 py-2.5 sm:px-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                    {image.label}
                  </span>
                  <span className="font-mono text-[9px] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figcaption>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="h-auto w-full bg-white object-contain"
                />
              </figure>
            ))}
            {project.demoVideo ? (
              <section
                id="projekt-08-demo"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
              >
                <div className="border-b border-slate-200 px-3 py-3 sm:px-4">
                  <h4 className="text-sm font-semibold text-slate-950">
                    {project.demoVideo.title}
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {project.demoVideo.caption}
                  </p>
                </div>
                <video
                  controls
                  preload="metadata"
                  className="aspect-video w-full bg-slate-950 object-contain"
                >
                  <source src={project.demoVideo.src} type="video/mp4" />
                  Din browser understøtter ikke videoafspilleren.
                </video>
              </section>
            ) : null}
          </div>
        ) : (
          <DashboardPlaceholder
            accent={project.accent}
            projectNumber={project.number}
            featured={isFeatured}
          />
        )}
      </div>

      <div className={`flex flex-1 flex-col ${isFeatured ? "p-6 sm:p-8 lg:p-10" : "p-6"}`}>
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Projekt {project.number}
          </p>
          {isFeatured ? (
            <span className="rounded-full bg-lime-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-lime-900">
              Udvalgt case
            </span>
          ) : null}
        </div>

        <h3 className={`mt-4 font-semibold tracking-[-0.035em] text-slate-950 ${isFeatured ? "text-3xl" : "text-2xl"}`}>
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>

        <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-5 text-slate-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[10px] font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>

        {isFeatured ? (
          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            <a
              href="#projekt-08-demo"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Se demo
              <ArrowIcon />
            </a>
            <a
              href="#hovedcase"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              Læs case
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
