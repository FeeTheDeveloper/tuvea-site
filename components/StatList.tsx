type Stat = {
  label: string;
  value: string;
};

export default function StatList({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="p-4 rounded border border-uvea-gold/20 bg-uvea-charcoal/60 text-center"
        >
          <p className="text-uvea-gold font-semibold text-sm uppercase tracking-wide">
            {stat.label}
          </p>
          <p className="text-uvea-white font-cinzel text-xl mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
