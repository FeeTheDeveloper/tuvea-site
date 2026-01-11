import Image from "next/image";

export default function MobileSealHeader() {
  return (
    <div className="lg:hidden bg-uvea-charcoal border-b border-uvea-gold/20 py-5">
      <div className="max-w-md mx-auto px-4">
        <div className="relative w-24 h-24 mx-auto">
          <Image
            src="/brand/uvea-seal.webp"
            alt="UVEA Official Seal"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
