const imgWelcome=document.querySelector("#welcome");
const h1Welcome=document.querySelector("#h1Welcome");
let opacityImgWelcome;
export function moveWelcome(porcentajeDesplazamiento){
    opacityImgWelcome = (porcentajeDesplazamiento*2) * 1; 
    imgWelcome.style.opacity=1-opacityImgWelcome;
    h1Welcome.style.opacity=1-opacityImgWelcome;
};