export default function CrisisBanner() {
  return (
    <div
      role="alert"
      aria-label="Veterans Crisis Line"
      className="sticky top-0 z-50 bg-uvea-navy px-4 py-2.5 text-center text-sm font-medium text-uvea-white sm:text-base"
    >
      <p className="flex flex-wrap items-center justify-center gap-x-1">
        <span className="font-semibold text-uvea-gold">Veterans Crisis Line:</span>{" "}
        <a
          href="tel:988"
          className="underline decoration-uvea-gold/50 underline-offset-2 transition hover:text-uvea-gold hover:decoration-uvea-gold"
        >
          Call 988 then press 1
        </a>
        <span aria-hidden="true" className="hidden text-uvea-gray sm:inline">&bull;</span>
        <a
          href="sms:838255"
          className="underline decoration-uvea-gold/50 underline-offset-2 transition hover:text-uvea-gold hover:decoration-uvea-gold"
        >
          Text 838255
        </a>
      </p>
    </div>
  );
}
