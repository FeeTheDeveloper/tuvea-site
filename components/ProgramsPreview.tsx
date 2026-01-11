import CardGrid from "./CardGrid";
import InfoCard from "./InfoCard";

export default function ProgramsPreview() {
  const cards = [
    "Benefits & Claims Navigation",
    "Education & Credentials",
    "Employment Readiness",
    "Entrepreneurship & Business Formation",
    "Mental Health & Recovery Support",
    "Family & Survivor Support",
  ];

  return (
    <CardGrid>
      {cards.map((title) => (
        <InfoCard key={title} title={title}>
          <p>
            Stabilizing support with coordinated guidance, resources, and
            trusted referrals to help veterans advance with confidence.
          </p>
        </InfoCard>
      ))}
    </CardGrid>
  );
}
