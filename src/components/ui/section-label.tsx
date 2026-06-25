// src/components/ui/section-label.tsx
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type SectionLabelTone = "accent" | "muted";

type SectionLabelProps = ComponentPropsWithoutRef<"p"> & {
  index?: string;
  tone?: SectionLabelTone;
};

const toneClasses: Record<SectionLabelTone, string> = {
  accent: "text-accent",
  muted: "text-muted",
};

export function SectionLabel({
  index,
  tone = "accent",
  className,
  children,
  ...props
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "type-label",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {index ? `${index} / ` : null}
      {children}
    </p>
  );
}