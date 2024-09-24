let menuVisible = false;

//Función para mostrar u ocultar el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible=true;
    }
}

//Función para ocultar el menú una vez seleccionada una opción

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;

}

//Función que aplica las animación de las skills

function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("angular");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("sql");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proactividad");
        habilidades[10].classList.add("comunicacion");
        habilidades[11].classList.add("liderazgo");
    }else{
        
    }  

}

//Detecto el scroll hasta skills para lanzar las animaciones

window.onscroll = function(){
    efectoSkills();
}