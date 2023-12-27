let hr=document.querySelector("#hr");
let bajada;
let tamano;

export function moveHr(porcentajeDesplazamiento){

    //---------bloque top-------
    
    bajada = porcentajeDesplazamiento * 520;
    hr.style.top = 400+bajada+"px;";

    //---------bloque tamaño-------
    
    tamano = porcentajeDesplazamiento * 100; 
    
    hr.style.width = tamano+"%";
    
    }