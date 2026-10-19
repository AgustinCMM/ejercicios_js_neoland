/* ============================================================
   MISIÓN 04 · Esquinas suavecitas
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const caja = document.getElementById('caja-cuadrada');
const boton = document.getElementById('btn-redondear');
let estaCentrado = false;

boton.addEventListener("click", () => {
  if (estaCentrado == false) {
   caja.style.borderRadius = "20px";
   boton.innerText = "Esquinas rectas";
   estaCentrado = true;
  } else {
   caja.style.borderRadius = "0px";
   boton.innerText = "Esquinas redondeadas";
   estaCentrado = false;
  }
});