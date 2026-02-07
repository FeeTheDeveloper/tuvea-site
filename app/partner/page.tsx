import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with TUVEA to expand community impact. Learn about sponsorship, volunteer, and organizational collaboration opportunities.",
};

export default function PartnerPage() {
  return (
    <>
      <Section id="partner-intro" heading="Partner With TUVEA" className="bg-uvea-charcoal">
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          TUVEA partners with organizations, businesses, and government agencies
          to amplify impact across housing, health, education, and economic
          mobility.
        </p>
      </Section>

      <Section id="opportunities" heading="Partnership Opportunities">
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {[
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
          ].map(({ title, description }) => (
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
    </>
  );
}
