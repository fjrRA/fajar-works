import {
  SectionLabel,
} from "@/components/ui/section-label";

type ContactHeroRegisterProps = {
  index: string;
  label: string;
  locationCode: string;
};

export function ContactHeroRegister({
  index,
  label,
  locationCode,
}: ContactHeroRegisterProps) {
  return (
    <header
      className="
        grid
        gap-5
        border-b
        border-line
        px-6
        py-5
        sm:flex
        sm:flex-wrap
        sm:items-center
        sm:justify-between
        md:px-8
        lg:px-10
      "
    >
      <SectionLabel index={index}>
        {label}
      </SectionLabel>

      <p className="type-label text-muted">
        Correspondence Desk / {locationCode}
      </p>
    </header>
  );
}
