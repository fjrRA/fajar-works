//src/components/ui/section-heading.tsx
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type SectionHeadingProps =
  ComponentPropsWithoutRef<"h2">;

export function SectionHeading({
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "type-section-title",
        className,
      )}
      {...props}
    />
  );
}