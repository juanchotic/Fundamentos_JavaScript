//defino unas cuantas funciones
function primeraFuncion(){
    segundaFuncion();
}
function segundaFuncion(){
    terceraFuncion();
}
function terceraFuncion(){
    alert("Hasta Aqui funciono");
    cuartaFuncion();
}
function cuartaFuncion(){
    titulo.innerHTML = "Este es un nuevo titulo";
}


// Esta es la funcion original

var titulo  = document.getElementById("mititulo");
// alert(titulo)

titulo.onclick = function() {
    
    primeraFuncion();
    
}
