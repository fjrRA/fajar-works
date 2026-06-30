type LearningLogHeaderIntroProps = {
  headingId: string;
  category: string;
  title: string;
  excerpt: string;
};

export function LearningLogHeaderIntro({
  headingId,
  category,
  title,
  excerpt,
}: LearningLogHeaderIntroProps) {
  return (
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
      <p className="type-meta text-accent uppercase">
        {category}
      </p>

      <h1
        id={headingId}
        className="
          mt-5
          max-w-5xl
          wrap-break-word
          text-balance
          text-[clamp(3rem,7vw,6.75rem)]
          leading-[0.91]
          font-semibold
          tracking-[-0.06em]
          max-[359px]:text-[2.5rem]
        "
      >
        {title}
      </h1>

      <p
        className="
          mt-10
          max-w-3xl
          border-t
          border-line
          pt-7
          text-lg
          leading-8
          text-muted
        "
      >
        {excerpt}
      </p>
    </div>
  );
}
