// src/components/home/capability-item.tsx
import type { Capability } from "@/types/capability";

type CapabilityItemProps = {
  capability: Capability;
};

export function CapabilityItem({
  capability,
}: CapabilityItemProps) {
  return (
    <article
      className="
        grid
        gap-6
        px-6
        py-8
        md:grid-cols-[3rem_minmax(0,1fr)]
        md:px-8
        lg:px-10
        lg:py-10
      "
    >
      <p className="type-label text-muted">
        {capability.index}
      </p>

      <div className="min-w-0">
        <h3
          className="
            text-2xl
            leading-none
            font-semibold
            tracking-[-0.035em]
            uppercase
            md:text-3xl
          "
        >
          {capability.title}
        </h3>

        <p className="type-body mt-5 max-w-2xl text-muted">
          {capability.description}
        </p>

        <p
          className="
            mt-6
            font-mono
            text-xs
            leading-6
            tracking-[0.06em]
            text-muted
            uppercase
          "
          aria-label={`Technologies: ${capability.technologies.join(
            ", ",
          )}`}
        >
          {capability.technologies.join(" / ")}
        </p>
      </div>
    </article>
  );
}