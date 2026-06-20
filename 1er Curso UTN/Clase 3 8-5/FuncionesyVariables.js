//undefined -> definido 
// null -> nulo 

// funciones/programas  -> PRIMERO defino/creo LUEGO ejecuto
//funciones tradicionales 
//funciones -> conjunto de instrucciones - bloque de codigo 

//creo una funcion | 2 maneras :tradicional - funcion flecha 

//tradicional 
/*
sintaxis -> 
    function nombre(parametros){
        pasos a seguir| bloque de codigo
        return 
    }
*/
//variables globales 
let dato="juan";
let indefinido;
let datoNulo=null;
//ejecutar funcion
//sintaxis : nombre() | nombre(parametros)
promedioNotas(7,8,9)

function promedioNotas(nota,nota2 ,nota3){
    // variables locales 
    let total=nota+nota2+nota3;
    console.log(dato)//variable definida por fuera (variable global)
    let promedio=total/3
    console.log(promedio)
    return promedio
    console.log("HOLA")
    //todo lo que ponga debajo de un return no se ejecuta
}
console.log(dato)
//console.log(promedio) -> error
//HOISTING 
// promedioNotas(2,7,10)
// promedioNotas()//undefined,undefined,undefined
// console.log(indefinido)

//funciones flecha 

/* sintaxis
   const nombre= (parametros)=>{
         pasos a seguir| bloque de codigo
    }

*/

let saludo=(dato)=>{
    alert("Hola "+dato)
}
const promedioFlecha=(nota,nota2 ,nota3)=>{
    // variables locales 
    let total=nota+nota2+nota3;
    
    let promedio=total/3

    console.log(promedio , "SOy la funcion felcha")
    //saludo(promedio)
    return promedio
}


console.log(promedioFlecha(7,8,9));
//console.log(total)// error : no esta definida - ya que es una variable local y quiero utilizrla por fuera de donde fue definida


// que es el scope de una variable??? es el alcanse de una variable

//estructura agrupar datos -> arrays o listas 
//manera mas practica de manipularlos 

let alumno1="Juanita"
let alumno2="Pedrito "
let alumno3="Marta"