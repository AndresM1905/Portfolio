let imagenHeader=document.querySelector("#imagenHeader");

export function moveImgHead(porcentajeDesplazamiento){

    //---------bloque top-------
        
    let bajada = porcentajeDesplazamiento * 55;
    imagenHeader.style.bottom= (55-bajada)+"%";
    };