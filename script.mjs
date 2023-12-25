let boton=document.querySelector("#hamburger");
let nav=document.querySelector("#navbar");

boton.addEventListener("click",()=>{
    nav.classList.toggle("open");
});


document.querySelector('#hamburger').addEventListener('click', function(event) {
    event.stopPropagation();
});


let header=document.querySelector("header");
let imgCircle=document.querySelector("#imgCirrcle");
let h1=document.querySelector("#h1");
let hr=document.querySelector("#hr");
let h2=document.querySelector("#h2");
let imgWelcome=document.querySelector("#welcome");
let h1Welcome=document.querySelector("#h1Welcome");
let imagenHeader=document.querySelector("#imagenHeader");



let navScroll=document.querySelector("#navbar");
let topNav=100;
let rotateNav=90;
let rigthNav= -450;
let opacityNav=0;





var valorActualScroll = 0;
// Función para actualizar el valor de desplazamiento
function actualizarScroll() {
    valorActualScroll = window.scrollY;
}


var desplazamientoObjetivo = 700;


//maaaaaaaaaaaas
let porcentajeDesplazamientoMas;


var estilo = window.getComputedStyle(navScroll);
var posicion = estilo.getPropertyValue("position");

document.addEventListener("scroll",()=>{
topCentro=document.querySelector("#portfolio").getBoundingClientRect().top;
buttomNav=nav.getBoundingClientRect().bottom;

estilo = window.getComputedStyle(navScroll);
posicion = estilo.getPropertyValue("position");

 actualizarScroll();

    if(buttomNav>topCentro && nav.classList.contains("open")){
        nav.classList.toggle("open");
    }
//animation
porcentajeDesplazamientoMas = Math.min(valorActualScroll / 920, 1);
var porcentajeDesplazamiento = Math.min(valorActualScroll / desplazamientoObjetivo, 1);

moveNav(porcentajeDesplazamiento);
moveImgCircle(porcentajeDesplazamiento);
moveH1(porcentajeDesplazamiento);
moveHr(porcentajeDesplazamiento);
moveH2(porcentajeDesplazamiento);
moveImgWelcome(porcentajeDesplazamiento);
moveImgHead(porcentajeDesplazamiento);


});
window.addEventListener("click",()=>{
if(nav.classList.contains("open")){
      nav.classList.remove("open") ;
};

});


function moveImgHead(porcentajeDesplazamiento){
    //imagenHeader

//---------bloque top-------
    
var bajada = porcentajeDesplazamiento * 55;
imagenHeader.style.top= (-30+bajada)+"%";
};



function moveImgWelcome(porcentajeDesplazamiento){
    var opacityImgWelcome = porcentajeDesplazamiento * 2; 
    imgWelcome.style.opacity=1-opacityImgWelcome;
    h1Welcome.style.opacity=1-opacityImgWelcome;
};

function moveH2(porcentajeDesplazamiento){

    //---------bloque opacity--------
    
    var opacityH1 = porcentajeDesplazamiento * 1; 
    h2.style.opacity= (opacityH1);

       
    //---------bloque top-------
    
    var bajada = porcentajeDesplazamiento * 1820;
    h2.style.top= (-900+bajada)+"px";
    
    //---------bloque translate-X -------
    
    
    var desplazamiento = porcentajeDesplazamiento * 60;
    
    //h2.style.left= (-60+desplazamiento)+"%";
    
    //---------bloque rotacion-------
    let grados = porcentajeDesplazamiento *500; //
    
    //h2.style.transform = 'rotate(' + (-500+grados) + 'deg)';
    
    //---------bloque tamaño-------
    
    let tamano = porcentajeDesplazamiento * 0.9; //
    
    //h2.style.fontSize = (0.1+tamano)+"rem";
    
    
    //-------------------------------
    
    }

function moveHr(porcentajeDesplazamiento){

    //---------bloque top-------
    //920
    //420
    
    
    var bajada = porcentajeDesplazamiento * 520;
    hr.style.top = 400+bajada+"px;";

    //---------bloque tamaño-------
    
    let tamano = porcentajeDesplazamiento * 100; 
    
    hr.style.width = tamano+"%";
    
    }

function moveH1(porcentajeDesplazamiento){


    //---------bloque opacity--------
    
    var opacityH1 = porcentajeDesplazamiento * 1; 
    h1.style.opacity= (opacityH1);
    
    //---------bloque translate-X -------
    
    
    var desplazamiento = porcentajeDesplazamiento * 60;
    
    h1.style.left= (-60+desplazamiento)+"%";
    
    //---------bloque rotacion-------
    let grados = porcentajeDesplazamiento *500; //
    
    h1.style.transform = 'rotate(' + (-500+grados) + 'deg)';
    
    //---------bloque tamaño-------
    
    let tamano = porcentajeDesplazamiento * 0.9; //
    
    h1.style.fontSize = (0.1+tamano)+"rem";
    
    
    //--------- bloque top ---------
    //920
    var bajada = porcentajeDesplazamiento * 1920;
    h1.style.top= (-1000+bajada)+"px";
    
    //-------------------------------
    
    }


function moveImgCircle(porcentajeDesplazamiento){


//---------bloque opacity-------

var opacityNav = porcentajeDesplazamiento * 1; 
imgCircle.style.opacity= (opacityNav);

//---------bloque translate-X -------


var desplazamiento = porcentajeDesplazamiento * 60;

imgCircle.style.left= (-60+desplazamiento)+"%";

//---------bloque rotacion-------
let grados = porcentajeDesplazamiento * 130; //

imgCircle.style.transform = 'rotate(' + (130-grados) + 'deg)';

//---------bloque width-------

let ancho = porcentajeDesplazamiento * 700; //

imgCircle.style.width =(900-ancho)+"px";


//---------bloque top-------

var bajada = porcentajeDesplazamiento * 450;
imgCircle.style.top= (450+bajada)+"px";

//-------------------------------

}




let grados;

function moveNav (porcentajeDesplazamiento){

   console.log("mas:",porcentajeDesplazamientoMas);
if(porcentajeDesplazamientoMas>=1){

    if(posicion!=='sticky'){
    navScroll.style.top = '50px';
    navScroll.style.position = 'sticky';
    navScroll.style.transform = "translate(0px,"+-50+"px)";
    document.querySelector("#portfolio>h3").classList.toggle("navRelative");
    document.querySelector("#portfolio").classList.toggle("navRelative");
    //transform: translate(0, -20px);
}

    
   
     
}else{

    if(posicion!=="absolute"&&porcentajeDesplazamiento<1){
        navScroll.style.position = "absolute";
        navScroll.style.top= 1300+"px";
        document.querySelector("#portfolio>h3").classList.toggle("navRelative");
    document.querySelector("#portfolio").classList.toggle("navRelative");

    }

if(posicion==="absolute"){

//---------bloque rotacion-------
grados = porcentajeDesplazamiento * 90;

navScroll.style.transform = 'rotate(' + (90-grados) + 'deg)';

//---------bloque rigth-------


var desplazamiento = porcentajeDesplazamiento * 450; //
navScroll.style.right= (-450+desplazamiento)+"px";

//---------bloque opacity-------

var opacityNav = porcentajeDesplazamiento * 1; // 360 grados para una rotación completa
navScroll.style.opacity= (opacityNav);

//---------bloque top-------

var bajada = porcentajeDesplazamiento * 1000;
navScroll.style.top= (300+bajada)+"px";

//-------------------------------
}
}
}
