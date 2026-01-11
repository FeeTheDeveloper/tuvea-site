import Image from "next/image";

export default function SealPanel() {
  return (
    <div className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 bg-uvea-charcoal border-r border-uvea-gold/15">
      <div className="flex items-center justify-center h-full p-5">
        <div className="relative w-48 aspect-square">
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
