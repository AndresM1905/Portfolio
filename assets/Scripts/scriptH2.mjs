let h2=document.querySelector("#h2");
let opacityH1;
let bajada;

export function moveH2(porcentajeDesplazamiento){

    //---------bloque opacity--------
    
    opacityH1 = porcentajeDesplazamiento * 1; 
    h2.style.opacity= (opacityH1);

       
    //---------bloque top-------
    
    bajada = porcentajeDesplazamiento * 1820;
    h2.style.top= (-900+bajada)+"px";
    
    }