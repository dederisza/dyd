# Changelog - DapurYatimDhuafa

Semua perubahan formal pada proyek ini didokumentasikan berdasarkan aturan spesifikasi **BAB 71 & 72**.

# Changelog - DapurYatimDhuafa

Semua perubahan formal pada proyek ini didokumentasikan berdasarkan aturan spesifikasi pengembangan MVP.

## [v2.0.0] - 2026-07-19

### Added (Ditambahkan)

- **Komponen Navigasi Mobile**: Integrasi tombol `<button class="navbar__toggle">` di halaman internal (Tentang, Kemitraan, Kontak) untuk mendukung menu lipat hamburger di layar ponsel.
- **Sistem Navigasi Anchor**: Penerapan ID Selector (`#kisah-bu-aminah` & `#kisah-pak-jaka`) pada halaman Kisah agar tombol dari Beranda dapat meluncur mulus ke posisi artikel mitra secara presisi.
- **Sprint 2 hingga 6**: Penyelesaian arsitektur halaman Etalase Produk, Detail Produk, Profil Lembaga, Proposal CSR, dan Layanan Kontak Resmi.

### Fixed (Diperbaiki)

- **Resolusi Broken Layout Mobile**: Perbaikan kontener `.partnership-cta__actions` dengan menyuntikkan properti `gap: 16px;` vertikal agar tombol di layar HP tidak saling menindih.
- **Broken Path Logo Footer**: Memperbaiki alamat gambar logo di kaki halaman internal dengan menambahkan jalur relatif `../` agar aset terbaca sempurna dari dalam sub-folder `pages/`.

### Status Proyek

- **Seluruh Halaman Web MVP (Total 6 Halaman Utama + 2 Detail)**: **SELESAI 100% / PERFECTLY DONE**.

## [v2.0.0] - 2026-07-19

### Added (Ditambahkan)

- **Sprint 2 (Halaman Etalase & Filter)**:
  - Pembuatan sistem penyaringan modern menggunakan menu _Drop-down_ minimalis untuk memangkas ruang visual.
  - Implementasi kotak pencarian (_Search Input_) berjarak longgar dengan efek _glow focus_ jingga khas brand.
  - Penambahan modul JavaScript `catalog.js` untuk menyaring produk secara _real-time_ berdasarkan teks nama, cuplikan kisah, dan kategori produk tanpa memuat ulang halaman (_Single Page Experience_).
- **Sprint 3 (Halaman Detail Produk)**:
  - Pembuatan file spesifikasi `detail-nasi-bakar.html` (Ibu Aminah) dan `detail-keripik-singkong.html` (Pak Jaka).
  - Integrasi komponen _Hero Banner Internal_ di setiap atas halaman detail produk dengan dekorasi judul terpusat yang seimbang.
  - Penambahan visualisasi tabel spesifikasi teknis produk (Komposisi, Kemasan, Kapasitas Produksi, dan Sertifikasi Kurasi) dipadukan kotak kutipan dampak sosial (_Impact Quote_).
- **Sprint 4 (Halaman Tentang Kami)**:
  - Pembuatan layout dua kolom asimetris untuk menyajikan Visi dan Misi gerakan secara teratur.
  - Penyusunan blok narasi profil yang mengutamakan kredibilitas kerja sama B2B antara PT De Risza DigiCreation dan Yayasan Mutiara Titipan Illahi.
- **Sprint 5 (Halaman Kemitraan CSR)**:
  - Implementasi kartu proposal penawaran terarah (_Procurement_ & _CSR Sustainability_) menggunakan bayangan halus (_box-shadow_) dan ruang pembungkus yang lapang.
- **Sprint 6 (Halaman Kontak)**:
  - Pembuatan visualisasi 3 pilar informasi saluran pengaduan resmi (Alamat Fisik, WhatsApp CS, dan Email Korporat).

### Fixed (Diperbaiki)

- **Resolusi Broken Layout**: Mengubah seluruh implementasi jarak mepet dengan menyuntikkan unit piksel solid (`padding: 32px;`, `padding: 40px;`) yang stabil lintas perangkat.
- **Navbar Sticky Overlap**: Memperbaiki judul halaman internal yang sempat terpotong dengan memberikan _padding-top: 120px_ pada kelas `.page-hero` berkas `hero-internal.css`.
- **Navigasi Global & Bentuk Tombol**: Penyelarasan tautan navigasi `../` antar sub-folder agar logo dan favicon terbaca sempurna, serta menambahkan kelas `.btn--rect` pada `buttons.css` untuk mengubah tombol kapsul menjadi sudut kotak tegas (_straight border-radius_) demi keselarasan visual komponen _badge_.

### Status Proyek

- **Seluruh Halaman Web MVP (Total 6 Halaman Utama + 2 Detail)**: **SELESAI 100% / PERFECTLY DONE** (Memenuhi kriteria _Definition of Excellence_ BAB 76).

## [v1.0.0] - 2026-07-13

### Added (Ditambahkan)

- **Struktur Proyek**: Inisialisasi arsitektur folder modular (HTML, CSS, JS, Aset) sesuai BAB 40.
- **Kerangka Utama**: Implementasi HTML5 Semantik pada `index.html` (Header, Nav, Main, Sections, Footer) sesuai BAB 41.
- **Token Desain**: Pembuatan `base/variables.css` untuk mengunci warna brand, tipografi, spacing 8px, dan radius.
- **CSS Reset**: Pembuatan `base/reset.css` untuk standardisasi tampilan lintas browser dan aksesibilitas.
- **Navbar Component**: Integrasi struktur menu atas yang responsif (_Flexbox Layout_) dan mendukung fitur _Sticky Navigation_.
- **Navigation JS Module**: Pembuatan logika interaktif buka/tutup menu lipat (_Hamburger Menu_) menggunakan ES6 murni di `modules/navigation.js` dan diaktifkan melalui `app.js`.
- **Hero Section**: Implementasi banner utama 2-kolom dengan strategi dwi-tombol CTA (Belanja & Dukung Program).
- **Impact Section**: Pembuatan sistem grid 3-kolom untuk _Impact Cards_ (Statistik pemberdayaan).
- **Featured Products Section**: katalog produk 2-kolom lengkap dengan integrasi cerita pengantar emosional pendek (_Snippet Story_) di dalam kartu produk dan tombol pesan WhatsApp.
- **Featured Stories Section**: Pembuatan kartu artikel kisah nyata transformasi Mitra Binaan menggunakan tag `<article>`.
- **How It Works Section**: Visualisasi 3 langkah alur pemberdayaan ekonomi dengan penomoran sirkular jingga tebal.
- **CTA Partnership Section**: Banner penutup mencolok dengan latar belakang _Primary Color_ untuk menjaring mitra korporat (CSR) & Pemerintah.
- **Footer Component**: Pembagian layout kaki halaman 3-kolom informasi resmi dan baris hak cipta (_copyright_).
- **Aset Integrasi**: Pemasangan dan optimasi visual seluruh logo, favicon, dan foto katalog menggunakan format modern `.webp`.

### Status Proyek

- **Halaman Utama (Sprint 1 - Homepage)**: **SELESAI / DONE** (Memenuhi kriteria _Definition of Done_ BAB 55).
