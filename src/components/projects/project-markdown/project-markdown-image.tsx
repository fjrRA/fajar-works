// src/components/projects/project-markdown/
// project-markdown-image.tsx

import Image from "next/image";

import {
  parseMarkdownImageMetadata,
} from "@/lib/content/markdown-image-metadata";

type ProjectMarkdownImageProps = {
  src?: string;
  alt?: string;
  title?: string;
};

type ImageOrientation =
  | "landscape"
  | "portrait"
  | "square";

function getProjectImageSource(
  src: string | undefined,
): string {
  const source = src?.trim();

  if (!source) {
    throw new Error(
      "Project Markdown image is missing its source path.",
    );
  }

  if (
    !source.startsWith(
      "/images/projects/",
    )
  ) {
    throw new Error(
      [
        `Invalid project image source "${source}".`,
        "Project images must be stored inside",
        '"/public/images/projects/".',
      ].join(" "),
    );
  }

  if (source.includes("..")) {
    throw new Error(
      `Project image source "${source}" contains an invalid path segment.`,
    );
  }

  return source;
}

function getImageAltText(
  alt: string | undefined,
  source: string,
): string {
  const altText = alt?.trim();

  if (!altText) {
    throw new Error(
      [
        `Project image "${source}" is missing alt text.`,
        "Add descriptive text inside the Markdown image brackets.",
      ].join(" "),
    );
  }

  return altText;
}

function getImageOrientation(
  width: number,
  height: number,
): ImageOrientation {
  if (width > height) {
    return "landscape";
  }

  if (height > width) {
    return "portrait";
  }

  return "square";
}

export function ProjectMarkdownImage({
  src,
  alt,
  title,
}: ProjectMarkdownImageProps) {
  const source =
    getProjectImageSource(src);

  const altText =
    getImageAltText(alt, source);

  const {
    caption,
    width,
    height,
  } = parseMarkdownImageMetadata(
    title,
    source,
  );

  const orientation =
    getImageOrientation(
      width,
      height,
    );

  return (
    <figure
      className="project-markdown-media"
      data-orientation={orientation}
    >
      <div className="project-markdown-media__frame">
        <Image
          className="project-markdown-media__image"
          src={source}
          alt={altText}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          unoptimized
        />
      </div>

      {caption.length > 0 ? (
        <figcaption className="project-markdown-media__caption">
          <span
            className="project-markdown-media__caption-label"
            aria-hidden="true"
          >
            Fig.
          </span>

          <span className="project-markdown-media__caption-text">
            {caption}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}