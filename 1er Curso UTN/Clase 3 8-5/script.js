//Estructuras para agrupar datos -> ARRAYS O LISTAS []
//Manera mas practica de manipularlos 

let alumno1="Juanita"
let alumno2="Pedrito "
let alumno3="Marta"

/* SINTAIS/ESTRUCTURA: 
 -> [dato,dato2,dato3,...,dato33]

 Llamar a un item de la lista
 -> array[indice] */

//ARRAYS -> puedo agrupar cualquier tipo de dato, la cantidad que quiera; siempre separando cada uno por una coma (excepto el ultimo dato)
//INDICE -> numerar cada item de la lista iniciando por el 0 (su posicion)
// .length -> el largo de la lista (la cantidad de item s que tiene la lista)

//              0.    1        2
let colores=["azul","verde","amarillo"];
const numeros=[2234,34534,55,66];
 
//INDICE    0    1   2       3       4 ....
let lista=[222,"Hola",alumno1,true,alumno2];
let alumnosCurso1=[alumno1,alumno2,alumno3,"Mauricio","Lujan"]

// console.log(lista)
// console.log(lista[2])
// console.log(lista.length)

//console.log(alumno1.length )// la cantidad de caracteres - el largo del string
console.log(alumnosCurso1)

//-----------------------------------------------------
//Metodos de array -> sintaxis array.metodo()

//----- > AGREGAR items a la lista -> .push(dato/s) .unshift(dato/s)

alumnosCurso1.push("Nelson")// agrega el/los item/s al final de la lista
alumnosCurso1.push("Jesus","Anahi",'Antonela')

alumnosCurso1.unshift("Maria")// agrega el/los item/s al inicio de la lista(ojo modifica el indice de los demas items)

// ----- > SACAR items de la lista-> .pop() - .shift()
//alumnosCurso1.pop()
let alumnoExtraido=alumnosCurso1.pop() //saca el ultimo item de la lista
alumnosCurso1.shift() //saca el primer item de la lista

console.log(alumnoExtraido)

// ----- > CAMBIAR items de la lista -> .splice(indice,cantidad,nuevoDato)
console.log(alumnosCurso1.splice(1,1))
alumnosCurso1.splice(3,2,"Mario")

alumnosCurso1.splice(3,0,"Laura")
// console.log(alumnosCurso1)
console.log(alumnosCurso1[4])

// typeof() -> el tipo de dato 
function agregarAlumno(alumno) {
    typeof(alumno) == 'string'? alumnosCurso1.push(alumno):console.log("Lo ingresado no es el nombre del alumno")
    console.log(alumnosCurso1)
}
agregarAlumno(22)
agregarAlumno("Ariel")
console.log(typeof(alumno1))


//---------------------------------------------
//Otros metodos para array 

// ---> includes() -> nos devuelve un booleanos (true,false): indicando si el dato entre parentesis 
// se encuentra dentro del array

//JS es case sensitive -> diferencia entre mayusculas y minusculas 

alumnosCurso1.includes("Anahi")// Devuelve: true
console.log(alumnosCurso1.includes("Anahi"))

// ---> indexOf() -> nos devuelve el indice en que se encuentra ese item(o en caso que no se encuentr -1)

alumnosCurso1.indexOf("anahi")//-1 da a entender que no esta dentro de la lista. (porque anahi con minuscula no esta)

alumnosCurso1.indexOf("Anahi")//6

const sacarUnAlumno=(alumno)=>{
    
    let indiceAlumno=alumnosCurso1.indexOf(alumno);// -1 o indice 
    indiceAlumno !== -1? alumnosCurso1.splice(indiceAlumno,1)
    :console.log("El alumno/a/e no se encuentra en esa cursada")
}

sacarUnAlumno("Jesus") //Se saco a Jesus
sacarUnAlumno("Victoria") // Devuelve  El alumno/a/e no se encuentra en esa cursada

console.log(alumnosCurso1) //Muestro que hay en alumnos...