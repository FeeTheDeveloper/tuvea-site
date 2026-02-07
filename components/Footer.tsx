import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/resources", label: "Resources" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-uvea-white/10 bg-uvea-charcoal text-uvea-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/uvea-emblem.png"
                alt="TUVEA emblem"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <p className="text-lg font-display font-bold tracking-tight">
                TUVEA
              </p>
            </div>
            <p className="text-sm text-uvea-gray">
              Transforming Urban &amp; Vulnerable Environments through Advocacy
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-uvea-gray transition hover:text-uvea-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-uvea-white/10 pt-6 text-center text-xs text-uvea-gray/60">
          <p>&copy; {new Date().getFullYear()} TUVEA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
