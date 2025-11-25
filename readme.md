# The A-side | Cloth & Code

![The A-side Logo](assets/img/Logo%20Aside.webp)

> **"Sederhana bukan berarti biasa."**

**The A-side** adalah landing page modern untuk brand streetwear yang mengusung estetika *dark mode*, minimalis, dan *edgy*. Website ini dirancang dengan fokus pada visual storytelling, animasi halus, dan pengalaman pengguna yang seamless dari desktop hingga mobile.

---

## 🌟 Fitur Utama

-   **🎨 Dark & Edgy Aesthetics**: Desain dominan hitam (#111) dengan aksen merah gelap (#980000) untuk kesan premium dan misterius.
-   **🔦 Hero Spotlight Effect**: Menggunakan CSS `mask-image` (Radial & Linear Gradient) untuk menciptakan efek model yang menyatu halus dengan background, responsif di semua device.
-   **📱 Fully Responsive**: Layout yang beradaptasi sempurna mulai dari Monitor Ultrawide, Laptop, Tablet, hingga Smartphone kecil.
-   **🛍️ Direct WhatsApp Ordering**: Sistem "Add to Cart" yang langsung mengarahkan user ke WhatsApp Admin dengan pesan otomatis berisi detail produk.
-   **✨ Scroll Reveal Animations**: Animasi elemen yang muncul perlahan saat discroll menggunakan `IntersectionObserver` (tanpa library berat).
-   **🔍 Product Quick View**: Modal popup interaktif untuk melihat detail produk tanpa pindah halaman.

---

## 🛠️ Teknologi yang Digunakan

-   **HTML5**: Semantik dan terstruktur.
-   **CSS3**:
    -   CSS Variables (Custom Properties) untuk manajemen warna.
    -   CSS Grid & Flexbox untuk layout.
    -   `mask-image` untuk manipulasi gambar tingkat lanjut.
    -   Animations (@keyframes).
-   **JavaScript (Vanilla ES6)**:
    -   DOM Manipulation.
    -   Intersection Observer API.
    -   Dynamic WhatsApp Link Generation.
-   **Icons**: [Remix Icon](https://remixicon.com/).

---

## 📂 Struktur Folder

```text
the-a-side/
├── assets/
│   └── img/           # Gambar produk, logo, dan aset visual
├── css/
│   └── style.css      # Styling utama dan responsif
├── js/
│   └── main.js        # Logika modal, animasi, dan menu
├── index.html         # Halaman utama
└── README.md          # Dokumentasi