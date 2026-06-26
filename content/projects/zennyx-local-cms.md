---
title: "Zennyx Local CMS"
slug: "zennyx-local-cms"
summary: "A local content management system that manages studio content and exports structured JSON and Markdown files."
year: 2026
status: "In Development"
category: "Local Content Management System"
role: "Full-stack Developer"
context: "Personal Studio Tool"
published: true
featured: true
order: 2
stack:
  - "React"
  - "TypeScript"
  - "Express.js"
  - "Prisma"
  - "MySQL"
  - "JSON"
  - "Markdown"
responsibilities:
  - "Admin dashboard development"
  - "REST API and local database design"
  - "Content model and CRUD implementation"
  - "JSON and Markdown export workflow"
repositoryUrl: "https://github.com/fjrRA/zennyx-local-cms"
---

<!-- content/projects/zennyx-local-cms.md -->

## Overview

Zennyx Local CMS is a locally operated content management system for the Zennyx Interactive Studio website.

![Zennyx Local CMS case study displayed on the Fajar Works portfolio](/images/projects/baturraden-apps/baturraden-apps.png "Early case study presentation for Zennyx Local CMS inside Fajar Works [1920x1080]")

## Problem

The public website uses static JSON and Markdown content, but editing those files manually becomes increasingly difficult as the amount of content grows.

## Solution

The CMS provides a React admin dashboard and an Express API backed by a local MySQL database.

Content can be managed through CRUD operations and later exported into JSON, Markdown, and image files for the static public website.

## Main Features

- Local admin dashboard
- Game content management
- Devlog content management
- Team and social configuration
- Express REST API
- Prisma and MySQL persistence
- JSON and Markdown exporter

## Current Status

The API, database models, seed process, CRUD operations, and exporter foundation have been implemented. The admin dashboard remains under active development.