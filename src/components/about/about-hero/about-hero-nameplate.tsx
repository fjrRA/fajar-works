type AboutHeroNameplateProps = {
  eyebrow: string;
  name: string;
  headingId: string;
};

export function AboutHeroNameplate({
  eyebrow,
  name,
  headingId,
}: AboutHeroNameplateProps) {
  const nameParts = name.split(/\s+/);

  return (
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
        {eyebrow}
      </p>

      <h1
        id={headingId}
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
        {nameParts.map((namePart) => (
          <span
            key={namePart}
            className="block"
          >
            {namePart}
          </span>
        ))}
      </h1>
    </div>
  );
}
