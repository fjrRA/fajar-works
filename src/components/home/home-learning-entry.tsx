import Link from "next/link";

import { formatContentDate } from "@/lib/utils/format-content-date";
import type { LearningLog } from "@/types/learning-log";

type HomeLearningEntryProps = {
  displayIndex: string;
  learningLog: LearningLog;
};

export function HomeLearningEntry({
  displayIndex,
  learningLog,
}: HomeLearningEntryProps) {
  return (
    <article className="h-full">
      <Link
        href={`/learning-log/${learningLog.slug}`}
        className="group flex h-full min-h-[30rem] flex-col justify-between px-6 py-9 transition-colors duration-150 hover:bg-ink/10 focus-visible:-outline-offset-2 md:px-8 lg:px-9 lg:py-10"
      >
        <div>
          <div className="flex items-start justify-between gap-6 font-mono text-xs text-inverse/60 uppercase">
            <span>{displayIndex}</span>
            <time dateTime={learningLog.loggedAt}>
              {formatContentDate(learningLog.loggedAt)}
            </time>
          </div>

          <div className="mt-16">
            <p className="type-meta text-inverse uppercase">
              {learningLog.category} / {learningLog.status}
            </p>

            <h3 className="mt-4 text-balance text-[clamp(2rem,3.1vw,3.5rem)] leading-[0.95] font-semibold tracking-[-0.045em] uppercase transition-colors duration-150 group-hover:text-inverse/75">
              {learningLog.title}
            </h3>

            <p className="mt-6 text-base leading-7 text-inverse/70">
              {learningLog.excerpt}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <dl className="border-t border-inverse/20 pt-5">
            <dt className="type-meta text-inverse/50 uppercase">
              Current marker
            </dt>
            <dd className="mt-2 font-mono text-xs leading-6 tracking-[0.06em] uppercase">
              {learningLog.progress}
            </dd>
          </dl>

          <div className="mt-6 flex items-end justify-between gap-6">
            <p
              className="font-mono text-xs leading-6 tracking-[0.06em] text-inverse/55 uppercase"
              aria-label={`Topics: ${learningLog.topics.join(", ")}`}
            >
              {learningLog.topics.join(" / ")}
            </p>

            <span
              aria-hidden="true"
              className="shrink-0 font-mono text-lg transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              &rarr;
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
