/* ============================================================
   MISIÓN 19 · El espía del teclado
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const input = document.getElementById('espia');

function generarColor() {
  const tono = Math.floor(Math.random() * 360);
  return `hsl(${tono}, 70%, 50%)`;
}

input.addEventListener('keyup', () => {
   document.body.style.backgroundColor = generarColor();
})