interface Resource {
  category: string;
  items: string[];
}

interface ResourceGridProps {
  resources: Resource[];
}

export default function ResourceGrid({ resources }: ResourceGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {resources.map(({ category, items }) => (
        <article
          key={category}
          className="rounded-xl border border-uvea-white/10 bg-uvea-charcoal p-6 shadow-sm"
        >
          <h3 className="text-lg font-display font-semibold text-uvea-gold">
            {category}
          </h3>
          <ul className="mt-3 space-y-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-uvea-gray"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-uvea-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
