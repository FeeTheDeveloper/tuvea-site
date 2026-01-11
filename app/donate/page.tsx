import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export default function DonatePage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Donate / Volunteer"
        subtitle="Your support helps UVEA expand veteran outreach, improve access to services, and build sustainable programs for those who served."
      />
      <ContentLayout>
        <Section title="Support Our Mission" eyebrow="Donate or Sponsor">
          <p>
            Your support helps The United Veterans Empowerment Association expand veteran outreach, improve access
            to services, build sustainable programs, and advocate for those who served.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="mailto:contact@tuvea.org" label="Email UVEA" />
            <CTAButton href="/partner" label="Partner With Us" variant="secondary" />
          </div>
        </Section>

        <Section title="Volunteer Opportunities" eyebrow="Serve With Us">
          <p>
            UVEA welcomes volunteers with experience in veteran advocacy, peer support, outreach and case
            coordination, and administrative or program support.
          </p>
        </Section>
      </ContentLayout>
    </div>
  );
}
