// src/components/layout/desktop-navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavigation } from "@/config/navigation";
import { isNavigationItemActive } from "@/lib/navigation/is-navigation-item-active";
import { cn } from "@/lib/utils/cn";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden min-w-0 flex-1 lg:block"
    >
      <ul className="flex h-full items-stretch">
        {mainNavigation.map((item) => {
          const isActive = isNavigationItemActive(
            pathname,
            item.href,
          );

          return (
            <li
              key={item.href}
              className="flex border-r border-line"
            >
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group",
                  "relative",
                  "flex",
                  "h-full",
                  "items-center",
                  "gap-2",
                  "px-3",
                  "font-mono",
                  "text-[0.6875rem]",
                  "font-medium",
                  "tracking-[0.1em]",
                  "uppercase",
                  "xl:px-4",
                )}
              >
                <span
                  className={cn(
                    "transition-colors",
                    "duration-150",
                    isActive
                      ? "text-accent"
                      : "text-muted group-hover:text-accent",
                  )}
                >
                  {item.index}
                </span>

                <span className="whitespace-nowrap">
                  {item.label}
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute",
                    "inset-x-3",
                    "bottom-0",
                    "h-px",
                    "origin-left",
                    "bg-accent",
                    "transition-transform",
                    "duration-150",
                    "xl:inset-x-4",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}