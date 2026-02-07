import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ResourceSection from "@/components/ResourceSection";
import { HOUSING_GROUPS } from "@/src/data/resources/housing";

export const metadata: Metadata = {
  title: "Housing & Stability",
  description:
    "Veteran housing resources including emergency shelter, transitional housing, rapid re-housing, and permanent supportive housing programs across DFW, Texas, and the nation.",
};

const startHereActions = [
  {
    label: "VA Homeless Veterans Call Center",
    phone: "877-424-3838",
    description: "24/7 national hotline for veterans who are homeless or at risk",
    website: "https://www.va.gov/homeless/nationalcallcenter.asp",
  },
  {
    label: "2-1-1 Texas",
    phone: "877-541-7905",
    displayPhone: "211 / 877-541-7905",
    description: "Statewide referral line for housing, food, and social services",
    website: "https://www.211texas.org/",
  },
  {
    label: "Veterans Center of North Texas (VCNT)",
    phone: "214-600-2966",
    description: "DFW-area transitional housing and case management intake",
    website: "https://www.veteranscenterofnorthtexas.org/",
  },
];

export default function HousingPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <Section id="housing-header" heading="Housing & Stability" className="bg-uvea-charcoal">
        <p className="mx-auto mb-4 max-w-3xl text-center text-lg leading-relaxed text-uvea-gray">
          Start here if you are homeless, at risk of homelessness, or need
          housing support. Stable housing is the foundation for every other form
          of recovery.
        </p>
        <p className="mx-auto max-w-3xl text-center text-sm text-uvea-gray/70">
          <Link
            href="/resources"
            className="text-uvea-gold underline underline-offset-4 decoration-uvea-gold/40 transition hover:decoration-uvea-gold"
          >
            &larr; Back to all resources
          </Link>
        </p>
      </Section>

      {/* ── Start Here ── */}
      <Section id="start-here" heading="Start Here" className="bg-uvea-black">
        <p className="mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed text-uvea-gray">
          Not sure where to begin? These three lines connect you to immediate
          housing support — call any time.
        </p>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {startHereActions.map(({ label, phone, displayPhone, description, website }) => (
            <div
              key={phone}
              className="flex flex-col items-center rounded-xl border border-uvea-gold/20 bg-uvea-charcoal p-6 text-center"
            >
              <p className="text-sm font-medium text-uvea-white">{label}</p>
              <a
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="mt-2 text-2xl font-display font-bold text-uvea-gold underline decoration-uvea-gold/40 underline-offset-4 transition hover:decoration-uvea-gold"
              >
                {displayPhone ?? phone}
              </a>
              <p className="mt-2 text-xs leading-relaxed text-uvea-gray">
                {description}
              </p>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-uvea-gold/80 transition hover:text-uvea-gold"
              >
                Visit website
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-4.5h6m0 0v6m0-6L9.75 14.25"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Housing Resources by Region ── */}
      <ResourceSection
        title="Housing Resources by Region"
        description="These organizations provide housing assistance, homelessness prevention, and supportive services specifically for veterans and their families — starting with North Texas."
        groups={HOUSING_GROUPS}
      />
    </>
  );
}
