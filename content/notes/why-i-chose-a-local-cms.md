---
title: "Why I Chose a Local CMS for a Static Website"
slug: "why-i-chose-a-local-cms"
excerpt: "A technical decision note about separating content management from publication with a local dashboard, database, and explicit file export."
publishedAt: "2026-06-20"
updatedAt: "2026-06-29"
status: "Published"
category: "Technical Note"
language: "en"
featured: false
repositoryUrl: "https://github.com/fjrRA/zennyx-local-cms"
tags:
  - "CMS"
  - "JSON"
  - "Markdown"
  - "Static Website"
  - "Architecture"
---

## Decision in one sentence

I chose to manage content in a local application and export only the files required by the public website, instead of making the website depend on a permanently available CMS or database.

This is not an argument that a local CMS is universally better. It is a decision shaped by the current scale of the project, the cost I want to avoid, and the architecture I want to understand by building it myself.

## Context and constraint

The public website reads structured JSON and long-form Markdown. That keeps deployment simple, but manual editing becomes harder as games, devlogs, team members, and configuration entries grow.

I needed a safer editing surface without adding an always-on backend to the published site. The main constraints were practical:

- the public website should remain static;
- content should be editable through forms rather than raw files;
- data should stay local while the tool is still evolving;
- the export boundary should remain visible and understandable.

The public Zennyx Local CMS repository is currently only a shell. The implementation evidence in this note therefore comes from the local project record and screenshots stored in Fajar Works, not from code that is already available publicly.

## Options I considered

| Option | What it solves | Why I did not choose it yet |
| --- | --- | --- |
| Edit JSON and Markdown manually | No extra application is required | Repetitive editing and validation become fragile as content grows |
| Use a hosted CMS or cloud database | Content is available from anywhere | It adds service setup, cost, and a production dependency I do not currently need |
| Build a local CMS | Gives me forms, validation, and a clear export step | Requires maintaining a second application and a deliberate publishing workflow |

The third option carries more development work, but that work is also part of the learning objective: modelling content, building CRUD flows, and making a reliable boundary between authoring and publishing.

## The chosen boundary

Zennyx Local CMS uses a React and TypeScript dashboard, an Express API, Prisma, and a local MySQL database. The public website does not query that stack. It receives exported JSON, Markdown, and image files.

The important code is not a large controller or a clever abstraction. It is the small contract at the export boundary:

```ts title="Export contract — simplified" showLineNumbers
type ExportedContent = {
  slug: string;
  title: string;
  status: "draft" | "published";
  tags: string[];
};

export function canPublish(entry: ExportedContent) {
  return entry.status === "published";
}
```

This reduced example is not copied from the unpublished repository. It records the rule the architecture depends on: the authoring system may hold drafts, but only an explicit, validated representation crosses into the public site.

> The CMS is an authoring tool, not part of the production request path. If it is closed, the published website continues to work.

## Evidence from the local build

The game-management screen is the first useful proof of the idea. It turns a content model into an interface where entries can be inspected and managed without opening a source file.

![Zennyx Local CMS game management table with status, actions, and navigation](/images/projects/zennyx-local-cms/game-management.png "Game management translates the local content model into an operational editing surface. [1763x927]")

The second proof is the export result. A successful export matters more than the dashboard looking polished, because the exported files are the actual handoff to the public website.

![Zennyx Local CMS export screen showing generated content files](/images/projects/zennyx-local-cms/export-success.png "The export step makes publication deliberate and keeps the static website independent from the CMS runtime. [1763x1863]")

## Tradeoffs and limits

The architecture is affordable, inspectable, and suitable for gradual learning. It also has real limitations:

- editing is tied to the machine where the local application and database live;
- backups and migrations are my responsibility;
- exporting and transferring files can become stale if the process is not checked;
- collaboration is awkward compared with a hosted system;
- the public repository cannot yet verify the implementation described here.

Those limits are acceptable for a personal studio tool, but they would become warning signs if remote editors, concurrent work, or frequent publication became requirements.

## Next step

The next useful improvement is not another dashboard widget. It is a verifiable publishing path: validate exported files, show exactly what changed, and make the transfer into the public repository difficult to forget.

If those requirements grow beyond a local workflow, moving to a hosted database or CMS would not invalidate this work. The content contract and the lessons from building the exporter would still be reusable.
