import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { mainNavigation } from "@/config/navigation";

type HomeDirectoryProps = {
  heading: string;
  description: string;
};

export function HomeDirectory({
  heading,
  description,
}: HomeDirectoryProps) {
  return (
    <section
      aria-labelledby="home-directory-heading"
      className="border-b border-line"
    >
      <Container>
        <div className="border-x border-line">
          <header className="section-block grid gap-8 px-6 md:px-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1fr)] lg:items-end lg:gap-16 lg:px-10">
            <div>
              <SectionLabel index="06">
                Directory / {String(mainNavigation.length).padStart(2, "0")}
              </SectionLabel>

              <h2
                id="home-directory-heading"
                className="mt-3 text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.055em] uppercase"
              >
                {heading}
              </h2>
            </div>

            <p className="type-body max-w-2xl text-muted">
              {description}
            </p>
          </header>

          <nav
            aria-label="Homepage directory"
            className="border-t border-line"
          >
            <ul>
              {mainNavigation.map((item) => (
                <li
                  key={item.href}
                  className="border-b border-line last:border-b-0"
                >
                  <Link
                    href={item.href}
                    className="group grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-x-4 gap-y-4 px-6 py-7 transition-colors duration-150 md:grid-cols-[4rem_minmax(12rem,0.6fr)_minmax(0,1fr)_auto] md:px-8 lg:px-10 lg:py-8"
                  >
                    <span className="font-mono text-xs font-medium tracking-[0.14em] text-muted transition-colors duration-150 group-hover:text-accent">
                      {item.index}
                    </span>

                    <span className="text-3xl leading-none font-semibold tracking-[-0.04em] uppercase transition-colors duration-150 group-hover:text-accent md:text-4xl lg:text-5xl">
                      {item.label}
                    </span>

                    <span className="col-start-2 max-w-2xl text-sm leading-6 text-muted md:col-start-3">
                      {item.description}
                    </span>

                    <span
                      aria-hidden="true"
                      className="col-start-3 row-start-1 font-mono text-lg transition-transform duration-200 group-hover:translate-x-1 md:col-start-4 motion-reduce:transition-none"
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
