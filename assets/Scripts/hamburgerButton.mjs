const boton=document.querySelector("#hamburger");
const nav=document.querySelector("#navbar");

function listenerHamburguer(e){
    e.stopPropagation();
    nav.classList.toggle("open");

}

export function listenerActivado(boolean){
    if(boolean){
    boton.addEventListener("click",listenerHamburguer);
    }else{
        boton.removeEventListener("click",listenerHamburguer);
    }
    
    }
