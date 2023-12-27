let nav=document.querySelector("#navbar");
let topCentro=document.querySelector("#portfolio").getBoundingClientRect().top;
let buttomNav=nav.getBoundingClientRect().bottom;

export function ocultarOpenNav(){
topCentro=document.querySelector("#portfolio").getBoundingClientRect().top;
buttomNav=nav.getBoundingClientRect().bottom;
if(buttomNav>topCentro && nav.classList.contains("open")){
    nav.classList.toggle("open");
}
}

window.addEventListener("click",()=>{
    if(nav.classList.contains("open")){
          nav.classList.remove("open") ;
    };
    
    });