import Icon from "./Icon.jsx";

const variants = {
  primary:
    "bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400 bg-[length:200%_200%] text-slate-950 shadow-glow hover:animate-shimmer hover:shadow-teal-400/30",
  secondary:
    "border border-slate-200 bg-white/80 text-slate-950 shadow-soft backdrop-blur-xl hover:border-teal-400 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-teal-300/70 dark:hover:bg-white/15",
  subtle:
    "border border-slate-200 bg-slate-950/5 text-slate-900 shadow-soft backdrop-blur-xl hover:border-orange-400 hover:bg-white/80 dark:border-white/20 dark:bg-slate-950/40 dark:text-slate-100 dark:hover:border-orange-300/70 dark:hover:bg-white/10",
};

export default function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <Icon
          name={icon}
          className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
        />
      ) : null}
    </a>
  );
}
