// src/components/layout/site-footer/footer-intro.tsx
import Link from "next/link";

type FooterIntroProps = {
  siteCode: string;
  description: string;
};

export function FooterIntro({
  siteCode,
  description,
}: FooterIntroProps) {
  return (
    <section
      aria-labelledby="footer-heading"
      className="
        border-b
        border-muted
        p-6
        md:p-8
        lg:border-r
        lg:border-b-0
        lg:p-10
      "
    >
      <p className="type-label text-accent">
        {siteCode} / End of File
      </p>

      <h2
        id="footer-heading"
        className="
          mt-8
          max-w-4xl
          text-[clamp(2.75rem,7vw,7rem)]
          leading-[0.88]
          font-bold
          tracking-[-0.055em]
          uppercase
        "
      >
        Works.
        <br />
        Notes.
        <br />
        Progress.
      </h2>

      <p className="type-body mt-8 max-w-xl text-line">
        {description}
      </p>

      <Link
        href="/contact"
        className="
          group
          mt-10
          inline-flex
          items-center
          gap-4
          border-b
          border-inverse
          pb-2
          font-mono
          text-xs
          font-semibold
          tracking-[0.12em]
          uppercase
          transition-colors
          duration-150
          hover:border-accent
          hover:text-accent
        "
      >
        Contact / 05

        <span
          aria-hidden="true"
          className="
            h-px
            w-10
            bg-current
            transition-transform
            duration-200
            ease-out
            group-hover:translate-x-2
            motion-reduce:transition-none
          "
        />
      </Link>
    </section>
  );
}