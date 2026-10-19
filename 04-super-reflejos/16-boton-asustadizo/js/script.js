/* ============================================================
   MISIÓN 16 · El botón asustadizo
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const boton = document.getElementById('btn-asustadizo');

boton.addEventListener('mouseover', () => {
   boton.style.backgroundColor = "#cfcf00";
   boton.style.boxShadow = "0 3px 0 #7d8600";
})