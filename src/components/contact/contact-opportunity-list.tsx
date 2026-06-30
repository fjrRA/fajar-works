type ContactOpportunityListProps = {
  items: readonly string[];
};

export function ContactOpportunityList({
  items,
}: ContactOpportunityListProps) {
  return (
    <ol>
      {items.map((item, index) => (
        <li
          key={item}
          className="
            grid
            min-w-0
            grid-cols-[2.5rem_minmax(0,1fr)_auto]
            items-start
            gap-3
            border-b
            border-line
            py-6
          "
        >
          <span className="type-meta text-accent-strong">
            {String(index + 1).padStart(
              2,
              "0",
            )}
          </span>

          <p className="min-w-0 wrap-break-word leading-7">
            {item}
          </p>

          <span
            className="
              hidden
              font-mono
              text-[0.625rem]
              tracking-[0.12em]
              text-muted
              uppercase
              sm:inline
            "
          >
            Open
          </span>
        </li>
      ))}
    </ol>
  );
}
