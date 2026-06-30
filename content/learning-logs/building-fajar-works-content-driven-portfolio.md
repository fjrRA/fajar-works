---
title: "Building Fajar Works: Content-Driven Portfolio Architecture"
slug: "building-fajar-works-content-driven-portfolio"
excerpt: "A field record about building Fajar Works as a local-content archive, revising its detail systems, and resisting the pressure to make progress look more finished than it is."
loggedAt: "2026-06-25"
updatedAt: "2026-06-30"
published: true
status: "In Progress"
category: "Build Log"
source: "Fajar Works"
repositoryUrl: "https://github.com/fjrRA/fajar-works"
module: "Content Architecture and Detail Systems"
progress: "Stage 4 - Learning Detail System"
topics:
  - "Next.js"
  - "TypeScript"
  - "JSON"
  - "Markdown"
  - "Content Architecture"
  - "Editorial UI"
---

## Build objective

Fajar Works is meant to be more than a landing page with my name, a technology list, and a few project links. It should preserve selected work, technical notes, learning records, and the decisions that connect them.

The objective of this stage was to make that content architecture visible in the interface without turning every route into the same portfolio template.

## Context and constraints

The project uses local JSON for structured website data and Markdown for long-form projects, notes, and Learning Logs. The public site should remain prerenderable without a continuously running database or external CMS.

The visual constraint is equally important: the design should feel minimalist, industrial, and editorial, but the grid cannot become a substitute for content. Repeating the same hero, sidebar, and card pattern across every detail page would make the system consistent while making the content types indistinguishable.

## What I changed

The homepage moved toward project screenshots as primary evidence. Project detail became a case-study record. Notes became a quieter reading sheet with publication metadata and a margin index.

Learning Log now has its own role: a learning ledger with status, source, module, progress, a sticky checkpoint index, and a trail to adjacent or related records. This makes it easier to read as unfinished technical progress rather than as another polished article.

## Architecture evidence

The central contract is still a plain content type. It gives the loader, index, detail page, metadata, and related-record system a shared structure:

```ts title="src/types/learning-log.ts" showLineNumbers
export type LearningLog = {
  slug: string;
  title: string;
  loggedAt: string;
  status: "Completed" | "In Progress" | "Paused";
  category: string;
  source: string;
  module: string;
  progress: string;
  topics: string[];
  repositoryUrl?: string;
  content: string;
};
```

The repository URL is optional because a course lesson does not need one. A build record can expose its source when the project is public.

## Decision and tradeoffs

Local files keep publishing understandable and versioned, but they make editing and synchronization manual. Strict frontmatter creates reliable pages, but every new field also expands validation and documentation work.

The redesign also removes the separate newer/older navigation block. Chronology is still calculated, but its labels now live inside one Learning Trail alongside relevance-based records. This removes duplicate destinations while preserving the reason each record was recommended.

## What I learned

Content types need different reading rhythms. A project asks for proof and evaluation. A note asks for an argument. A Learning Log asks for context, evidence of practice, uncertainty, correction, and a next review.

I also learned that reusable components are not always visually reusable. Sharing data and validation can be valuable even when the final layouts need different structures.

## Personal reflection

There is a temptation to make a portfolio show only certainty. That would hide the most honest part of this project: I am still learning JavaScript, React, Next.js, content architecture, and how to evaluate my own work.

I would rather record a specific confusion or unfinished decision than inflate a small implementation into a dramatic case study. The archive becomes more useful when progress is allowed to look like progress.

## Current state and next pass

The homepage, project detail, note detail, and Learning Log detail now have clearer responsibilities. The Learning Log hierarchy also distinguishes course lessons, challenges, course projects, and build observations without forcing identical headings.

The next pass is to review the smaller viewports, add real learning entries as the course continues, and update this record when the architecture changes instead of treating it as permanently finished.
