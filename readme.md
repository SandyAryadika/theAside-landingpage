# The A-side | Cloth

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

## 🚀 Cara Menjalankan Project

Project ini bersifat **static**, sehingga tidak memerlukan instalasi backend (Node.js, PHP, Python) atau build tools. Kamu bisa menjalankannya langsung di browser.

### Prasyarat
- Web Browser modern (Chrome, Edge, Firefox, Safari).
- Code Editor (Disarankan **VS Code**).

### Langkah-langkah

#### Cara 1: Menggunakan VS Code Live Server (Disarankan)
Cara ini paling direkomendasikan agar semua asset dan path loading berjalan sempurna tanpa masalah policy browser.

1.  **Clone Repository** (atau download ZIP):
    ```bash
    git clone [https://github.com/username-anda/the-a-side.git](https://github.com/username-anda/the-a-side.git)
    ```
2.  Buka folder project di **Visual Studio Code**.
3.  Install Ekstensi **Live Server** (oleh Ritwick Dey) di VS Code jika belum punya.
4.  Buka file `index.html`.
5.  Klik kanan pada area kode, lalu pilih **"Open with Live Server"**.
6.  Website akan otomatis terbuka di browser (biasanya di `http://127.0.0.1:5500`).

#### Cara 2: Membuka Langsung (Manual)
1.  Download atau Clone project ini.
2.  Masuk ke dalam folder project.
3.  Cari file `index.html`.
4.  Klik dua kali (Double click) file tersebut.
5.  Website akan terbuka di browser default kamu.

---

## 🤝 Kontribusi

Tertarik mengembangkan project ini? Silakan _fork_ repository ini dan buat _Pull Request_ baru. Segala bentuk kontribusi sangat dihargai!

1.  Fork Project ini
2.  Buat Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit Perubahan (`git commit -m 'Add some AmazingFeature'`)
4.  Push ke Branch (`git push origin feature/AmazingFeature`)
5.  Buka Pull Request

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