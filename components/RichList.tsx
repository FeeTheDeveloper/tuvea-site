type Item = {
  title: string;
  description: string;
};

export default function RichList({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="p-5 rounded-lg border border-uvea-gold/15 bg-uvea-charcoal/70"
        >
          <h3 className="font-cinzel text-lg text-uvea-white font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-uvea-gray text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
