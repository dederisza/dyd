/* ==========================================================================
   LOGIKA FILTER & PENCARIAN KATALOG PRODUK (BAB 43)
   ========================================================================== */

export function initCatalogFilter() {
  const searchInput = document.getElementById("catalog-search");
  const categorySelect = document.getElementById("category-select");
  const productCards = document.querySelectorAll(".product-card");

  // Pastikan semua elemen yang dibutuhkan ada di halaman saat ini
  if (!searchInput || !categorySelect || productCards.length === 0) return;

  // Fungsi Utama Penyaringan
  function filterProducts() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;

    productCards.forEach((card) => {
      const productName = card
        .querySelector(".product-card__title")
        .textContent.toLowerCase();
      const productExcerpt = card
        .querySelector(".product-card__snippet")
        .textContent.toLowerCase();
      const productCategory = card.getAttribute("data-type");

      // Kondisi 1: Pencarian Teks (Mencocokkan nama produk atau teks kisah)
      const matchesSearch =
        productName.includes(searchText) || productExcerpt.includes(searchText);

      // Kondisi 2: Drop-down Kategori
      const matchesCategory =
        selectedCategory === "all" || productCategory === selectedCategory;

      // Tampilkan jika memenuhi kedua kondisi, sembunyikan jika tidak
      if (matchesSearch && matchesCategory) {
        card.style.display = "flex"; // Sesuai dengan layout flex kartu
        card.style.opacity = "1";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Jalankan fungsi setiap kali pengguna mengetik di kotak pencarian
  searchInput.addEventListener("input", filterProducts);

  // Jalankan fungsi setiap kali pengguna mengubah pilihan drop-down
  categorySelect.addEventListener("change", filterProducts);
}
