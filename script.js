let boton=document.querySelector("#hamburger");
let nav=document.querySelector("#navbar");

boton.addEventListener("click",()=>{
    nav.classList.toggle("open");
});


document.addEventListener("scroll",()=>{
topCentro=document.querySelector("#portfolio").getBoundingClientRect().top;
buttomNav=nav.getBoundingClientRect().bottom;

    if(buttomNav>topCentro && nav.classList.contains("open")){
        nav.classList.toggle("open");
    }

});

