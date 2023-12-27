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






var valorActualScroll = 0;
// Función para actualizar el valor de desplazamiento
function actualizarScroll() {
    valorActualScroll = window.scrollY;
}


const desplazamientoObjetivo = 700;


//maaaaaaaaaaaas


let porcentajeDesplazamientoMas;
let porcentajeDesplazamiento;


//---------------------------limitador---------------------------------------
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this
        if (!lastRan) {
            func();
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func();
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

//----------------------código animation------------------------

function hola(){console.log("hola");}

function animation(){



 actualizarScroll();

  
 //animation
 porcentajeDesplazamientoMas = Math.min(valorActualScroll / 920, 1);
 porcentajeDesplazamiento = Math.min(valorActualScroll / desplazamientoObjetivo, 1);
 
 moveNav(porcentajeDesplazamiento,porcentajeDesplazamientoMas);
 moveImgCircle(porcentajeDesplazamiento);
 moveH1(porcentajeDesplazamiento);
 moveHr(porcentajeDesplazamiento);
 moveH2(porcentajeDesplazamiento);
 moveWelcome(porcentajeDesplazamiento);
 moveImgHead(porcentajeDesplazamiento);
 
 
 ocultarOpenNav();
};
//--------------------------------Listener--------------------------------
document.addEventListener("scroll",throttle(animation, 1));