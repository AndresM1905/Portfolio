let boton=document.querySelector("#hamburger");
let nav=document.querySelector("#navbar");

boton.addEventListener("click",()=>{
    nav.classList.toggle("open");
});


document.querySelector('nav').addEventListener('click', function(event) {
    event.stopPropagation();
});



document.addEventListener("scroll",()=>{
topCentro=document.querySelector("#portfolio").getBoundingClientRect().top;
buttomNav=nav.getBoundingClientRect().bottom;

    if(buttomNav>topCentro && nav.classList.contains("open")){
        nav.classList.toggle("open");
    }

});
window.addEventListener("click",()=>{
if(nav.classList.contains("open")){
    nav.classList.remove("open") ; 
};

});

