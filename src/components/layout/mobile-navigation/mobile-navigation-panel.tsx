// src/components/layout/mobile-navigation/mobile-navigation-panel.tsx
import type {
  RefObject,
  TransitionEvent,
} from "react";

import { mainNavigation } from "@/config/navigation";
import { isNavigationItemActive } from "@/lib/navigation/is-navigation-item-active";
import { cn } from "@/lib/utils/cn";

import { MobileNavigationItem } from "./mobile-navigation-item";
import { MobileNavigationMeta } from "./mobile-navigation-meta";
import type { MobileNavigationProps } from "./mobile-navigation.types";

type MobileNavigationPanelProps =
  MobileNavigationProps & {
    id: string;
    pathname: string;
    isOpen: boolean;
    firstLinkRef: RefObject<HTMLAnchorElement | null>;
    onSelect: () => void;
    onCloseAnimationEnd: () => void;
  };

export function MobileNavigationPanel({
  id,
  pathname,
  isOpen,
  firstLinkRef,
  onSelect,
  onCloseAnimationEnd,
  availability,
  availabilityCode,
  location,
  locationCode,
}: MobileNavigationPanelProps) {
  function handleTransitionEnd(
    event: TransitionEvent<HTMLDivElement>,
  ) {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "opacity"
    ) {
      return;
    }

    if (!isOpen) {
      onCloseAnimationEnd();
    }
  }

  return (
    <div
      id={id}
      aria-hidden={!isOpen}
      onTransitionEnd={handleTransitionEnd}
      className={cn(
        "fixed",
        "inset-x-0",
        "bottom-0",
        "top-[var(--header-height)]",
        "z-40",
        "overflow-y-auto",
        "bg-paper",
        "transition-[opacity,translate]",
        "duration-200",
        "motion-reduce:transition-none",
        "lg:hidden",
        isOpen
          ? "translate-y-0 opacity-100 ease-out"
          : "-translate-y-2 pointer-events-none opacity-0 ease-in",
      )}
    >
      <nav
        aria-label="Mobile primary navigation"
        className="flex min-h-full flex-col"
      >
        <ul>
          {mainNavigation.map(
            (item, itemIndex) => (
              <MobileNavigationItem
                key={item.href}
                item={item}
                isActive={isNavigationItemActive(
                  pathname,
                  item.href,
                )}
                linkRef={
                  itemIndex === 0
                    ? firstLinkRef
                    : undefined
                }
                onSelect={onSelect}
              />
            ),
          )}
        </ul>

        <MobileNavigationMeta
          availability={availability}
          availabilityCode={availabilityCode}
          location={location}
          locationCode={locationCode}
        />
      </nav>
    </div>
  );
}