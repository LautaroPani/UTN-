// Ejercicios Optativos JavaScript 2 (Clase 3)

/*1. Marcelo esta armando la lista para el super. 
Crear un bucle para que Marcelo pueda ingresar los productos que necesite y 
muestre por consola la lista completa.

function listaMarcelo() { 
    let listaSuper = []

    let productos = prompt ("Ingrese los productos que necesita:   , para terminar ponga fin")
        while (productos != "fin"){

        listaSuper.push(productos)
        productos=prompt("IngreseProducto, para terminar ingrese la palabra: fin")
        }
        console.log(listaSuper);
}
listaMarcelo(); */


/*2. Crear un array de colores( que en tenga entre otros colores el color “azul”), y por medio de un
bucle hacer que saque el color azul.Mostrar el resultado del array en consola.*/
 
let colores = ["rojo", "verde", "azul", "gris", "amarillo"]
for (let i=0; i < colores.length; i++) {
    colores[i] === "azul"? colores.splice(i,1) : console.log(" "); 
}
 
 

/*3. Dada la siguiente lista:
a. Agregar a “canario” al final de la lista .
b. Mostrar por consola el primer valor de la lista .
c. Mostrar por consola el largo de la lista actual.
d. Contestar la pregunta: ¿Qué indice tiene el ultimo valor de la lista ?

let lista = ["paloma", "Tucan"]
lista.push("canario")
console.log (lista[0])
console.log (lista.length)
//El indice que tiene el ultimo valor que es canario es el 2.*/

/*4. Armar una lista de 5 nombres e imprimirlo por consola uno por uno usando un bucle.
let nombres = ["Luis", "Martin", "Javier", "Pablo", "Juan"]
for ( nombre of nombres ){
    console.log (nombre)
}*/

/*5. Dada la siguiente lista, hacer con un bucle que recorra todos los valores y devuelva la suma
total*/
let numeros = [2,3,45,100,50]

let suma=0;

for(num of numeros){
    suma+=num
}
console.log(suma)

/*6. Dada la siguiente lista:
a. Contestar la pregunta: ¿Cuál es el indice donde esta Wally?
b. Crear una funcion que recorra la lista y muestre por consola el indice de cada nombre.
c. Crear una segunda funcion que recorra la lista y que me muestre por consola solamente el
indice donde se encuentra ubicado Wally */

//a.
let nombres = ["juan", "martin", "Wally", "Mario"]
    if(nombres.indexOf("Wally") !== -1){
    console.log("Encontramos a Wally");
    }else{
    console.log("Wally no está");
    }

//b.Crear una funcion que recorra la lista y muestre por consola el indice de cada nombre.
function mostrarIndices() {
    let lista = ["Juan", "Martin", "Wally", "Mario"];
    for(let i = 0; i < lista.length; i++) {
        console.log(i);
    }
}
mostrarIndices();

//c
function buscarWally() {
    let lista = ["Juan", "Martin", "Wally", "Mario"];

    for(let i = 0; i < lista.length; i++) { // variable "i" arranca en el indice 0, 
    // continuua si es menor a la lista y agrega un indice... y asi va a agregando mienstras sea menor a la lista
        if(lista[i] === "Wally") { //Si el parametro i es igual a Wally retorna la consola
            console.log("Wally está en el índice: " + i);
        }
    }
}
buscarWally(); //Devuelve "2"
