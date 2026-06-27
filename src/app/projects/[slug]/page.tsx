// src/app/projects/[slug]/page.tsx

import {
  createPageMetadata,
} from "@/lib/metadata/create-page-metadata";

import {
  JsonLd,
} from "@/components/seo/json-ld";
import {
  createProjectStructuredData,
} from "@/lib/metadata/structured-data";

import {
  MainContent,
} from "@/components/layout/main-content";

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

  return createPageMetadata({
    title,
    description: project.summary,
    pathname:
      `/projects/${project.slug}`,
    absoluteTitle: true,
    openGraphType: "article",
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const project =
    await getProjectFromParams(params);

  const projectStructuredData =
    createProjectStructuredData(
      project,
    );

  const publishedProjects =
    getPublishedProjects();

  const navigation =
    getAdjacentProjects(
      publishedProjects,
      project.slug,
    );

  return (
    <>
      <JsonLd
        data={projectStructuredData}
      />

      <MainContent>
        <ProjectDetail
          project={project}
          navigation={navigation}
        />
      </MainContent>
    </>
  );
}