// src/components/layout/page-header.tsx
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils/cn";

type PageHeaderTitleSize = "default" | "long";

type PageHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  description: string;
  titleSize?: PageHeaderTitleSize;
};

const titleSizeClasses: Record<
  PageHeaderTitleSize,
  string
> = {
  default: `
    text-[clamp(2.5rem,11vw,4.25rem)]
    leading-[0.88]
    tracking-[-0.055em]
    md:text-[clamp(3.25rem,7vw,5.5rem)]
    lg:text-[clamp(3.25rem,5.75vw,6.5rem)]
  `,
  long: `
    text-[clamp(2.25rem,9.5vw,3.75rem)]
    leading-[0.94]
    tracking-[-0.045em]
    md:text-[clamp(3.25rem,7vw,5.5rem)]
    md:leading-[0.88]
    md:tracking-[-0.055em]
    lg:text-[clamp(3.25rem,5.75vw,6.5rem)]
  `,
};

export function PageHeader({
  index,
  label,
  title,
  description,
  titleSize = "default",
}: PageHeaderProps) {
  return (
    <section className="border-b border-line">
      <Container>
        <div
          className="
            grid
            min-h-[28rem]
            md:min-h-[30rem]
            border-x
            border-line
            lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]
          "
        >
          <header
            className="
              flex
              min-w-0
              flex-col
              justify-between
              border-b
              border-line
              px-6
              py-10
              md:px-8
              md:py-12
              lg:border-r
              lg:border-b-0
              lg:px-10
            "
          >
            <SectionLabel index={index}>
              {label}
            </SectionLabel>

            <h1
              className={cn(
                "mt-16 max-w-full text-balance font-bold uppercase",
                titleSizeClasses[titleSize],
              )}
            >
              {title}
            </h1>
          </header>

          <div
            className="
              flex
              min-w-0
              items-end
              px-6
              py-10
              md:px-8
              md:py-12
              lg:px-10
            "
          >
            <p className="type-body max-w-lg text-muted">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}