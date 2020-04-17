
//DOM

//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close"); 

//Recorrer los elementos
links.forEach(function(link){

    //Agregar un evento click a cada uno de los elementos
    link.addEventListener("click",function(ev){
     ev.preventDefault();   

    let content = document.querySelector('.content')
    
    //Quitarle las clases de animacion que ya tiene
    content.classList.remove("bounceInUp");
    content.classList.remove("animated");
    
    
    content.classList.add("fadeOutUp");
    content.classList.add("animated");
//metodo que define 1 segundo para que se ejecute el direccionamiento location
    setTimeout(function(){
    
    location.href = "../index.htm";
    },600)
    
    });
    
});

