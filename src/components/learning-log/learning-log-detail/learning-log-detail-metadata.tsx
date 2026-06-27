// src/components/learning-log/
// learning-log-detail/
// learning-log-detail-metadata.tsx

import type {
  ReactNode,
} from "react";

import {
  formatContentDate,
} from "@/lib/utils/format-content-date";

import type {
  LearningLog,
} from "@/types/learning-log";

type LearningLogDetailMetadataProps = {
  learningLog: Pick<
    LearningLog,
    | "loggedAt"
    | "updatedAt"
    | "status"
    | "source"
    | "module"
    | "progress"
  >;
};

type MetadataRowProps = {
  label: string;
  children: ReactNode;
};

function MetadataRow({
  label,
  children,
}: MetadataRowProps) {
  return (
    <div
      className="
        flex
        items-start
        justify-between
        gap-6
        border-b
        border-line
        py-4
      "
    >
      <dt className="type-meta shrink-0 text-muted uppercase">
        {label}
      </dt>

      <dd
        className="
          min-w-0
          max-w-[17rem]
          wrap-break-word
          text-right
          font-mono
          text-sm
          uppercase
        "
      >
        {children}
      </dd>
    </div>
  );
}

export function LearningLogDetailMetadata({
  learningLog,
}: LearningLogDetailMetadataProps) {
  return (
    <div>
      <p className="type-label text-muted">
        Learning File
      </p>

      <dl className="mt-8 border-t border-line">
        <MetadataRow label="Logged">
          <time
            dateTime={
              learningLog.loggedAt
            }
          >
            {formatContentDate(
              learningLog.loggedAt,
            )}
          </time>
        </MetadataRow>

        {learningLog.updatedAt ? (
          <MetadataRow label="Updated">
            <time
              dateTime={
                learningLog.updatedAt
              }
            >
              {formatContentDate(
                learningLog.updatedAt,
              )}
            </time>
          </MetadataRow>
        ) : null}

        <MetadataRow label="Status">
          {learningLog.status}
        </MetadataRow>

        <MetadataRow label="Source">
          {learningLog.source}
        </MetadataRow>

        <MetadataRow label="Module">
          {learningLog.module}
        </MetadataRow>

        <MetadataRow label="Progress">
          {learningLog.progress}
        </MetadataRow>
      </dl>
    </div>
  );
}