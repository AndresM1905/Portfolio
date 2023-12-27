let navScroll=document.querySelector("#navbar");
let grados;
var estilo = window.getComputedStyle(navScroll);
var posicion = estilo.getPropertyValue("position");
const h3Portfolio=document.querySelector("#portfolio>h3");
const portfolio=document.querySelector("#portfolio");

export function moveNav(porcentajeDesplazamiento, porcentajeDesplazamientoMas) {

    if (porcentajeDesplazamientoMas >= 1) {

        estilo = window.getComputedStyle(navScroll);
        posicion = estilo.getPropertyValue("position");

        if (posicion !== 'sticky') {
            navScroll.style.top = '50px';
            navScroll.style.position = 'sticky';
            navScroll.style.transform = "translate(0px," + -50 + "px)";
            h3Portfolio.classList.toggle("navRelative");
            portfolio.classList.toggle("navRelative");
            navScroll.style.opacity = (1);
            navScroll.style.borderRadius = (0) + "px";
        }
    } else {

        estilo = window.getComputedStyle(navScroll);
        posicion = estilo.getPropertyValue("position");

        if (posicion !== "absolute" && porcentajeDesplazamiento < 1) {
            navScroll.style.position = "absolute";
            navScroll.style.top = 1300 + "px";
            h3Portfolio.classList.toggle("navRelative");
            portfolio.classList.toggle("navRelative");
        }
        if (posicion === "absolute") {
            //---------bloque rotacion-------
            grados = porcentajeDesplazamiento * 90;
            navScroll.style.transform = 'rotate(' + (90 - grados) + 'deg)';
            //---------bloque rigth-------
            var desplazamiento = porcentajeDesplazamiento * 450;
            navScroll.style.right = (-450 + desplazamiento) + "px";
            //---------bloque opacity-------
            var opacityNav = porcentajeDesplazamiento * 1;
            navScroll.style.opacity = (opacityNav);
            //---------bloque top-------
            var bajada = porcentajeDesplazamiento * 1000;
            navScroll.style.top = (300 + bajada) + "px";
            //--------------border radio-----------------
            var borderRadio = porcentajeDesplazamiento * 150;
            //console.log();
            navScroll.style.borderRadius = (150 - borderRadio) + "px";
        }
    }
}