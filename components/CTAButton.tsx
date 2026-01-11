import Link from "next/link";

export default function CTAButton({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  const base = "inline-flex items-center justify-center px-5 py-3 font-semibold rounded transition-colors";

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`${base} border border-uvea-gold text-uvea-gold hover:bg-uvea-gold/10`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} bg-uvea-gold text-uvea-black hover:bg-uvea-gold/90 shadow-md shadow-uvea-gold/30`}
    >
      {label}
    </Link>
  );
}
