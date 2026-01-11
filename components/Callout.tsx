import { ReactNode } from "react";

export default function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 rounded-lg bg-uvea-charcoal border border-uvea-gold/20 shadow-inner shadow-uvea-gold/10">
      {children}
    </div>
  );
}
