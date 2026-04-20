import { HiOutlineBriefcase, HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2";
import { contactChannels } from "../config/contact.js";
import { profile } from "../data/portfolio.js";
import ContactActionCard from "./contact/ContactActionCard.jsx";
import ContactForm from "./contact/ContactForm.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const contactHighlights = [
  {
    icon: HiOutlineBriefcase,
    label: "Focus",
    value: "React, Node.js, REST APIs",
  },
  {
    icon: HiOutlineMapPin,
    label: "Location",
    value: profile.location,
  },
  {
    icon: HiOutlineClock,
    label: "Response",
    value: "Usually within 24 hours",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 px-4 py-24 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let us connect and build something useful"
          description="Reach out for full-stack web development projects, collaborations, or entry-level developer opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-5">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl sm:p-7">
                <p className="text-sm font-black uppercase text-teal-600 dark:text-teal-300">
                  Available for work
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950 dark:text-white sm:text-3xl">
                  Have a project or role in mind?
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Contact {profile.name} for clean frontend interfaces, reliable API work, and
                  responsive portfolio or business web apps.
                </p>

                <div className="mt-6 grid gap-3">
                  {contactHighlights.map((item) => {
                    const HighlightIcon = item.icon;

                    return (
                      <div
                        className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/45"
                        key={item.label}
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-100 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                          <HighlightIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-sm font-bold text-slate-900 dark:text-white">
                            {item.value}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {contactChannels.map((channel) => (
                  <ContactActionCard channel={channel} key={channel.label} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay="delay-100">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
