// src/components/not-found/not-found-intro.tsx

import {
  SectionLabel,
} from "@/components/ui/section-label";

export function NotFoundIntro() {
  return (
    <div
      className="
        section-block
        flex
        min-w-0
        flex-col
        justify-between
        border-b
        border-line
        px-6
        md:px-8
        lg:min-h-[calc(100svh-var(--header-height))]
        lg:border-r
        lg:border-b-0
        lg:px-10
      "
    >
      <div className="min-w-0">
        <SectionLabel index="404">
          Missing Route
        </SectionLabel>

        <h1
          id="not-found-heading"
          className="
            mt-10
            max-w-5xl
            text-[clamp(2.75rem,12vw,7.5rem)]
            leading-[0.88]
            font-bold
            tracking-[-0.055em]
            uppercase
          "
        >
          <span className="block">
            Page
          </span>

          <span className="block">
            Not Found.
          </span>
        </h1>

        <p
          className="
            type-body
            mt-8
            max-w-xl
            text-muted
          "
        >
          The requested page is unavailable,
          has moved, or was never part of this
          working archive.
        </p>
      </div>

      <p
        className="
          type-meta
          mt-16
          border-t
          border-line
          pt-6
          text-muted
          uppercase
        "
      >
        FRA—26 / Route Unavailable
      </p>
    </div>
  );
}