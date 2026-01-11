import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";
import InfoCard from "@/components/InfoCard";
import RichList from "@/components/RichList";

export default function Home() {
  return (
    <div className="bg-uvea-black text-uvea-white">
      <Hero />

      <Section title="How We Serve Veterans" eyebrow="Support Pathways">
        <p>
          The United Veterans Empowerment Association exists to support, empower,
          and restore veterans and their families by providing access to critical
          resources, advocacy, education, and pathways to long-term stability.
        </p>
        <p>
          We serve veterans across the United States with a focus on mental health
          support, benefits navigation, workforce development, housing stability,
          and economic empowerment.
        </p>
      </Section>

      <Section title="Immediate Help (24/7)" eyebrow="Crisis Ready">
        <CardGrid>
          <InfoCard title="Call">
            <p>Veterans Crisis Line: Dial 988, then press 1</p>
          </InfoCard>
          <InfoCard title="Text">
            <p>Text 838255</p>
          </InfoCard>
          <InfoCard title="Chat">
            <p>
              <a
                className="text-uvea-gold hover:text-uvea-white"
                href="https://www.veteranscrisisline.net"
              >
                veteranscrisisline.net
              </a>
            </p>
          </InfoCard>
          <InfoCard title="Emergency">
            <p>If you are in immediate danger, call 911.</p>
          </InfoCard>
        </CardGrid>
        <p className="mt-6 text-uvea-gray">
          UVEA does not replace emergency services — we help connect veterans to
          the right support fast.
        </p>
      </Section>

      <Section title="Our Mission" eyebrow="Why We Exist">
        <p>
          To empower veterans and their families by connecting them to resources,
          advocacy, education, and opportunities that restore dignity, stability,
          and purpose.
        </p>
      </Section>

      <Section title="Our Vision" eyebrow="Looking Forward">
        <RichList
          items={[
            { title: "Access to earned benefits", description: "Veterans receive the benefits they earned." },
            { title: "Support for mental health and recovery", description: "Care that respects dignity and urgency." },
            { title: "Pathway to stable housing", description: "Stability that anchors recovery and progress." },
            { title: "Economic opportunity and meaningful work", description: "Careers and ownership that build independence." },
            { title: "Community that understands their transition", description: "Supportive networks for veterans and families." },
          ]}
        />
      </Section>

      <Section title="Who We Serve" eyebrow="Veteran-First">
        <RichList
          items={[
            { title: "Honorably discharged veterans", description: "Inclusive support across eras and backgrounds." },
            { title: "Veterans experiencing homelessness or housing insecurity", description: "Housing stabilization with trusted partners." },
            { title: "Veterans facing mental health or substance recovery challenges", description: "Coordinated recovery and wellness pathways." },
            { title: "Veteran entrepreneurs and job seekers", description: "Employment and entrepreneurship guidance." },
            { title: "Veteran families and caregivers", description: "Support for those standing beside veterans." },
          ]}
        />
      </Section>
    </div>
  );
}
