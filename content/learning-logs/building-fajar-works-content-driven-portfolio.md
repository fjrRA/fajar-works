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
progress: "Stage 3 — Homepage Content"
topics:
  - "Next.js"
  - "TypeScript"
  - "JSON"
  - "Markdown"
  - "Content Architecture"
---

## Tujuan Pengembangan

Fajar Works dibangun sebagai website portfolio, arsip proyek, tempat menulis catatan, dan dokumentasi perkembangan belajar.

Saya tidak ingin website ini hanya menjadi sebuah landing page yang berisi nama, daftar teknologi, dan beberapa tautan proyek.

## Fondasi yang Sudah Dibangun

Pengembangan dimulai dari design foundation yang mencakup warna, tipografi, spacing, container, border, serta komponen antarmuka dasar.

Setelah fondasi visual selesai, saya melanjutkan ke global layout berupa navbar desktop, mobile navigation, footer, page header, dan struktur route utama.

## Arsitektur Konten

Konten website disimpan melalui JSON dan Markdown.

JSON digunakan untuk data terstruktur seperti konfigurasi homepage, profil, capability, dan navigasi. Markdown digunakan untuk proyek, notes, dan learning log.

Pendekatan ini membuat website tetap dapat diprerender tanpa memerlukan database cloud atau backend yang aktif terus-menerus.

## Contoh Struktur Data

```ts title="learning-log.ts"
export type LearningLog = {
  title: string;
  slug: string;
  published: boolean;
};
```

## Kondisi Saat Ini

Homepage sudah memiliki Hero, Selected Work, Capabilities, Current Focus, dan Latest Notes.

Tahap selanjutnya adalah menyelesaikan Learning Progress, profil singkat, dan contact call-to-action.