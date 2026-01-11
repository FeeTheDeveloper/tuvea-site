import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";
import InfoCard from "@/components/InfoCard";
import CTAButton from "@/components/CTAButton";

export default function GetHelpPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Get Help Now"
        subtitle="Veterans Crisis Line available 24/7. Call 988 then press 1. Text 838255. If in immediate danger, call 911."
      />
      <ContentLayout>
        <Section title="Immediate Support" eyebrow="24/7">
          <CardGrid>
            <InfoCard title="Call">
              <p>Veterans Crisis Line: 988 then press 1</p>
            </InfoCard>
            <InfoCard title="Text">
              <p>Text 838255</p>
            </InfoCard>
            <InfoCard title="Chat">
              <p>
                <a className="text-uvea-gold hover:text-uvea-white" href="https://www.veteranscrisisline.net">
                  veteranscrisisline.net
                </a>
              </p>
            </InfoCard>
            <InfoCard title="Emergency">
              <p>If you are in immediate danger, call 911.</p>
            </InfoCard>
          </CardGrid>
          <p className="mt-6 text-uvea-gray">
            UVEA does not replace emergency services — we help connect veterans to the right support fast.
          </p>
        </Section>

        <Section title="How We Help" eyebrow="Start Here">
          <p>
            UVEA helps veterans by connecting them to the right support at the right time. Start here if you need
            help with benefits or claims guidance, mental health or recovery resources, housing assistance,
            education or job training, or employment and entrepreneurship support.
          </p>
        </Section>

        <Section title="Veteran Intake & Support Request" eyebrow="Next Steps">
          <p>
            Veterans may request assistance by completing our online intake, calling or emailing the support team,
            or being referred by a partner organization. UVEA will assess needs and connect veterans to appropriate
            resources.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="/programs" label="Explore Programs" />
            <CTAButton href="/contact" label="Contact UVEA" variant="secondary" />
          </div>
        </Section>
      </ContentLayout>
    </div>
  );
}
