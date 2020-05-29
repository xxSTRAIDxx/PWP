
/*MENU---------------------------------------------------------------------------------------*/
let linksnavegador = document.querySelectorAll('.linksnavegador')[0];

let hamburguer = document.querySelectorAll('.hamburguer')[0];
let semaforo = true;
hamburguer.addEventListener("click", function(){
    if (semaforo){
        hamburguer.style.color = "#fff";
        semaforo = false;
    }else{
        hamburguer.style.color = "#000";
        semaforo = true;
    }
    linksnavegador.classList.toggle("despliegue");
})

/*Esconder y mostrar navegador---------------------------------------------------------------------------------------*/

let ventanainicial = window.pageYOffset;

let navegador = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", function(){
    
    /*Saber posicion en Y tambien se puede en x*/
    let ventanaactual = window.pageYOffset;
    if(ventanainicial>=ventanaactual){
    
     navegador.style.top = "0px";
        
}else{
    
   navegador.style.top = "-100px";
    
}
    
    ventanainicial = ventanaactual;
    
})
