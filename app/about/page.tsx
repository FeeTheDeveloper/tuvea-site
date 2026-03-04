import type { Metadata } from "next";
import Image from "next/image";
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

      <Section id="leadership" heading="Leadership & Representation" className="bg-uvea-charcoal">
        <Image
          src="/images/tuvea/female-veteran-leader.png"
          alt="Confident female military veteran representing leadership and resilience"
          width={1600}
          height={900}
          className="mx-auto mb-10 w-full max-w-4xl rounded-xl shadow-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
        />
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
          TUVEA is committed to elevating diverse voices in veteran leadership.
          Our programs and partnerships reflect the full spectrum of those who
          have served — across race, gender, age, and ability.
        </p>
      </Section>
    </>
  );
}
