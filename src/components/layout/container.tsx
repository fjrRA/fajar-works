// src/components/layout/container.tsx
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerProps =
  HTMLAttributes<HTMLDivElement>;

export function Container({
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "site-container min-w-0",
        className,
      )}
      {...props}
    />
  );
}