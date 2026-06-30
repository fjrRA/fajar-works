import {
  SectionHeading,
} from "@/components/ui/section-heading";
import {
  SectionLabel,
} from "@/components/ui/section-label";
import type {
  LearningLogNavigation,
} from "@/lib/content/learning-log-navigation";
import type {
  RelatedLearningLogItem,
} from "@/lib/content/learning-log-related";

import {
  LearningLogRelatedCard,
} from "./learning-log-related-card";

type LearningLogRelatedLogsProps = {
  learningLogs:
    readonly RelatedLearningLogItem[];
  navigation: LearningLogNavigation;
};

const LEARNING_TRAIL_HEADING_ID =
  "learning-trail-heading";

function getRelationshipLabel(
  learningLogSlug: string,
  navigation: LearningLogNavigation,
): string {
  if (
    navigation.newer?.slug ===
    learningLogSlug
  ) {
    return "Newer Record";
  }

  if (
    navigation.older?.slug ===
    learningLogSlug
  ) {
    return "Older Record";
  }

  return "Related Record";
}

export function LearningLogRelatedLogs({
  learningLogs,
  navigation,
}: LearningLogRelatedLogsProps) {
  if (learningLogs.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby={
        LEARNING_TRAIL_HEADING_ID
      }
      className="border-t border-line"
    >
      <header
        className="
          grid
          gap-6
          border-b
          border-line
          px-6
          py-10
          md:px-8
          lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)]
          lg:px-10
          lg:py-12
        "
      >
        <div>
          <SectionLabel index="04">
            Continue / Review
          </SectionLabel>

          <SectionHeading
            id={LEARNING_TRAIL_HEADING_ID}
            className="mt-3"
          >
            Learning Trail
          </SectionHeading>
        </div>

        <p className="type-body max-w-md text-muted lg:justify-self-end">
          Chronological neighbours are
          labelled directly. Other records
          are selected through shared source,
          module, or technical topics.
        </p>
      </header>

      <div className="grid md:grid-cols-2">
        {learningLogs.map(
          (learningLog, index) => (
            <LearningLogRelatedCard
              key={learningLog.slug}
              learningLog={learningLog}
              displayIndex={String(
                index + 1,
              ).padStart(2, "0")}
              relationshipLabel={
                getRelationshipLabel(
                  learningLog.slug,
                  navigation,
                )
              }
            />
          ),
        )}
      </div>
    </section>
  );
}
