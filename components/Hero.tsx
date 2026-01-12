import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-uvea-black via-uvea-charcoal to-uvea-black pb-14 pt-12 sm:pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
          <p className="text-uvea-gray text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm text-uvea-gray">
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
    </section>
  );
}
