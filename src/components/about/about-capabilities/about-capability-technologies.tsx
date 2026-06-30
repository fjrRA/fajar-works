type AboutCapabilityTechnologiesProps = {
  capabilityTitle: string;
  technologies: readonly string[];
};

export function AboutCapabilityTechnologies({
  capabilityTitle,
  technologies,
}: AboutCapabilityTechnologiesProps) {
  return (
    <ul
      aria-label={`${capabilityTitle} technologies`}
      className="
        flex
        flex-wrap
        gap-x-3
        gap-y-2
        font-mono
        text-[0.6875rem]
        leading-5
        uppercase
      "
    >
      {technologies.map((technology, index) => (
        <li
          key={technology}
          className="flex items-center gap-3"
        >
          <span>{technology}</span>

          {index < technologies.length - 1 ? (
            <span
              aria-hidden="true"
              className="text-accent"
            >
              /
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
