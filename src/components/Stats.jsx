import { stats } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Stats() {
  return (
    <section className="bg-slate-100 px-4 py-20 transition-colors duration-300 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Stats"
          title="A growth-focused developer mindset"
          description="Compact highlights that reflect Mayant's project practice, technical range, and learning attitude."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal
              key={`${item.value}-${item.label}`}
              delay={index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}
            >
              <article className="group rounded-lg border border-slate-200 bg-white p-7 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-300 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl">
                <p className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-4xl font-black text-transparent">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-black uppercase text-slate-700 dark:text-slate-200">
                  {item.label}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
