// src/app/notes/page.tsx
import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Technical notes, opinions, activities, and personal observations by Fajar Rahmana Akbar.",
};

export default function NotesPage() {
  return (
    <main id="main-content">
      <PageHeader
        index="02"
        label="Notes"
        titleSize="long"
        title={
          <>
            Notes &amp;
            <br />
            Observations
          </>
        }
        description="Writing about web development, projects, career experiences, technology, activities, and personal observations."
      />
    </main>
  );
}