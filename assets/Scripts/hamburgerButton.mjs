const boton=document.querySelector("#hamburger");
const nav=document.querySelector("#navbar");

boton.addEventListener("click",()=>{
    nav.classList.toggle("open");
    event.stopPropagation();
});