// src/components/home/home-directory.tsx
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { mainNavigation } from "@/config/navigation";

export function HomeDirectory() {
  return (
    <section className="border-b border-line">
      <Container>
        <div
          className="
            grid
            border-x
            border-line
            lg:grid-cols-[minmax(16rem,0.45fr)_minmax(0,1fr)]
          "
        >
          <header
            className="
              section-block
              border-b
              border-line
              px-6
              md:px-8
              lg:border-r
              lg:border-b-0
              lg:px-10
            "
          >
            <SectionLabel index="01">
              Directory
            </SectionLabel>

            <SectionHeading className="mt-3">
              Explore Fajar Works
            </SectionHeading>

            <p className="type-body mt-6 max-w-md text-muted">
              A directory of selected projects, writing,
              learning records, professional information,
              and ways to get in touch.
            </p>
          </header>

          <nav aria-label="Homepage directory">
            <ul>
              {mainNavigation.map((item) => (
                <li
                  key={item.href}
                  className="
                    border-b
                    border-line
                    last:border-b-0
                  "
                >
                  <Link
                    href={item.href}
                    className="
                      group
                      grid
                      grid-cols-[2.5rem_minmax(0,1fr)_auto]
                      items-start
                      gap-4
                      px-6
                      py-6
                      transition-colors
                      duration-150
                      hover:bg-panel
                      md:px-8
                      lg:px-10
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-xs
                        font-medium
                        tracking-[0.14em]
                        text-muted
                        transition-colors
                        duration-150
                        group-hover:text-accent
                      "
                    >
                      {item.index}
                    </span>

                    <span>
                      <span
                        className="
                          block
                          text-xl
                          leading-none
                          font-semibold
                          tracking-[-0.025em]
                          uppercase
                          md:text-2xl
                        "
                      >
                        {item.label}
                      </span>

                      <span
                        className="
                          mt-3
                          block
                          max-w-2xl
                          text-sm
                          leading-6
                          text-muted
                        "
                      >
                        {item.description}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        mt-2
                        h-px
                        w-8
                        bg-line
                        transition-[background-color,transform]
                        duration-200
                        group-hover:translate-x-1
                        group-hover:bg-accent
                        motion-reduce:transition-none
                      "
                    />
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