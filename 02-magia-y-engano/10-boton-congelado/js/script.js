/* ============================================================
   MISIÓN 10 · El botón congelado
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const boton = document.getElementById('btn-congelado');

boton.addEventListener('click', () => {
   boton.disabled = true;
})