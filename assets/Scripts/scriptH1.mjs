let h1=document.querySelector("#h1");
let opacityH1;
let desplazamiento;
let grados;
let tamano;
var bajada;


export function moveH1(porcentajeDesplazamiento){


    //---------bloque opacity--------
    
    opacityH1 = porcentajeDesplazamiento * 1; 
    h1.style.opacity= (opacityH1);
    
    //---------bloque translate-X -------
    
    
    desplazamiento = porcentajeDesplazamiento * 60;
    
    h1.style.left= (-60+desplazamiento)+"%";
    
    //---------bloque rotacion-------
    grados = porcentajeDesplazamiento *500; //
    
    h1.style.transform = 'rotate(' + (-500+grados) + 'deg)';
    
    //---------bloque tamaño-------
    
    tamano = porcentajeDesplazamiento * 0.9; //
    
    h1.style.fontSize = (0.1+tamano)+"rem";
    
    
    //--------- bloque top ---------
    //920
    bajada = porcentajeDesplazamiento * 1920;
    h1.style.top= (-1000+bajada)+"px";
    
    //-------------------------------
    
    }