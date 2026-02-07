import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Education & Credentials",
  description:
    "TUVEA supports veterans in accessing education benefits, earning credentials and certifications, and translating military experience into academic credit.",
};

const whoThisIsFor = [
  "Veterans and transitioning service members exploring higher education or vocational training",
  "Veterans who want to use their GI Bill, VR&E (Chapter 31), or other education benefits",
  "Service members seeking to translate military training into civilian credentials or college credit",
  "Veterans interested in professional certifications, licensure, or skills-based programs",
  "Military spouses and dependents eligible for transferred education benefits",
];

const whatWeDo = [
  "Help you understand and maximize your GI Bill (Post-9/11, Montgomery, or MGIB-SR) benefits",
  "Guide you through Veteran Readiness and Employment (VR&E / Chapter 31) applications",
  "Identify schools, trade programs, and certification courses approved for VA funding",
  "Assist with translating military training and MOS into civilian academic credit",
  "Connect you with veteran student support services, tutoring, and campus resources",
  "Provide referrals for scholarships and financial aid beyond VA education benefits",
];

const keyLinks = [
  {
    label: "VA Education Benefits — GI Bill",
    href: "https://www.va.gov/education/about-gi-bill-benefits/",
  },
  {
    label: "VA Veteran Readiness & Employment (VR&E)",
    href: "https://www.va.gov/careers-employment/vocational-rehabilitation/",
  },
  {
    label: "GI Bill Comparison Tool",
    href: "https://www.va.gov/gi-bill-comparison-tool/",
  },
  {
    label: "Joint Services Transcript (JST)",
    href: "https://jst.doded.mil/",
  },
  {
    label: "Texas Veterans Commission — Education",
    href: "https://www.tvc.texas.gov/education/",
  },
  {
    label: "Hazelwood Act — Texas Education Benefits",
    href: "https://www.tvc.texas.gov/education/hazlewood-act/",
  },
];

export default function EducationPage() {
  return (
    <>
      {/* ── Purpose ── */}
      <Section
        id="education-purpose"
        heading="Education & Credentials"
        className="bg-uvea-charcoal"
      >
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-uvea-gray">
          Your service gave you discipline, leadership, and technical skills
          that many civilians never develop. Education benefits exist to help you
          build on that foundation — whether you want a four-year degree, a
          trade certification, or professional licensure. TUVEA helps you
          navigate the process so you get the most out of every dollar of
          education funding you&rsquo;ve earned.
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
        id="education-who"
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
        id="education-what"
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
        id="education-links"
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
        id="education-cta"
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
