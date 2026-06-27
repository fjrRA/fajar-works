````markdown
# Fajar Works

Fajar Works is a content-driven personal portfolio and working archive created by **Fajar Rahmana Akbar**.

The website presents selected development projects, technical notes, structured learning records, professional information, and ongoing technical progress through a locally managed content architecture.

## Live Website

The production website will be added after the first deployment has been completed and verified.

## Repository

[github.com/fjrRA/fajar-works](https://github.com/fjrRA/fajar-works)

## Overview

Fajar Works was designed as more than a conventional portfolio landing page.

The website serves as:

- A portfolio of selected development projects
- An archive of technical notes and observations
- A structured Learning Log
- A professional profile
- Documentation of ongoing technical development

The project uses local JSON and Markdown files as its content source.

This approach allows the public website to be prerendered without requiring a continuously running database, external CMS, or separate backend service.

## Main Features

- Responsive portfolio homepage
- Selected project archive
- Dynamic project detail pages
- Technical notes archive
- Dynamic note detail pages
- Structured Learning Log system
- Chronological Learning Log navigation
- Related Learning Log recommendations
- Markdown content rendering
- GitHub Flavored Markdown support
- Syntax highlighting for code blocks
- Automatically generated table of contents
- Dynamic page metadata
- Canonical URLs
- Open Graph metadata
- Schema.org structured data
- Dynamic sitemap
- Robots metadata
- Custom not-found page
- Keyboard-accessible navigation
- Responsive desktop, tablet, and mobile layouts

## Technology Stack

### Core

- Next.js
- React
- TypeScript
- Tailwind CSS

### Content

- Markdown
- JSON
- Gray Matter
- React Markdown
- Remark GFM

### Code Rendering

- Rehype Pretty Code
- Shiki

### Development and Deployment

- ESLint
- Git
- GitHub
- Vercel

## Main Routes

```text
/
/projects
/projects/[slug]
/notes
/notes/[slug]
/learning-log
/learning-log/[slug]
/about
/contact
/sitemap.xml
/robots.txt
```

## Content Architecture

Fajar Works uses local files as its primary content source.

Structured website information is stored in JSON, while long-form content is stored in Markdown files with validated front matter.

```text
content/
|-- learning-logs/
|-- notes/
|-- projects/
|-- about.json
|-- capabilities.json
|-- homepage.json
|-- navigation.json
|-- site.json
`-- socials.json
```

### JSON Content

JSON is used for structured data such as:

- Website identity
- Homepage configuration
- Navigation
- Capabilities
- Profile information
- Social links

### Markdown Content

Markdown is used for:

- Project case studies
- Technical notes
- Learning Logs

Each Markdown file contains front matter that is parsed and validated before being used by the application.

## Project Structure

```text
fajar-works/
|-- content/
|   |-- learning-logs/
|   |-- notes/
|   |-- projects/
|   `-- *.json
|
|-- docs/
|   `-- templates/
|
|-- public/
|
|-- src/
|   |-- app/
|   |-- components/
|   |-- lib/
|   |   |-- content/
|   |   |-- metadata/
|   |   `-- utils/
|   `-- types/
|
|-- .env.example
|-- next.config.ts
|-- package.json
`-- tsconfig.json
```

## Project Content System

Projects are stored as Markdown files inside:

```text
content/projects/
```

Each published project can have:

- Title
- Slug
- Summary
- Category
- Status
- Technology stack
- Cover image
- Project links
- Markdown case study
- Generated table of contents
- Dynamic metadata
- Structured data

Project detail pages use the route:

```text
/projects/[slug]
```

## Notes System

Technical notes are stored as Markdown files inside:

```text
content/notes/
```

Each published note can include:

- Title
- Slug
- Excerpt
- Publication date
- Updated date
- Category
- Language
- Tags
- Cover image
- Markdown article content
- Generated table of contents
- Related notes
- Dynamic metadata
- Article structured data

Note detail pages use the route:

```text
/notes/[slug]
```

## Learning Log System

The Learning Log documents courses, programming exercises, project experiments, mistakes, discoveries, and technical progress.

Learning Log files are stored inside:

```text
content/learning-logs/
```

Each published Learning Log includes:

- Title and excerpt
- Logged and updated dates
- Learning status
- Category
- Learning source
- Module
- Progress information
- Technical topics
- Markdown article content
- Generated table of contents
- Newer and older entries
- Related Learning Logs
- Dynamic metadata
- TechArticle structured data

Learning Log detail pages use the route:

```text
/learning-log/[slug]
```

### Chronological Navigation

Each Learning Log can display:

- Newer Log
- Older Log

The navigation is based on the `loggedAt` date.

### Related Learning Logs

Related Learning Logs are selected using similarities in:

- Learning source
- Category
- Module
- Shared topics

Entries with stronger similarities receive a higher relevance score.

When there are not enough directly related entries, the system can use other published Learning Logs as fallback content.

## Markdown Rendering

Project, note, and Learning Log content is rendered from Markdown.

Supported features include:

- Headings
- Paragraphs
- Ordered lists
- Unordered lists
- Links
- Tables
- Task lists
- Inline code
- Fenced code blocks
- Syntax highlighting
- Heading anchors
- Generated table of contents

Raw HTML inside Markdown is not rendered.

## Metadata and SEO

Fajar Works generates metadata for static and dynamic pages.

The website includes:

- Page titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Article publication information
- Dynamic sitemap entries
- Robots metadata

Schema.org structured data is generated for several content types:

```text
Homepage       -> WebSite
Profile page   -> ProfilePage
Project detail -> CreativeWork
Note detail    -> Article
Learning Log   -> TechArticle
```

## Sitemap

The sitemap is generated dynamically at:

```text
/sitemap.xml
```

It includes:

- Static routes
- Published project routes
- Published note routes
- Published Learning Log routes

Draft and unpublished content are excluded.

## Robots Metadata

Robots metadata is available at:

```text
/robots.txt
```

The robots configuration points search engines to the generated sitemap.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fjrRA/fajar-works.git
```

### 2. Enter the project directory

```bash
cd fajar-works
```

### 3. Install dependencies

```bash
npm install
```

### 4. Prepare the environment file

On macOS or Linux:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

The application can run locally without setting a production URL because it automatically falls back to:

```text
http://localhost:3000
```

### 5. Start the development server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Environment Variables

### SITE_URL

`SITE_URL` defines the canonical production origin of the website.

```env
SITE_URL=https://your-production-domain.example
```

This variable is used to generate:

- Canonical URLs
- Open Graph URLs
- Sitemap URLs
- Robots metadata
- Structured data URLs

The value should contain only the website origin.

Correct example:

```env
SITE_URL=https://fajar-works.vercel.app
```

Avoid adding a page path:

```env
SITE_URL=https://fajar-works.vercel.app/about
```

When `SITE_URL` is unavailable, the application attempts to use the Vercel production URL.

During local development, it falls back to:

```text
http://localhost:3000
```

## Available Scripts

### Development Server

```bash
npm run dev
```

Starts the Next.js development server.

### Linting

```bash
npm run lint
```

Runs ESLint across the project.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the application using the generated production build.

Run the build command before starting the production server:

```bash
npm run build
npm run start
```

## Adding a New Project

Create a Markdown file inside:

```text
content/projects/
```

The filename should match its front matter slug.

Example filename:

```text
content/projects/example-project.md
```

Example slug:

```yaml
slug: "example-project"
```

Keep unfinished project content unpublished until it has been reviewed.

## Adding a New Note

Create a Markdown file inside:

```text
content/notes/
```

The filename and front matter slug should match.

Example filename:

```text
content/notes/example-note.md
```

Example slug:

```yaml
slug: "example-note"
```

Draft content should remain unpublished until it has been reviewed.

## Adding a New Learning Log

Copy the template from:

```text
docs/templates/learning-log-template.md
```

Create the new file inside:

```text
content/learning-logs/
```

Example filename:

```text
content/learning-logs/javascript-loops-and-iterations.md
```

The front matter slug should use the same value:

```yaml
slug: "javascript-loops-and-iterations"
```

Keep new entries as drafts during development:

```yaml
published: false
```

Change the value after the content has been reviewed:

```yaml
published: true
```

Because the page title already becomes the main HTML heading, article content should generally begin with an H2 Markdown heading:

```md
## Materi yang Dipelajari
```

Avoid adding another H1 inside the article:

```md
# Materi yang Dipelajari
```

## Content Publication Rules

Only published content is exposed through public routes.

Unpublished content is excluded from:

- Archive pages
- Dynamic detail routes
- Chronological navigation
- Related-content recommendations
- Sitemap entries

## Development Workflow

The recommended development workflow is:

```text
Create or update content
        |
        v
Run the development server
        |
        v
Review desktop and mobile layouts
        |
        v
Run linting
        |
        v
Create a production build
        |
        v
Commit and push changes
```

Commands:

```bash
npm run lint
npm run build
```

## Deployment

Fajar Works is prepared for deployment through Vercel using the GitHub repository.

The intended production workflow is:

```text
Local development
        |
        v
Commit changes
        |
        v
Push to the main branch
        |
        v
Automatic Vercel deployment
        |
        v
Production verification
```

Before deployment, verify:

```bash
npm run lint
npm run build
```

After the first deployment, configure:

```env
SITE_URL=https://your-production-url
```

Redeploy the project after adding or changing `SITE_URL`.

This ensures that the following features use the production domain:

- Canonical URLs
- Sitemap entries
- Open Graph metadata
- Robots metadata
- Structured data

## Production Verification

After deployment, verify these routes:

```text
/
/projects
/projects/[slug]
/notes
/notes/[slug]
/learning-log
/learning-log/[slug]
/about
/contact
/sitemap.xml
/robots.txt
/non-existing-route
```

Also verify:

- Navigation links
- Project detail pages
- Note detail pages
- Learning Log detail pages
- Markdown rendering
- Table of contents links
- Newer and Older Log navigation
- Related content
- Custom 404 page
- Mobile layout
- Keyboard navigation
- Browser console
- Canonical URLs
- Structured data
- Sitemap URLs

## Quality Assurance

Before publishing changes, verify:

- Linting succeeds
- The production build succeeds
- Dynamic routes open correctly
- Unpublished content remains inaccessible
- Sitemap entries are correct
- Structured data is present
- Canonical URLs use the expected domain
- Navigation works with a keyboard
- No horizontal overflow occurs on mobile
- The browser console contains no runtime errors

Recommended commands:

```bash
npm run lint
npm run build
npm run start
```

## Current Status

Fajar Works has completed:

- Main portfolio architecture
- Responsive design system
- Project content system
- Notes content system
- Learning Log system
- Markdown rendering
- Table of contents generation
- Related content logic
- Chronological Learning Log navigation
- Metadata system
- Structured data
- Sitemap generation
- Robots metadata
- Custom not-found page
- Refactor stabilization
- Pre-deployment preparation

The next milestone is the first production deployment and final online verification.

## Author

**Fajar Rahmana Akbar**

Web Developer based in Bekasi, Indonesia.

## License

This repository contains personal portfolio content, writing, project documentation, branding, visual assets, and original design work.

The source code may be studied for educational purposes.

Portfolio content, written articles, personal information, branding, and visual assets may not be reused, copied, or republished without permission.
````
