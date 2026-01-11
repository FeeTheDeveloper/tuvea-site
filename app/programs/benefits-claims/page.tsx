import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function BenefitsClaimsPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="Benefits & Claims Navigation"
        subtitle="Helping veterans access what they earned through clear guidance on benefits, claims, and entitlements."
      />
      <ContentLayout>
        <Section title="Support Focus" eyebrow="Stabilization First">
          <p>
            UVEA assists veterans in understanding and navigating VA benefits, disability compensation pathways,
            healthcare enrollment, appeals, and referrals.
          </p>
          <p>
            We connect veterans to trusted benefits navigation and documentation support so they can secure the
            benefits they earned.
          </p>
        </Section>

        <Section title="Key Partners & Resources" eyebrow="Verified">
          <ul className="space-y-2 list-disc list-inside text-uvea-gray">
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
        </Section>
      </ContentLayout>
    </div>
  );
}
