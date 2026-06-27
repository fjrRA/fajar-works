// src/components/contact/
// contact-opportunity-list.tsx

type ContactOpportunityListProps = {
  items: readonly string[];
};

export function ContactOpportunityList({
  items,
}: ContactOpportunityListProps) {
  return (
    <ol className="mt-10 border-t border-line">
      {items.map((item, index) => (
        <li
          key={item}
          className="
            grid
            min-w-0
            grid-cols-[2.5rem_minmax(0,1fr)]
            gap-4
            border-b
            border-line
            py-5
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
        </li>
      ))}
    </ol>
  );
}