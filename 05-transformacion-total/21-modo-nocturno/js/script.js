/* ============================================================
   MISIÓN 21 · El Modo Nocturno
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const boton = document.getElementById('btn-noche');
const pagina = document.getElementById('pagina');
let noche = false;

boton.addEventListener('click', () => {
   if (noche == false) {
      pagina.classList.add('noche');
      noche = true;
   } else {
      pagina.classList.remove('noche');
      noche = false;
   }
});