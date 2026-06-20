//  EVALUACIÓN FINAL: Trabajo Integrador - 2) Comprando Muebles 
let cantidad = 0;
let precio = 2500;
let total = 0;

let contador = document.querySelector("#contador");
let totalHTML = document.querySelector("#total");
let botonComprar = document.querySelector("#comprar");
let botonSacar = document.querySelector("#sacar");

botonComprar.addEventListener("click", agregarProducto);
botonSacar.addEventListener("click", sacarProducto);

function agregarProducto(){
    cantidad++;
    total += precio;
    contador.textContent = cantidad;
    totalHTML.textContent = "TOTAL: $" + total;
}

function sacarProducto(){
    if(cantidad > 0){
        cantidad--;
        total -= precio;
        contador.textContent = cantidad;
        totalHTML.textContent = "TOTAL: $" + total;
    }

}