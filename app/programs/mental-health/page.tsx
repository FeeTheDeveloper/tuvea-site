import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Mental Health & Recovery Support",
  description:
    "TUVEA connects veterans with culturally competent mental health care, peer support, substance use recovery programs, and crisis resources.",
};

const whoThisIsFor = [
  "Veterans experiencing PTSD, anxiety, depression, or other mental health conditions",
  "Veterans dealing with substance use or co-occurring disorders",
  "Service members transitioning out of the military who are struggling with adjustment",
  "Veterans who have experienced military sexual trauma (MST)",
  "Family members and caregivers seeking support for a veteran's mental health needs",
  "Veterans in crisis or having thoughts of suicide",
];

const whatWeDo = [
  "Connect you with VA mental health services, Vet Centers, and community-based counseling",
  "Provide warm referrals to culturally competent therapists who understand military culture",
  "Help you access peer support programs and veteran-led support groups",
  "Guide you through substance use treatment options, including VA residential and outpatient programs",
  "Assist with Military Sexual Trauma (MST) related care and claims",
  "Ensure you know how to reach crisis resources, including the 988 Suicide & Crisis Lifeline (dial 988, press 1)",
];

const keyLinks = [
  {
    label: "VA Mental Health Services",
    href: "https://www.va.gov/health-care/health-needs-conditions/mental-health/",
  },
  {
    label: "988 Suicide & Crisis Lifeline (Veterans: press 1)",
    href: "https://www.veteranscrisisline.net/",
  },
  {
    label: "VA Vet Center — Readjustment Counseling",
    href: "https://www.vetcenter.va.gov/",
  },
  {
    label: "VA Substance Use Treatment",
    href: "https://www.va.gov/health-care/health-needs-conditions/substance-use-problems/",
  },
  {
    label: "Make the Connection — Veteran Stories & Resources",
    href: "https://www.maketheconnection.net/",
  },
  {
    label: "Give an Hour — Free Mental Health Services for Veterans",
    href: "https://giveanhour.org/",
  },
];

export default function MentalHealthPage() {
  return (
    <>
      {/* ── Purpose ── */}
      <Section
        id="mental-health-purpose"
        heading="Mental Health & Recovery Support"
        className="bg-uvea-charcoal"
      >
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-uvea-gray">
          The invisible wounds of service — PTSD, traumatic brain injury,
          depression, anxiety, substance use — are real, and they deserve real
          support. TUVEA connects veterans with mental health care that is
          culturally competent, trauma-informed, and built around your
          experience. Whether you need a therapist who gets it, a peer who has
          been there, or immediate crisis help, we will walk you through every
          option until you find the right fit.
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
        id="mental-health-who"
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
        id="mental-health-what"
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
        id="mental-health-links"
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
        id="mental-health-cta"
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
