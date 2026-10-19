/* ============================================================
   MISIÓN 05 · Letras invisibles
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const texto = document.getElementById('texto-invisible');
const boton = document.getElementById('btn-invisible');
let estaCentrado = false;

boton.addEventListener("click", () => {
  if (estaCentrado == false) {
   texto.style.color = "#fffdf8";
   boton.innerText = "Hacer aparecer el texto";
   estaCentrado = true;
  } else {
   texto.style.color = "#2d2a24";
   boton.innerText = "Hacer desaparecer el texto";
   estaCentrado = false;
  }
});