// src/components/layout/skip-link.tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        fixed
        top-4
        left-4
        z-[100]
        -translate-y-24
        bg-ink
        px-4
        py-3
        font-mono
        text-xs
        font-semibold
        tracking-[0.1em]
        text-inverse
        uppercase
        transition-transform
        duration-150
        focus:translate-y-0
        motion-reduce:transition-none
      "
    >
      Skip to content
    </a>
  );
}