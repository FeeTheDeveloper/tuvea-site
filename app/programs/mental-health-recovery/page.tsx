import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function MentalHealthRecoveryPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Mental Health & Recovery"
        subtitle="Support for PTSD, substance recovery, and wellness through coordinated resources and referrals."
      />
      <ContentLayout>
        <Section title="Support Focus" eyebrow="Recovery Ready">
          <p>
            UVEA connects veterans to mental health providers, PTSD and trauma-informed services, inpatient and
            outpatient recovery programs, and peer and community support networks.
          </p>
        </Section>

        <Section title="Crisis Resources" eyebrow="24/7">
          <ul className="space-y-2 list-disc list-inside text-uvea-gray">
            <li>
              <a className="text-uvea-gold hover:text-uvea-white" href="https://www.veteranscrisisline.net">
                Veterans Crisis Line
              </a>
            </li>
            <li>
              <a
                className="text-uvea-gold hover:text-uvea-white"
                href="https://www.va.gov/health-care/health-needs-conditions/mental-health"
              >
                VA Mental Health Services
              </a>
            </li>
          </ul>
        </Section>
      </ContentLayout>
    </div>
  );
}
