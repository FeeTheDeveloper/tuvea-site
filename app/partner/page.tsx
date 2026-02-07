import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with TUVEA to expand community impact. Learn about sponsorship, volunteer, and organizational collaboration opportunities.",
};

const channels = [
  {
    title: "Corporate Sponsorship",
    description:
      "Align your brand with community transformation through financial support and employee engagement.",
  },
  {
    title: "Nonprofit Collaboration",
    description:
      "Co-deliver services, share best practices, and strengthen referral networks across organizations.",
  },
  {
    title: "Government & Institutional",
    description:
      "Contract with TUVEA for culturally responsive program delivery and community engagement.",
  },
  {
    title: "Volunteer & Pro Bono",
    description:
      "Contribute professional expertise, mentorship hours, or hands-on support to active programs.",
  },
];

const partnerBenefits = [
  "Co-branded visibility across TUVEA digital platforms and community events",
  "Quarterly impact reports with real outcomes data from the programs you support",
  "Direct access to TUVEA coordinators for referral pipelines and joint service delivery",
  "Recognition on the TUVEA partner wall and annual community impact report",
  "Opportunities for employee volunteer days and skills-based engagement",
];

const getInvolved = [
  {
    title: "Donate",
    description:
      "Fund direct services — housing navigation, benefits claims support, mental health referrals, and emergency assistance for veterans and families.",
  },
  {
    title: "Volunteer",
    description:
      "Serve as a mentor, case management aide, event organizer, or pro bono professional. We match your skills to community needs.",
  },
  {
    title: "Hire",
    description:
      "Post veteran-friendly job opportunities through TUVEA\u2019s employment readiness pipeline. We prepare candidates; you provide the path.",
  },
];

export default function PartnerPage() {
  return (
    <>
      {/* ── Intro ── */}
      <Section id="partner-intro" heading="Partner With TUVEA" className="bg-uvea-charcoal">
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-uvea-gray">
          TUVEA partners with organizations, businesses, and government agencies
          to amplify impact across housing, health, education, and economic
          mobility. Whether you contribute funding, time, or hiring
          opportunities, your partnership directly strengthens veteran and
          community outcomes.
        </p>
      </Section>

      {/* ── Partnership Channels ── */}
      <Section id="partnership-channels" heading="Partnership Channels" className="bg-uvea-black">
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {channels.map(({ title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-uvea-white/10 bg-uvea-charcoal p-6 shadow-sm"
            >
              <h3 className="text-xl font-display font-semibold text-uvea-gold">
                {title}
              </h3>
              <p className="mt-2 text-uvea-gray">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── What Partners Receive ── */}
      <Section id="partner-benefits" heading="What Partners Receive" className="bg-uvea-charcoal">
        <ul className="mx-auto max-w-3xl list-disc space-y-3 pl-6 text-uvea-gray">
          {partnerBenefits.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Donate / Volunteer / Hire ── */}
      <Section id="get-involved" heading="Get Involved" className="bg-uvea-black">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {getInvolved.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-uvea-white/10 bg-uvea-charcoal p-6"
            >
              <h3 className="text-xl font-display font-semibold text-uvea-gold">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-uvea-gray">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section id="partner-cta" heading="Ready to Partner?" className="bg-uvea-charcoal">
        <div className="flex flex-col items-center gap-4">
          <p className="max-w-2xl text-center text-uvea-gray">
            Reach out to start a conversation about how your organization can
            support veterans and underserved communities through TUVEA.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-uvea-gold px-8 py-3 text-lg font-semibold text-uvea-black transition hover:bg-uvea-gold/90"
          >
            Contact Us
          </Link>
        </div>
      </Section>
    </>
  );
}
