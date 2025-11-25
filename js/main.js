const cards = document.querySelectorAll(".product-card");
const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const closeModal = document.querySelector(".close-modal");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalPrice.textContent = card.dataset.price;
    modal.classList.add("open");
  });
});

closeModal.onclick = () => modal.classList.remove("open");
modal.onclick = e => { if (e.target === modal) modal.classList.remove("open"); };
