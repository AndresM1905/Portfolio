let imgCircle=document.querySelector("#imgCirrcle");
let opacityNav;
let desplazamiento;
let grados;
let ancho;
var bajada;

export function moveImgCircle(porcentajeDesplazamiento){


    //---------bloque opacity-------
    
    opacityNav = porcentajeDesplazamiento * 1; 
    imgCircle.style.opacity= (opacityNav);
    
    //---------bloque translate-X -------
    
    desplazamiento = porcentajeDesplazamiento * 60;
    imgCircle.style.left= (-60+desplazamiento)+"%";
    
    //---------bloque rotacion-------

    grados = porcentajeDesplazamiento * 130; //
    imgCircle.style.transform = 'rotate(' + (130-grados) + 'deg)';
    
    //---------bloque width-------
    
    ancho = porcentajeDesplazamiento * 700; //
    
    imgCircle.style.width =(900-ancho)+"px";
    
    
    //---------bloque top-------
    
    bajada = porcentajeDesplazamiento * 450;
    imgCircle.style.top= (450+bajada)+"px";
    
    //-------------------------------
    
    }