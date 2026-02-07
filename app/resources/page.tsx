import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ResourceGrid from "@/components/ResourceGrid";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Find curated veteran resources including housing programs, shelters, legal aid, mental health services, and benefits assistance.",
};

const resources = [
  {
    category: "Food Assistance",
    items: [
      "Local food banks and pantries",
      "SNAP benefits enrollment help",
      "Community meal programs",
    ],
  },
  {
    category: "Shelter & Housing",
    items: [
      "Emergency shelters",
      "Transitional housing programs",
      "Rental assistance applications",
    ],
  },
  {
    category: "Legal Aid",
    items: [
      "Free legal consultations",
      "Tenant rights advocacy",
      "Immigration support services",
    ],
  },
  {
    category: "Mental Health",
    items: [
      "Crisis counseling hotlines",
      "Community therapy sessions",
      "Peer support networks",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ── Intro ── */}
      <Section id="resources-intro" heading="Veteran Resources" className="bg-uvea-charcoal">
        <p className="mx-auto mb-4 max-w-2xl text-center text-lg leading-relaxed text-uvea-gray">
          Curated resources to help veterans and their families find housing,
          food, legal aid, mental health support, and more.
        </p>
      </Section>

      {/* ── Housing & Stability — Featured Link ── */}
      <section className="bg-uvea-black px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/resources/housing"
          className="group mx-auto block max-w-3xl rounded-2xl border border-uvea-gold/30 bg-uvea-charcoal p-8 transition hover:border-uvea-gold/60 hover:shadow-lg hover:shadow-uvea-gold/5"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-uvea-gold sm:text-3xl">
                Housing &amp; Stability
              </h2>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-uvea-gray">
                38 verified programs across DFW, Texas, and the nation —
                emergency shelter, transitional housing, rapid re-housing, and
                permanent supportive housing for veterans.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-uvea-gold transition group-hover:gap-2">
                Explore housing resources
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── General Community Resources ── */}
      <Section id="resources" heading="Community Resources" className="bg-uvea-charcoal">
        <ResourceGrid resources={resources} />
      </Section>
    </>
  );
}
