import {
  Container,
} from "@/components/layout/container";
import {
  SectionLabel,
} from "@/components/ui/section-label";
import type {
  AboutHeaderContent,
} from "@/types/about";
import type {
  SiteContent,
} from "@/types/site";

type AboutHeroProps = {
  content: AboutHeaderContent;
  site: Pick<
    SiteContent,
    | "name"
    | "role"
    | "location"
    | "availability"
    | "availabilityCode"
  >;
};

const ABOUT_HERO_HEADING_ID =
  "about-hero-heading";

export function AboutHero({
  content,
  site,
}: AboutHeroProps) {
  const nameParts =
    site.name.split(/\s+/);

  const identityItems = [
    {
      label: "Role",
      value: site.role,
    },
    {
      label: "Based in",
      value: site.location,
    },
  ];

  return (
    <section
      id="profile-top"
      aria-labelledby={
        ABOUT_HERO_HEADING_ID
      }
      className="border-b border-line"
    >
      <Container>
        <div className="min-w-0 border-x border-line">
          <header
            className="
              flex
              flex-wrap
              items-center
              justify-between
              gap-5
              border-b
              border-line
              px-6
              py-5
              md:px-8
              lg:px-10
            "
          >
            <SectionLabel index={content.index}>
              {content.label}
            </SectionLabel>

            <p className="type-label text-muted">
              Professional Dossier / 2026
            </p>
          </header>

          <div
            className="
              grid
              min-w-0
              lg:grid-cols-[minmax(0,1fr)_24rem]
            "
          >
            <div
              className="
                min-w-0
                px-6
                py-14
                md:px-8
                md:py-20
                lg:px-10
                lg:py-24
              "
            >
              <p className="type-meta text-accent uppercase">
                {content.title}
              </p>

              <h1
                id={ABOUT_HERO_HEADING_ID}
                className="
                  mt-8
                  max-w-6xl
                  wrap-break-word
                  text-[clamp(4rem,11vw,9.5rem)]
                  leading-[0.78]
                  font-bold
                  tracking-[-0.075em]
                  uppercase
                  max-[359px]:text-[3.35rem]
                "
              >
                {nameParts.map(
                  (namePart) => (
                    <span
                      key={namePart}
                      className="block"
                    >
                      {namePart}
                    </span>
                  ),
                )}
              </h1>
            </div>

            <aside
              aria-label="Professional identity"
              className="
                flex
                min-w-0
                flex-col
                bg-ink
                px-6
                py-10
                text-inverse
                md:px-8
                md:py-14
                lg:border-l
                lg:border-line
                lg:px-10
                lg:py-16
              "
            >
              <p
                className="
                  text-xl
                  leading-8
                  tracking-[-0.02em]
                  text-balance
                "
              >
                {content.description}
              </p>

              <dl className="mt-12 border-t border-muted lg:mt-auto">
                {identityItems.map(
                  ({ label, value }) => (
                    <div
                      key={label}
                      className="
                        grid
                        gap-2
                        border-b
                        border-muted
                        py-5
                        sm:grid-cols-[6rem_minmax(0,1fr)]
                      "
                    >
                      <dt className="type-meta text-line uppercase">
                        {label}
                      </dt>

                      <dd className="font-medium">
                        {value}
                      </dd>
                    </div>
                  ),
                )}
              </dl>

              <div className="mt-10">
                <p
                  className="
                    flex
                    items-center
                    gap-3
                    font-mono
                    text-xs
                    font-semibold
                    tracking-[0.12em]
                    uppercase
                  "
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 bg-accent"
                  />

                  {site.availabilityCode}
                </p>

                <p className="mt-3 text-sm leading-6 text-line">
                  {site.availability}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
