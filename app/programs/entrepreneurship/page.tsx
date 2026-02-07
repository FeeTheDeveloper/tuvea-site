import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Entrepreneurship & Business Formation",
  description:
    "TUVEA supports veteran entrepreneurs with business planning, registration, funding resources, and mentorship to launch and grow veteran-owned businesses.",
};

const whoThisIsFor = [
  "Veterans who want to start a business but don't know where to begin",
  "Veteran entrepreneurs looking for funding, grants, or capital access",
  "Service-disabled veterans seeking SDVOSB or VOB certification",
  "Veterans with an existing business who need mentorship, scaling support, or government contracting guidance",
  "Military spouses interested in launching a business or freelance career",
];

const whatWeDo = [
  "Help you develop a business plan, define your market, and validate your concept",
  "Guide you through business registration, EIN setup, and state/local licensing",
  "Connect you with veteran-specific grants, SBA loans, and micro-lending programs",
  "Assist with Service-Disabled Veteran-Owned Small Business (SDVOSB) and Veteran-Owned Business (VOB) certification",
  "Provide referrals to SCORE mentors, SBA Veterans Business Outreach Centers, and local incubators",
  "Support you in pursuing government contracts and veteran set-aside opportunities",
];

const keyLinks = [
  {
    label: "SBA — Veteran-Owned Businesses",
    href: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses",
  },
  {
    label: "SBA Veterans Business Outreach Center (VBOC)",
    href: "https://www.sba.gov/local-assistance/resource-partners/veterans-business-outreach-centers",
  },
  {
    label: "VA Center for Verification and Evaluation (CVE)",
    href: "https://www.va.gov/osdbu/verification/",
  },
  {
    label: "SCORE — Free Veteran Mentorship",
    href: "https://www.score.org/our-veterans",
  },
  {
    label: "Boots to Business (SBA)",
    href: "https://www.sba.gov/sba-learning-platform/boots-business",
  },
  {
    label: "V-WISE — Veteran Women Igniting the Spirit of Entrepreneurship",
    href: "https://ivmf.syracuse.edu/programs/entrepreneurship/start-up/v-wise/",
  },
];

export default function EntrepreneurshipPage() {
  return (
    <>
      {/* ── Purpose ── */}
      <Section
        id="entrepreneurship-purpose"
        heading="Entrepreneurship & Business Formation"
        className="bg-uvea-charcoal"
      >
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-uvea-gray">
          Veterans make exceptional entrepreneurs — you already know how to
          lead, adapt, and execute under pressure. But starting a business in
          the civilian world means navigating licensing, funding, and markets
          that don&rsquo;t come with a field manual. TUVEA connects you with
          the resources, mentors, and programs designed to help veteran-owned
          businesses launch, grow, and compete.
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
        id="entrepreneurship-who"
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
        id="entrepreneurship-what"
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
        id="entrepreneurship-links"
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
        id="entrepreneurship-cta"
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
