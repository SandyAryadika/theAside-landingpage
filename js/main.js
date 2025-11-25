/* --- 1. MODAL PRODUCT POPUP DENGAN WHATSAPP --- */
const cards = document.querySelectorAll(".product-card");
const modal = document.getElementById("modal");

// Elemen di dalam modal
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const waLink = document.getElementById("wa-link"); // Ambil elemen tombol WA
const closeModal = document.querySelector(".close-modal");

// Nomor WA Admin (Ganti dengan nomor Anda untuk tes)
const phoneNumber = "628129999999"; 

if (cards.length > 0 && modal) {
  cards.forEach(card => {
    card.addEventListener("click", () => {
      // 1. Ambil data dari atribut HTML
      const imgSrc = card.getAttribute("data-img");
      const title = card.getAttribute("data-title");
      const price = card.getAttribute("data-price");

      // 2. Masukkan data visual ke modal
      if(modalImg) modalImg.src = imgSrc;
      if(modalTitle) modalTitle.textContent = title;
      if(modalPrice) modalPrice.textContent = price;

      // 3. GENERATE LINK WHATSAPP OTOMATIS
      // Format pesan: "Halo, saya mau order [Nama Produk] seharga [Harga]"
      const message = `Halo Admin The A-side, saya mau order *${title}* seharga *${price}*. Apakah stok masih ada?`;
      
      // Encode pesan agar aman untuk URL
      const encodedMessage = encodeURIComponent(message);
      
      // Set href pada tombol
      if(waLink) {
        waLink.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      }

      // 4. Tampilkan modal
      modal.classList.add("open");
    });
  });
}

// Tombol tutup modal
if (closeModal) {
  closeModal.onclick = () => {
    modal.classList.remove("open");
  };
}

// Klik di luar modal untuk menutup
window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
};


/* --- 2. MOBILE MENU TOGGLE --- */
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}


/* --- 3. SCROLL ANIMATION (REVEAL) --- */
const revealElements = document.querySelectorAll(".reveal");

const observerOptions = {
  threshold: 0.15 
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

revealElements.forEach(el => {
  revealOnScroll.observe(el);
});