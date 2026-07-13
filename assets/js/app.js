/* ==========================================================================
   DapurYatimDhuafa - Main Application Entry
   Fungsi: Menginisialisasi semua modul interaktif website (BAB 40 & 43)
   ========================================================================== */

// Import modul navigasi yang baru saja kita buat
import { initNavigation } from "./modules/navigation.js";

// Tunggu sampai seluruh struktur halaman (DOM) selesai dimuat oleh browser
document.addEventListener("DOMContentLoaded", () => {
  // Jalankan fungsi navigasi
  initNavigation();

  // Modul-modul lain (slider, accordion, faq) akan diinisialisasi di bawah sini nanti...
});
