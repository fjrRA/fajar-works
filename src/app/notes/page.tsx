// src/app/notes/page.tsx

import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";

import { PageHeader } from "@/components/layout/page-header";
import { NotesIndex } from "@/components/notes/notes-index";
import {
  getPublishedNotes,
} from "@/lib/content/get-notes";
import {
  MainContent,
} from "@/components/layout/main-content";

export const metadata =
  createPageMetadata({
    title: "Notes",

    description:
      "Technical notes, opinions, activities, and personal observations by Fajar Rahmana Akbar.",

    pathname: "/notes",
  });

export default function NotesPage() {
  const notes = getPublishedNotes();

  return (
    <MainContent>
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

      <NotesIndex notes={notes} />
    </MainContent>
  );
}