// src/app/notes/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  JsonLd,
} from "@/components/seo/json-ld";
import {
  createNoteStructuredData,
} from "@/lib/metadata/structured-data";

import {
  NoteDetail,
} from "@/components/notes/note-detail";
import {
  getNoteBySlug,
  getPublishedNotes,
  getPublishedNoteSlugs,
} from "@/lib/content/get-notes";
import {
  getRelatedNotes,
} from "@/lib/content/note-related";
import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";
import type { Note } from "@/types/note";
import {
  MainContent,
} from "@/components/layout/main-content";

type NoteDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedNoteSlugs().map(
    (slug) => ({
      slug,
    }),
  );
}

async function getNoteFromParams(
  params: NoteDetailPageProps["params"],
): Promise<Note> {
  const { slug } = await params;

  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return note;
}

export async function generateMetadata({
  params,
}: NoteDetailPageProps): Promise<Metadata> {
  const note =
    await getNoteFromParams(params);

  const title =
    `${note.title} — Notes | Fajar Works`;

  const publishedTime =
    `${note.publishedAt}T00:00:00.000Z`;

  const modifiedTime =
    note.updatedAt
      ? `${note.updatedAt}T00:00:00.000Z`
      : publishedTime;

  return createPageMetadata({
    title,
    description: note.excerpt,
    pathname: `/notes/${note.slug}`,
    absoluteTitle: true,
    openGraphType: "article",
    article: {
      publishedTime,
      modifiedTime,
      tags: note.tags,
    },
  });
}

export default async function NoteDetailPage({
  params,
}: NoteDetailPageProps) {
  const note =
    await getNoteFromParams(params);

  const noteStructuredData =
    createNoteStructuredData(
      note,
    );

  const publishedNotes =
    getPublishedNotes();

  const relatedNotes =
    getRelatedNotes(
      publishedNotes,
      note.slug,
      3,
    );

  return (
    <>
      <JsonLd
        data={noteStructuredData}
      />

      <MainContent>
        <NoteDetail
          note={note}
          relatedNotes={relatedNotes}
        />
      </MainContent>
    </>
  );
}