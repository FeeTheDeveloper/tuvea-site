import { ReactNode } from "react";

export default function Section({
  title,
  eyebrow,
  children,
  id,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-12 sm:py-16 border-b border-uvea-gold/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-uvea-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="font-cinzel text-2xl sm:text-3xl text-uvea-white font-bold mb-6">
          {title}
        </h2>
        <div className="text-uvea-gray text-base leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}
