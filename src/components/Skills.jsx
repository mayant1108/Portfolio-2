import { skillCategories } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-white via-slate-100 to-white px-4 py-24 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolkit organized by workflow"
          description="Core technologies across frontend, backend, tooling, and programming languages."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={index % 4 === 1 ? "delay-100" : index % 4 === 2 ? "delay-200" : index % 4 === 3 ? "delay-300" : ""}
            >
              <article className="group h-full rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-300/70 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl dark:hover:border-white/25 dark:hover:bg-white/[0.1]">
                <div
                  className={[
                    "mb-5 grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br text-slate-950 shadow-soft transition duration-300 group-hover:scale-105",
                    category.gradient,
                  ].join(" ")}
                >
                  <Icon name={category.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-white">{category.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 transition group-hover:border-teal-300/50 group-hover:text-slate-950 dark:border-white/10 dark:bg-slate-950/45 dark:text-slate-200 dark:group-hover:border-teal-300/30 dark:group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
