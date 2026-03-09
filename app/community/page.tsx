import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "See the impact TUVEA is making — thousands served annually through advocacy, partnerships, and community-driven programs.",
};

export default function CommunityPage() {
  return (
    <Section id="impact" heading="Community Impact" className="bg-uvea-charcoal">
      <Image
        src="/images/tuvea/community-event.png"
        alt="Veterans and families gathering at a community support event"
        width={1600}
        height={900}
        className="mx-auto mb-10 w-full max-w-4xl rounded-xl shadow-lg object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
      />
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
  );
}
