import {
  SectionLabel,
} from "@/components/ui/section-label";

type AboutHeroRegisterProps = {
  index: string;
  label: string;
};

export function AboutHeroRegister({
  index,
  label,
}: AboutHeroRegisterProps) {
  return (
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
      <SectionLabel index={index}>
        {label}
      </SectionLabel>

      <p className="type-label text-muted">
        Professional Dossier / 2026
      </p>
    </header>
  );
}
