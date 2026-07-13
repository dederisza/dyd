# Changelog - DapurYatimDhuafa

Semua perubahan formal pada proyek ini akan didokumentasikan di file ini berdasarkan aturan spesifikasi **BAB 71 & 72**.

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
