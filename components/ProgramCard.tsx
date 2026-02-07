interface ProgramCardProps {
  title: string;
  description: string;
}

export default function ProgramCard({ title, description }: ProgramCardProps) {
  return (
    <article className="rounded-xl border border-uvea-white/10 bg-uvea-charcoal p-6 shadow-sm transition hover:shadow-md hover:border-uvea-gold/30">
      <h3 className="text-xl font-display font-semibold text-uvea-gold">
        {title}
      </h3>
      <p className="mt-3 text-uvea-gray leading-relaxed">{description}</p>
    </article>
  );
}
