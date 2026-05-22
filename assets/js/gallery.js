(function () {
  var modal = document.getElementById("lightboxModal");
  var modalImage = document.getElementById("lightboxImage");
  var modalCaption = document.getElementById("lightboxCaption");
  var closeButton = document.getElementById("closeLightbox");

  if (!modal || !modalImage || !closeButton) {
    return;
  }

  function openModal(src, alt) {
    modalImage.src = src;
    modalImage.alt = alt;
    modalCaption.textContent = alt;
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("overflow-hidden");
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    document.body.classList.remove("overflow-hidden");
  }

  document.querySelectorAll("[data-gallery-item]").forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button.getAttribute("data-image"), button.getAttribute("data-alt"));
    });
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
})();
