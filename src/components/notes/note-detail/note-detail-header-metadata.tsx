import type {
  ReactNode,
} from "react";

import {
  formatContentDate,
} from "@/lib/utils/format-content-date";
import type {
  Note,
} from "@/types/note";

type NoteDetailHeaderMetadataProps = {
  note: Pick<
    Note,
    | "publishedAt"
    | "updatedAt"
    | "language"
    | "tags"
  >;
};

type MetadataItemProps = {
  label: string;
  children: ReactNode;
};

function MetadataItem({
  label,
  children,
}: MetadataItemProps) {
  return (
    <div
      className="
        min-w-0
        border-b
        border-line
        px-6
        py-5
        sm:border-r
        md:px-8
        lg:border-b-0
      "
    >
      <dt className="type-meta text-muted uppercase">
        {label}
      </dt>

      <dd className="mt-2 min-w-0 font-mono text-sm leading-6">
        {children}
      </dd>
    </div>
  );
}

export function NoteDetailHeaderMetadata({
  note,
}: NoteDetailHeaderMetadataProps) {
  const updatedAt =
    note.updatedAt ?? note.publishedAt;

  return (
    <dl
      aria-label="Note information"
      className="
        grid
        border-t
        border-line
        sm:grid-cols-2
        lg:grid-cols-[0.8fr_0.8fr_0.55fr_1.85fr]
      "
    >
      <MetadataItem label="Published">
        <time dateTime={note.publishedAt}>
          {formatContentDate(note.publishedAt)}
        </time>
      </MetadataItem>

      <MetadataItem label="Last revised">
        <time dateTime={updatedAt}>
          {formatContentDate(updatedAt)}
        </time>
      </MetadataItem>

      <MetadataItem label="Language">
        <span className="uppercase">
          {note.language}
        </span>
      </MetadataItem>

      <MetadataItem label="Filed under">
        <span className="wrap-break-word text-muted">
          {note.tags.join(" / ")}
        </span>
      </MetadataItem>
    </dl>
  );
}
