// DATOS:------------------------------------------------ 
//  number (numeros decimales con punto no con coma )
//  booleans true - false
//  string '', " " ,`` 
//  undefined(no definido) - NaN(Not a Number) - null (nulo)

"33"; 'true';`Hola 12321!! false`

// VARIABLES:--------------------------------------------
//  let (posible modificacion de contenido) 
//  const(no permite modificar el contenido)
let nombre="Juan";
nombre=111;

const nombre2="Pepe";

console.log(nombre)

// ARRAYS:----------------------------------------------- 
//-> listas -> [] - separaba cada item con una coma simple
//   length - indice 

const numeros=[1,2,4544,5555]
// METODOS: usados para modificar los ARRAYS ------------ 
//  push-unshift -> agregar a la lista al final o al inicio elementos 
//  pop-shift -> sacar de la lista el ultimo y primer item respectivamente
//  splice(indice,cantidad,valorAagregar) -> sacar o modificar items de cualquier lugar de la lista
//  indexOf() -> saber el indice de un elemento(si no lo ubica nos devuelve -1)
//  array[indice] -> obtener el item de la lista
//  join() unir todos los items de un array - string
//  split() transforma strings en arrays
let valorExtraido=numeros.shift()
numeros.splice(1,1,4,4,4)

let ejemploJoin=["barco","ancla",22,'ventana']
let ejemploSplit="Hola-soy-una-oracion"

console.log(ejemploJoin.join(" "))
console.log(ejemploSplit.split("-"))
console.log(numeros)
console.log(valorExtraido)

//  OBJETOS: ---------------------------------------------
//->describir entidades, indicar propiedades de 'cosas'.
// {} -> clave:valor; -> propiedad:valor

let repuesto1={
    nombre_respuesto:"tornillo",
    precio:100,
    stock:25,
    tipo:'madera',
    medidas:['8','10'],
    reponer:false
}
console.log (respuesto1)

//Con OBJETOS se puede:              --------------------
// Agregar propiedades y Modificar propiedades:
//  estructura:-> objeto.propieda=valor o objeto["propiedad"]=valor
repuesto1.nombre_respuesto="Tornillo pepe"
repuesto1.marca="Tornillin"
repuesto1["stock"]=20
repuesto1["descuento"]=false

// Eliminar propiedades:
//  delete objeto.propiedad
delete repuesto1.marca

//Obtener el valor de esa propiedad:
// objeto.propiedad o objeto["propiedad"]
console.log(repuesto1)

//FUNCIONES: ---------------------------------------------
// Tradicionales y Arrow Function (funcion flecha): 
//(difieren en sitaxis para su creacion pero para su ejecucion es la misma)

//   Tradicionales:   ---------
/*
    function nombre(parametros){
        ...contenido
    }
*/
//   Funciones flecha: --------
/*
   const variable= (parametros)=>{
        ...contenido
        }
*/
//ejecucion -> nombreFuncion()

function suma(num1,num2) {
    let sumaNumeros=num1+num2;
    //....
    return sumaNumeros
}
let suma1=(numeroA,numeroB)=>{
    let suma=numeroA+numeroB
    return
}

let resultado=suma(2,7)
suma(2223,242341)
suma1(2,3)

console.log(resultado)

//CONDICIONALES ------------------------------------------ 
// Operadores ternario 
//   -> Estructura: "condicion? accion-true :accion-false;"
// if/else 
    /*
    if(condicion){
        accion/es si la condicion resuelve true
    }else{
        accion/es si la condicion resuelve false
    }

    o if(condicion)accion-unica-si-resuelve-true
*/

// BUCLES /  CICLOS -------------------------------------- 
// -> Estructura que nos permita hacer iteraciones: 
//     for - forof - while - do while
// -> Metodos:
//     forEach - map - filter - find -> solo aplicables en array
//     sintaxis array.metodos(()=>{ })


// --------------------- DOM ----------------------------- 
//Document Objecto Model -> interfaz entre HTML y JS

// document - window (palabras reservadas)
// Metodos para obtener nodos (elementos del HTML)
//  document.querySelector("selector")    -> me devuelve un objeto (nodo)
//  document.querySelectorAll("selector") -> array de objetos

console.log(document) //da información del documento HTML sus propiedades
console.log(window)   //da información sobre la pantalla en la que uno esta
console.log(document.querySelector("h1")) //acceso al elemnto "h1" del HTML

//EVENTOS:-----------------------------------------------
// Acciones que identifica el programa y 
// nos permite una vez finalizada esta accion ejecutar 
// una funcion como respuesta.
// evento: click - load - change - input - submit - mouseover - blur - focus..
/*
    nodo.addEventListener("evento",()=>{
    
    });
    ---------
   en HTML como atributo de la etiquea en donde se indica la esucha on+evento 
y el valor de ese atributo que es la funcion a ejecutar,previamente definida en el archivo JS
*/
function cambioColor() {
    document.querySelector("h1").style.color="red"
   let parrafos= document.querySelectorAll("p")
   parrafos.forEach((parrafo)=>{
    parrafo.textContent="Nuevo contenido...."
   })
}
let boton1=document.querySelector("#boton1")
boton1.addEventListener("click",()=>{
    document.querySelector("h1").style.color="green"
})

//Clase 2 -- Hasta la 1:12:00.