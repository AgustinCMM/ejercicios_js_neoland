/* ============================================================
   MISIÓN 03 · El texto que se mueve
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const texto = document.getElementById('texto-mover');
const boton = document.getElementById('btn-centrar');
let estaCentrado = false;

boton.addEventListener("click", () => {
  if (estaCentrado == false) {
   texto.style.textAlign = "center";
   boton.innerText = "Mover a la izquierda";
   estaCentrado = true;
  } else {
   texto.style.textAlign = "left";
   boton.innerText = "Mover al centro";
   estaCentrado = false;
  }
});