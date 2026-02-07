import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Family & Survivor Support",
  description:
    "TUVEA provides support for military families, surviving spouses, and dependents — including benefit navigation, grief resources, caregiver assistance, and community connection.",
};

const whoThisIsFor = [
  "Surviving spouses and dependents of deceased veterans",
  "Military families navigating VA benefits, TRICARE, or Dependency and Indemnity Compensation (DIC)",
  "Caregivers of disabled or aging veterans seeking respite care and support services",
  "Children and youth of veterans who need mentorship, counseling, or academic support",
  "Families experiencing financial hardship, housing instability, or food insecurity related to military service",
];

const whatWeDo = [
  "Help surviving spouses and dependents file for Dependency and Indemnity Compensation (DIC) and survivor benefits",
  "Connect caregivers with the VA Caregiver Support Program, respite care, and peer networks",
  "Provide referrals for family counseling, including grief and bereavement support",
  "Assist military families with TRICARE enrollment, benefits questions, and claims navigation",
  "Link children and youth of veterans with mentorship and educational programs",
  "Coordinate emergency assistance for families in crisis — housing, food, utilities, and transportation",
];

const keyLinks = [
  {
    label: "VA Survivors & Dependents Benefits",
    href: "https://www.va.gov/survivors/",
  },
  {
    label: "VA Caregiver Support Program",
    href: "https://www.caregiver.va.gov/",
  },
  {
    label: "Tragedy Assistance Program for Survivors (TAPS)",
    href: "https://www.taps.org/",
  },
  {
    label: "National Military Family Association (NMFA)",
    href: "https://www.militaryfamily.org/",
  },
  {
    label: "Blue Star Families",
    href: "https://bluestarfam.org/",
  },
  {
    label: "Operation Homefront — Family Support",
    href: "https://www.operationhomefront.org/",
  },
];

export default function FamilySupportPage() {
  return (
    <>
      {/* ── Purpose ── */}
      <Section
        id="family-purpose"
        heading="Family & Survivor Support"
        className="bg-uvea-charcoal"
      >
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-uvea-gray">
          Military service impacts the entire family — spouses, children,
          parents, and caregivers carry the weight alongside the veteran. When a
          veteran is lost, that weight doesn&rsquo;t disappear. TUVEA is here
          for the families and survivors who need help navigating benefits,
          finding grief support, accessing caregiver resources, or simply
          connecting with others who understand. You served too, and you deserve
          support.
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
        id="family-who"
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
        id="family-what"
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
        id="family-links"
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
        id="family-cta"
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
