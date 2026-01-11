import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function EducationCredentialsPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Education & Credentials"
        subtitle="Skills, credentials, and career pathways that help veterans advance with confidence."
      />
      <ContentLayout>
        <Section title="Support Focus" eyebrow="Growth Ready">
          <p>
            UVEA helps veterans access education and certification programs, workforce training, reskilling
            opportunities, veteran-friendly employers, and apprenticeship or trade pathways.
          </p>
        </Section>

        <Section title="Education Resources" eyebrow="Trusted">
          <ul className="space-y-2 list-disc list-inside text-uvea-gray">
            <li>
              <a className="text-uvea-gold hover:text-uvea-white" href="https://www.va.gov/education">
                GI Bill®
              </a>
            </li>
            <li className="text-uvea-gray">Coursera for Veterans (when available)</li>
            <li className="text-uvea-gray">State workforce programs via TVC</li>
          </ul>
        </Section>
      </ContentLayout>
    </div>
  );
}
