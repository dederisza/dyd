/* ==========================================================================
   DapurYatimDhuafa - Navigation Module
   Fungsi: Mengatur logika buka/tutup menu lipat pada perangkat mobile (BAB 12 & 43)
   ========================================================================== */

export function initNavigation() {
  // 1. Ambil element tombol hamburger dan kontainer menu dari HTML
  const toggleBtn = document.querySelector(".navbar__toggle");
  const menuList = document.querySelector(".navbar__menu");

  // 2. Keamanan: Cek jika element tidak ditemukan di halaman, hentikan fungsi (BAB 50)
  if (!toggleBtn || !menuList) return;

  // 3. Pasang fungsi "Mendengar Klik" pada tombol hamburger
  toggleBtn.addEventListener("click", () => {
    // Toggle (pasang/lepas) kelas CSS aktif pada menu dan tombol
    menuList.classList.toggle("navbar__menu--open");
    toggleBtn.classList.toggle("navbar__toggle--active");

    // Aksesibilitas (BAB 47): Update status tombol apakah sedang terbuka (true) atau tertutup (false)
    const isOpen = menuList.classList.contains("navbar__menu--open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
    toggleBtn.setAttribute("aria-label", isOpen ? "Tutup Menu" : "Buka Menu");
  });

  // 4. Otomatis tutup menu jika pengguna mengklik salah satu link menu
  const navLinks = document.querySelectorAll(".navbar__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuList.classList.remove("navbar__menu--open");
      toggleBtn.classList.remove("navbar__toggle--active");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", "Buka Menu");
    });
  });
}
