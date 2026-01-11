import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function EntrepreneurshipPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Entrepreneurship"
        subtitle="Business formation guidance, mentorship, and readiness resources for veteran founders pursuing ownership."
      />
      <ContentLayout>
        <Section title="Support Focus" eyebrow="Build and Launch">
          <p>
            UVEA connects veterans to business planning support, formation steps, and mentorship networks to start
            and grow veteran-led enterprises.
          </p>
        </Section>
      </ContentLayout>
    </div>
  );
}
