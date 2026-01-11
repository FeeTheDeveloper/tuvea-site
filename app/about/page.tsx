import ContentLayout from "@/components/ContentLayout";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import RichList from "@/components/RichList";

export default function AboutPage() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <PageHeader
        title="About UVEA"
        subtitle="The United Veterans Empowerment Association was founded to address the gaps veterans face after service — gaps in care, access, advocacy, and opportunity."
      />
      <ContentLayout>
        <Section title="Our Mission" eyebrow="Why We Serve">
          <p>
            To empower veterans and their families by connecting them to resources, advocacy, education, and
            opportunities that restore dignity, stability, and purpose.
          </p>
        </Section>

        <Section title="Our Work" eyebrow="Resource Hub & Advocacy">
          <p>
            We operate as a resource hub and empowerment engine, helping veterans navigate complex systems such as
            VA benefits, state and federal veteran services, workforce and education programs, and housing and
            recovery support systems.
          </p>
          <p>
            UVEA partners with public agencies, nonprofits, educational institutions, and veteran-owned businesses
            to deliver practical outcomes for those who served.
          </p>
        </Section>

        <Section title="Our Approach" eyebrow="Empowerment Model">
          <RichList
            items={[
              {
                title: "Access",
                description: "Connecting veterans to verified resources without delay.",
              },
              {
                title: "Advocacy",
                description: "Standing with veterans as they navigate complex systems and decisions.",
              },
              {
                title: "Education",
                description: "Providing skills and knowledge that build independence and confidence.",
              },
              {
                title: "Opportunity",
                description: "Creating pathways to employment and entrepreneurship that sustain long-term success.",
              },
            ]}
          />
        </Section>

        <Section title="Who We Serve" eyebrow="Veteran-First">
          <RichList
            items={[
              {
                title: "Honorably discharged veterans",
                description: "Support across eras and backgrounds with dignity and urgency.",
              },
              {
                title: "Veterans experiencing homelessness or housing insecurity",
                description: "Housing stabilization and navigation alongside trusted partners.",
              },
              {
                title: "Veterans facing mental health or substance recovery challenges",
                description: "Coordinated recovery pathways with trauma-informed resources.",
              },
              {
                title: "Veteran entrepreneurs and job seekers",
                description: "Employment, training, and ownership guidance to build economic strength.",
              },
              {
                title: "Veteran families and caregivers",
                description: "Support for those standing beside veterans throughout transition and recovery.",
              },
            ]}
          />
        </Section>
      </ContentLayout>
    </div>
  );
}
