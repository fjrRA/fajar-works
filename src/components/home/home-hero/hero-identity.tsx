// src/components/home/home-hero/hero-identity.tsx

import { SectionLabel } from "@/components/ui/section-label";

type HeroIdentityProps = {
  eyebrow: string;
  headingId: string;
  name: string;
  role: string;
  statement: string;
};

export function HeroIdentity({
  eyebrow,
  headingId,
  name,
  role,
  statement,
}: HeroIdentityProps) {
  return (
    <header
      className="
        flex
        min-h-[clamp(30rem,72svh,49rem)]
        w-full
        min-w-0
        flex-col
        justify-between
        px-6
        py-10
        md:px-8
        md:py-12
        lg:px-10
        xl:py-14
      "
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionLabel tone="muted">
          {eyebrow}
        </SectionLabel>

        <p className="type-meta text-right text-muted uppercase">
          {name} / {role}
        </p>
      </div>

      <h1
        id={headingId}
        className="
          mt-24
          max-w-7xl
          text-balance
          text-[clamp(3.35rem,9.2vw,8.75rem)]
          leading-[0.86]
          font-bold
          tracking-[-0.06em]
          uppercase

          max-[359px]:text-[2.75rem]
          max-[359px]:leading-[0.92]
          max-[359px]:tracking-[-0.045em]
        "
      >
        {statement}
      </h1>
    </header>
  );
}
