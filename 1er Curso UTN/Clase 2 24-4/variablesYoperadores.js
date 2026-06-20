//Variables -> espacio de memoria donde podemos almacenar informacion 

//                                          CREAR VARIABLES
//sintaxis * nombre=valor;
// * = var - let - const

let precio1=1000;
//et pecio1="hola" -> error
const dato="admin123"
//invocarla - llamarla - utilizarla
// nombre
let dato2 = "Hola como estas"
console.log(precio1)

//modificar
//sintaxis nombre=nuevoValor;

precio1=222;
// dato=222 -> tira error porque al ser constante no se puede modificar
console.log(precio1)

//                                           OPERADORES

//---------- ARITMETICOS --------------
// Aritmeticos-> calculos y concatenacion (solo en sumas)
//simbolos: +(suma/concatenacion), -, *, /.
//Math.. -> lo vemos mas adelante (pero nos permite haer calculos mas complejos)

10+20
1.20*20
10-2
3/5

dato-2       // Devuelve = NaN (NaN -> numbers -> Not a Number - No es un numero)
"hola"*true // Devuelve = NaN 
true-2     // Devuelve = -1 -> (1-2) (True o False se toman como valor 1 y 0)
"hola"+2  // Devuelve = "hola2" (Esta concatenación ocurre con el signo +)
console.log("22"+2)


//                     (    Metodos    )
//typeof () -> Nos indica que tipo de dato es el parametro ingresado (string-boolean-number)
//isNaN () -> booleano indicando si es (True) o no (false)


//--------- DE COMPARACION -------------
//--> De comparacion-> comparar valores/datos -> booleanos
//Simbolos: == === > < >= <= != !==
// Se pueden comparar la cantidad de valores que se quieran
//-----> Igualdad (== o ===)
//-> Doble igual compara solamente valores
console.log(10 == "10")
//-> Triple igual compara  valores y los tipos de datos
console.log(10 === "10")
dato =="Hola como estas"
console.log(precio1 == dato)

//--> Desigualdad (!= !==) 
//Simple desigual compara solamente valores(!=)
//Doble desigual compara  valores y los tipos de datos(!==)
console.log(precio1 !== dato)

//--> Mayor y menores (> , <)
// 222 < 50
precio1 < 50 // Devuelve = false pq precio1 vale 222 y no es menor a 50

console.log(dato2.length <50) //.length (es un metodo)-> para saber la cantidad de caracteres y espacios del string

//->Mayor y menores IGUAL (>= , <=)
precio1 >=222 //true

//--------------- LOGICOS --------------------
//logicos -> comparar operacoines (Pueden ser varias)
//simbolos : && (and), ||(or), ! (not). 

// && - AND - "Y" -> todas las operaciones involucradas sean verdaderas (true)
// Todas las operaciones involucradas tienen que ser true para que el resultado final sea true;caso contrario devuelve un false
//ejemplo: login

//usuario y contraseña coincidan con lo registrados
let usuarioRegistrado="Juanito";
let passwordRegistrada='Seguro1234';
//                  true                   &&.     true
//            "Juanito"       "Juanito".      &&. "Segura123" 'Seguro1234'
let resultado="Juanito" === usuarioRegistrado && "Seguro1234"=== passwordRegistrada

console.log(resultado)


//OR -> "o" -> ||
//necesito que como minimo una de esas operaciones involucradas nos de true para que el resueltado final sea true; caso contrario nos da false.

//programa de ventas de entradas

//mayor de 16 - adultoResponsable

let edad=15;
let conAdulto=true;
let registrado=true;
//              false || true.  -> true
///          15     16
console.log(edad >= 16 || conAdulto)


//! - NOT - "no" -> lo opuesto ( no se cumpla )

//!true -> false
!registrado//
!(10+15>precio1)
//-------------------------
//algunos metodos mas...
//prompt() -> permite recibir informacion que escribe el usuario en el navegador..
//typeof()-> tipo de dato
//isNaN() -> booleano indicando si es(true) o no (false) un NaN
let tipoDeDato=isNaN(dato-2)
//console.log(tipoDeDato)

length // strings -> cantidad de caracteres y espacios(largo del string) -> numero
//string.length -> numero

//console.log(dato2.length) //15