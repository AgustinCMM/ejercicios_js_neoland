/* ============================================================
   MISIÓN 13 · El título impostor
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const h2Sorpresa = document.createElement('h2');
const boton = document.getElementById('btn-sorpresa');
const contenedor = document.getElementById('cajita');

h2Sorpresa.textContent = "¡Sorpresa!"
boton.addEventListener('click', () => {
   contenedor.appendChild(h2Sorpresa);
})
