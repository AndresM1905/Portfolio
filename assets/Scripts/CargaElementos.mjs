let videoCargado = false;
let videoMostrado=false;
let rutaVideo="../video/fondo.mp4";
let rutaVideoBueno=document.querySelector("#videoBueno").src;
function cargarRecurso() {
    const screenWidth = window.innerWidth;
    const headerVideo = document.getElementById('headerVideo');
    const imagenHeader = document.getElementById('imagenHeader');
    

    if (screenWidth > 850) {
        if (!videoMostrado) {
            headerVideo.style.display = "block";
            videoMostrado=true;
        }

        // Carga el video solo si aún no se ha cargado
        if (!videoCargado) {

            headerVideo.src = rutaVideoBueno;
            headerVideo.load();
            videoCargado = true; // Actualiza la bandera a verdadero
        }

        // Oculta la imagen
        imagenHeader.style.display = 'none';
    } else {
        videoMostrado=false;
        // Para pantallas pequeñas, muestra la imagen
        imagenHeader.style.display = 'block';
        imagenHeader.src = './assets/img/header/header.png';

        // Oculta el video
        headerVideo.style.display = 'none';
    }
}

// Ejecuta la función al cargar la página
cargarRecurso();

// Añade un evento de escucha para el redimensionamiento de la ventana
window.addEventListener('resize', cargarRecurso);
