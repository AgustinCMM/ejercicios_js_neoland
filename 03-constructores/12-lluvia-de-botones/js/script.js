/* ============================================================
   MISIÓN 12 · Lluvia de botones
   ------------------------------------------------------------
   Archivo vinculado al index.html de esta carpeta.
   Escribe aquí tu solución. Todavía no hay código:
   el reto es tuyo.
   ============================================================ */

// TU CÓDIGO AQUÍ
const boton = document.createElement('button');
const contenedor = document.getElementById('zona-botones');

boton.textContent = "Soy un botón creado desde JS"

contenedor.appendChild(boton);