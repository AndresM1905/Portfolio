import { moveNav } from "./scriptNav.mjs";
import { moveImgCircle } from "./scriptImgCircle.mjs";
import { moveH1 } from "./scriptH1.mjs";
import { moveHr } from "./scriptHr.mjs";
import { moveH2 } from "./scriptH2.mjs";
import { moveWelcome } from "./BienvenidaInicial.mjs";
import { moveImgHead } from "./scriptImgHead.mjs";
import './hamburgerButton.mjs';
import { ocultarOpenNav } from "./NavOffConditions.mjs";
import "./CargaElementos.mjs";

/*
por si sigue sin cargar en chrome moviles.

document.addEventListener('DOMContentLoaded', function() {
  var welcomeImage = document.getElementById('welcome');
  welcomeImage.style.height = window.innerHeight + 'px';
});

*/

document.addEventListener('DOMContentLoaded', function() {







var valorActualScroll = 0;
// Función para actualizar el valor de desplazamiento
function actualizarScroll() {
    valorActualScroll = window.scrollY;
}


const desplazamientoObjetivo = 700;


//maaaaaaaaaaaas


let porcentajeDesplazamientoMas;
let porcentajeDesplazamiento;

//----------------------código animation------------------------

function animation() {
    actualizarScroll();

    // Cálculos y manipulaciones del DOM
    porcentajeDesplazamientoMas = Math.min(valorActualScroll / 920, 1);
    porcentajeDesplazamiento = Math.min(valorActualScroll / desplazamientoObjetivo, 1);

    moveNav(porcentajeDesplazamiento, porcentajeDesplazamientoMas);
    moveImgCircle(porcentajeDesplazamiento);
    moveH1(porcentajeDesplazamiento);
    moveHr(porcentajeDesplazamiento);
    moveH2(porcentajeDesplazamiento);
    moveWelcome(porcentajeDesplazamiento);
    moveImgHead(porcentajeDesplazamiento);

    // Solicitar al navegador que llame a animation nuevamente en el próximo frame
    requestAnimationFrame(animation);
}
//--------------------------------Listener--------------------------------
document.addEventListener("scroll",actualizarScroll);
document.addEventListener("scroll",ocultarOpenNav);

// Inicia el ciclo de animación
requestAnimationFrame(animation);



  });