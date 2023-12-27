const boton=document.querySelector("#hamburger");
const nav=document.querySelector("#navbar");

boton.addEventListener("click",(e)=>{
    e.stopPropagation();
    nav.classList.toggle("open");
    console.log("listenerBoton");
});