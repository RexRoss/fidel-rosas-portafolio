document.addEventListener("DOMContentLoaded", () => {
  // Año automático en el footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Filtrado de tarjetas de proyectos
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (selectedCategory === "todos" || cardCategory === selectedCategory) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Copiar correo al portapapeles
  const copyBtn = document.getElementById("copy-email-btn");
  const emailText = document.getElementById("email-display");

  if (copyBtn && emailText) {
    copyBtn.addEventListener("click", async () => {
      const correo = emailText.textContent.trim();
      try {
        await navigator.clipboard.writeText(correo);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "¡Copiado!";
        setTimeout(() => {
          copyBtn.textContent = originalText;
        }, 2000);
      } catch {
        copyBtn.textContent = correo;
      }
    });
  }
});