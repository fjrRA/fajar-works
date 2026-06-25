---
title: "Zennyx Local CMS"
slug: "zennyx-local-cms"
summary: "A local content management system that manages studio content and exports structured JSON and Markdown files."
year: 2026
status: "In Development"
category: "Local Content Management System"
role: "Full-stack Developer"
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
repositoryUrl: "https://github.com/fjrRA/zennyx-local-cms"
---

<!-- content/projects/zennyx-local-cms.md -->

## Overview

Zennyx Local CMS is a locally operated content management system for the Zennyx Interactive Studio website.

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