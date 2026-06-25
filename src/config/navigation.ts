// src/config/navigation.ts
export type NavigationItem = {
  index: string;
  label: string;
  href: string;
  description: string;
};

export const mainNavigation = [
  {
    index: "01",
    label: "Work",
    href: "/projects",
    description:
      "Selected web applications, development projects, and technical case studies.",
  },
  {
    index: "02",
    label: "Notes",
    href: "/notes",
    description:
      "Technical notes, personal observations, opinions, and development stories.",
  },
  {
    index: "03",
    label: "Learning Log",
    href: "/learning-log",
    description:
      "Structured records of ongoing study, practice, experiments, and progress.",
  },
  {
    index: "04",
    label: "Profile",
    href: "/about",
    description:
      "Background, capabilities, working approach, and current professional direction.",
  },
  {
    index: "05",
    label: "Contact",
    href: "/contact",
    description:
      "Ways to reach me regarding opportunities, projects, or professional discussions.",
  },
] as const satisfies readonly NavigationItem[];