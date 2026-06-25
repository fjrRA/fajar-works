// src/components/layout/container.tsx
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("site-container", className)}
      {...props}
    />
  );
}