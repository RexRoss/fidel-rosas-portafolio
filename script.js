document.addEventListener("DOMContentLoaded", () => {
  // Año actual en el pie
  const spanAnio = document.getElementById("año-actual");
  if (spanAnio) {
    spanAnio.textContent = new Date().getFullYear();
  }

  // Filtrado de tarjetas
  const botonesFiltro = document.querySelectorAll(".boton-filtro");
  const tarjetas = document.querySelectorAll(".tarjeta-proyecto");

  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
      botonesFiltro.forEach((b) => b.classList.remove("activo"));
      boton.classList.add("activo");

      const filtro = boton.getAttribute("data-filtro");

      tarjetas.forEach((tarjeta) => {
        const categoria = tarjeta.getAttribute("data-categoria");
        if (filtro === "todos" || categoria === filtro) {
          tarjeta.classList.remove("oculto");
        } else {
          tarjeta.classList.add("oculto");
        }
      });
    });
  });

  // Mostrar nombre al tocar en móvil
  const itemsLogo = document.querySelectorAll(".item-logo");

  itemsLogo.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const yaActivo = item.classList.contains("activo");
      itemsLogo.forEach((otro) => otro.classList.remove("activo"));
      if (!yaActivo) {
        item.classList.add("activo");
      }
    });
  });

  document.addEventListener("click", () => {
    itemsLogo.forEach((item) => item.classList.remove("activo"));
  });

  // Copiar correo
  const btnCopiar = document.getElementById("boton-copiar-correo");
  const textoCorreo = document.getElementById("correo-texto");

  if (btnCopiar && textoCorreo) {
    btnCopiar.addEventListener("click", async () => {
      const correo = textoCorreo.textContent.trim();
      try {
        await navigator.clipboard.writeText(correo);
        const textoOriginal = btnCopiar.textContent;
        btnCopiar.textContent = "Copiado";
        setTimeout(() => {
          btnCopiar.textContent = textoOriginal;
        }, 2000);
      } catch {
        btnCopiar.textContent = correo;
      }
    });
  }
});