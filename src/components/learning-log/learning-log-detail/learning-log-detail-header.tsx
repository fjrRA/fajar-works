import type {
  LearningLog,
} from "@/types/learning-log";

import {
  LearningLogHeaderIntro,
} from "./learning-log-header-intro";
import {
  LearningLogHeaderLedger,
} from "./learning-log-header-ledger";
import {
  LearningLogHeaderNavigation,
} from "./learning-log-header-navigation";
import {
  LearningLogHeaderStatus,
} from "./learning-log-header-status";
import {
  LearningLogHeaderTopics,
} from "./learning-log-header-topics";

type LearningLogDetailHeaderProps = {
  learningLog: LearningLog;
  headingId: string;
};

export function LearningLogDetailHeader({
  learningLog,
  headingId,
}: LearningLogDetailHeaderProps) {
  return (
    <header className="border-b border-line">
      <LearningLogHeaderNavigation
        loggedAt={learningLog.loggedAt}
      />

      <div
        className="
          grid
          min-w-0
          lg:grid-cols-[14rem_minmax(0,1fr)]
        "
      >
        <LearningLogHeaderStatus
          status={learningLog.status}
          source={learningLog.source}
          repositoryUrl={
            learningLog.repositoryUrl
          }
        />

        <LearningLogHeaderIntro
          headingId={headingId}
          category={learningLog.category}
          title={learningLog.title}
          excerpt={learningLog.excerpt}
        />
      </div>

      <LearningLogHeaderLedger
        loggedAt={learningLog.loggedAt}
        updatedAt={learningLog.updatedAt}
        module={learningLog.module}
        progress={learningLog.progress}
      />

      <LearningLogHeaderTopics
        topics={learningLog.topics}
      />
    </header>
  );
}
