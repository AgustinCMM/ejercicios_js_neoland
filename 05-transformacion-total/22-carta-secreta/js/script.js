/* ============================================================
   MISIÓN 22 · La carta secreta que aparece lentamente
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const boton = document.getElementById('btn-carta');
const carta = document.getElementById('carta');

boton.addEventListener('click', () => {
   carta.style.opacity = "1";
});