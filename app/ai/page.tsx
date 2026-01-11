import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function AIPage() {
  return (
    <div className="bg-uvea-black text-uvea-white min-h-screen">
      <PageHeader
        title="AI Module Placeholder"
        subtitle="Future-ready layer for UVEA to enable AI-assisted support without external calls."
      />
      <ContentLayout>
        <Section title="Status" eyebrow="Coming Soon">
          <p>
            This page is reserved for the UVEA AI support module. It will align with brand standards and operate
            within secure, trusted guidelines.
          </p>
        </Section>
      </ContentLayout>
    </div>
  );
}
