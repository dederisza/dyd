# DapurYatimDhuafa - Website Specification MVP

Platform digital pemberdayaan ekonomi berbasis dampak sosial yang dikembangkan sebagai Foodcourt Online Terkurasi untuk menghubungkan hasil karya Mitra Binaan dengan masyarakat luas.

## 📁 Arsitektur Folder Proyek Final (BAB 40 & 42)

dapuryatimdhuafa/
│
├── index.html # Halaman Utama (Homepage)
├── README.md # Dokumentasi Utama Proyek
├── CHANGELOG.md # Catatan Perubahan Proyek
│
├── pages/ # Halaman Internal Web (SEO Friendly)
│ ├── produk.html # Etalase Katalog & Filter Drop-down
│ ├── detail-nasi-bakar.html # Detail Produk & Dampak Sosial Ibu Aminah
│ ├── detail-keripik-singkong.html # Detail Produk & Dampak Sosial Pak Jaka
│ ├── kisah.html # Halaman Cerita Transformasi Mitra (Layout Zigzag)
│ ├── tentang.html # Profil Gerakan, Visi, Misi, & Legalitas B2B
│ ├── kemitraan.html # Proposal Skema Kemitraan CSR & Procurement
│ └── kontak.html # Saluran Komunikasi CS Satu Pintu (WhatsApp)
│
└── assets/
├── css/ # Arsitektur CSS Modular Standar Industri
│ ├── base/ # variables.css, reset.css
│ ├── layout/ # layout.css, header.css
│ ├── components/ # buttons.css (Utilitas sudut kotak tegas)
│ ├── pages/ # hero.css, hero-internal.css, section.css, catalog.css, stories.css
│ └── style.css # Master Hub CSS Imports
│
├── js/ # Vanilla JS ES6+ Modern
│ ├── modules/ # navigation.js (Hamburger menu lipat)
│ ├── pages/ # catalog.js (Logika filter drop-down & search instan)
│ └── app.js # Master Hub JavaScript Execution
│
├── icons/ # Aset Favicon & Vektor Resmi
└── images/ # Aset Gambar Visual Web (.webp)
