"use client";

import { useState } from "react";

const categories = [
  "Housing",
  "Food Assistance",
  "Mental Health",
  "Legal Aid",
  "Employment",
  "Youth Services",
];

export default function ConciergeWidget() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-2xl">
      <p className="mb-6 text-center text-lg text-uvea-gray">
        Select a category to find services available to you.
      </p>

      <fieldset>
        <legend className="sr-only">Service categories</legend>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={selected === cat}
              onClick={() => setSelected(selected === cat ? null : cat)}
              className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition ${
                selected === cat
                  ? "border-uvea-gold bg-uvea-gold text-uvea-black"
                  : "border-uvea-white/20 bg-uvea-charcoal text-uvea-white hover:border-uvea-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </fieldset>

      {selected && (
        <div
          role="status"
          aria-live="polite"
          className="mt-8 rounded-lg border border-uvea-gold/30 bg-uvea-gold/5 p-6 text-center"
        >
          <p className="text-uvea-white">
            Showing <span className="font-semibold">{selected}</span> resources.
            A TUVEA navigator can help connect you — call{" "}
            <a href="tel:+1800000000" className="font-semibold text-uvea-gold underline">
              (800) 000-0000
            </a>{" "}
            or visit during office hours.
          </p>
        </div>
      )}
    </div>
  );
}
