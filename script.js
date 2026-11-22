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

  // Mostrar nombre al tocar un logo en móvil / pantallas táctiles
  const logoItems = document.querySelectorAll(".tech-logo-item");

  logoItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const alreadyActive = item.classList.contains("active");
      logoItems.forEach((other) => other.classList.remove("active"));
      if (!alreadyActive) {
        item.classList.add("active");
      }
    });
  });

  document.addEventListener("click", () => {
    logoItems.forEach((item) => item.classList.remove("active"));
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