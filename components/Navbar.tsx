"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/resources", label: "Resources" },
    { href: "/get-help", label: "Get Help" },
  ];

  return (
    <nav className="bg-uvea-black/95 border-b border-uvea-gold/20 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 gap-4">
          {/* Brand */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-uvea-gold font-cinzel text-2xl font-bold tracking-wider">
              UVEA
            </span>
            <span className="text-uvea-white text-[11px] tracking-wide">
              United Veterans Empowerment Association
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-uvea-white hover:text-uvea-gold px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="bg-uvea-gold hover:bg-uvea-gold/90 text-uvea-black px-5 py-2 rounded font-bold text-sm tracking-wide transition-colors shadow-md shadow-uvea-gold/30"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-uvea-white p-2 ml-auto"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-uvea-white hover:text-uvea-gold px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-uvea-gold/20 my-2" />
            <Link
              href="/success-stories"
              className="block text-uvea-gray hover:text-uvea-gold px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              href="/partner"
              className="block text-uvea-gray hover:text-uvea-gold px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner With Us
            </Link>
            <Link
              href="/donate"
              className="block text-uvea-gray hover:text-uvea-gold px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate / Volunteer
            </Link>
            <Link
              href="/contact"
              className="block bg-uvea-gold hover:bg-uvea-gold/90 text-uvea-black px-3 py-2 mt-2 rounded font-bold transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
