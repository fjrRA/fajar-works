import Link from "next/link";

import { Container } from "@/components/layout/container";
import { HomeNoteEntry } from "@/components/home/home-note-entry";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils/cn";
import type { HomeLatestNotesContent } from "@/types/home";
import type { Note } from "@/types/note";

type HomeLatestNotesProps = {
  content: HomeLatestNotesContent;
  notes: Note[];
};

export function HomeLatestNotes({
  content,
  notes,
}: HomeLatestNotesProps) {
  return (
    <section
      aria-labelledby="home-latest-notes-heading"
      className="border-b border-line"
    >
      <Container>
        <div className="border-x border-line">
          <header className="section-block grid px-6 md:px-8 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1fr)] lg:gap-16 lg:px-10">
            <div>
              <SectionLabel index="03">
                Notes / {String(notes.length).padStart(2, "0")}
              </SectionLabel>

              <SectionHeading
                id="home-latest-notes-heading"
                className="mt-3"
              >
                {content.heading}
              </SectionHeading>
            </div>

            <div className="mt-8 flex max-w-2xl flex-col items-start lg:mt-0">
              <p className="type-body text-muted">
                {content.description}
              </p>

              <Link
                href={content.allNotesHref}
                className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                {content.allNotesLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </header>

          {notes.length > 0 ? (
            <ol className="grid border-t border-line lg:grid-cols-[1.12fr_0.88fr] lg:grid-rows-2">
              {notes.map((note, index) => (
                <li
                  key={note.slug}
                  className={cn(
                    "min-w-0 border-b border-line",
                    index === 0 &&
                      "bg-panel lg:row-span-2 lg:border-r lg:border-b-0",
                    index === notes.length - 1 &&
                      "border-b-0",
                  )}
                >
                  <HomeNoteEntry
                    note={note}
                    displayIndex={String(index + 1).padStart(2, "0")}
                    isLead={index === 0}
                  />
                </li>
              ))}
            </ol>
          ) : (
            <div className="border-t border-line px-6 py-12 md:px-8 lg:px-10">
              <p className="type-label text-muted">
                No Published Notes
              </p>

              <p className="type-body mt-4 max-w-lg text-muted">
                Published writing will appear here after it is added to the
                content directory.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
