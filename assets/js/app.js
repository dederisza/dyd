import { initNavigation } from "./modules/navigation.js";
import { initCatalogFilter } from "./pages/catalog.js";

document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi Navigasi Global (Hamburger Menu)
  initNavigation();

  // Inisialisasi Filter Halaman Produk
  initCatalogFilter();
});
