// src/components/layout/mobile-navigation/use-mobile-navigation.ts
"use client";

import {
  useCallback,
  useRef,
  useState,
} from "react";

import { useCloseAnimation } from "./hooks/use-close-animation";
import { useMobileNavigationFocus } from "./hooks/use-mobile-navigation-focus";
import { usePageInteractionLock } from "./hooks/use-page-interaction-lock";

export function useMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] =
    useState(false);

  const menuButtonRef =
    useRef<HTMLButtonElement>(null);

  const firstLinkRef =
    useRef<HTMLAnchorElement>(null);

  const shouldRestoreFocusRef =
    useRef(false);

  /*
   * Menyelesaikan siklus penutupan panel.
   * Fungsi ini dipanggil oleh transitionend
   * atau timer fallback.
   */
  const completeClose = useCallback(() => {
    setIsMounted(false);

    if (!shouldRestoreFocusRef.current) {
      return;
    }

    shouldRestoreFocusRef.current = false;

    window.requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  }, []);

  const {
    cancelCloseFallback,
    scheduleCloseFallback,
    finishCloseAnimation,
  } = useCloseAnimation({
    onFinish: completeClose,
  });

  /*
   * Halaman tetap terkunci selama panel masih
   * terpasang, termasuk ketika closing animation
   * sedang berlangsung.
   */
  usePageInteractionLock(isMounted);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    scheduleCloseFallback();
  }, [scheduleCloseFallback]);

  const closeMenuAndRestoreFocus =
    useCallback(() => {
      shouldRestoreFocusRef.current = true;
      closeMenu();
    }, [closeMenu]);

  useMobileNavigationFocus({
    isOpen,
    firstLinkRef,
    onEscape: closeMenuAndRestoreFocus,
  });

  const openMenu = useCallback(() => {
    cancelCloseFallback();

    shouldRestoreFocusRef.current = false;

    setIsMounted(true);

    window.requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }, [cancelCloseFallback]);

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  }, [
    closeMenu,
    isOpen,
    openMenu,
  ]);

  return {
    isOpen,
    isMounted,
    menuButtonRef,
    firstLinkRef,
    toggleMenu,
    closeMenu,
    finishCloseAnimation,
  };
}