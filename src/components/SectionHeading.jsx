export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase text-teal-600 dark:text-teal-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
