import { ReactNode } from "react";

export default function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full max-w-full p-6 rounded-lg bg-uvea-charcoal border border-uvea-gold/15 shadow-lg shadow-black/30">
      <h3 className="font-cinzel text-lg text-uvea-white font-semibold mb-3">{title}</h3>
      <div className="text-uvea-gray text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
