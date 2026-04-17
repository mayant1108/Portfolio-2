import { useState } from "react";
import { contactMethods, profile } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 dark:border-white/10 dark:bg-white/[0.07] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-teal-300 dark:focus:bg-white/[0.1]";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setMessage("Message received. Thanks for reaching out.");
  };

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
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl">
                <Icon name="mail" className="mb-4 h-8 w-8 text-teal-300" />
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">Available for full-stack work.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Contact {profile.name} for React.js, Node.js, Express.js, MongoDB, REST API, and
                  responsive web application work.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-teal-300/70 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl dark:hover:border-teal-300/50 dark:hover:bg-white/[0.09]"
                    href={method.url}
                    target={method.url.startsWith("http") ? "_blank" : undefined}
                    rel={method.url.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-teal-300 to-orange-300 text-slate-950">
                      <Icon name={method.icon} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase text-orange-200">
                        {method.label}
                      </span>
                      <span className="mt-1 block break-words text-sm font-black text-slate-950 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-100">
                        {method.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay="delay-100">
            <form
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl sm:p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                    <Icon name="user" className="h-4 w-4 text-teal-300" />
                    Name
                  </span>
                  <input className={inputClasses} name="name" type="text" placeholder="Your name" required />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                    <Icon name="mail" className="h-4 w-4 text-teal-300" />
                    Email
                  </span>
                  <input className={inputClasses} name="email" type="email" placeholder="you@example.com" required />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  <Icon name="message" className="h-4 w-4 text-teal-300" />
                  Message
                </span>
                <textarea
                  className={`${inputClasses} min-h-40 resize-y`}
                  name="message"
                  placeholder="Tell me about your project"
                  required
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400 px-6 text-sm font-black text-slate-950 shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-teal-400/30 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
              >
                Send Message
                <Icon name="send" className="h-4 w-4" />
              </button>

              {message ? (
                <p className="mt-4 rounded-lg border border-teal-300/40 bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800 dark:bg-teal-300/10 dark:text-teal-100">
                  {message}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
