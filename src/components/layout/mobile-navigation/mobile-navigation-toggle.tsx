// src/components/layout/mobile-navigation/mobile-navigation-toggle.tsx
import type { RefObject } from "react";

import { cn } from "@/lib/utils/cn";

type MobileNavigationToggleProps = {
  isOpen: boolean;
  isMounted: boolean;
  controlsId: string;
  buttonRef: RefObject<HTMLButtonElement | null>;
  onToggle: () => void;
};

export function MobileNavigationToggle({
  isOpen,
  isMounted,
  controlsId,
  buttonRef,
  onToggle,
}: MobileNavigationToggleProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      aria-expanded={isOpen}
      aria-controls={isMounted ? controlsId : undefined}
      onClick={onToggle}
      className="
        flex
        h-full
        items-center
        gap-3
        border-l
        border-line
        px-4
        font-mono
        text-[0.6875rem]
        font-semibold
        tracking-[0.12em]
        uppercase
      "
    >
      <span>{isOpen ? "Close" : "Menu"}</span>

      <span
        aria-hidden="true"
        className={cn(
          "h-1.5",
          "w-1.5",
          "border",
          "transition-[background-color,border-color,transform]",
          "duration-200",
          "motion-reduce:transition-none",
          isOpen
            ? "rotate-45 border-accent bg-accent"
            : "rotate-0 border-ink bg-transparent",
        )}
      />
    </button>
  );
}