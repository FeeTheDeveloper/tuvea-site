import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrisisBanner from "@/components/CrisisBanner";
import ConciergeWidget from "@/components/ConciergeWidget";

export const metadata: Metadata = {
  title: {
    default: "TUVEA — Transforming Urban & Vulnerable Environments through Advocacy",
    template: "%s | TUVEA",
  },
  description:
    "TUVEA empowers underserved communities through advocacy, direct services, mental health resources, and strategic partnerships.",
  metadataBase: new URL("https://tuvea.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TUVEA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-uvea-gold px-4 py-2 text-uvea-black"
        >
          Skip to main content
        </a>
        <CrisisBanner />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ConciergeWidget />
      </body>
    </html>
  );
}
