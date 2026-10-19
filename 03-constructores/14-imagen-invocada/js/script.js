/* ============================================================
   MISIÓN 14 · La imagen invocada
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const img = document.createElement('img');
const boton = document.getElementById('btn-invocar-imagen');
const contenedor = document.getElementById('galeria');

img.src = "https://picsum.photos/seed/neoland/400/300"
boton.addEventListener('click', () => {
   contenedor.appendChild(img);
})