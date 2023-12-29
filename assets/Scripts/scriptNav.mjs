import {listenerActivado  } from "./hamburgerButton.mjs";
let navScroll=document.querySelector("#navbar");
let grados;
var estilo = window.getComputedStyle(navScroll);
var posicion = estilo.getPropertyValue("position");
const h3Portfolio=document.querySelector("#portfolio>h3");
const portfolio=document.querySelector("#portfolio");
const bofy= document.querySelector("body");
const header= document.querySelector("header");
const main=document.querySelector("main");

export function moveNav(porcentajeDesplazamiento, porcentajeDesplazamientoMas) {

    if (porcentajeDesplazamiento >= 1) {

        estilo = window.getComputedStyle(navScroll);
        posicion = estilo.getPropertyValue("position");

        if (posicion !== 'sticky') {
            bofy.insertBefore(navScroll, main);
            navScroll.style.top = '68px';
            navScroll.style.position = 'sticky';
            navScroll.style.transform = "translate(0px,-68px)";
            h3Portfolio.classList.toggle("navRelative");
            portfolio.classList.toggle("navRelative");
            navScroll.style.opacity = (1);
            navScroll.style.borderRadius = (0) + "px";
            navScroll.style["box-shadow"] = '0px 0px 10px 1px var(--gray3)';
            listenerActivado(true);
        }
    } else {

        estilo = window.getComputedStyle(navScroll);
        posicion = estilo.getPropertyValue("position");

        if (posicion !== "relative" && porcentajeDesplazamiento < 1) {
            listenerActivado(false);
            header.appendChild(navScroll);
            navScroll.style.position = "relative";
            navScroll.classList.remove("open")
            h3Portfolio.classList.toggle("navRelative");
            portfolio.classList.toggle("navRelative");
        }
        if (posicion === "relative") {

            //---------bloque top-------
            var bajada = porcentajeDesplazamiento * 985;
            navScroll.style.top = (bajada) + "px";
            //---------bloque rotacion-------
            grados = porcentajeDesplazamiento * 90;
            navScroll.style.transform = 'rotate(' + (90 - grados) + 'deg)';
           //---------bloque rigth-------
            var desplazamiento = porcentajeDesplazamiento * 450;
            navScroll.style.right = (-450 + desplazamiento) + "px";
             //---------bloque opacity-------
            var opacityNav = porcentajeDesplazamiento * 1;
            navScroll.style.opacity = (opacityNav);
            //--------------border radio-----------------
            var borderRadio = porcentajeDesplazamiento * 150;
            //console.log();
            navScroll.style.borderRadius = (150 - borderRadio) + "px";
        }
    }
}