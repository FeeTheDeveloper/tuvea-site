import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function EmploymentReadinessPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Employment Readiness"
        subtitle="Economic empowerment through employment placement, career transitions, and readiness support."
      />
      <ContentLayout>
        <Section title="Support Focus" eyebrow="Career Pathways">
          <p>
            UVEA links veterans to hiring partners, resume support, interview preparation, and career coaching to
            accelerate employment outcomes and long-term stability.
          </p>
        </Section>
      </ContentLayout>
    </div>
  );
}
