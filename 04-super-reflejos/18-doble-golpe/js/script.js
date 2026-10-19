/* ============================================================
   MISIÓN 18 · El doble golpe
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const titulo = document.getElementById('titulo-duro');

titulo.addEventListener('dblclick', () => {
   titulo.textContent = "¡Me rompiste!";
})