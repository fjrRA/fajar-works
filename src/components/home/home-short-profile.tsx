// src/components/home/home-short-profile.tsx
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils/cn";
import type { HomeShortProfileContent } from "@/types/home";

type HomeShortProfileProps = {
  content: HomeShortProfileContent;
};

export function HomeShortProfile({
  content,
}: HomeShortProfileProps) {
  return (
    <section className="border-b border-line">
      <Container>
        <div
          className="
            grid
            border-x
            border-line
            lg:grid-cols-[minmax(16rem,0.42fr)_minmax(0,1fr)]
          "
        >
          <header
            className="
              section-block
              border-b
              border-line
              px-6
              md:px-8
              lg:border-r
              lg:border-b-0
              lg:px-10
            "
          >
            <SectionLabel index="05">
              Profile
            </SectionLabel>

            <SectionHeading className="mt-3">
              {content.heading}
            </SectionHeading>

            <p className="type-body mt-6 max-w-md text-muted">
              {content.description}
            </p>

            <Link
              href={content.profileHref}
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-4
                border-b
                border-ink
                pb-2
                font-mono
                text-xs
                font-semibold
                tracking-[0.1em]
                uppercase
                transition-colors
                duration-150
                hover:border-accent
                hover:text-accent
              "
            >
              {content.profileLabel} / 04

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-8
                  bg-current
                  transition-transform
                  duration-200
                  ease-out
                  group-hover:translate-x-1
                  motion-reduce:transition-none
                "
              />
            </Link>
          </header>

          <ol className="grid min-w-0 sm:grid-cols-2">
            {content.points.map((point, index) => {
              const isLastItem =
                index === content.points.length - 1;

              const isLastDesktopRow =
                index >= content.points.length - 2;

              const isLeftColumn =
                index % 2 === 0;

              return (
                <li
                  key={`${point.index}-${point.label}`}
                  className={cn(
                    "min-w-0 px-6 py-8 md:px-8 lg:px-10 lg:py-10",
                    !isLastItem &&
                    "border-b border-line",
                    isLeftColumn &&
                    "sm:border-r sm:border-line",
                    isLastDesktopRow &&
                    "sm:border-b-0",
                  )}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="type-label text-muted">
                        {point.index}
                      </span>

                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-line"
                      />
                    </div>

                    <p
                      className="
              mt-8
              font-mono
              text-xs
              font-medium
              tracking-[0.12em]
              text-accent
              uppercase
            "
                    >
                      {point.label}
                    </p>

                    <p
                      className="
              mt-4
              max-w-lg
              text-xl
              leading-7
              font-medium
              tracking-[-0.02em]
              md:text-2xl
              md:leading-8
            "
                    >
                      {point.value}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}