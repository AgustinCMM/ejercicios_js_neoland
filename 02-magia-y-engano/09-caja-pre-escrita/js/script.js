/* ============================================================
   MISIÓN 09 · La caja pre-escrita
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ

// Versión estática
/*
const input = document.getElementById('nombre');
const boton = document.getElementById('btn-robot');

boton.addEventListener('click', () => {
   input.value = "¡Hola, soy un robot!";
})
*/

// Versión animada
const input = document.getElementById("nombre");
const boton = document.getElementById("btn-robot");
const mensaje = "¡Hola, soy un robot!";

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

boton.addEventListener("click", async () => {
  boton.disabled = true;
  input.value = "";
  input.focus();

  for (const letra of mensaje) {
    input.value += letra;
    await esperar(90);
  }

  boton.disabled = false;
});