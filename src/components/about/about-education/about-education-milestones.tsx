import type {
  AboutEducationHighlight,
} from "@/types/about";

import {
  AboutEducationMilestone,
} from "./about-education-milestone";

type AboutEducationMilestonesProps = {
  highlights: readonly AboutEducationHighlight[];
};

export function AboutEducationMilestones({
  highlights,
}: AboutEducationMilestonesProps) {
  return (
    <>
      <div
        className="
          flex
          flex-wrap
          items-center
          justify-between
          gap-4
          border-b
          border-line
          px-6
          py-5
          md:px-8
          lg:px-10
        "
      >
        <p className="type-label text-muted">
          Selected Milestones
        </p>

        <p className="type-meta text-muted uppercase">
          Study / Research / Applied Work
        </p>
      </div>

      <div>
        {highlights.map((highlight) => (
          <AboutEducationMilestone
            key={highlight.index}
            highlight={highlight}
          />
        ))}
      </div>
    </>
  );
}
