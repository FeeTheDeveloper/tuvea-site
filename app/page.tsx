import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        id="mission"
        heading="Our Mission"
        className="bg-uvea-charcoal"
      >
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          TUVEA bridges the gap between crisis and stability by delivering
          culturally responsive services, advocacy, and community-driven
          programs to those who need them most.
        </p>
      </Section>

      <Section id="impact" heading="Community Impact">
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          {[
            { stat: "5,000+", label: "Individuals served annually" },
            { stat: "30+", label: "Community partnerships" },
            { stat: "12", label: "Active programs" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-4xl font-display font-bold text-uvea-gold">
                {stat}
              </p>
              <p className="mt-2 text-uvea-gray">{label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
