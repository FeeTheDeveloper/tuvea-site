import Link from "next/link";
import Image from "next/image";
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
      {/* ── Full-width header background ── */}
      <section
        aria-label="Header"
        className="relative flex min-h-[60vh] items-center justify-center bg-uvea-black"
      >
        <Image
          src="/images/tuvea/header-logo.png"
          alt="TUVEA header logo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-uvea-black/60"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-6 py-24">
          <h1 className="text-4xl font-display font-bold leading-tight tracking-tight text-uvea-white sm:text-5xl lg:text-6xl">
            Transforming Communities
            <br />
            Through Advocacy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-uvea-gray sm:text-xl">
            Empowering veterans, families, and underserved communities with
            the resources and support they deserve.
          </p>
        </div>
      </section>

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

      {/* ── Hero moved below How It Works ── */}
      <Hero />
    </>
  );
}
