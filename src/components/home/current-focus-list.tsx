// src/components/home/current-focus-list.tsx
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils/cn";
import type { CurrentFocusItem } from "@/types/home";

type CurrentFocusListProps = {
  heading: string;
  description: string;
  items: CurrentFocusItem[];
  className?: string;
};

export function CurrentFocusList({
  heading,
  description,
  items,
  className,
}: CurrentFocusListProps) {
  return (
    <section
      className={cn(
        "flex min-w-0 flex-col",
        className,
      )}
    >
      <header className="border-b border-line px-6 py-8 md:px-8 lg:px-10">
        <SectionLabel tone="muted">
          Live Index / Now
        </SectionLabel>

        <h3
          className="
            mt-4
            text-2xl
            leading-none
            font-semibold
            tracking-[-0.035em]
            uppercase
            md:text-3xl
          "
        >
          {heading}
        </h3>

        <p className="type-body mt-5 max-w-lg text-muted">
          {description}
        </p>
      </header>

      <ol className="flex-1">
        {items.map((item) => (
          <li
            key={`${item.index}-${item.label}`}
            className="
              grid
              gap-4
              border-b
              border-line
              px-6
              py-6
              last:border-b-0
              sm:grid-cols-[2.5rem_7rem_minmax(0,1fr)]
              sm:items-start
              md:px-8
              lg:px-10
            "
          >
            <span className="type-label text-muted">
              {item.index}
            </span>

            <span
              className="
                font-mono
                text-xs
                font-medium
                tracking-[0.1em]
                text-accent
                uppercase
              "
            >
              {item.label}
            </span>

            <span
              className="
                text-sm
                leading-6
                text-ink
              "
            >
              {item.value}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}