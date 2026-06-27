// src/components/learning-log/
// learning-log-detail/
// learning-log-entry-navigation.tsx

import type {
  LearningLogNavigation,
} from "@/lib/content/learning-log-navigation";

import {
  LearningLogEntryNavigationLink,
} from "./learning-log-entry-navigation-link";

type LearningLogEntryNavigationProps = {
  navigation: LearningLogNavigation;
};

export function LearningLogEntryNavigation({
  navigation,
}: LearningLogEntryNavigationProps) {
  const hasNavigation =
    navigation.newer !== null ||
    navigation.older !== null;

  if (!hasNavigation) {
    return null;
  }

  return (
    <nav
      aria-label="Learning Log chronology"
      className="border-t border-line"
    >
      <div className="grid md:grid-cols-2">
        {navigation.newer ? (
          <LearningLogEntryNavigationLink
            learningLog={
              navigation.newer
            }
            direction="newer"
          />
        ) : (
          <div
            aria-hidden="true"
            className="
              hidden
              border-r
              border-line
              md:block
            "
          />
        )}

        {navigation.older ? (
          <LearningLogEntryNavigationLink
            learningLog={
              navigation.older
            }
            direction="older"
          />
        ) : null}
      </div>
    </nav>
  );
}