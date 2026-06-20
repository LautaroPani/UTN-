//EJERCICIO 1  --> Minuto 1:57:00 de la Clase virtual


// La ranita quiere llegar al otro lado del camino. La rana se encuentra actualmente en
// la posición X y quiere llegar a una posición mayor o igual a Y. La rana pequeña
// siempre salta una distancia fija, D.
// Cuenta el número mínimo de saltos que debe realizar la ranita para llegar a su
// objetivo.
// escribir una función que, dados tres enteros X, Y y D, devuelve el número mínimo de saltos
// desde la posición X a una posición igual o mayor que Y.
// Por ejemplo, dado:
// X = 10
// Y = 85
// D = 30
// la función debería devolver 3, porque la rana se posicionará de la siguiente manera:
// después del primer salto, en la posición 10 + 30 = 40
// después del segundo salto, en la posición 10 + 30 + 30 = 70
// después del tercer salto, en la posición 10 + 30 + 30 + 30 = 100.

/*----PASOS A LA HORA DE DESARROLLAR EL EJERCICIO! -------------------------------------
1- Leer el enunciado y descubrir que nos estan pidiendo. (Sirve anotar lo entendido)
1-bis- Detectar que datos me dan.
2- Pensar como lo resolveria(pensarlo fuera del codigo )
3- Pensar como se lo trasmito al programa (codigo)
4- Escribir dicho codigo
5- Probar si funciona (si no funciona volver al punto 3 ) 
---------------------------------------------------------------------------------------*/

//Paso 1: Nos pide el ejercicio: 
//-La cantidad de saltos minimos.  
//-Escribir una función que, dados tres enteros X, Y y D, devuelve el número mínimo de saltos

//Paso 2: Una funcion que pasando cualquier dato nos devuelva el correspondiente (linea 9, nos tiene que dar 3 enteros)

//Paso 3: Crear una función, variables, condicionales
//variables - globales 
// if 

//Paso 4:
// const saltosMinimos=()=>{

//    // X+D=valor <y
//     let primerSalto=X+D 

//     if(primerSalto <Y){
//       let segundoSalto=primerSalto+D
//       if(segundoSalto<Y){
//         let tercerSalto=primerSalto+D;
//         if(tercerSalto<Y){

//         }else{
//             return "saltos minimos : 3"
//         }
//       }else{
//         return "saltos minimos : 2"
//       }
//     }else{
//         return "saltos minimos : 1"
//     }

// }

const saltosMinimos=(X,D,Y)=>{

  
    let salto=X+D 
        let contador=1
    // for(let veces=2;salto<Y;veces++){
    //     contador++
    //     salto=salto+D;
    //     console.log(`saltos minimos: ${contador}`)
    // }
   while(salto<Y){
        contador++
       salto=salto+D;
   }

    return contador
}
// Paso 5:
console.log(saltosMinimos(1,10,40))