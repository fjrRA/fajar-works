// src/components/layout/mobile-navigation/hooks/use-close-animation.ts
"use client";

import {
  useCallback,
  useEffect,
  useRef,
} from "react";

import {
  CLOSE_FALLBACK_DELAY_MS,
  REDUCED_MOTION_QUERY,
} from "../mobile-navigation.constants";

type UseCloseAnimationOptions = {
  onFinish: () => void;
};

export function useCloseAnimation({
  onFinish,
}: UseCloseAnimationOptions) {
  const closeTimerRef =
    useRef<number | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current === null) {
      return;
    }

    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }, []);

  const finishCloseAnimation =
    useCallback(() => {
      clearCloseTimer();
      onFinish();
    }, [
      clearCloseTimer,
      onFinish,
    ]);

  const scheduleCloseFallback =
    useCallback(() => {
      clearCloseTimer();

      const prefersReducedMotion =
        window.matchMedia(
          REDUCED_MOTION_QUERY,
        ).matches;

      const delay = prefersReducedMotion
        ? 0
        : CLOSE_FALLBACK_DELAY_MS;

      closeTimerRef.current = window.setTimeout(
        finishCloseAnimation,
        delay,
      );
    }, [
      clearCloseTimer,
      finishCloseAnimation,
    ]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  return {
    cancelCloseFallback: clearCloseTimer,
    scheduleCloseFallback,
    finishCloseAnimation,
  };
}