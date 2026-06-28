export function ProjectBackToTop() {
  return (
    <a
      href="#project-top"
      aria-label="Back to the top of this project"
      className="fixed right-4 bottom-4 z-40 inline-flex h-11 items-center gap-3 border border-ink bg-paper px-3 font-mono text-xs font-semibold tracking-[0.1em] uppercase shadow-[3px_3px_0_var(--color-ink)] transition-[color,background-color,transform] duration-150 hover:-translate-y-0.5 hover:bg-amber-500 hover:text-inverse md:right-6 md:bottom-6"
    >
      <span aria-hidden="true" className="text-base leading-none">
        &uarr;
      </span>
      <span className="hidden sm:inline">Top</span>
    </a>
  );
}
