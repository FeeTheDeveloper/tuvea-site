import type { Metadata } from "next";
import Section from "@/components/Section";
import SupportRequestForm from "@/components/SupportRequestForm";

export const metadata: Metadata = {
  title: "Get Help Now",
  description:
    "Access immediate crisis support, submit a UVEA support request, and find trusted veteran service links.",
};

const externalLinks = [
  {
    label: "Texas Veterans Commission",
    href: "https://www.tvc.texas.gov/",
  },
  {
    label: "U.S. Department of Veterans Affairs",
    href: "https://www.va.gov/",
  },
  {
    label: "VA Facility Locator",
    href: "https://www.va.gov/find-locations/",
  },
  {
    label: "TexVet — Texas Veterans Resource Network",
    href: "https://texvet.org/",
  },
];

export default function GetHelpPage() {
  return (
    <>
      {/* ── 1. Crisis Support (24/7) ── */}
      <Section
        id="crisis-support"
        heading="Crisis Support (24/7)"
        className="bg-uvea-charcoal"
      >
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-uvea-gray">
            If you or someone you know is in crisis, reach out now. The Veterans
            Crisis Line is available 24 hours a day, 7 days a week, 365 days a
            year.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Call */}
            <div className="rounded-xl border border-uvea-gold/20 bg-uvea-black p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-uvea-gray">
                Call
              </p>
              <a
                href="tel:988"
                className="mt-2 block text-2xl font-display font-bold text-uvea-gold underline decoration-uvea-gold/40 underline-offset-4 transition hover:decoration-uvea-gold"
              >
                988
              </a>
              <p className="mt-1 text-sm text-uvea-gray">then press 1</p>
            </div>

            {/* Text */}
            <div className="rounded-xl border border-uvea-gold/20 bg-uvea-black p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-uvea-gray">
                Text
              </p>
              <p className="mt-2 text-2xl font-display font-bold text-uvea-gold">
                838255
              </p>
              <p className="mt-1 text-sm text-uvea-gray">
                Send a text message
              </p>
            </div>

            {/* Chat */}
            <div className="rounded-xl border border-uvea-gold/20 bg-uvea-black p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-uvea-gray">
                Chat
              </p>
              <a
                href="https://www.veteranscrisisline.net/get-help-now/chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg font-display font-bold text-uvea-gold underline decoration-uvea-gold/40 underline-offset-4 transition hover:decoration-uvea-gold"
              >
                Online Chat
              </a>
              <p className="mt-1 text-sm text-uvea-gray">
                veteranscrisisline.net
              </p>
            </div>
          </div>

          <p className="text-sm text-uvea-gray/70">
            If you or someone you know is in immediate danger, call{" "}
            <a
              href="tel:911"
              className="font-semibold text-uvea-gold underline"
            >
              911
            </a>
            .
          </p>
        </div>
      </Section>

      {/* ── 2. UVEA Support Request Form ── */}
      <Section
        id="support-request"
        heading="UVEA Support Request"
        className="bg-uvea-black"
      >
        <SupportRequestForm />
      </Section>

      {/* ── 3. What to Expect ── */}
      <Section
        id="what-to-expect"
        heading="What to Expect After You Reach Out"
        className="bg-uvea-charcoal"
      >
        <div className="mx-auto max-w-2xl space-y-5">
          <div className="flex gap-4 rounded-xl border border-uvea-white/10 bg-uvea-black p-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-uvea-gold/10 text-sm font-bold text-uvea-gold" aria-hidden="true">
              1
            </span>
            <div>
              <p className="font-medium text-uvea-white">Confirmation</p>
              <p className="mt-1 text-sm leading-relaxed text-uvea-gray">
                You&rsquo;ll see an on-screen confirmation as soon as your
                request is submitted.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border border-uvea-white/10 bg-uvea-black p-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-uvea-gold/10 text-sm font-bold text-uvea-gold" aria-hidden="true">
              2
            </span>
            <div>
              <p className="font-medium text-uvea-white">Response Time</p>
              <p className="mt-1 text-sm leading-relaxed text-uvea-gray">
                A UVEA coordinator will respond within 1&ndash;2 business days
                via your preferred contact method.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border border-uvea-white/10 bg-uvea-black p-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-uvea-gold/10 text-sm font-bold text-uvea-gold" aria-hidden="true">
              3
            </span>
            <div>
              <p className="font-medium text-uvea-white">Follow-Up Questions</p>
              <p className="mt-1 text-sm leading-relaxed text-uvea-gray">
                We may ask for additional details — such as your location,
                upcoming deadlines, or documentation — to connect you with the
                most relevant resources.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border border-uvea-white/10 bg-uvea-black p-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-uvea-gold/10 text-sm font-bold text-uvea-gold" aria-hidden="true">
              !
            </span>
            <div>
              <p className="font-medium text-uvea-white">Crisis Requests</p>
              <p className="mt-1 text-sm leading-relaxed text-uvea-gray">
                If your situation is urgent or life-threatening, we route
                immediately to 988 Veterans Crisis Line and 911 emergency
                resources. Do not wait for a callback &mdash;{" "}
                <a
                  href="tel:988"
                  className="font-semibold text-uvea-gold underline"
                >
                  call 988 and press 1
                </a>{" "}
                now.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. Trusted External Help Links ── */}
      <Section
        id="external-links"
        heading="Trusted External Help Links"
        className="bg-uvea-black"
      >
        <ul className="mx-auto max-w-2xl space-y-4">
          {externalLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-uvea-gold underline underline-offset-4 decoration-uvea-gold/40 transition hover:decoration-uvea-gold"
              >
                {label}
              </a>
              <span className="ml-2 text-sm text-uvea-gray/60">
                {href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
