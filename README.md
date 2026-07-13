# DapurYatimDhuafa - Website Specification MVP

Platform digital pemberdayaan ekonomi berbasis dampak sosial yang dikembangkan sebagai Foodcourt Online Terkurasi untuk menghubungkan hasil karya Mitra Binaan dengan masyarakat luas.

## 📁 Struktur Proyek Terimplementasi (BAB 40)

dapuryatimdhuafa/
│
├── index.html # Halaman Utama (Homepage) - HTML5 Semantik
├── README.md # Dokumentasi Utama Proyek
│
├── pages/ # Halaman Internal Web (SEO Friendly)
│ ├── produk.html
│ ├── detail-produk.html
│ ├── kisah.html
│ ├── tentang.html
│ ├── kemitraan.html
│ └── kontak.html
│
└── assets/
├── css/ # Arsitektur CSS Modular (BAB 42)
│ ├── base/ # variables.css, reset.css
│ ├── layout/ # layout.css, header.css
│ ├── components/ # buttons.css
│ ├── pages/ # hero.css, section.css, responsive.css
│ └── style.css # Master Hub CSS Imports
│
├── js/ # Vanilla JS ES6+ Modular (BAB 43)
│ ├── modules/ # navigation.js
│ ├── pages/
│ └── app.js # Master Hub JS
│
├── icons/ # Aset Vektor & Favicon
│ └── icon-dapuryatimhuafa.webp
│
└── images/ # Aset Visual Web (.webp)
├── logo-horizontal-dapuryatimdhuafa.webp
├── logo-web-DapurYatimDhuafa.webp
├── hero-display.webp
├── produk-1.webp
├── produk-2.webp
├── cerita-1.webp
└── cerita-2.webp

## 🖼️ Dokumentasi Aset Visual Terinput (WebP Format)

1. **Favicon**: `assets/icons/icon-dapuryatimhuafa.webp` (Resolusi Otomatis Browser)
2. **Logo Header**: `assets/images/logo-horizontal-dapuryatimdhuafa.webp` (Tinggi dikunci 40px di CSS)
3. **Logo Footer**: `assets/images/logo-web-DapurYatimDhuafa.webp` (Tinggi dikunci 45px di CSS)
4. **Hero Image**: `assets/images/hero-display.webp` (Responsive Width, Aspect Ratio Cover)
5. **Product Cards**: `produk-1.webp`, `produk-2.webp` (Tinggi dikunci 220px, Object-fit Cover)
6. **Story Cards**: `cerita-1.webp`, `cerita-2.webp` (Tinggi dikunci 260px, Object-fit Cover)

## 🛠️ Tech Stack & Standar Kualitas

- HTML5 Semantik & Aksesibilitas WCAG 2.2 AA
- Vanilla CSS3 Modern (Flexbox & Grid) tanpa Framework External
- Vanilla JavaScript ES6+ Modular
- Target Kecepatan: Google PageSpeed Desktop 95+, Mobile 90+
