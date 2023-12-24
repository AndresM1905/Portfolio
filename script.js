let boton=document.querySelector("#hamburger");
let nav=document.querySelector("#navbar");

boton.addEventListener("click",()=>{
    nav.classList.toggle("open");
});


document.querySelector('nav').addEventListener('click', function(event) {
    event.stopPropagation();
});


let header=document.querySelector("header");

let navScroll=document.querySelector("#navbar");
let topNav=100;
let rotateNav=90;
let rigthNav= -450;
let opacityNav=0;




var valorActualScroll = 0;
var scrollBaja = 1;
// Función para actualizar el valor de desplazamiento
function actualizarScroll() {
    valorActualScroll = window.scrollY;
}


var desplazamientoObjetivo = 700;
var grados=0;

document.addEventListener("scroll",()=>{
topCentro=document.querySelector("#portfolio").getBoundingClientRect().top;
buttomNav=nav.getBoundingClientRect().bottom;

 actualizarScroll();

    if(buttomNav>topCentro && nav.classList.contains("open")){
        nav.classList.toggle("open");
    }
//animation

var porcentajeDesplazamiento = Math.min(valorActualScroll / desplazamientoObjetivo, 1);
console.log(porcentajeDesplazamiento);
//---------bloque rotacion-------


grados = porcentajeDesplazamiento * 90; // 360 grados para una rotación completa

navScroll.style.transform = 'rotate(' + (90-grados) + 'deg)';

//---------bloque rigth-------


var desplazamiento = porcentajeDesplazamiento * 450; // 360 grados para una rotación completa
navScroll.style.right= (-450+desplazamiento)+"px";

//---------bloque opacity-------

var opacityNav = porcentajeDesplazamiento * 1; // 360 grados para una rotación completa
navScroll.style.opacity= (opacityNav);

//---------bloque top-------

var bajada = porcentajeDesplazamiento * 1000;
navScroll.style.top= (300+bajada)+"px";

//-------------------------------

});
window.addEventListener("click",()=>{
if(nav.classList.contains("open")){
    nav.classList.remove("open") ; 
};

});



boton.addEventListener("click",()=>{
    nav.classList.toggle("open");

    //header.classList.toggle("scroll");
    //nav.classList.toggle("navScroll");
    
});
