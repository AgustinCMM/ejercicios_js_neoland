/* ============================================================
   MISIÓN 01 · El semáforo rojo
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const rojo = "#f00";
const gris = "#f4f1ea";
const boton = document.getElementById('btn-semaforo');
const botonTxt = document.getElementById('btn-semaforo');
const fondo = document.body;
let estaRojo = false;

boton.addEventListener("click", () => {
  if (estaRojo == false) {
   fondo.style.backgroundColor = rojo;
   botonTxt.innerText = "⚪ Apagar el semáforo";
   estaRojo = true;
  } else {
   fondo.style.backgroundColor = gris;
   botonTxt.innerText = "🔴 Encender el semáforo";
   estaRojo = false;
  }
});

