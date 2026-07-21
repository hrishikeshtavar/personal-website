import Image from "next/image";

/**
 * "Field proof" photo strip — evidence the work described in the hero
 * actually happened in the field (Google HQ, Indian Army, forest dept,
 * client sites), not just in a pitch deck. Static content — Server Component.
 */
export function FieldProofSection() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-16 sm:px-10">
      <div className="overflow-hidden rounded-2xl border border-[var(--panel-line)]">
        <Image
          src="/images/backdrop.png"
          alt="Field deployments across Google HQ London, the Indian Army, the Maharashtra Forest Department, and client sites in the UK and India"
          width={1920}
          height={1080}
          className="h-auto w-full object-cover"
        />
      </div>
      <p className="font-mono-label mt-3 text-center text-xs tracking-[0.1em] text-[var(--ink-muted)]">
        Google HQ · Indian Army · Maharashtra Forest Dept. · client sites — UK &amp; India
      </p>
    </section>
  );
}
