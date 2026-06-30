const columns = [
  {
    label: "No.",
    className: "px-6 py-4",
  },
  {
    label: "Practice Area",
    className:
      "border-l border-line px-8 py-4",
  },
  {
    label: "Applied Scope",
    className:
      "border-l border-line px-8 py-4",
  },
  {
    label: "Working Tools",
    className:
      "border-l border-line px-8 py-4",
  },
];

export function AboutCapabilitiesTableHeader() {
  return (
    <div
      className="
        hidden
        border-b
        border-line
        bg-panel
        font-mono
        text-[0.6875rem]
        tracking-[0.12em]
        text-muted
        uppercase
        lg:grid
        lg:grid-cols-[5rem_18rem_minmax(0,1fr)_22rem]
      "
    >
      {columns.map(({ label, className }) => (
        <p key={label} className={className}>
          {label}
        </p>
      ))}
    </div>
  );
}
