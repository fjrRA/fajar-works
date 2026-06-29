# Fondasi Penulisan Notes

Dokumen ini menjadi patokan untuk tulisan di `content/notes/`. Tujuannya bukan membuat semua note memiliki susunan yang sama, tetapi memastikan setiap tulisan punya alur yang dapat diikuti dan bukti yang jelas.

## Bedakan Learning Log dan Note

| Tempat | Fungsi | Satuan tulisan |
| --- | --- | --- |
| Learning Log | Merekam proses belajar yang masih dekat dengan aktivitasnya | Satu video, challenge, latihan, atau proyek kursus |
| Notes | Menyaring beberapa pengalaman menjadi keputusan, pola, opini, atau refleksi | Satu gagasan yang layak dibaca kembali |

Gunakan Learning Log untuk menangkap bahan mentah. Terbitkan sebuah Note ketika sudah ada hal yang ingin dijelaskan, dibandingkan, atau dievaluasi.

## Hirarki yang selalu dipakai

Setiap note setidaknya memiliki lima unsur berikut. Nama heading boleh berubah mengikuti topik.

1. **Premis** — apa inti tulisan ini dalam satu atau dua kalimat?
2. **Konteks** — masalah, keadaan, atau pengalaman apa yang melahirkannya?
3. **Bukti** — kode, screenshot, hasil challenge, keputusan, atau contoh apa yang mendukungnya?
4. **Refleksi** — apa tradeoff, keraguan, keterbatasan, atau opini pribadi yang muncul?
5. **Arah berikutnya** — apa yang akan diuji, dipelajari, atau diperbaiki setelah ini?

Aturan praktis:

- Judul halaman sudah menjadi H1; mulai isi Markdown dari `##`.
- Gunakan 4–8 heading H2. Gunakan H3 hanya untuk rincian yang benar-benar berada di bawah satu H2.
- Satu heading sebaiknya menjawab satu pertanyaan.
- Kode dan gambar harus membuktikan klaim di paragraf terdekat, bukan sekadar menghias halaman.
- Jika kode berasal dari konsep atau penyederhanaan, beri label yang jujur. Jangan menyebutnya salinan implementasi.
- Tutup tulisan dengan evaluasi atau langkah berikutnya, bukan rangkuman yang hanya mengulang pembuka.

## Archetype 1 — Technical Decision Note

Dipakai ketika tulisan menjelaskan pilihan teknis dan alasan di baliknya.

```md
## Decision in one sentence

Keputusan utama dan batas penerapannya.

## Context and constraint

Masalah, skala, kebutuhan, dan batas yang memengaruhi keputusan.

## Options I considered

Alternatif yang benar-benar dipertimbangkan dan alasan belum dipilih.

## The chosen approach

Cara kerja solusi. Masukkan hanya kutipan kode yang membawa keputusan penting.

## Evidence

Screenshot, output, struktur data, atau hasil pengujian yang mendukung klaim.

## Tradeoffs and limits

Biaya, kekurangan, asumsi, dan kondisi yang dapat membuat keputusan berubah.

## Next step

Eksperimen atau perbaikan paling masuk akal berikutnya.
```

## Archetype 2 — Learning Reflection

Dipakai untuk menyatukan beberapa Learning Log menjadi refleksi tentang cara belajar, kesalahan, dan perubahan pemahaman.

```md
## Where I am

Posisi belajar saat ini, bukan versi idealnya.

## The difficulty or expectation

Masalah, kebingungan, atau ekspektasi yang memengaruhi proses.

## The learning loop

Metode yang sedang dipakai dan alasan setiap tahapnya.

## Evidence from practice

Satu challenge, contoh kode kecil, koreksi, atau perubahan cara berpikir.

## What I understand and what remains unclear

Pisahkan pemahaman yang sudah dapat dijelaskan dari pertanyaan yang masih terbuka.

## Connection to real projects

Hubungan yang nyata dengan proyek; tulis juga jika konsepnya memang belum dibutuhkan.

## A sustainable next step

Target kecil yang dapat dilakukan tanpa menjadikan timeline sebagai ukuran harga diri.
```

### Bahan mentah per video

```text
Judul Video:
Nomor:

Inti Materi:

3 Hal yang Aku Pahami:
1.
2.
3.

Contoh Kode dari Video:

Yang Masih Membingungkan:

Hubungan ke Proyek Nyata:

Kesimpulan:
```

### Bahan mentah untuk challenge

```text
Judul Video:
Nomor:

Isi Challenge:

Aturan / Target Output:

Pengerjaanku:

Bagian yang Aku Ragukan:

Koreksi:

Mengapa Koreksi Itu Bekerja:
```

### Bahan mentah untuk proyek kursus

```text
Judul / Bagian Kursus:
Nomor:

Ringkasan Proyek:

File yang Penting dan Alasannya:

Keputusan yang Aku Pahami:

Bagian yang Masih Membingungkan:

Opini Pribadi:

Hubungan ke Proyekku:
```

Tidak semua bahan mentah perlu diterbitkan. Setelah beberapa entri, cari satu pola—misalnya kesalahan yang berulang, metode yang berubah, atau ekspektasi yang perlu dikoreksi—lalu jadikan pola itu sebuah Note.

## Archetype 3 — Build Log

Dipakai untuk mencatat perubahan penting pada sebuah proyek, bukan daftar aktivitas harian.

```md
## Why this build exists

Masalah atau tujuan yang membuat pekerjaan ini layak dilakukan.

## Direction and constraints

Arah desain/teknis dan batas yang membentuk keputusan.

## What changed

Perubahan utama dibanding keadaan sebelumnya.

## Implementation evidence

Screenshot, struktur, atau kutipan kode yang paling penting.

## Decisions and tradeoffs

Pilihan yang dibuat, konsekuensinya, dan hal yang sengaja tidak dikerjakan.

## Current state and next pass

Apa yang sudah benar-benar selesai dan apa yang masih perlu diuji.
```

## Checklist sebelum publish

- Premis tulisan dapat diringkas dalam satu kalimat.
- Heading membentuk alur, bukan sekadar label topik.
- Setiap klaim teknis memiliki bukti atau batas yang jujur.
- Screenshot memiliki alt text dan metadata ukuran pada title Markdown, misalnya `"Caption [1600x900]"`.
- Note tentang proyek memakai `repositoryUrl` pada frontmatter jika repository GitHub-nya memang tersedia.
- Kode yang ditampilkan cukup kecil untuk dijelaskan.
- Bagian “masih bingung” atau “keterbatasan” tidak dihapus demi terlihat selesai.
- Tanggal `updatedAt` diubah ketika isi atau kesimpulan berubah secara berarti.
- Tulisan berakhir dengan langkah berikutnya yang spesifik.
