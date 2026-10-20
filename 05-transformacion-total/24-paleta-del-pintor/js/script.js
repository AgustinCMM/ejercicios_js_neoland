/* ============================================================
   MISIÓN 24 · La paleta del pintor
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const color = document.getElementById('color-lienzo');
const lienzo = document.getElementById('lienzo');

color.addEventListener('input', () => {
   lienzo.style.backgroundColor = color.value;
})