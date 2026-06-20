// let cursos=["pintura","ceramica","bordado"];

//-----------------OBJETOS--------------------
// -> describir entidades, agrupar propiedades de 'cosas', sus caracteristicas 
//cada clave/propiedad debe tener un valor 
//podemos tener la cantidad de clave/propiedad que querramos
//el valor puede ser de cualquier tipo de dato o estructura 
//no importa el orden en el que escribamos cada par clave/propiedad- valor
/*
    {
        propiedad:valor,
        propiedad:valor,
        propiedad:valor,
        propiedad:valor,
    }
*/
let cursoPintura={
    nombre:"Pintura",
    cuposDisponibles:32,
    diasCursada:["Lun","Mier"],
    docente:{
        nombre:"Martina",
        correo:"martina@ejemplo.com"
    },
    descuento:true
}

let cursoCeramica={
    nombre:"Ceramica",
    cuposDisponibles:10,
    diasCursada:["Juev","Sab"],
    docente:{
        nombre:"Pedro",
        correo:"pedro@ejemplo.com"
    },
    descuento:true
}
//-------ACCEDER a un valor de un objeto 
//sintaxis -> objeto.propiedad 
console.log(cursoPintura.cuposDisponibles)

//-----MODIFICARLO
//sintaxis -> objeto.propiedad=nuevoValor
cursoPintura.cuposDisponibles=30;

console.log(cursoPintura.cuposDisponibles)

//--------AGREGAR una propiedad
//sintaxis -> objeto.nuevaPropiedad=valor

cursoPintura.requiereExperiencia=false;


//------ELIMINAR propiedad
//sintaxis -> delete objeto.propiedad

delete cursoPintura.descuento

console.log(cursoPintura)

let cursos=[cursoPintura,cursoCeramica];
console.log(cursos)

let alumnos=[{
    nombre:"Alan",
    apellido:"Ruiz",
    edad:33
},{
    nombre:"Julia",
    apellido:"Gomez",
    edad:0
}]

let pendientes=alumnos.filter((alumno)=>alumno.edad ==0);

console.log("nos falta saber su edad: ",pendientes);


// objeto.propiedad...
// objeto["propiedad"]
console.log(cursoCeramica.descuento)

console.log(cursoCeramica['descuento'])

function modificarValor(propiedad,nuevoValor) {
    //cursoPintura["cuposDisponibles"]=20
    cursoPintura[propiedad]=nuevoValor
    console.log(cursoPintura)
};

modificarValor("cuposDisponibles",20)

let objeto1={
    data:'bla',
    funcionObjeto:()=>{
        console.log("HOLAA")
    }
}

console.log(objeto1)

objeto1.funcionObjeto()


//-----ARRAYS vs OBJETO----------
//Estructura	Guarda
//Array	        listas
//Objeto	    información relacionada

//Ejemplos: 
//ARRAY --->  let numeros = [1,2,3];  
//OBJETO ---> let usuario = {        
//                nombre: "Lautaro",
//                edad: 20 };