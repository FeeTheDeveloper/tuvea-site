export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="py-10 sm:py-12 border-b border-uvea-gold/15 bg-gradient-to-r from-uvea-charcoal/80 to-uvea-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <p className="text-uvea-gold uppercase tracking-[0.2em] text-xs font-semibold">
          UVEA
        </p>
        <h1 className="font-cinzel text-3xl sm:text-4xl text-uvea-white font-bold">
          {title}
        </h1>
        {subtitle && <p className="text-uvea-gray text-base max-w-3xl">{subtitle}</p>}
      </div>
    </div>
  );
}
