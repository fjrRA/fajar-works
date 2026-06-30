import {
  Container,
} from "@/components/layout/container";
import type {
  AboutProfileContent,
} from "@/types/about";

type AboutProfileProps = {
  content: AboutProfileContent;
};

const ABOUT_PROFILE_HEADING_ID =
  "about-profile-heading";

export function AboutProfile({
  content,
}: AboutProfileProps) {
  return (
    <section
      aria-labelledby={
        ABOUT_PROFILE_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div
          className="
            grid
            min-w-0
            border-x
            border-line
            lg:grid-cols-[14rem_minmax(0,1fr)]
          "
        >
          <aside
            className="
              flex
              min-w-0
              flex-col
              justify-between
              gap-12
              border-b
              border-line
              bg-panel
              px-6
              py-8
              md:px-8
              lg:border-r
              lg:border-b-0
              lg:px-7
              lg:py-12
            "
          >
            <p className="type-label text-accent">
              01 / {content.label}
            </p>

            <p
              className="
                font-mono
                text-xs
                leading-6
                tracking-[0.1em]
                text-muted
                uppercase
              "
            >
              Working profile<br />
              Current practice<br />
              Ongoing development
            </p>
          </aside>

          <div
            className="
              min-w-0
              px-6
              py-12
              md:px-8
              md:py-16
              lg:px-12
              lg:py-20
            "
          >
            <h2
              id={ABOUT_PROFILE_HEADING_ID}
              className="
                max-w-6xl
                wrap-break-word
                text-balance
                text-[clamp(2.75rem,6vw,5.75rem)]
                leading-[0.96]
                font-semibold
                tracking-[-0.055em]
              "
            >
              {content.title}
            </h2>

            <div
              className="
                mt-14
                grid
                border-t
                border-line
                md:grid-cols-3
              "
            >
              {content.paragraphs.map(
                (paragraph, index) => (
                  <div
                    key={paragraph}
                    className="
                      min-w-0
                      border-b
                      border-line
                      py-7
                      md:border-r
                      md:px-6
                      md:first:pl-0
                      md:last:border-r-0
                      md:last:pr-0
                    "
                  >
                    <p className="type-meta text-accent uppercase">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </p>

                    <p className="type-body mt-5 text-muted">
                      {paragraph}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
