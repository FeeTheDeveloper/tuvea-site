import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TUVEA's history, leadership, and commitment to transforming underserved communities through advocacy and action.",
};

export default function AboutPage() {
  return (
    <>
      <Section id="about-intro" heading="About TUVEA" className="bg-uvea-charcoal">
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Founded to serve communities overlooked by traditional systems, TUVEA
          combines grassroots advocacy with strategic partnerships to create
          lasting change in urban and vulnerable environments.
        </p>
      </Section>

      <Section id="values" heading="Our Values">
        <ul className="max-w-2xl mx-auto space-y-4 text-lg list-disc list-inside">
          <li>Equity and inclusion in every initiative</li>
          <li>Community-driven decision-making</li>
          <li>Transparency and accountability</li>
          <li>Culturally responsive service delivery</li>
        </ul>
      </Section>
    </>
  );
}
