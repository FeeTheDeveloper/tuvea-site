import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Benefits & Claims Navigation",
  description:
    "TUVEA helps veterans and their families navigate the VA benefits and claims process — from initial filing to appeals and upgrades.",
};

const whoThisIsFor = [
  "Veterans who have not yet filed a VA disability or pension claim",
  "Veterans with pending, denied, or under-rated claims seeking appeals or upgrades",
  "Surviving spouses and dependents eligible for Dependency and Indemnity Compensation (DIC)",
  "Veterans transitioning from active duty who need guidance on benefits enrollment",
  "Family members and caregivers assisting a veteran with the claims process",
];

const whatWeDo = [
  "Walk you through the VA claims process from initial filing to decision",
  "Connect you with accredited Veterans Service Organization (VSO) representatives",
  "Help gather medical records, service records, and supporting evidence for your claim",
  "Guide you through the appeals process — Higher-Level Review, Supplemental Claims, and Board Appeals",
  "Assist with claim upgrades, including discharge upgrades and rating increases",
  "Provide referrals for legal assistance when needed",
];

const keyLinks = [
  {
    label: "VA.gov — File a Claim",
    href: "https://www.va.gov/disability/how-to-file-claim/",
  },
  {
    label: "VA Benefits Hotline (800-827-1000)",
    href: "https://www.va.gov/contact-us/",
  },
  {
    label: "eBenefits Portal",
    href: "https://www.ebenefits.va.gov/",
  },
  {
    label: "Board of Veterans' Appeals",
    href: "https://www.bva.va.gov/",
  },
  {
    label: "Texas Veterans Commission — Claims Assistance",
    href: "https://www.tvc.texas.gov/claims/",
  },
  {
    label: "DAV — Free Claims Assistance",
    href: "https://www.dav.org/veterans/i-need-help/",
  },
];

export default function BenefitsPage() {
  return (
    <>
      {/* ── Purpose ── */}
      <Section
        id="benefits-purpose"
        heading="Benefits & Claims Navigation"
        className="bg-uvea-charcoal"
      >
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-uvea-gray">
          The VA benefits system is complex, and too many veterans leave
          compensation on the table because they don&rsquo;t know what
          they&rsquo;ve earned or how to file. TUVEA provides hands-on guidance
          through the entire claims lifecycle — from first application to
          appeals and upgrades — so you receive every benefit you are owed.
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
        id="benefits-who"
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
        id="benefits-what"
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
        id="benefits-links"
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
        id="benefits-cta"
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
