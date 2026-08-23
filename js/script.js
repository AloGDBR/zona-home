/* =========================
   CAMBIAR PANTALLA
========================= */

function mostrarPantalla(id) {

  const pantallas =
    document.querySelectorAll(".pantalla");


  pantallas.forEach(pantalla => {

    pantalla.classList.remove("activa");

  });


  const destino =
    document.getElementById(id);


  if(destino){

    destino.classList.add("activa");

  }


  window.scrollTo(0,0);

}



/* =========================
   MENÚ
========================= */

function abrirMenu(){

  document
    .getElementById("menuLateral")
    .classList.add("abierto");


  document
    .getElementById("overlay")
    .classList.add("activo");

}



function cerrarMenu(){

  document
    .getElementById("menuLateral")
    .classList.remove("abierto");


  document
    .getElementById("overlay")
    .classList.remove("activo");

}



function irDesdeMenu(id){

  mostrarPantalla(id);

  cerrarMenu();

}



/* =========================
   SUBMENÚ JUEGOS
========================= */

function toggleJuegos(){

  const submenu =
    document.getElementById("submenuJuegos");


  submenu.classList.toggle("abierto");

}



/* =========================
   MENSAJES
========================= */

function mostrarMensaje(texto){

  const mensaje =
    document.getElementById("mensaje");


  mensaje.textContent =
    texto;


  mensaje.classList.add("mostrar");


  setTimeout(() => {

    mensaje.classList.remove("mostrar");

  },1500);

}



/* =========================
   TRIVIA
========================= */

function seleccionarRespuesta(boton){

  const respuestas =
    document.querySelectorAll(
      ".respuestas button"
    );


  respuestas.forEach(respuesta => {

    respuesta.classList.remove(
      "seleccionado"
    );

  });


  boton.classList.add(
    "seleccionado"
  );

}



/* =========================
   FILTROS VIDEO
========================= */

function activarFiltro(boton){

  const filtros =
    document.querySelectorAll(
      ".filtros-video button"
    );


  filtros.forEach(filtro => {

    filtro.classList.remove(
      "activo"
    );

  });


  boton.classList.add(
    "activo"
  );


  mostrarMensaje(
    "Filtro seleccionado"
  );

}



/* =========================
   CONFIGURACIÓN
========================= */

function toggleConfig(boton){

  if(
    boton.textContent.trim()
    === "Activado"
  ){

    boton.textContent =
      "Desactivado";

    boton.style.color =
      "#E65C2E";

    boton.style.background =
      "rgba(230,92,46,.1)";

  }

  else{

    boton.textContent =
      "Activado";

    boton.style.color =
      "#138A43";

    boton.style.background =
      "rgba(19,138,67,.1)";

  }

}



/* =========================
   SPLASH SCREEN
========================= */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    setTimeout(() => {

      mostrarPantalla("inicio");

    },2300);

  }
);