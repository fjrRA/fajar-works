---
title: "Building Fajar Works: Content-Driven Portfolio Architecture"
slug: "building-fajar-works-content-driven-portfolio"
excerpt: "A development record covering the design system, local content architecture, reusable components, and homepage construction of Fajar Works."
loggedAt: "2026-06-25"
updatedAt: "2026-06-25"
published: true
status: "In Progress"
category: "Build Log"
source: "Fajar Works"
module: "Homepage Content System"
progress: "Stage 3 - Homepage Content"
topics:
  - "Next.js"
  - "TypeScript"
  - "JSON"
  - "Markdown"
  - "Content Architecture"
---

## Development Goals

Fajar Works was built as a portfolio website, a project archive, a place for writing technical notes, and documentation of my learning progress.

I did not want this website to be only a landing page containing my name, a list of technologies, and a few project links.

## Foundations Already Built

Development began with a design foundation covering colors, typography, spacing, containers, borders, and basic interface components.

After completing the visual foundation, I continued with the global layout, including the desktop navbar, mobile navigation, footer, page header, and main route structure.

## Content Architecture

The website content is stored using JSON and Markdown.

JSON is used for structured data such as homepage configuration, profile information, capabilities, and navigation. Markdown is used for projects, notes, and Learning Logs.

This approach allows the website to remain prerenderable without requiring a cloud database or a continuously running backend.

## Example Data Structure

```ts title="learning-log.ts"
export type LearningLog = {
  title: string;
  slug: string;
  published: boolean;
};
```

## Current State

The homepage already includes the Hero, Selected Work, Capabilities, Current Focus, and Latest Notes sections.

The next stage is to complete Learning Progress, the short profile section, and the contact call-to-action.
