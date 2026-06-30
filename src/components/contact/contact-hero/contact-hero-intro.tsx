type ContactHeroIntroProps = {
  headingId: string;
  title: string;
  description: string;
};

export function ContactHeroIntro({
  headingId,
  title,
  description,
}: ContactHeroIntroProps) {
  return (
    <div
      className="
        contact-hero__main
        flex
        min-w-0
        flex-col
        justify-between
        gap-12
        px-6
        py-12
        md:gap-16
        md:px-8
        md:py-20
        lg:min-h-[40rem]
        lg:px-10
        lg:py-20
      "
    >
      <p className="type-meta text-accent uppercase">
        Direct correspondence / Open line
      </p>

      <div>
        <h1
          id={headingId}
          className="
            contact-hero__title
            max-w-5xl
            text-balance
            font-bold
            uppercase
          "
        >
          {title}
        </h1>

        <p
          className="
            type-body
            mt-10
            max-w-2xl
            text-muted
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
