/* ============================================================
   MISIÓN 07 · El cambia-caras
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const img = document.getElementById('mascota');
const boton = document.getElementById('btn-cambiar-imagen');
let esGatito = false;

boton.addEventListener("click", () => {
  if (esGatito == false) {
   img.src = "./img/gatito.svg";
   boton.innerText = "Cambiar a perrito";
   esGatito = true;
  } else {
   img.src = "./img/perrito.svg";
   boton.innerText = "Cambiar a gatito";
   esGatito = false;
  }
});