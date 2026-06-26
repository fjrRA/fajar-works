// src/lib/content/project-navigation.ts

import type { Project } from "@/types/project";

/**
 * Data minimum yang diperlukan oleh komponen
 * previous dan next project.
 *
 * Full content Markdown dan metadata teknis
 * proyek tidak perlu diteruskan ke navigasi.
 */
export type ProjectNavigationItem = Readonly<
  Pick<
    Project,
    "slug" | "title" | "summary"
  >
>;

export type ProjectNavigation = Readonly<{
  previous: ProjectNavigationItem | null;
  next: ProjectNavigationItem | null;
}>;

function toProjectNavigationItem(
  project: Project | undefined,
): ProjectNavigationItem | null {
  if (!project) {
    return null;
  }

  return {
    slug: project.slug,
    title: project.title,
    summary: project.summary,
  };
}

/**
 * Mengambil proyek sebelum dan sesudah proyek aktif
 * berdasarkan urutan array yang diterima.
 *
 * Array harus sudah:
 *
 * 1. difilter menjadi published projects;
 * 2. diurutkan oleh project repository.
 *
 * Fungsi ini sengaja tidak melakukan sorting agar
 * repository tetap menjadi satu-satunya sumber urutan.
 */
export function getAdjacentProjects(
  orderedProjects: readonly Project[],
  currentProjectSlug: string,
): ProjectNavigation {
  const currentProjectIndex =
    orderedProjects.findIndex(
      (project) =>
        project.slug === currentProjectSlug,
    );

  if (currentProjectIndex === -1) {
    throw new Error(
      [
        "Cannot create project navigation.",
        `Project with slug "${currentProjectSlug}"`,
        "was not found in the ordered project list.",
      ].join(" "),
    );
  }

  const previousProject =
    orderedProjects[
    currentProjectIndex - 1
    ];

  const nextProject =
    orderedProjects[
    currentProjectIndex + 1
    ];

  return {
    previous:
      toProjectNavigationItem(
        previousProject,
      ),

    next:
      toProjectNavigationItem(
        nextProject,
      ),
  };
}