import { projects } from "../data/portfolio.js";
import ButtonLink from "./ButtonLink.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 px-4 py-24 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Full-stack projects with REST API thinking"
          description="Project work focused on CRUD operations, searchable data, MongoDB storage, and React-to-API integration."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-300/70 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl dark:hover:border-teal-300/50 dark:hover:bg-white/[0.09]">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 dark:border-white/10 dark:bg-white/10 dark:text-teal-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <ul className="mt-5 grid flex-1 gap-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500 dark:bg-teal-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <ButtonLink href={project.liveUrl} icon="external" className="min-h-11 px-4" variant="primary">
                      Live Demo
                    </ButtonLink>
                    <ButtonLink href={project.githubUrl} icon="github" className="min-h-11 px-4" variant="subtle">
                      GitHub
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
