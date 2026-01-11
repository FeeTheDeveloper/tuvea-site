import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function FamilySurvivorPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Family & Survivor Support"
        subtitle="Support and navigation for military families, caregivers, and survivors standing beside veterans."
      />
      <ContentLayout>
        <Section title="Support Focus" eyebrow="Family First">
          <p>
            UVEA provides stabilization resources, benefits navigation, and community connections tailored for
            spouses, caregivers, and survivors so families can sustain recovery and opportunity together.
          </p>
        </Section>
      </ContentLayout>
    </div>
  );
}
