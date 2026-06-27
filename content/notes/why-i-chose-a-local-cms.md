---
title: "Why I Chose a Local CMS for a Static Website"
slug: "why-i-chose-a-local-cms"
excerpt: "The reasons for choosing a local dashboard, a MySQL database, and JSON and Markdown exports instead of immediately using a cloud database."
publishedAt: "2026-06-20"
updatedAt: "2026-06-20"
status: "Published"
category: "Technical Note"
language: "en"
featured: true
tags:
  - "CMS"
  - "JSON"
  - "Markdown"
  - "Static Website"
  - "Architecture"
---

## The Problem I Wanted to Solve

Static websites are easy to deploy and do not require an active backend server. However, as the amount of content grows, manually editing JSON and Markdown files becomes less convenient.

I still needed a more structured way to manage games, devlogs, team information, and website configuration.

## Why Not Use a Cloud Database Right Away?

At the current stage, I do not want to add the cost of a cloud database, backend hosting, or a VPS.

I am also still learning how to build a better content management system. Because of this, a local solution is more suitable for my current needs and capabilities.

## Chosen Architecture

The Local CMS consists of:

- React and TypeScript for the admin dashboard
- Express.js for the REST API
- Prisma and local MySQL for storage
- An exporter for generating JSON and Markdown
- A static public website that reads the exported files

The CMS does not need to be active when the public website is opened. It is only used when I want to modify or add content.

### Example Exported Data Structure

After content is managed through the Local CMS, the exporter can generate a data structure that is read by the public website.

```ts title="TypeScript" showLineNumbers
type ExportedGame = {
  slug: string;
  title: string;
  status: "Draft" | "Published";
  tags: string[];
};

const game: ExportedGame = {
  slug: "andara-beat-em-up",
  title: "Untitled Andara Beat 'em Up",
  status: "Published",
  tags: ["Beat 'em Up", "2D"],
};
```

The `export:all` command then generates `games.json` and Markdown files that can be transferred to the public website repository.

> The Local CMS is not part of the production server. It is only used when content needs to be updated or exported.

| Section | Technology | Output |
| --- | --- | --- |
| Admin dashboard | React and TypeScript | Content management forms |
| Local API | Express.js | CRUD endpoints |
| Storage | Prisma and MySQL | Local data |
| Exporter | Node.js | JSON and Markdown |

## Advantages and Limitations

This approach is affordable, can be learned gradually, and provides full control over the data structure.

Its main limitation is that the publication process is not yet fully automated. Exported files still need to be transferred to the public website repository before the website is deployed again.

For my current needs, this limitation is still acceptable.