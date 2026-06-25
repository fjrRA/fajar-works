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

## Kelebihan dan Keterbatasan

Pendekatan ini murah, dapat dipelajari secara bertahap, dan memberi kontrol penuh terhadap struktur data.

Keterbatasannya adalah proses publikasi belum sepenuhnya otomatis. Hasil ekspor masih harus dipindahkan ke repository website publik dan kemudian di-deploy kembali.

Untuk kebutuhan saat ini, keterbatasan tersebut masih dapat diterima.
