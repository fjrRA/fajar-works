// src/components/layout/mobile-navigation/hooks/use-mobile-navigation-focus.ts
"use client";

import {
  useEffect,
  type RefObject,
} from "react";

type UseMobileNavigationFocusOptions = {
  isOpen: boolean;
  firstLinkRef: RefObject<HTMLAnchorElement | null>;
  onEscape: () => void;
};

export function useMobileNavigationFocus({
  isOpen,
  firstLinkRef,
  onEscape,
}: UseMobileNavigationFocusOptions) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusFrame =
      window.requestAnimationFrame(() => {
        firstLinkRef.current?.focus();
      });

    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        onEscape();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.cancelAnimationFrame(focusFrame);

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    firstLinkRef,
    isOpen,
    onEscape,
  ]);
}