import type { Metadata } from "next";
import Section from "@/components/Section";
import ProgramCard from "@/components/ProgramCard";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore TUVEA's programs — from housing navigation and workforce development to youth mentorship and mental wellness.",
};

const programs = [
  {
    title: "Housing Navigation",
    description:
      "Connecting individuals and families with safe, stable housing through case management and landlord partnerships.",
  },
  {
    title: "Workforce Development",
    description:
      "Skills training, resume support, and employer partnerships to build long-term career pathways.",
  },
  {
    title: "Youth Mentorship",
    description:
      "One-on-one mentoring, leadership development, and academic support for young people ages 12–24.",
  },
  {
    title: "Mental Wellness",
    description:
      "Culturally responsive counseling, peer support groups, and crisis intervention services.",
  },
  {
    title: "Community Advocacy",
    description:
      "Policy engagement, civic education, and grassroots organizing to amplify community voices.",
  },
  {
    title: "Emergency Assistance",
    description:
      "Immediate aid for food, utilities, transportation, and other urgent needs.",
  },
];

export default function ProgramsPage() {
  return (
    <Section id="programs" heading="Our Programs" className="bg-uvea-charcoal">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.title} {...program} />
        ))}
      </div>
    </Section>
  );
}
