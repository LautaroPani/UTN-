 //------------------ OPERADOR TERNARIO -----------
 //Operador Ternario -> uno de los condicionales que nos ofrece JS

//->Estructura que permite generar una condicion 
//->Se escribe en una linea
//->Debe tener definido tanto la accion en caso que se cumpla la condicion como en en caso que no se cumpla 

//Sintaxis del Operador Ternario--> ":" es un comparador. 
//   Conndicion ? accion-true : accion-false;
//   Condicion ? condicion ? accion-true : accion-false : accion-false;

let edad=40;
let conAdulto=false;
let registrado=false;

//        false
edad >= 16 || conAdulto ? console.log("Le vendemos la entrada..."):console.log("No podemos vender la entrada,no cumple con lo requerido =(");


registrado ?  edad >= 16 || conAdulto ? console.log("Le vendemos la entrada..."):
console.log("No podemos vender la entrada,no cumple con lo requerido"):
console.log("Registrate primero para poder comprar entradas en general");


// registrado ?  
//     edad >= 16 || conAdulto ? 
//         console.log("Le vendemos la entrada...")
//         :console.log("No podemos vender la entrada,no cumple con lo requerido =(")


//     :console.log("Registrate primero para poder comprar entradas en general");

//------
let cantidadProductos;
let total;


cantidadProductos >10? console.log("se aplica el descuento"):'';

// ------------------- FUNCIONES ------------------------
//Funciones -> conjunto de instrucciones - bloque de codigo 
//Creo una funcion | Hay 2 maneras :tradicional - funcion flecha 

// Funciones modo TRADICIONAL 
/*
Sintaxis -> 
    function nombre(parametros){
        pasos a seguir| bloque de codigo
    }
*/
 

function promedio(numero1,num2){
    let suma= numero1+num2;
    suma/2 >40? console.log("promedio mayor a 40"): console.log("promedio menor a 40")
}
function promedio2(){
    let suma= 50+68;
    suma/2 >100? console.log("promedio mayor a 100"): console.log("promedio menor a 100")
}

//utilizar la funcion - ejecutar - invocar 
//sintaxis -> nombre();nombre(argumentos)

promedio(20,40)//30>40
promedio(100,130)//115>40 
promedio2()
promedio2()

//-------------Proxima Clase----------------------------
// Funcion modo Flecha (repaso de funcion tradicional)
// return 
//scope de variables
//arrays - undefined - null

// PROMPT -> metodo que nos permite recibir info que escribe el usuario desde el navegador
// SIEMPRE me trae un tipo de dato STRING
// let nombreRecibido=prompt("Ingresa un nombre");
// console.log(nombreRecibido)

// String a Number
// perseInt(dato) - parseFloat(dato)- Number(dato) -
let variable= parseInt("22.5")// Devuelve el numero ENTERO : 22
let variable2= parseFloat("22.5")//y el Number tambien devuelven decimales

//Number a String/ Booleano a String
//dato.toString() tansforma a String lo que le pase.
console.log(variable2)
console.log(edad.toString())