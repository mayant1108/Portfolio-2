import { useEffect, useState } from "react";
import { profile } from "../data/portfolio.js";
import ButtonLink from "./ButtonLink.jsx";
import Reveal from "./Reveal.jsx";

function useTypingEffect(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const atWordEnd = letterIndex === currentWord.length;
    const atWordStart = letterIndex === 0;
    const delay = isDeleting ? 46 : atWordEnd ? 1200 : 86;

    const timer = window.setTimeout(() => {
      if (!isDeleting && atWordEnd) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && atWordStart) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setLetterIndex((index) => index + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, letterIndex, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}

export default function Hero() {
  const typedRole = useTypingEffect(profile.roles);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-slate-50 pt-28 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f8fafc_0%,#ccfbf1_44%,#fed7aa_100%)] transition-colors duration-300 dark:bg-[linear-gradient(135deg,#020617_0%,#0f766e_42%,#7c2d12_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.12)_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-25 dark:[background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-bold text-teal-800 shadow-soft backdrop-blur-xl dark:border-white/15 dark:bg-white/10 dark:text-teal-100">
            {profile.location} · Open to full-stack opportunities
          </p>
          <h1 className="text-5xl font-black leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-teal-700 via-slate-950 to-orange-600 bg-clip-text text-transparent dark:from-teal-200 dark:via-white dark:to-orange-200">
              {profile.name}
            </span>
            .
          </h1>
          <p className="mt-6 text-2xl font-black leading-snug text-slate-900 dark:text-white sm:text-3xl">
            {profile.headline}
          </p>
          <p className="mt-4 min-h-10 max-w-2xl text-xl font-bold leading-snug text-slate-800 dark:text-white sm:text-2xl">
            I create{" "}
            <span className="text-orange-700 dark:text-orange-200">
              {typedRole}
              <span className="ml-1 animate-pulse text-teal-700 dark:text-teal-200">|</span>
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-100 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#projects" icon="arrow">
              View Projects
            </ButtonLink>
            <ButtonLink href={profile.resume} icon="download" variant="secondary" download>
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" icon="mail" variant="subtle">
              Contact Me
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["React.js", "Tailwind CSS", "Node.js", "MongoDB"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-bold text-slate-800 shadow-soft backdrop-blur-xl dark:border-white/15 dark:bg-white/10 dark:text-slate-100"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-lg" delay="delay-150">
          <div className="absolute inset-6 rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-300/20" />
          <div className="group relative animate-float overflow-hidden rounded-full border border-white/70 bg-white/70 p-3 shadow-glow ring-2 ring-teal-400/45 backdrop-blur-xl transition duration-500 hover:scale-[1.02] hover:ring-orange-300/80 dark:border-white/20 dark:bg-white/10 dark:ring-teal-200/40 dark:hover:ring-orange-200/70">
            <img
              src={profile.image}
              alt={`${profile.name} profile photo`}
              className="aspect-square w-full rounded-full object-cover transition duration-700 group-hover:scale-110"
              decoding="async"
              loading="eager"
            />
          </div>
          <div className="absolute -left-2 bottom-10 rounded-lg border border-slate-200 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl dark:border-white/15 dark:bg-slate-950/70 sm:left-0">
            <p className="text-xs font-bold uppercase text-teal-700 dark:text-teal-200">Focus</p>
            <p className="text-sm font-black text-slate-950 dark:text-white">MERN Stack</p>
          </div>
          <div className="absolute right-0 top-12 rounded-lg border border-slate-200 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl dark:border-white/15 dark:bg-slate-950/70">
            <p className="text-xs font-bold uppercase text-orange-700 dark:text-orange-200">Strength</p>
            <p className="text-sm font-black text-slate-950 dark:text-white">REST APIs</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
