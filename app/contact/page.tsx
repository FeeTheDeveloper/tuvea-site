import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with TUVEA. Reach out for services, partnership inquiries, media requests, or general questions.",
};

export default function ContactPage() {
  return (
    <Section id="contact" heading="Contact Us" className="bg-uvea-charcoal">
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-uvea-white"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-1 block w-full rounded-md border border-uvea-white/20 bg-uvea-black px-4 py-3 text-uvea-white shadow-sm placeholder:text-uvea-gray focus:border-uvea-gold focus:ring-uvea-gold"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-uvea-white"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1 block w-full rounded-md border border-uvea-white/20 bg-uvea-black px-4 py-3 text-uvea-white shadow-sm placeholder:text-uvea-gray focus:border-uvea-gold focus:ring-uvea-gold"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-uvea-white"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="mt-1 block w-full rounded-md border border-uvea-white/20 bg-uvea-black px-4 py-3 text-uvea-white shadow-sm focus:border-uvea-gold focus:ring-uvea-gold"
            >
              <option value="">Select a topic</option>
              <option value="services">Request Services</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="volunteer">Volunteer</option>
              <option value="media">Media / Press</option>
              <option value="general">General Question</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-uvea-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-md border border-uvea-white/20 bg-uvea-black px-4 py-3 text-uvea-white shadow-sm placeholder:text-uvea-gray focus:border-uvea-gold focus:ring-uvea-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-uvea-gold px-6 py-3 text-lg font-semibold text-uvea-black shadow-sm transition hover:bg-uvea-gold/90 focus-visible:outline-uvea-gold"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
