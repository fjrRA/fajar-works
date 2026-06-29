import Image from "next/image";

import {
  parseMarkdownImageMetadata,
} from "@/lib/content/markdown-image-metadata";

type NoteMarkdownImageProps = {
  src?: string | Blob;
  alt?: string;
  title?: string;
};

function getImageSource(
  src: string | Blob | undefined,
): string {
  const source =
    typeof src === "string"
      ? src.trim()
      : undefined;

  if (!source) {
    throw new Error(
      "Note Markdown image is missing its source path.",
    );
  }

  if (
    !source.startsWith("/images/") ||
    source.includes("..")
  ) {
    throw new Error(
      `Invalid note image source "${source}". Use a local path inside "/public/images/".`,
    );
  }

  return source;
}

function getAltText(
  alt: string | undefined,
  source: string,
): string {
  const altText = alt?.trim();

  if (!altText) {
    throw new Error(
      `Note image "${source}" is missing descriptive alt text.`,
    );
  }

  return altText;
}

export function NoteMarkdownImage({
  src,
  alt,
  title,
}: NoteMarkdownImageProps) {
  const source = getImageSource(src);
  const altText = getAltText(
    alt,
    source,
  );
  const {
    caption,
    width,
    height,
  } = parseMarkdownImageMetadata(
    title,
    source,
  );

  const orientation =
    width === height
      ? "square"
      : width > height
        ? "landscape"
        : "portrait";

  return (
    <figure
      className="note-markdown-media"
      data-orientation={orientation}
    >
      <Image
        className="note-markdown-media__image"
        src={source}
        alt={altText}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        unoptimized
      />

      {caption ? (
        <figcaption className="note-markdown-media__caption">
          <span aria-hidden="true">
            Evidence
          </span>

          <span>{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
