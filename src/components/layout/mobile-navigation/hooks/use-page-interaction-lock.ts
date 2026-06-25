// src/components/layout/mobile-navigation/hooks/use-page-interaction-lock.ts
"use client";

import { useEffect } from "react";

import { PAGE_INTERACTION_SELECTOR } from "../mobile-navigation.constants";

type PreviousInertState = {
  element: HTMLElement;
  wasInert: boolean;
};

export function usePageInteractionLock(
  isLocked: boolean,
) {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const inertElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        PAGE_INTERACTION_SELECTOR,
      ),
    );

    const previousInertStates: PreviousInertState[] =
      inertElements.map((element) => ({
        element,
        wasInert: element.hasAttribute("inert"),
      }));

    const previousBodyOverflow =
      document.body.style.overflow;

    const previousBodyPaddingRight =
      document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight =
        `${scrollbarWidth}px`;
    }

    inertElements.forEach((element) => {
      element.setAttribute("inert", "");
    });

    return () => {
      document.body.style.overflow =
        previousBodyOverflow;

      document.body.style.paddingRight =
        previousBodyPaddingRight;

      previousInertStates.forEach(
        ({ element, wasInert }) => {
          if (!wasInert) {
            element.removeAttribute("inert");
          }
        },
      );
    };
  }, [isLocked]);
}