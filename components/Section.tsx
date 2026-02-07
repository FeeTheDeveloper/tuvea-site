interface SectionProps {
  id: string;
  heading: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  heading,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id={`${id}-heading`}
          className="mb-10 text-center text-3xl font-display font-bold text-uvea-white sm:text-4xl"
        >
          {heading}
        </h2>
        {children}
      </div>
    </section>
  );
}
