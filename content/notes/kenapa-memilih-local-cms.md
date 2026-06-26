---
title: "Kenapa Saya Memilih Local CMS untuk Website Statis"
slug: "kenapa-memilih-local-cms"
excerpt: "Alasan memilih dashboard lokal, database MySQL, serta ekspor JSON dan Markdown dibandingkan langsung menggunakan database cloud."
publishedAt: "2026-06-20"
updatedAt: "2026-06-20"
status: "Published"
category: "Technical Note"
language: "id"
featured: true
tags:
- "CMS"
- "JSON"
- "Markdown"
- "Static Website"
- "Architecture"
---

## Masalah yang Ingin Diselesaikan

Website statis mudah di-deploy dan tidak membutuhkan server backend aktif. Namun, ketika jumlah kontennya bertambah, mengedit file JSON dan Markdown secara manual mulai terasa kurang nyaman.

Saya tetap membutuhkan cara yang lebih terstruktur untuk mengelola game, devlog, informasi tim, dan konfigurasi website.

## Kenapa Tidak Langsung Menggunakan Database Cloud?

Untuk tahap sekarang, saya belum ingin menambah biaya database cloud, hosting backend, atau VPS.

Saya juga masih mempelajari cara membangun sistem pengelolaan konten dengan lebih baik. Karena itu, solusi lokal terasa lebih sesuai dengan kebutuhan dan kemampuan saya saat ini.

## Struktur yang Dipilih

Local CMS terdiri dari:

* React dan TypeScript untuk admin dashboard
* Express.js untuk REST API
* Prisma dan MySQL lokal untuk penyimpanan
* Exporter untuk menghasilkan JSON dan Markdown
* Website publik statis yang membaca hasil ekspor

CMS tidak harus aktif ketika website publik dibuka. CMS hanya digunakan ketika saya ingin mengubah atau menambahkan konten.

### Contoh Struktur Data Ekspor

Setelah konten dikelola melalui local CMS, exporter dapat menghasilkan struktur data yang dibaca oleh website publik.

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

Perintah `export:all` kemudian menghasilkan file `games.json` dan Markdown yang dapat dipindahkan ke repository website publik.

> Local CMS bukan bagian dari server production. Sistem ini hanya digunakan ketika konten perlu diperbarui atau diekspor.

| Bagian | Teknologi | Output |
| --- | --- | --- |
| Admin dashboard | React dan TypeScript | Form pengelolaan konten |
| Local API | Express.js | Endpoint CRUD |
| Storage | Prisma dan MySQL | Data lokal |
| Exporter | Node.js | JSON dan Markdown |

## Kelebihan dan Keterbatasan

Pendekatan ini murah, dapat dipelajari secara bertahap, dan memberi kontrol penuh terhadap struktur data.

Keterbatasannya adalah proses publikasi belum sepenuhnya otomatis. Hasil ekspor masih harus dipindahkan ke repository website publik dan kemudian di-deploy kembali.

Untuk kebutuhan saat ini, keterbatasan tersebut masih dapat diterima.
