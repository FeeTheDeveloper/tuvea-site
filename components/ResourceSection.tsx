"use client";

import type { ResourceGroup } from "@/src/data/resources/housing";

interface ResourceSectionProps {
  title: string;
  description?: string;
  groups: ResourceGroup[];
}

function CopyPhoneButton({ phone }: { phone: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phone);
    } catch {
      /* Fallback — select the text so the user can copy manually */
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy phone number ${phone}`}
      className="inline-flex items-center gap-1 rounded-md border border-uvea-white/10 bg-uvea-black px-2 py-1 text-xs text-uvea-gray transition hover:border-uvea-gold/40 hover:text-uvea-gold"
    >
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
        />
      </svg>
      Copy
    </button>
  );
}

export default function ResourceSection({
  title,
  description,
  groups,
}: ResourceSectionProps) {
  return (
    <section
      id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
      aria-labelledby={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}
      className="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}
          className="mb-4 text-center text-3xl font-display font-bold text-uvea-white sm:text-4xl"
        >
          {title}
        </h2>

        {description && (
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-uvea-gray">
            {description}
          </p>
        )}

        {groups.map((group) => (
          <div key={group.title} className="mt-12 first:mt-0">
            <h3 className="mb-6 border-b border-uvea-white/10 pb-3 text-xl font-display font-semibold text-uvea-gold">
              {group.title}
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((resource) => (
                <article
                  key={resource.name}
                  className="flex flex-col rounded-xl border border-uvea-white/10 bg-uvea-charcoal p-5 transition-all duration-200 hover:border-uvea-gold/30 hover:shadow-lg"
                >
                  {/* Name */}
                  <h4 className="font-display text-base font-semibold leading-snug text-uvea-white">
                    {resource.name}
                  </h4>

                  {/* Coverage */}
                  <p className="mt-1.5 text-xs text-uvea-gray">
                    {resource.coverage}
                  </p>

                  {/* Service type chips */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {resource.serviceTypes.map((type) => (
                      <span
                        key={type}
                        className="rounded-full border border-uvea-gold/20 bg-uvea-gold/5 px-2.5 py-0.5 text-xs font-medium text-uvea-gold"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Eligibility */}
                  <p className="mt-3 text-sm leading-relaxed text-uvea-gray">
                    <span className="font-medium text-uvea-white/80">Eligibility:</span>{" "}
                    {resource.eligibility}
                  </p>

                  {/* Intake */}
                  <p className="mt-2 text-sm leading-relaxed text-uvea-gray">
                    <span className="font-medium text-uvea-white/80">Intake:</span>{" "}
                    {resource.intake}
                  </p>

                  {/* Phone + copy */}
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={`tel:${resource.phone.replace(/[^+\d]/g, "")}`}
                      className="text-sm font-medium text-uvea-gold underline decoration-uvea-gold/40 underline-offset-2 transition hover:decoration-uvea-gold"
                    >
                      {resource.phone}
                    </a>
                    <CopyPhoneButton phone={resource.phone} />
                  </div>

                  {/* Website link — pushed to bottom */}
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-uvea-gold/70 transition hover:text-uvea-gold"
                  >
                    Visit website
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
