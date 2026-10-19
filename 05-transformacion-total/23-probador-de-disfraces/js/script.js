/* ============================================================
   MISIÓN 23 · El probador de disfraces
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const btnFuego = document.getElementById("btn-fuego");
const btnHielo = document.getElementById("btn-hielo");
const btnBosque = document.getElementById("btn-bosque");
const personaje = document.getElementById("personaje");

btnFuego.addEventListener("click", () => {
  personaje.className = "personaje fuego";
});
btnHielo.addEventListener("click", () => {
  personaje.className = "personaje hielo";
});
btnBosque.addEventListener("click", () => {
  personaje.className = "personaje bosque";
});