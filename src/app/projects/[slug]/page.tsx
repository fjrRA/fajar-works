// src/app/projects/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ProjectDetail,
} from "@/components/projects/project-detail";
import {
  getProjectBySlug,
  getPublishedProjects,
  getPublishedProjectSlugs,
} from "@/lib/content/get-projects";
import {
  getAdjacentProjects,
} from "@/lib/content/project-navigation";
import type { Project } from "@/types/project";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedProjectSlugs().map(
    (slug) => ({
      slug,
    }),
  );
}

async function getProjectFromParams(
  params: ProjectDetailPageProps["params"],
): Promise<Project> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return project;
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project =
    await getProjectFromParams(params);

  const title =
    `${project.title} — Case Study | Fajar Works`;

  return {
    title: {
      absolute: title,
    },

    description: project.summary,

    openGraph: {
      title,
      description: project.summary,
      type: "article",
    },

    twitter: {
      card: "summary",
      title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const project =
    await getProjectFromParams(params);

  const publishedProjects =
    getPublishedProjects();

  const navigation =
    getAdjacentProjects(
      publishedProjects,
      project.slug,
    );

  return (
    <main id="main-content">
      <ProjectDetail
        project={project}
        navigation={navigation}
      />
    </main>
  );
}