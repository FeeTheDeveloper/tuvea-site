import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Submit a support request through our Get Help Now form. Tell us what you\u2019re facing \u2014 benefits, housing, employment, education, mental health, or family support.",
    cta: { label: "Get Help Now", href: "/get-help" },
  },
  {
    number: "02",
    title: "We Route You to the Right Channel",
    description:
      "A UVEA coordinator reviews your request and connects you with the right resource \u2014 VA programs, state agencies like the Texas Veterans Commission, or local community partners.",
  },
  {
    number: "03",
    title: "You Get a Plan and Next Steps",
    description:
      "We help you build a path forward: stabilization first, then credentials and training, then employment or business ownership. Every step has a clear next action.",
  },
];

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

      {/* ── How It Works ── */}
      <Section id="how-it-works" heading="How It Works" className="bg-uvea-black">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          {steps.map(({ number, title, description, cta }) => (
            <div
              key={number}
              className="rounded-xl border border-uvea-white/10 bg-uvea-charcoal p-6"
            >
              <span className="text-sm font-display font-bold tracking-widest text-uvea-gold">
                Step {number}
              </span>
              <h3 className="mt-2 text-xl font-display font-semibold text-uvea-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-uvea-gray">
                {description}
              </p>
              {cta && (
                <Link
                  href={cta.href}
                  className="mt-4 inline-block rounded-lg bg-uvea-gold px-5 py-2 text-sm font-semibold text-uvea-black transition hover:bg-uvea-gold/90"
                >
                  {cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="impact" heading="Community Impact" className="bg-uvea-charcoal">
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
