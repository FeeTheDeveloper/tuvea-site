import Image from "next/image";
import Link from "next/link";
import seal from "@/public/brand/uvea-seal.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-uvea-black via-uvea-charcoal to-uvea-black pb-14 pt-12 sm:pt-16">
      <div className="hidden sm:block absolute right-4 top-4 sm:right-6 sm:top-6 lg:right-10 lg:top-10 z-10 pointer-events-none select-none">
        <div className="w-96 sm:w-[22rem] lg:w-[24rem]">
          <Image
            src={seal}
            alt="United Veterans Empowerment Association official seal"
            sizes="(max-width: 640px) 384px, (max-width: 1024px) 352px, 384px"
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <div className="leading-tight text-center lg:text-left">
            <p className="text-uvea-gold font-cinzel text-3xl sm:text-4xl font-bold tracking-wide">
              UVEA
            </p>
            <p className="text-uvea-white text-sm sm:text-base">
              United Veterans Empowerment Association
            </p>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            <span className="text-uvea-gold block">Supporting Veterans.</span>
            <span className="text-uvea-white block">Empowering Futures.</span>
          </h1>
          <p className="text-uvea-gray text-lg leading-relaxed max-w-2xl">
            UVEA exists to support, empower, and restore veterans and their families by providing access to critical
            resources, advocacy, education, and pathways to long-term stability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link
              href="/get-help"
              className="inline-flex items-center justify-center px-6 py-3 bg-uvea-gold text-uvea-black font-semibold rounded shadow-md shadow-uvea-gold/30 hover:bg-uvea-gold/90 transition-colors"
            >
              Get Help Now
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 border border-uvea-gold text-uvea-gold font-semibold rounded hover:bg-uvea-gold/10 transition-colors"
            >
              Support Our Mission
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-uvea-gray">
            <div className="p-3 rounded border border-uvea-gold/20 bg-uvea-charcoal/60">
              <p className="text-uvea-white font-semibold">Stabilize</p>
              <p>Mental health, housing, crisis navigation</p>
            </div>
            <div className="p-3 rounded border border-uvea-gold/20 bg-uvea-charcoal/60">
              <p className="text-uvea-white font-semibold">Empower</p>
              <p>Benefits, education, workforce development</p>
            </div>
            <div className="p-3 rounded border border-uvea-gold/20 bg-uvea-charcoal/60">
              <p className="text-uvea-white font-semibold">Advance</p>
              <p>Economic opportunity and entrepreneurship</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-uvea-gold/10 blur-3xl" aria-hidden />
          <div className="relative border border-uvea-gold/25 rounded-xl p-8 bg-uvea-charcoal/70 backdrop-blur">
            <h3 className="font-cinzel text-xl text-uvea-white font-semibold mb-4">
              Immediate Help (24/7)
            </h3>
            <ul className="space-y-3 text-uvea-gray text-base">
              <li className="flex items-start gap-3">
                <span className="text-uvea-gold font-semibold">Call</span>
                <span>988 then press 1</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-uvea-gold font-semibold">Text</span>
                <span>838255</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-uvea-gold font-semibold">Chat</span>
                <a
                  className="text-uvea-gold hover:text-uvea-white"
                  href="https://www.veteranscrisisline.net"
                >
                  veteranscrisisline.net
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-uvea-gold font-semibold">Emergency</span>
                <span>If in immediate danger, call 911</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
