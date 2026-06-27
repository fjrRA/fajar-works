// src/components/layout/main-content.tsx

import type {
  ComponentPropsWithoutRef,
} from "react";

import {
  cn,
} from "@/lib/utils/cn";

type MainContentProps = Omit<
  ComponentPropsWithoutRef<"main">,
  "id" | "tabIndex"
>;

export function MainContent({
  className,
  ...props
}: MainContentProps) {
  return (
    <main
      {...props}
      id="main-content"
      tabIndex={-1}
      className={cn(
        "min-w-0 focus:outline-none",
        className,
      )}
    />
  );
}