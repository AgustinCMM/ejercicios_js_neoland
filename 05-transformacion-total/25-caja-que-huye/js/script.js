/* ============================================================
   MISIÓN 25 · La caja que huye de ti
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const boton = document.getElementById("btn-huir");
const zona = document.getElementById("zona-huida");

function moverBoton() {
  const anchoDisponible = zona.clientWidth - boton.offsetWidth;
  const altoDisponible = zona.clientHeight - boton.offsetHeight;

  boton.style.left = Math.random() * anchoDisponible + "px";
  boton.style.top = Math.random() * altoDisponible + "px";
}

boton.addEventListener("mousemove", moverBoton);
boton.addEventListener("mousedown", moverBoton);