// src/components/layout/site-footer/footer-legal-bar.tsx
type FooterLegalBarProps = {
  currentYear: number;
  name: string;
  siteCode: string;
};

export function FooterLegalBar({
  currentYear,
  name,
  siteCode,
}: FooterLegalBarProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-3
        border-t
        border-muted
        px-6
        py-4
        sm:flex-row
        sm:items-center
        sm:justify-between
        md:px-8
      "
    >
      <p className="type-meta text-line">
        © {currentYear} {name}
      </p>

      <p className="type-meta text-line uppercase">
        {siteCode} / Bekasi / Indonesia
      </p>
    </div>
  );
}