/* ============================================================
   MISIÓN 20 · El camaleón de etiquetas
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const p1 = document.getElementById('p_uno');
const p2 = document.getElementById('p_dos');
const p3 = document.getElementById('p_tres');

p1.addEventListener('click', () => {
   p1.classList.add('clase-magica');
});
p2.addEventListener('click', () => {
   p2.classList.add('clase-magica');
});
p3.addEventListener('click', () => {
   p3.classList.add('clase-magica');
});