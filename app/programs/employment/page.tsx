import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Employment Readiness",
  description:
    "TUVEA prepares veterans for the civilian workforce with resume support, interview coaching, job placement assistance, and employer partnerships.",
};

const whoThisIsFor = [
  "Veterans and transitioning service members seeking civilian employment",
  "Veterans who are unemployed, underemployed, or looking for a career change",
  "Service members within 12 months of separation who want a head start on job readiness",
  "Veterans with barriers to employment such as gaps in work history, justice involvement, or limited civilian credentials",
  "Military spouses seeking employment support and career resources",
];

const whatWeDo = [
  "Translate your military experience into a civilian resume that hiring managers understand",
  "Provide one-on-one interview preparation and coaching",
  "Connect you with veteran-friendly employers and hiring events in the DFW area and beyond",
  "Assist with job applications, salary negotiation, and workplace readiness skills",
  "Refer you to vocational training, apprenticeships, and upskilling programs",
  "Support you through the first 90 days of new employment to ensure long-term success",
];

const keyLinks = [
  {
    label: "VA Careers & Employment",
    href: "https://www.va.gov/careers-employment/",
  },
  {
    label: "Department of Labor — Veterans' Employment & Training (VETS)",
    href: "https://www.dol.gov/agencies/vets",
  },
  {
    label: "Texas Workforce Commission — Veterans Services",
    href: "https://www.twc.texas.gov/programs/veteran-services",
  },
  {
    label: "Hire Heroes USA",
    href: "https://www.hireheroesusa.org/",
  },
  {
    label: "American Corporate Partners (ACP) — Mentorship",
    href: "https://www.acp-usa.org/",
  },
  {
    label: "USAJOBS — Federal Employment",
    href: "https://www.usajobs.gov/",
  },
];

export default function EmploymentPage() {
  return (
    <>
      {/* ── Purpose ── */}
      <Section
        id="employment-purpose"
        heading="Employment Readiness"
        className="bg-uvea-charcoal"
      >
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-uvea-gray">
          The transition from military service to the civilian workforce is one
          of the most challenging adjustments veterans face. Employers often
          don&rsquo;t understand how your military skills translate, and the
          civilian hiring process can feel foreign. TUVEA bridges that gap with
          hands-on employment support — from resume writing and interview prep
          to direct employer connections and post-placement follow-up.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-uvea-gray/70">
          <Link
            href="/programs"
            className="text-uvea-gold underline underline-offset-4 decoration-uvea-gold/40 transition hover:decoration-uvea-gold"
          >
            &larr; Back to all programs
          </Link>
        </p>
      </Section>

      {/* ── Who This Is For ── */}
      <Section
        id="employment-who"
        heading="Who This Is For"
        className="bg-uvea-black"
      >
        <ul className="mx-auto max-w-3xl list-disc space-y-3 pl-6 text-uvea-gray">
          {whoThisIsFor.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── What We Do ── */}
      <Section
        id="employment-what"
        heading="What We Do"
        className="bg-uvea-charcoal"
      >
        <ul className="mx-auto max-w-3xl list-disc space-y-3 pl-6 text-uvea-gray">
          {whatWeDo.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Key Links ── */}
      <Section
        id="employment-links"
        heading="Key Links"
        className="bg-uvea-black"
      >
        <ul className="mx-auto max-w-3xl space-y-4">
          {keyLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-uvea-gold underline underline-offset-4 decoration-uvea-gold/40 transition hover:decoration-uvea-gold"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── CTA ── */}
      <Section
        id="employment-cta"
        heading="Ready to Get Started?"
        className="bg-uvea-charcoal"
      >
        <div className="flex justify-center">
          <Link
            href="/get-help"
            className="inline-block rounded-lg bg-uvea-gold px-8 py-3 text-lg font-semibold text-uvea-black transition hover:bg-uvea-gold/90"
          >
            Request Support
          </Link>
        </div>
      </Section>
    </>
  );
}
