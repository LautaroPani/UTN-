// EJERCICIOS OPTATIVOS DE JS 1

/*1. Solicitar por medio de varios prompt el nombre, el apellido y la edad de una persona.
Y devolverlo por consola de la siguiente forma:
Ej: Ingresa como nombre Maria como apellido Perez y como edad 30, tiene que devolver
por consola: “Se llama: Maria se apellida:Perez y tiene 30 años */
/*function saludo() { 
let nombre =prompt ("Ingresa nombre:  ");
let apellido =prompt ("Ingresa tu apellido:  ");
let edad =prompt ("Ingresa tu edad:  ");

console.log ("Se llama " + nombre + " ,se apellida " + apellido + " y tiene " + edad + " años")
}

saludo();*/


/* 2. Hacer un programa donde por medio de un prompt pida usuario y contraseña; y que
compare si coincide con el usuario “Marta” y contraseña : 1234. En caso que no coincida
alguno de los dos, indicar por medio de un alert() que los datos ingresados son
incorrectos, caso contrario indicar por un alert() que puede acceder al sitio 

function Confirmacion_usuario () {
let usuario = prompt ("Ingrese su usuario: ")
let contraseña = prompt ("Ingrese su contraseña: ")
usuario == "Marta" && contraseña == 1234 ? alert ("Puede acceder al sitio"): alert ("Alguno de los datos son incorrectos")
} // "?" significa si la condicion se cumple y el ":" si la condicion no se cumple, es como el If y el Else

Confirmacion_usuario ();*/

/* 3. Armar un programa que tome un valor en pesos y devuelva la equivalencia en dólares (
tomemos como valor del dólar $292).  

function cotizacion () {
    let pesos =prompt ("Ingresa el valor en pesos que quieras convertir a dolares ")
    let dolar =parseFloat((pesos) / 292).toFixed(2); // .toFixed(2) es para Mostrar decimales prolijos
    console.log ("El valor de los " + pesos + " pesos es " + dolar + " dolares" )
}

cotizacion ();*/

/* 4. Armar un programa que tome un numero ingresado e indique por consola si el mismo
es par o impar  

function parOimpar() {
    let numero= prompt("Ingrese un numero");
    if(numero % 2 === 0){
        console.log("Es par");
    }else{
        console.log("Es impar"); }
}

parOimpar ()*/

/* 5. Armar un programa que tome cinco números ingresados por medio de un prompt y
devuelva el promedio de dichos números.   

function promedio () {
    let numero1= parseInt(prompt("Ingrese el primer numero")); //parseInt convierte texto a numero y corta decimales
    let numero2= parseInt(prompt("Ingrese el segundo numero"));
    let numero3= parseInt(prompt("Ingrese el tercero numero"));
    let numero4= parseInt(prompt("Ingrese el cuarto numero"));
    let numero5= parseInt(prompt("Ingrese el quinto numero"));

    let promedio = (numero1 +numero2+numero3+numero4+numero5) / 5
    return  console.log(promedio)
}
promedio () */


/* 6. Hacer un programa donde compare un usuario y contraseña ingresado por el usuario
con las siguientes variables de usuario y contraseña registrados.En caso que sean
correctos ,consultar si es administrador o cliente, en caso que sea administrador devolver
por consola “tiene acceso a todos campos” si es cliente devolver por consola “tiene
acceso limitado” 

function compare () {
    let usuario = prompt("Ingrese su usuario ");
    let password = prompt("Ingrese su contraseña ");
    let usuarioRegistrado = "Juan Perez";
    let contraseñaRegistrada = "1234";
usuario === usuarioRegistrado && password === contraseñaRegistrada ? 
alert ("Bienvenido, tiene acceso a todos los campos") : alert ("Bienvenido, acceso limitado")
 return console.log(compare)
}

compare()*/