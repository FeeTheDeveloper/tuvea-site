import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-uvea-charcoal border-t border-uvea-gold/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-uvea-gold font-cinzel text-lg font-bold mb-4">
              UVEA
            </h3>
            <p className="text-uvea-gray text-sm">
              The United Veterans Empowerment Association is a veteran-focused
              nonprofit dedicated to empowering veterans and their families
              through access, advocacy, education, and opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-uvea-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-uvea-gray hover:text-uvea-gold text-sm transition-colors"
                >
                  About UVEA
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-uvea-gray hover:text-uvea-gold text-sm transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-uvea-gray hover:text-uvea-gold text-sm transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/get-help"
                  className="text-uvea-gray hover:text-uvea-gold text-sm transition-colors"
                >
                  Get Help Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-uvea-white font-semibold mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/donate"
                  className="text-uvea-gray hover:text-uvea-gold text-sm transition-colors"
                >
                  Donate / Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="text-uvea-gray hover:text-uvea-gold text-sm transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-uvea-gray hover:text-uvea-gold text-sm transition-colors"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-uvea-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-uvea-gray">
              <li>
                <a
                  href="mailto:contact@tuvea.org"
                  className="hover:text-uvea-gold transition-colors"
                >
                  contact@tuvea.org
                </a>
              </li>
              <li>
                <a
                  href="https://tuvea.org"
                  className="hover:text-uvea-gold transition-colors"
                >
                  tuvea.org
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-uvea-red/10 border border-uvea-red rounded">
              <p className="text-xs text-uvea-white font-semibold">
                Crisis Line: 988 then press 1
              </p>
              <p className="text-xs text-uvea-gray">Press 1 for veterans</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-uvea-gold/20 text-center text-uvea-gray text-sm">
          <p>
            &copy; {new Date().getFullYear()} The United Veterans Empowerment
            Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
