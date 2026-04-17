import { profile, socials } from "../data/portfolio.js";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <a href="#home" className="text-lg font-black text-slate-950 dark:text-white">
            {profile.name}
          </a>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            &copy; 2026 {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              aria-label={social.label}
              className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:-translate-y-0.5 hover:border-teal-300/70 hover:text-teal-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-teal-300/50 dark:hover:bg-white/10 dark:hover:text-white"
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon name={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
