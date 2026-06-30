import type {
  Capability,
} from "@/types/capability";

import {
  AboutCapabilityTechnologies,
} from "./about-capability-technologies";

type AboutCapabilityRowProps = {
  capability: Capability;
};

export function AboutCapabilityRow({
  capability,
}: AboutCapabilityRowProps) {
  return (
    <article
      className="
        grid
        min-w-0
        border-b
        border-line
        lg:grid-cols-[5rem_18rem_minmax(0,1fr)_22rem]
      "
    >
      <p
        className="
          bg-panel
          px-6
          py-6
          type-label
          text-accent
          lg:bg-transparent
        "
      >
        {capability.index}
      </p>

      <div
        className="
          min-w-0
          px-6
          py-6
          md:px-8
          lg:border-l
          lg:border-line
        "
      >
        <p className="type-label mb-3 text-muted lg:hidden">
          Practice Area
        </p>

        <h3
          className="
            text-2xl
            leading-[1.05]
            font-semibold
            tracking-[-0.035em]
          "
        >
          {capability.title}
        </h3>
      </div>

      <div
        className="
          min-w-0
          border-t
          border-line
          px-6
          py-6
          md:px-8
          lg:border-t-0
          lg:border-l
        "
      >
        <p className="type-label mb-3 text-muted lg:hidden">
          Applied Scope
        </p>

        <p className="type-body text-muted">
          {capability.description}
        </p>
      </div>

      <div
        className="
          min-w-0
          border-t
          border-line
          px-6
          py-6
          md:px-8
          lg:border-t-0
          lg:border-l
        "
      >
        <p className="type-label mb-3 text-muted lg:hidden">
          Working Tools
        </p>

        <AboutCapabilityTechnologies
          capabilityTitle={capability.title}
          technologies={capability.technologies}
        />
      </div>
    </article>
  );
}
