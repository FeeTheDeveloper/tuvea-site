import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";
import InfoCard from "@/components/InfoCard";
import CTAButton from "@/components/CTAButton";

export default function ProgramsPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Programs & Services"
        subtitle="UVEA delivers and coordinates services across benefits navigation, mental health and recovery, housing stability, education and workforce development, and economic empowerment for veterans."
      />
      <ContentLayout>
        <Section title="Program Areas" eyebrow="Stabilize • Empower • Advance">
          <CardGrid>
            <InfoCard title="Veterans Benefits Navigation & Advocacy">
              <p>
                Help veterans understand and navigate VA benefits, disability compensation pathways, healthcare
                enrollment guidance, appeals, and referrals.
              </p>
              <div className="pt-3 space-y-2 text-sm">
                <p className="text-uvea-gray">Key Partners & Resources</p>
                <ul className="space-y-1 list-disc list-inside text-uvea-gray">
                  <li>
                    <a className="text-uvea-gold hover:text-uvea-white" href="https://tvc.texas.gov">
                      Texas Veterans Commission (TVC)
                    </a>
                  </li>
                  <li>
                    <a className="text-uvea-gold hover:text-uvea-white" href="https://www.va.gov">
                      U.S. Department of Veterans Affairs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pt-3">
                <CTAButton href="/programs/benefits-claims" label="View Program" variant="secondary" />
              </div>
            </InfoCard>

            <InfoCard title="Mental Health & Recovery Support">
              <p>
                Connect veterans to mental health providers, PTSD and trauma-informed services, inpatient and
                outpatient recovery programs, and peer support networks.
              </p>
              <div className="pt-3 space-y-2 text-sm">
                <p className="text-uvea-gray">Crisis Resources</p>
                <ul className="space-y-1 list-disc list-inside text-uvea-gray">
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
              </div>
              <div className="pt-3">
                <CTAButton href="/programs/mental-health-recovery" label="View Program" variant="secondary" />
              </div>
            </InfoCard>

            <InfoCard title="Housing Stability & Homelessness Prevention">
              <p>
                Provide referrals and coordination for emergency housing assistance, transitional housing, HUD-VASH
                programs, and local/state housing partners.
              </p>
              <div className="pt-3 space-y-2 text-sm">
                <p className="text-uvea-gray">Housing Resources</p>
                <ul className="space-y-1 list-disc list-inside text-uvea-gray">
                  <li>
                    <a className="text-uvea-gold hover:text-uvea-white" href="https://www.va.gov/homeless/hud-vash.asp">
                      HUD-VASH
                    </a>
                  </li>
                  <li>
                    <a className="text-uvea-gold hover:text-uvea-white" href="https://nchv.org">
                      National Coalition for Homeless Veterans
                    </a>
                  </li>
                </ul>
              </div>
            </InfoCard>

            <InfoCard title="Education, Training & Workforce Development">
              <p>
                Connect veterans to education and certification programs, workforce training, reskilling, veteran-friendly
                employers, and apprenticeship pathways.
              </p>
              <div className="pt-3 space-y-2 text-sm">
                <p className="text-uvea-gray">Education Resources</p>
                <ul className="space-y-1 list-disc list-inside text-uvea-gray">
                  <li>
                    <a className="text-uvea-gold hover:text-uvea-white" href="https://www.va.gov/education">
                      GI Bill®
                    </a>
                  </li>
                  <li className="text-uvea-gray">Coursera for Veterans (when available)</li>
                  <li className="text-uvea-gray">State workforce programs via TVC</li>
                </ul>
              </div>
              <div className="pt-3">
                <CTAButton href="/programs/education-credentials" label="View Program" variant="secondary" />
              </div>
            </InfoCard>

            <InfoCard title="Veteran Employment & Entrepreneurship">
              <p>
                Support veterans pursuing employment placement, career transitions, business formation, and
                entrepreneurship mentorship.
              </p>
              <div className="pt-3 space-y-2 text-sm">
                <p className="text-uvea-gray">Business & Employment Resources</p>
                <ul className="space-y-1 list-disc list-inside text-uvea-gray">
                  <li>
                    <a className="text-uvea-gold hover:text-uvea-white" href="https://www.sba.gov/veterans">
                      SBA Office of Veterans Business Development
                    </a>
                  </li>
                  <li>
                    <a className="text-uvea-gold hover:text-uvea-white" href="https://www.va.gov/osdbu/entrepreneur">
                      Veteran Entrepreneur Portal
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pt-3 space-y-2">
                <CTAButton href="/programs/employment-readiness" label="Employment Readiness" variant="secondary" />
                <div>
                  <CTAButton href="/programs/entrepreneurship" label="Entrepreneurship" variant="secondary" />
                </div>
              </div>
            </InfoCard>
          </CardGrid>
        </Section>
      </ContentLayout>
    </div>
  );
}
