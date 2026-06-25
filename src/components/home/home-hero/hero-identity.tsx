// src/components/home/home-hero/hero-identity.tsx

import { SectionLabel } from "@/components/ui/section-label";

type HeroIdentityProps = {
  eyebrow: string;
  headingId: string;
};

export function HeroIdentity({
  eyebrow,
  headingId,
}: HeroIdentityProps) {
  return (
    <header
      className="
        flex
        w-full
        min-w-0
        flex-col
        justify-between
        border-b
        border-line
        px-6
        py-10
        md:px-8
        md:py-12
        lg:border-r
        lg:border-b-0
        lg:px-10
        xl:py-14
      "
    >
      <SectionLabel tone="muted">
        {eyebrow}
      </SectionLabel>

      <h1
        id={headingId}
        className="
          mt-16
          max-w-full
          text-[clamp(3.5rem,10vw,10rem)]
          leading-[0.82]
          font-bold
          tracking-[-0.065em]
          uppercase

          max-[359px]:text-[2.75rem]
          max-[359px]:leading-[0.92]
          max-[359px]:tracking-[-0.045em]
        "
      >
        <span className="block">Fajar</span>
        <span className="block">Rahmana</span>
        <span className="block">Akbar</span>
      </h1>
    </header>
  );
}