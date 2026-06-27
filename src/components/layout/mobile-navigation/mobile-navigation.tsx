// src/components/layout/mobile-navigation/mobile-navigation.tsx
"use client";

import { usePathname } from "next/navigation";

import { MobileNavigationPanel } from "./mobile-navigation-panel";
import { MobileNavigationToggle } from "./mobile-navigation-toggle";
import type { MobileNavigationProps } from "./mobile-navigation.types";
import { useMobileNavigation } from "./use-mobile-navigation";

const MOBILE_NAVIGATION_ID =
  "mobile-primary-navigation";

export function MobileNavigation(
  props: MobileNavigationProps,
) {
  const pathname = usePathname();

  const {
    isOpen,
    isMounted,
    menuButtonRef,
    firstLinkRef,
    toggleMenu,
    closeMenu,
    finishCloseAnimation,
  } = useMobileNavigation();

  return (
    <div className="ml-auto flex h-full items-stretch lg:hidden">
      <MobileNavigationToggle
        isOpen={isOpen}
        isMounted={isMounted}
        controlsId={MOBILE_NAVIGATION_ID}
        buttonRef={menuButtonRef}
        onToggle={toggleMenu}
      />

      {isMounted ? (
        <MobileNavigationPanel
          id={MOBILE_NAVIGATION_ID}
          pathname={pathname}
          isOpen={isOpen}
          firstLinkRef={firstLinkRef}
          onSelect={closeMenu}
          onCloseAnimationEnd={
            finishCloseAnimation
          }
          {...props}
        />
      ) : null}
    </div>
  );
}