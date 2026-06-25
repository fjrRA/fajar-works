// src/components/layout/mobile-navigation/mobile-navigation-item.tsx
import type { Ref } from "react";
import Link from "next/link";

import type { NavigationItem } from "@/config/navigation";
import { cn } from "@/lib/utils/cn";

type MobileNavigationItemProps = {
  item: NavigationItem;
  isActive: boolean;
  linkRef?: Ref<HTMLAnchorElement>;
  onSelect: () => void;
};

export function MobileNavigationItem({
  item,
  isActive,
  linkRef,
  onSelect,
}: MobileNavigationItemProps) {
  return (
    <li className="border-b border-line">
      <Link
        ref={linkRef}
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        onClick={onSelect}
        className="
          site-container
          group
          flex
          min-h-20
          items-center
          justify-between
          gap-6
          py-5
        "
      >
        <span className="flex items-baseline gap-4">
          <span
            className={cn(
              "font-mono",
              "text-xs",
              "font-medium",
              "tracking-[0.14em]",
              "transition-colors",
              "duration-150",
              isActive
                ? "text-accent"
                : "text-muted group-hover:text-accent",
            )}
          >
            {item.index}
          </span>

          <span
            className="
              whitespace-nowrap
              text-xl
              leading-none
              font-semibold
              tracking-[-0.025em]
              uppercase
              sm:text-2xl
            "
          >
            {item.label}
          </span>
        </span>

        <span
          aria-hidden="true"
          className={cn(
            "h-px",
            "w-8",
            "shrink-0",
            "transition-colors",
            "duration-150",
            isActive
              ? "bg-accent"
              : "bg-line group-hover:bg-accent",
          )}
        />
      </Link>
    </li>
  );
}