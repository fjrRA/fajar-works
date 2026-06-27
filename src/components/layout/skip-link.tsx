// src/components/layout/skip-link.tsx

"use client";

import type {
  MouseEvent,
} from "react";

export function SkipLink() {
  function handleSkipToContent(
    event: MouseEvent<HTMLAnchorElement>,
  ) {
    const mainContent =
      document.getElementById(
        "main-content",
      );

    if (!mainContent) {
      return;
    }

    event.preventDefault();

    mainContent.focus({
      preventScroll: true,
    });

    mainContent.scrollIntoView({
      block: "start",
      behavior: "auto",
    });

    window.history.replaceState(
      null,
      "",
      "#main-content",
    );
  }

  return (
    <a
      href="#main-content"
      onClick={handleSkipToContent}
      className="
    fixed
    top-4
    left-4
    z-[100]
    -translate-y-24
    bg-orange-50
    px-4
    py-3
    font-mono
    text-xs
    font-semibold
    tracking-[0.1em]
    text-[var(--color-paper)]
    uppercase
    transition-transform
    duration-150
    focus:translate-y-0
    focus-visible:translate-y-0
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-accent
    motion-reduce:transition-none
  "
    >
      Skip to content
    </a>
  );
}