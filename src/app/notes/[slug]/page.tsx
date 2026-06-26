// src/app/notes/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  NoteDetail,
} from "@/components/notes/note-detail";
import {
  getNoteBySlug,
  getPublishedNoteSlugs,
} from "@/lib/content/get-notes";
import type { Note } from "@/types/note";

import {
  getPublishedNotes,
} from "@/lib/content/get-notes";
import {
  getRelatedNotes,
} from "@/lib/content/note-related";

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

  const modifiedTime = note.updatedAt
    ? `${note.updatedAt}T00:00:00.000Z`
    : publishedTime;

  return {
    title: {
      absolute: title,
    },

    description: note.excerpt,

    openGraph: {
      title,
      description: note.excerpt,
      type: "article",
      publishedTime,
      modifiedTime,
      tags: note.tags,
    },

    twitter: {
      card: "summary",
      title,
      description: note.excerpt,
    },
  };
}

export default async function NoteDetailPage({
  params,
}: NoteDetailPageProps) {
  const note =
    await getNoteFromParams(params);

  const publishedNotes =
    getPublishedNotes();

  const relatedNotes =
    getRelatedNotes(
      publishedNotes,
      note.slug,
      3,
    );

  return (
    <main id="main-content">
      <NoteDetail
        note={note}
        relatedNotes={relatedNotes}
      />
    </main>
  );
}