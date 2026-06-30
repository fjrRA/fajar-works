# Fondasi Penulisan Learning Log

Learning Log adalah catatan kerja belajar yang dekat dengan aktivitas aslinya. Ia tidak perlu terdengar seperti artikel yang sudah memiliki kesimpulan sempurna.

## Bedanya dengan Notes

| Learning Log | Notes |
| --- | --- |
| Merekam satu sesi, bagian kursus, challenge, eksperimen, atau tahap build | Menyatukan beberapa pengalaman menjadi argumen, keputusan, atau refleksi |
| Boleh menyisakan kebingungan yang spesifik | Sebaiknya memiliki satu premis utama |
| Menunjukkan usaha, koreksi, dan target review | Menunjukkan gagasan yang sudah cukup matang untuk dibaca sebagai tulisan |

Satu Learning Log dapat menjadi bahan bagi Note di kemudian hari. Tidak semua Learning Log harus diubah menjadi Note.

## Hirarki bersama

Nama heading boleh menyesuaikan topik, tetapi sebuah log sebaiknya menjawab urutan berikut:

1. **Konteks** — aktivitas apa yang sedang dilakukan dan mengapa dicatat?
2. **Target** — kemampuan atau hasil apa yang ingin dicapai?
3. **Pemahaman** — bagian apa yang sudah dapat dijelaskan dengan kata-kata sendiri?
4. **Bukti** — latihan, prediksi output, kode, screenshot, atau perubahan file apa yang membuktikannya?
5. **Kesulitan** — bagian spesifik apa yang masih membingungkan atau salah?
6. **Koreksi** — apa yang berubah setelah membandingkan hasil dengan penjelasan atau solusi?
7. **Transfer** — bagaimana konsep ini berhubungan dengan proyek nyata atau keputusan lain?
8. **Outcome** — apa status sebenarnya dan kapan bagian ini perlu ditinjau kembali?

Gunakan 5–8 heading H2. H3 dipakai untuk konsep-konsep yang berada di bawah satu checkpoint H2. Jangan membuat heading hanya agar tulisan terlihat panjang.

## Archetype 1 — Course Lesson Log

Dipakai untuk satu video, kelompok video, atau satu bagian kursus yang memiliki tema sama.

```md
## Session objective

Apa kemampuan minimum yang ingin dicapai?

## Concepts I can explain

### Concept A
### Concept B

Jelaskan dengan kata sendiri, bukan transkrip video.

## Practice evidence

Gunakan contoh kecil yang output-nya dapat diprediksi sebelum dijalankan.

## What remained difficult

Sebutkan istilah, langkah, atau perubahan contoh yang masih membuat pemahaman runtuh.

## Correction and review note

Apa kesalahan awal dan mengapa koreksinya bekerja?

## Connection to real projects

Di mana konsep ini muncul? Tulis jujur jika belum dibutuhkan.

## Outcome and next review

Bedakan "course section completed" dari "concept mastered".
```

## Archetype 2 — Challenge Log

```md
## Challenge brief

Target output dan aturan yang diberikan.

## My first approach

Pengerjaan sebelum melihat solusi.

## Evidence

Kode atau output penting dari percobaan.

## Where I hesitated

Bagian spesifik yang diragukan.

## Correction

Perbedaan antara pendekatan awal dan koreksi.

## Why the correction works

Jelaskan alasan, bukan hanya menyalin jawaban.

## Transfer and next attempt

Variasi challenge atau hubungan ke proyek nyata.
```

## Archetype 3 — Course Project Log

```md
## Project scope

Apa yang dibangun dan batas bagian kursus ini?

## Files that carry the decisions

Pilih beberapa file penting dan jelaskan perannya.

## Implementation evidence

Kode, screenshot, atau alur data yang benar-benar penting.

## Decision I understood

Keputusan yang sudah dapat dijelaskan tanpa instruktur.

## Problem and correction

Masalah yang muncul dan alasan perbaikannya.

## My opinion

Bagian yang terasa masuk akal, berlebihan, atau ingin dikerjakan berbeda.

## Connection and next pass

Apa yang dapat dibawa ke proyek sendiri?
```

## Archetype 4 — Build / Field Record

Dipakai untuk perkembangan proyek sendiri seperti Fajar Works.

```md
## Build objective

Tujuan tahap ini.

## Context and constraints

Batas desain, teknis, waktu, atau kemampuan saat ini.

## What I changed

Perubahan nyata dibanding kondisi sebelumnya.

## Architecture or visual evidence

Kode, screenshot, atau alur yang membuktikan perubahan.

## Decision and tradeoffs

Pilihan, konsekuensi, dan hal yang sengaja tidak dilakukan.

## What I learned

Pemahaman baru yang muncul saat mengerjakan.

## Personal reflection

Opini pribadi tanpa mengubah log menjadi promosi proyek.

## Current state and next pass

Status faktual dan langkah berikutnya.
```

## Frontmatter

- `status` menjelaskan keadaan log: `Completed`, `In Progress`, atau `Paused`.
- `progress` boleh lebih jujur daripada status, misalnya `Section 4 Completed / Review Required`.
- `source` adalah kursus, buku, dokumentasi, atau proyek asal.
- `module` menunjukkan bagian yang sedang dipelajari atau dibangun.
- `topics` berisi konsep yang benar-benar muncul di log.
- `repositoryUrl` hanya dipakai untuk catatan proyek dengan repository GitHub publik.

## Checklist sebelum publish

- Log membahas satu unit belajar atau tahap build yang jelas.
- Ada bukti praktik, bukan hanya ringkasan materi.
- Bagian yang belum dipahami disebut secara spesifik.
- Koreksi menjelaskan alasan, bukan hanya jawaban akhir.
- Status selesai tidak otomatis ditulis sebagai penguasaan penuh.
- Contoh kode cukup kecil untuk diprediksi dan dijelaskan.
- Opini pribadi dibedakan dari fakta implementasi.
- `updatedAt` diubah ketika review menghasilkan pemahaman baru.
- Outcome memiliki target review atau percobaan berikutnya.
