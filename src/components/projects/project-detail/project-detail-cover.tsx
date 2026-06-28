// src/components/projects/project-detail/project-detail-cover.tsx

import Image from "next/image";

type ProjectDetailCoverProps = {
  imageSource: string;
  projectTitle: string;
};

export function ProjectDetailCover({
  imageSource,
  projectTitle,
}: ProjectDetailCoverProps) {
  return (
    <figure className="border-t border-line bg-panel-strong p-2 md:p-3">
      <div className="relative aspect-[4/3] overflow-hidden bg-panel md:aspect-[16/7]">
        <Image
          src={imageSource}
          alt={`${projectTitle} application interface`}
          fill
          sizes="(min-width: 1440px) 86rem, calc(100vw - 2rem)"
          className="object-cover object-top"
        />
      </div>

      <figcaption className="flex items-center justify-between gap-6 border-t border-line bg-paper px-4 py-3 font-mono text-[0.6875rem] tracking-[0.08em] text-muted uppercase">
        <span>Interface evidence</span>
        <span className="text-right">{projectTitle} / Product view</span>
      </figcaption>
    </figure>
  );
}
