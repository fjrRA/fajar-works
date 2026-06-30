import type { ReactNode } from "react";
import Link from "next/link";

import {
  formatContentDate,
} from "@/lib/utils/format-content-date";
import type {
  LearningLog,
} from "@/types/learning-log";

type LearningLogDetailHeaderProps = {
  learningLog: LearningLog;
  headingId: string;
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

      <dd
        className="
          mt-2
          min-w-0
          wrap-break-word
          font-mono
          text-sm
          leading-6
        "
      >
        {children}
      </dd>
    </div>
  );
}

function getRepositoryName(
  repositoryUrl: string,
): string {
  return new URL(repositoryUrl).pathname
    .replace(/^\//, "")
    .replace(/\/$/, "");
}

export function LearningLogDetailHeader({
  learningLog,
  headingId,
}: LearningLogDetailHeaderProps) {
  const updatedAt =
    learningLog.updatedAt ??
    learningLog.loggedAt;

  const repositoryName =
    learningLog.repositoryUrl
      ? getRepositoryName(
          learningLog.repositoryUrl,
        )
      : undefined;

  return (
    <header className="border-b border-line">
      <div
        className="
          flex
          flex-wrap
          items-center
          justify-between
          gap-5
          border-b
          border-line
          px-6
          py-5
          md:px-8
          lg:px-10
        "
      >
        <Link
          href="/learning-log"
          className="
            group
            inline-flex
            items-center
            gap-3
            font-mono
            text-xs
            font-semibold
            tracking-widest
            uppercase
            transition-colors
            hover:text-accent
          "
        >
          <span
            aria-hidden="true"
            className="
              inline-block
              transition-transform
              group-hover:-translate-x-1
              motion-reduce:transition-none
            "
          >
            ←
          </span>

          Learning Log / 03
        </Link>

        <p className="type-label text-muted">
          Logged {formatContentDate(learningLog.loggedAt)}
        </p>
      </div>

      <div
        className="
          grid
          min-w-0
          lg:grid-cols-[14rem_minmax(0,1fr)]
        "
      >
        <aside
          aria-label="Learning record status"
          className="
            flex
            min-w-0
            flex-col
            bg-ink
            px-6
            py-8
            text-inverse
            md:px-8
            lg:min-h-[31rem]
            lg:border-r
            lg:border-line
            lg:px-7
            lg:py-10
          "
        >
          <div>
            <p className="type-label text-accent">
              Learning Ledger
            </p>

            <p
              className="
                mt-8
                flex
                items-center
                gap-3
                font-mono
                text-xs
                tracking-[0.12em]
                uppercase
              "
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 bg-accent"
              />

              {learningLog.status}
            </p>
          </div>

          <div className="mt-12 lg:mt-auto">
            <p className="type-meta text-line uppercase">
              Source
            </p>

            <p className="mt-2 text-sm leading-6">
              {learningLog.source}
            </p>

            {learningLog.repositoryUrl ? (
              <a
                href={
                  learningLog.repositoryUrl
                }
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  mt-8
                  flex
                  items-end
                  justify-between
                  gap-4
                  border-t
                  border-muted
                  pt-5
                  font-mono
                  text-[0.6875rem]
                  leading-5
                  tracking-[0.08em]
                  uppercase
                  transition-colors
                  hover:text-accent
                "
              >
                <span className="wrap-break-word">
                  {repositoryName}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    shrink-0
                    text-base
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    motion-reduce:transition-none
                  "
                >
                  ↗
                </span>
              </a>
            ) : null}
          </div>
        </aside>

        <div
          className="
            min-w-0
            px-6
            py-12
            md:px-8
            md:py-16
            lg:px-12
            lg:py-20
          "
        >
          <p className="type-meta text-accent uppercase">
            {learningLog.category}
          </p>

          <h1
            id={headingId}
            className="
              mt-5
              max-w-5xl
              wrap-break-word
              text-balance
              text-[clamp(3rem,7vw,6.75rem)]
              leading-[0.91]
              font-semibold
              tracking-[-0.06em]
              max-[359px]:text-[2.5rem]
            "
          >
            {learningLog.title}
          </h1>

          <p
            className="
              mt-10
              max-w-3xl
              border-t
              border-line
              pt-7
              text-lg
              leading-8
              text-muted
            "
          >
            {learningLog.excerpt}
          </p>
        </div>
      </div>

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
          <time dateTime={learningLog.loggedAt}>
            {formatContentDate(
              learningLog.loggedAt,
            )}
          </time>
        </LedgerCell>

        <LedgerCell label="Last reviewed">
          <time dateTime={updatedAt}>
            {formatContentDate(updatedAt)}
          </time>
        </LedgerCell>

        <LedgerCell label="Module">
          {learningLog.module}
        </LedgerCell>

        <LedgerCell label="Progress">
          {learningLog.progress}
        </LedgerCell>
      </dl>

      <div
        className="
          grid
          border-t
          border-line
          lg:grid-cols-[14rem_minmax(0,1fr)]
        "
      >
        <p
          className="
            bg-panel
            px-6
            py-5
            type-label
            text-muted
            md:px-8
            lg:border-r
            lg:border-line
          "
        >
          Topics in record
        </p>

        <ul
          aria-label="Learning Log topics"
          className="
            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-2
            px-6
            py-5
            font-mono
            text-xs
            leading-5
            text-muted
            uppercase
            md:px-8
            lg:px-10
          "
        >
          {learningLog.topics.map(
            (topic, index) => (
              <li
                key={topic}
                className="flex items-center gap-3"
              >
                <span>{topic}</span>

                {index <
                learningLog.topics.length -
                  1 ? (
                  <span
                    aria-hidden="true"
                    className="text-accent"
                  >
                    /
                  </span>
                ) : null}
              </li>
            ),
          )}
        </ul>
      </div>
    </header>
  );
}
