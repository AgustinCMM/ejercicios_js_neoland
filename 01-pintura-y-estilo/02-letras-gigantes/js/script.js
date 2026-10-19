/* ============================================================
   MISIÓN 02 · Letras gigantes
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const titulo = document.getElementById('titulo-gigante');
const boton = document.getElementById('btn-gigante');
let esGrande = false;

boton.addEventListener("click", () => {
  if (esGrande == false) {
   titulo.style.fontSize = "5rem";
   titulo.style.textTransform = "uppercase";
   boton.innerText = "Hacerlo pequeno";
   esGrande = true;
  } else {
   titulo.style.fontSize = "2rem";
   titulo.style.textTransform = "capitalize";
   boton.innerText = "¡HACERLO GIGANTE!";
   esGrande = false;
  }
});