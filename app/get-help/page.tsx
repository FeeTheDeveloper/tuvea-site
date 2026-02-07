import type { Metadata } from "next";
import Section from "@/components/Section";
import ConciergeWidget from "@/components/ConciergeWidget";

export const metadata: Metadata = {
  title: "Get Help",
  description:
    "Access immediate support, crisis resources, and TUVEA's community services. Get connected to the help you need today.",
};

export default function GetHelpPage() {
  return (
    <>
      <Section id="get-help-intro" heading="Get Help" className="bg-uvea-charcoal">
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Whether you need housing assistance, mental health support, food
          resources, or emergency aid, TUVEA is here to connect you with the
          right services.
        </p>
      </Section>

      <Section id="concierge" heading="Service Navigator">
        <ConciergeWidget />
      </Section>

      <Section id="crisis-resources" heading="Crisis Support" className="bg-uvea-charcoal">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-lg">
            If you or someone you know is in immediate danger, call{" "}
            <a href="tel:911" className="font-semibold text-uvea-gold underline">
              911
            </a>
            .
          </p>
          <p className="text-lg">
            988 Suicide &amp; Crisis Lifeline:{" "}
            <a href="tel:988" className="font-semibold text-uvea-gold underline">
              Call or text 988
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
