import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function SuccessStoriesPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Success Stories"
        subtitle="Stabilization, empowerment, and advancement journeys from veterans and families served by The United Veterans Empowerment Association."
      />
      <ContentLayout>
        <Section title="Impact Highlights" eyebrow="Onward">
          <p>
            Stories are being compiled to showcase rapid stabilization, coordinated benefits outcomes, education
            milestones, employment gains, entrepreneurial starts, and family resilience moments across the veterans
            we serve nationwide.
          </p>
        </Section>
      </ContentLayout>
    </div>
  );
}
