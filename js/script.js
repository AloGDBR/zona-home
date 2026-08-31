/* ==============================
   PANTALLAS
============================== */

function mostrarPantalla(id) {

  const pantallas =
    document.querySelectorAll(".pantalla");

  pantallas.forEach(pantalla => {
    pantalla.classList.remove("activa");
  });

  const destino =
    document.getElementById(id);

  if (destino) {
    destino.classList.add("activa");
  }

  window.scrollTo(0, 0);
}


/* ==============================
   MENÚ
============================== */

function abrirMenu() {

  document
    .getElementById("menuLateral")
    .classList.add("abierto");

  document
    .getElementById("overlay")
    .classList.add("activo");
}


function cerrarMenu() {

  document
    .getElementById("menuLateral")
    .classList.remove("abierto");

  document
    .getElementById("overlay")
    .classList.remove("activo");
}


function irDesdeMenu(id) {

  mostrarPantalla(id);

  cerrarMenu();
}


function toggleJuegos() {

  document
    .getElementById("submenuJuegos")
    .classList.toggle("abierto");
}


/* ==============================
   CARRUSEL
============================== */

let slideActual = 0;

const totalSlides = 4;


function actualizarCarrusel() {

  const track =
    document.getElementById("carruselTrack");

  if (!track) return;

  track.style.transform =
    `translateX(-${slideActual * 100}%)`;


  const dots =
    document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {

    dot.classList.toggle(
      "activo",
      index === slideActual
    );

  });
}


function cambiarSlide(direccion) {

  slideActual =
    slideActual + direccion;

  if (slideActual >= totalSlides) {
    slideActual = 0;
  }

  if (slideActual < 0) {
    slideActual = totalSlides - 1;
  }

  actualizarCarrusel();
}


function irASlide(numero) {

  slideActual = numero;

  actualizarCarrusel();
}


/* CAMBIO AUTOMÁTICO */

setInterval(() => {

  cambiarSlide(1);

}, 5000);


/* SWIPE EN CELULAR */

let inicioTouch = 0;

document.addEventListener(
  "touchstart",
  function(evento) {

    const carrusel =
      evento.target.closest(".carrusel");

    if (!carrusel) return;

    inicioTouch =
      evento.touches[0].clientX;

  }
);


document.addEventListener(
  "touchend",
  function(evento) {

    const carrusel =
      evento.target.closest(".carrusel");

    if (!carrusel) return;

    const finalTouch =
      evento.changedTouches[0].clientX;

    const diferencia =
      inicioTouch - finalTouch;


    if (Math.abs(diferencia) > 50) {

      if (diferencia > 0) {

        cambiarSlide(1);

      }

      else {

        cambiarSlide(-1);

      }

    }

  }
);


/* ==============================
   RECOMPENSAS
============================== */

function mostrarRecompensa(id, boton) {

  const contenidos =
    document.querySelectorAll(
      ".contenido-recompensa"
    );

  contenidos.forEach(contenido => {

    contenido.classList.remove(
      "activo"
    );

  });


  const tabs =
    document.querySelectorAll(
      ".tab-recompensa"
    );

  tabs.forEach(tab => {

    tab.classList.remove(
      "activo"
    );

  });


  document
    .getElementById(id)
    .classList.add("activo");


  boton.classList.add("activo");
}


/* ==============================
   TRIVIA
============================== */

function seleccionarRespuesta(boton) {

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


/* ==============================
   FILTROS
============================== */

function activarFiltro(boton) {

  const filtros =
    document.querySelectorAll(
      ".filtros-video button"
    );

  filtros.forEach(filtro => {

    filtro.classList.remove(
      "activo"
    );

  });

  boton.classList.add("activo");

  mostrarMensaje(
    "Filtro seleccionado"
  );
}


/* ==============================
   CONFIGURACIÓN
============================== */

function toggleConfig(boton) {

  if (
    boton.textContent.trim()
    === "Activado"
  ) {

    boton.textContent =
      "Desactivado";

  }

  else {

    boton.textContent =
      "Activado";

  }
}


/* ==============================
   MENSAJES
============================== */

function mostrarMensaje(texto) {

  const mensaje =
    document.getElementById("mensaje");

  mensaje.textContent = texto;

  mensaje.classList.add("mostrar");


  setTimeout(() => {

    mensaje.classList.remove(
      "mostrar"
    );

  }, 1500);
}


/* ==============================
   SPLASH
============================== */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    setTimeout(() => {

      mostrarPantalla("inicio");

    }, 2300);

  }
);
