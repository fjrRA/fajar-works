// src/components/not-found/not-found-recovery.tsx

import {
  NotFoundRecoveryLink,
} from "./not-found-recovery-link";

const recoveryLinks = [
  {
    index: "01",
    label: "Return Home",
    href: "/",
  },
  {
    index: "02",
    label: "View Selected Work",
    href: "/projects",
  },
  {
    index: "03",
    label: "Read Notes",
    href: "/notes",
  },
];

export function NotFoundRecovery() {
  return (
    <aside
      aria-labelledby="recovery-index-heading"
      className="
        section-block
        flex
        min-w-0
        flex-col
        justify-between
        px-6
        md:px-8
        lg:px-10
      "
    >
      <div>
        <p className="type-label text-accent-strong">
          Recovery Index
        </p>

        <h2
          id="recovery-index-heading"
          className="
            type-section-title
            mt-3
            max-w-sm
          "
        >
          Continue the Archive
        </h2>

        <p
          className="
            type-body
            mt-6
            max-w-md
            text-muted
          "
        >
          Use one of the destinations below to
          return to an available section of
          Fajar Works.
        </p>
      </div>

      <nav
        aria-label="Page not found recovery links"
        className="
          mt-12
          border-t
          border-line
        "
      >
        {recoveryLinks.map((link) => (
          <NotFoundRecoveryLink
            key={link.href}
            index={link.index}
            label={link.label}
            href={link.href}
          />
        ))}
      </nav>
    </aside>
  );
}
