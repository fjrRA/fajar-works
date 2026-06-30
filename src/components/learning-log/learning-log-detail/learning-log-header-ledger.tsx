import type {
  ReactNode,
} from "react";

import {
  formatContentDate,
} from "@/lib/utils/format-content-date";

type LearningLogHeaderLedgerProps = {
  loggedAt: string;
  updatedAt?: string;
  module: string;
  progress: string;
};

type LedgerCellProps = {
  label: string;
  children: ReactNode;
};

function LedgerCell({
  label,
  children,
}: LedgerCellProps) {
  return (
    <div
      className="
        min-w-0
        border-b
        border-line
        px-6
        py-5
        sm:border-r
        md:px-8
        xl:border-b-0
      "
    >
      <dt className="type-meta text-muted uppercase">
        {label}
      </dt>

      <dd className="mt-2 min-w-0 wrap-break-word font-mono text-sm leading-6">
        {children}
      </dd>
    </div>
  );
}

export function LearningLogHeaderLedger({
  loggedAt,
  updatedAt,
  module,
  progress,
}: LearningLogHeaderLedgerProps) {
  const lastReviewedAt =
    updatedAt ?? loggedAt;

  return (
    <dl
      aria-label="Learning record metadata"
      className="
        grid
        border-t
        border-line
        sm:grid-cols-2
        xl:grid-cols-[0.7fr_0.7fr_1.35fr_1.25fr]
      "
    >
      <LedgerCell label="Logged">
        <time dateTime={loggedAt}>
          {formatContentDate(loggedAt)}
        </time>
      </LedgerCell>

      <LedgerCell label="Last reviewed">
        <time dateTime={lastReviewedAt}>
          {formatContentDate(lastReviewedAt)}
        </time>
      </LedgerCell>

      <LedgerCell label="Module">
        {module}
      </LedgerCell>

      <LedgerCell label="Progress">
        {progress}
      </LedgerCell>
    </dl>
  );
}
