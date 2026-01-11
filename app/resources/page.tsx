import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";
import CardGrid from "@/components/CardGrid";

export default function ResourcesPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Resources"
        subtitle="Trusted federal, state, and community resources for veterans and families served by UVEA."
      />
      <ContentLayout>
        <Section title="Federal Resources" eyebrow="Trusted">
          <CardGrid>
            <InfoCard title="U.S. Department of Veterans Affairs">
              <p>
                <a className="text-uvea-gold hover:text-uvea-white" href="https://www.va.gov">
                  va.gov
                </a>
              </p>
            </InfoCard>
            <InfoCard title="Veterans Crisis Line">
              <p>
                <a className="text-uvea-gold hover:text-uvea-white" href="https://www.veteranscrisisline.net">
                  veteranscrisisline.net
                </a>
              </p>
            </InfoCard>
            <InfoCard title="GI Bill® Education Benefits">
              <p>
                <a className="text-uvea-gold hover:text-uvea-white" href="https://www.va.gov/education">
                  va.gov/education
                </a>
              </p>
            </InfoCard>
          </CardGrid>
        </Section>

        <Section title="State Resources (Texas Model)" eyebrow="Navigation">
          <CardGrid>
            <InfoCard title="Texas Veterans Commission">
              <p>
                <a className="text-uvea-gold hover:text-uvea-white" href="https://tvc.texas.gov">
                  tvc.texas.gov
                </a>
              </p>
            </InfoCard>
            <InfoCard title="Texas Veteran Employment Services">
              <p className="text-uvea-gray">State-led employment pathways and support.</p>
            </InfoCard>
          </CardGrid>
        </Section>

        <Section title="Housing & Recovery" eyebrow="Stability">
          <CardGrid>
            <InfoCard title="HUD-VASH">
              <p>
                <a className="text-uvea-gold hover:text-uvea-white" href="https://www.va.gov/homeless/hud-vash.asp">
                  va.gov/homeless/hud-vash.asp
                </a>
              </p>
            </InfoCard>
            <InfoCard title="National Coalition for Homeless Veterans">
              <p>
                <a className="text-uvea-gold hover:text-uvea-white" href="https://nchv.org">
                  nchv.org
                </a>
              </p>
            </InfoCard>
          </CardGrid>
        </Section>

        <Section title="Business & Economic Opportunity" eyebrow="Growth">
          <CardGrid>
            <InfoCard title="SBA Veteran Programs">
              <p>
                <a className="text-uvea-gold hover:text-uvea-white" href="https://www.sba.gov/veterans">
                  sba.gov/veterans
                </a>
              </p>
            </InfoCard>
            <InfoCard title="Veteran-Owned Business Certification">
              <p>
                <a className="text-uvea-gold hover:text-uvea-white" href="https://www.va.gov/osdbu">
                  va.gov/osdbu
                </a>
              </p>
            </InfoCard>
          </CardGrid>
        </Section>
      </ContentLayout>
    </div>
  );
}
