import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export default function ContactPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Contact"
        subtitle="Reach The United Veterans Empowerment Association for coordinated support or partnership discussions."
      />
      <ContentLayout>
        <Section title="Get in Touch" eyebrow="Direct Line">
          <p>Email: contact@tuvea.org</p>
          <p>Domain: tuvea.org</p>
          <p>Texas-based operations | Serving veterans nationwide</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="mailto:contact@tuvea.org" label="Email UVEA" />
            <CTAButton href="/get-help" label="Get Help Now" variant="secondary" />
          </div>
        </Section>
      </ContentLayout>
    </div>
  );
}
