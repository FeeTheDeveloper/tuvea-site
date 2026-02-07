import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen items-center bg-uvea-black bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/hero-bg.jpg')" }}
    >
      {/* Dark gradient overlay — heavier on the left for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-uvea-black via-uvea-black/85 to-uvea-black/40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-display font-bold leading-tight tracking-tight text-uvea-white sm:text-5xl lg:text-6xl">
            Supporting Veterans.
            <br />
            Empowering Futures.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-uvea-gray sm:text-xl">
            United Veterans Empowerment Association provides coordinated support
            and trusted resources for veterans and their families nationwide.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/get-help"
              className="inline-flex items-center justify-center rounded-md bg-uvea-gold px-8 py-3.5 text-lg font-semibold text-uvea-black shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-uvea-gold/25 hover:brightness-110 focus-visible:outline-uvea-gold"
            >
              Get Help Now
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center justify-center rounded-md border-2 border-uvea-gold px-8 py-3.5 text-lg font-semibold text-uvea-gold transition-all duration-200 hover:scale-[1.03] hover:bg-uvea-gold hover:text-uvea-black focus-visible:outline-uvea-gold"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
