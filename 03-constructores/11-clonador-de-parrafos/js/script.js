/* ============================================================
   MISIÓN 11 · El clonador de párrafos
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const contenedor = document.getElementById("zona-clones");
const texto = "Los párrafos clonados aparecerán aquí abajo.<br>↓";
const boton = document.getElementById("btn-clonar");

boton.addEventListener("click", () => {
   const nuevoParrafo = document.createElement("p");
   nuevoParrafo.innerHTML = texto;
   nuevoParrafo.classList.add("nota");
   contenedor.appendChild(nuevoParrafo);
});
