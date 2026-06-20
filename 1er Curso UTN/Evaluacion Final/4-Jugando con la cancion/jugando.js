/* EVALUACIÓN FINAL: Trabajo Integrador  - 4 Jugando con la canción */
let cancion = ["Mi","barba","tiene","tres","pelos"];
let frase = document.querySelector("#frase");
let input = document.querySelector("#palabra");
let boton = document.querySelector("#sacar");

// Mostrar frase inicial
mostrarCancion();

// Evento
boton.addEventListener("click", sacarPalabra); 

function mostrarCancion(){
    frase.textContent = cancion.join(" ");
}

function sacarPalabra(){
    let palabraIngresada = input.value;
    let indice = cancion.indexOf(palabraIngresada);
    if(indice !== -1){
        cancion.splice(indice,1);
    }
    mostrarCancion();
    input.value = "";
    input.focus();
}