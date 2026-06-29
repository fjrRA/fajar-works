---
title: "Building Fajar Works: A Portfolio as a Work Archive"
slug: "building-fajar-works"
excerpt: "A build log about turning a conventional portfolio into an evidence-led archive for projects, technical notes, learning records, and ongoing development."
publishedAt: "2026-06-25"
updatedAt: "2026-06-29"
status: "Published"
category: "Build Log"
language: "en"
featured: true
repositoryUrl: "https://github.com/fjrRA/fajar-works"
tags:
  - "Portfolio"
  - "Next.js"
  - "Web Development"
  - "Personal Website"
---

## Why this build exists

I first imagined a portfolio as a small collection of finished projects. That presented outcomes, but it removed the decisions, revisions, and periods of uncertainty that made the work meaningful.

Fajar Works became a broader archive: selected projects show what was built, technical notes explain decisions, the Learning Log records practice, and profile information gives that work a professional context. The website is still a portfolio, but it behaves more like a working file than a polished final brochure.

The Fajar Works repository is public so the architecture and the progress behind the interface can be inspected directly.

## Direction and constraints

The visual direction is minimalist, industrial, and editorial. Lines, large type, monospace metadata, an off-white paper tone, and one orange accent provide structure without turning every section into a card.

The stronger constraint is content: a page should not make a weak project look substantial through decoration alone. Project screenshots therefore carry the visual proof, while notes use a quieter reading sheet where hierarchy and evidence matter more than presentation effects.

That distinction keeps the site related without making every route a copy of the homepage or project detail page.

## Content is part of the architecture

Projects, notes, and learning logs live in local files. Structured fields carry metadata; Markdown carries long-form writing. The site can pre-render those files without requiring a production database or an always-on CMS.

The `Note` type is a small but important contract because it defines what the index, detail page, metadata, related-note system, and structured data can rely on:

```ts title="src/types/note.ts" showLineNumbers
export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  status: "Published" | "Draft";
  category: string;
  language: "id" | "en";
  featured: boolean;
  tags: string[];
  coverImage?: string;
  content: string;
};
```

This is more useful than scattering page copy across components. A new note can enter the system through content, while the route remains responsible for validation, rendering, navigation, and metadata.

## What changed in the redesign

The homepage moved toward evidence-led project screenshots and away from repeated generic panels. Project detail pages became case-study records with an overview, problem, features, technical evidence, and evaluation.

The note detail page now takes a different role. It uses natural-case editorial titles, a horizontal publication record, a calm reading column, and a margin index. Technical notes, learning reflections, and build logs share the same reading foundation, but their internal hierarchy follows the kind of thinking they need to preserve.

These changes are not a search for novelty in every section. They are an attempt to make the content type visible before the reader starts reading.

## Decisions and tradeoffs

The local-content approach keeps ownership and deployment simple, but publishing still involves files and version control. The strict visual grid creates consistency, but it can also make unrelated sections feel templated if every layout uses the same columns. Large typography gives the site identity, but it needs calmer moments around long-form text.

The redesign treats those tensions as constraints rather than bugs to hide:

- screenshots dominate where visual proof exists;
- long-form text uses a narrower measure and more breathing room;
- metadata stays compact and functional;
- repeated card grids are replaced by indexes, rows, and editorial divisions;
- a component is shared only when the content really shares a purpose.

## Current state and next pass

The global navigation, footer, homepage, project detail, note index, and note detail systems now share a clearer language. Markdown supports tables, code highlighting, generated contents, related entries, and evidence images.

The next pass should focus less on adding sections and more on maintaining the archive: complete the real project evidence, keep learning records honest, review accessibility at small viewports, and update old notes when the implementation changes.

Fajar Works is not finished, and that is now part of its function. It records the work while the work is still moving.
