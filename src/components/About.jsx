import { aboutHighlights, education, profile } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 px-4 py-24 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Curious full-stack learner building practical web apps"
          description="Mayant is building a strong foundation across React frontends, Node.js backends, REST APIs, and database-backed application workflows."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl sm:p-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="group shrink-0 overflow-hidden rounded-full border border-white/50 bg-white p-2 shadow-glow ring-2 ring-teal-300/50 transition duration-500 hover:scale-[1.02] dark:border-white/15 dark:bg-white/10 dark:ring-teal-200/40">
                  <img
                    src={profile.image}
                    alt={`${profile.name} profile photo`}
                    className="h-36 w-36 rounded-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-sm font-black uppercase text-teal-600 dark:text-teal-300">
                    BCA Student · Full-stack learner
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                    Passionate about building modern websites
                  </h3>
                </div>
              </div>
              <p className="text-lg leading-9 text-slate-600 dark:text-slate-300">
                I am {profile.name}, an entry-level full-stack web developer from {profile.location}.
                I am passionate about building modern web applications that combine attractive user
                interfaces with reliable backend logic.
              </p>
              <p className="text-lg leading-9 text-slate-600 dark:text-slate-300">
                My interests sit across both sides of development: frontend experiences with React.js
                and Tailwind CSS, plus backend APIs with Node.js, Express.js, and MongoDB. I also enjoy
                strong React + UI Design work because it makes applications feel clear and polished.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/45">
                  <p className="text-xs font-bold uppercase text-teal-600 dark:text-teal-200">Degree</p>
                  <p className="mt-2 text-sm font-black text-slate-950 dark:text-white">{education.degree}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/45">
                  <p className="text-xs font-bold uppercase text-teal-600 dark:text-teal-200">University</p>
                  <p className="mt-2 text-sm font-black text-slate-950 dark:text-white">{education.university}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/45">
                  <p className="text-xs font-bold uppercase text-teal-600 dark:text-teal-200">Year</p>
                  <p className="mt-2 text-sm font-black text-slate-950 dark:text-white">{education.year}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {aboutHighlights.map((card, index) => (
              <Reveal key={card.title} delay={index === 0 ? "" : index === 1 ? "delay-100" : "delay-200"}>
                <article className="group rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-300/70 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl dark:hover:border-teal-300/50 dark:hover:bg-white/[0.09]">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-teal-300 to-orange-300 text-slate-950 shadow-glow">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
