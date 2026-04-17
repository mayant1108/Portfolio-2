import { useState } from "react";
import { navItems, profile } from "../data/portfolio.js";
import Icon from "./Icon.jsx";

export default function Navbar({ activeSection, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (id) =>
    [
      "rounded-full px-4 py-2 text-sm font-bold transition duration-300",
      activeSection === id
        ? "bg-slate-950 text-white shadow-soft dark:bg-white dark:text-slate-950"
        : "text-slate-700 hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white",
    ].join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/75 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/75">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-teal-300 via-emerald-300 to-orange-300 text-base font-black text-slate-950 shadow-glow">
            {profile.initials}
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-black text-slate-950 dark:text-white sm:text-base">
              {profile.name}
            </span>
            <span className="block text-xs font-semibold text-teal-700 dark:text-teal-200">
              {profile.headline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={linkClasses(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={onToggleTheme}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-teal-300 dark:border-white/15 dark:bg-white/10 dark:text-white"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={onToggleTheme}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-teal-300 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <Icon name={isOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="animate-slideDown border-t border-slate-200/70 bg-white/95 px-4 py-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={[
                  "rounded-lg px-4 py-3 text-sm font-bold transition",
                  activeSection === item.id
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "text-slate-700 hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white",
                ].join(" ")}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
