/* ============================================================
   MISIÓN 08 · El enlace mentiroso
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const enlace = document.getElementById('enlace-disney');
const boton = document.getElementById('btn-enlace');

boton.addEventListener('click', () => {
   enlace.href = "https://www.wikipedia.org/";
})