// src/components/layout/footer-navigation.tsx
import Link from "next/link";

import { mainNavigation } from "@/config/navigation";

export function FooterNavigation() {
  return (
    <nav aria-label="Footer navigation">
      <p className="type-label text-line">
        Internal Index
      </p>

      <ul className="mt-5 border-t border-muted">
        {mainNavigation.map((item) => (
          <li
            key={item.href}
            className="border-b border-muted"
          >
            <Link
              href={item.href}
              className="
                group
                flex
                items-center
                justify-between
                gap-6
                py-4
                font-mono
                text-xs
                font-medium
                tracking-[0.1em]
                uppercase
              "
            >
              <span className="flex items-center gap-3">
                <span
                  className="
                    text-line
                    transition-colors
                    duration-150
                    group-hover:text-accent
                  "
                >
                  {item.index}
                </span>

                <span>{item.label}</span>
              </span>

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-6
                  bg-muted
                  transition-[background-color,transform]
                  duration-150
                  group-hover:translate-x-1
                  group-hover:bg-accent
                  motion-reduce:transition-none
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}