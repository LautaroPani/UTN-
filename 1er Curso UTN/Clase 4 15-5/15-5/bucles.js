let ventas=[100,4000,3424,2342,10000,444];

let total=0;
console.log(total);

// total=total+ventas[0];
// total=total+ventas[1];
// total=total+ventas[2];
// total=total+ventas[3];
// total=total+ventas[4];
// total=total+ventas[5];

//...

//                                      BUCLES - ciclos -loop 
// -> ejecutar  una cierta cantidad de veces una misma accion

//FOR - FOROF - WHILE -DOWHILE

//--------------------------------
//------------FOR-----------------
//sintaxis/ESTRUCTURA
/* for(accion-previa;condicion;accion-por-vuelta){
    //accion/es que repita
}
*/
//                       
for(let cantidad=0;cantidad<6;cantidad=cantidad+1){
    console.log("Repetimosss!")
}
console.log("continuamos..")
console.log(total)
//                  0<3
// for(let indice=0;indice<3;indice++){
//     //total=total+ventas[0]
//     total=total+ventas[indice];
// }


for(let indice=0;indice<ventas.length;indice++){
    //total=total+ventas[indice];
    total+=ventas[indice];
}
console.log(total)


//--------------------------------
//------------WHILE--------------- 
// -> cuando no se cuantas veces se va a repetir
/*
    while(condicion){
        accion/es a repetir
    }
*/
let cantidad=0;
// let comprar=prompt("Quiere comprar algo mas ? : si o no")
// while(comprar == 'si'){
//     cantidad++
//     console.log("se sumo un producto mas ")
//     comprar=prompt("Quiere comprar algo mas ? : si o no")
//     //..
// }
total=0
let indice=0
while(indice<ventas.length){
    total+=ventas[indice];
    indice++
}
console.log(total)
//--------------------------------
//----------DO.WHILE--------------

/*sintaxis 
    do{

    }while(condicion)
*/
let cantidaIntentos=0
do{
    console.log("un intento")
    cantidaIntentos=cantidaIntentos-1;
   
}while(cantidaIntentos>0)

//--------------------------------
//----------for of ---------------
// -> solo funciona con arrays - nos permite recorrer toda la lista
total=0
/* sintaxis:

for(ref of array){
    accion/es a repetir
}

*/

for(let item of ventas){
    total+=item
}
console.log(total)

let nombres=['marta',"antonia","luis",'laura','joaquin'];

// for(nombre of nombres){
//     console.log(nombre)
// }

//--------------------------------
//ABREVIATURAS:
//variable++ -> variable=variable+1
//variable=variable+algo -> variable+=algo


//-------------FUNCIONES NATIAS ------------------
//forEach - map - filter -find -> recorren arrays completos; solo funcionan con arrays
//sintaxis 
// array.funcionNativa((ref)=>{})

//-----> forEach() -> hacer acion/es por cada item;PERO no modifica el array original
nombres.forEach((item)=>{
    item=item+1
    console.log(item)
});
console.log(nombres)


let compras=[1020,5500,3424,2342,1000,444];

//----->map() -> hace accion/es por cada item de la lista; recorre de manera completa;pero me devolver un array nuevo 
//si no ponemos el return (o en una unica linea) nos devuelve undefined

let nuevoArray=compras.map((compra)=>{
    let valorNuevo=compra>3000?compra-100:compra
   return valorNuevo
});

let nuevoArray2=compras.map((compra)=>compra>3000?compra-100:compra);
console.log(nuevoArray,nuevoArray2)
console.log(compras)

// BUSCAR  item/s que cumplan con una condicion
//----->filter() develve un array con todos los items de la lista que cumplan la condicion definida en la funcion. 

//----->find() el primer item que cumpla con esa condicion
//si no ponemos el return (o en una unica linea) nos devuelve undefined


let nombresLargos=nombres.filter((nombre)=>nombre.length>5);
let nombreLargo=nombres.find((nombre)=>nombre.length>5);
console.log(nombreLargo,nombresLargos,nombres)