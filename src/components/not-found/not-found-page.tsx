// src/components/not-found/not-found-page.tsx

import {
  Container,
} from "@/components/layout/container";

import {
  NotFoundIntro,
} from "./not-found-intro";
import {
  NotFoundRecovery,
} from "./not-found-recovery";

export function NotFoundPage() {
  return (
    <main id="main-content">
      <section
        aria-labelledby="not-found-heading"
        className="border-b border-line"
      >
        <Container>
          <div
            className="
              grid
              min-w-0
              border-x
              border-line
              lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.38fr)]
            "
          >
            <NotFoundIntro />
            <NotFoundRecovery />
          </div>
        </Container>
      </section>
    </main>
  );
}