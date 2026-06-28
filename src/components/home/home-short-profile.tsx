import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils/cn";
import type { HomeShortProfileContent } from "@/types/home";

type HomeShortProfileProps = {
  content: HomeShortProfileContent;
};

export function HomeShortProfile({
  content,
}: HomeShortProfileProps) {
  return (
    <section
      aria-labelledby="home-short-profile-heading"
      className="border-b border-line"
    >
      <Container>
        <div className="border-x border-line">
          <header className="section-block px-6 md:px-8 lg:px-10">
            <SectionLabel index="05">
              Profile / Working Position
            </SectionLabel>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.5fr)] lg:items-end lg:gap-16">
              <h2
                id="home-short-profile-heading"
                className="max-w-6xl text-balance text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] font-semibold tracking-[-0.06em] uppercase"
              >
                {content.heading}
              </h2>

              <div className="max-w-xl">
                <p className="type-body text-muted">
                  {content.description}
                </p>

                <Link
                  href={content.profileHref}
                  className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-150 hover:border-accent hover:text-accent"
                >
                  {content.profileLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </header>

          <ol className="grid border-t border-line md:grid-cols-2 xl:grid-cols-4">
            {content.points.map((point, index) => {
              const isLastItem = index === content.points.length - 1;
              const isLastDesktopRow = index >= content.points.length - 2;
              const isLeftDesktopColumn = index % 2 === 0;

              return (
                <li
                  key={`${point.index}-${point.label}`}
                  className={cn(
                    "flex min-h-[16rem] min-w-0 flex-col justify-between border-b border-line px-6 py-8 md:px-8 lg:px-9",
                    isLastItem && "border-b-0",
                    isLeftDesktopColumn && "md:border-r",
                    isLastDesktopRow && "md:border-b-0",
                    !isLastItem && "xl:border-r",
                    "xl:border-b-0",
                  )}
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="type-label text-muted">
                      {point.index}
                    </span>

                    <span className="type-meta text-accent uppercase">
                      {point.label}
                    </span>
                  </div>

                  <p className="mt-12 max-w-sm text-xl leading-7 font-medium tracking-[-0.025em] md:text-2xl md:leading-8">
                    {point.value}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
