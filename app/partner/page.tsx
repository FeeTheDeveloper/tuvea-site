import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import RichList from "@/components/RichList";

export default function PartnerPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Partner With Us"
        subtitle="UVEA partners with veteran service organizations, government agencies, nonprofits, foundations, and veteran-friendly businesses to expand impact nationwide."
      />
      <ContentLayout>
        <Section title="Collaboration Focus" eyebrow="Aligned Impact">
          <RichList
            items={[
              {
                title: "Veteran service organizations",
                description: "Coordinate stabilization, recovery, and benefits navigation with trusted partners.",
              },
              {
                title: "Government agencies",
                description: "Align services and referrals to speed outcomes for veterans and families.",
              },
              {
                title: "Nonprofits and foundations",
                description: "Scale support through joint initiatives and shared standards.",
              },
              {
                title: "Veteran-owned and veteran-friendly businesses",
                description: "Expand employment pipelines, apprenticeships, and entrepreneurship pathways.",
              },
            ]}
          />
          <p className="mt-6 text-uvea-gray">
            Partnerships help us expand impact and serve more veterans nationwide. Contact us to discuss
            collaboration opportunities.
          </p>
        </Section>
      </ContentLayout>
    </div>
  );
}
