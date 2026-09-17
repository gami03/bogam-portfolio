interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold text-zinc-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-zinc-400">{description}</p>
      )}
    </div>
  );
}
