//-------------EVENTOS------------------ 

/* Accion que tiene un principio y fin en el tiempo
Ante una accion determinada en el html por medio del usuario, 
vamos a poder detectarla desde JS y generar una respuesta 
*/

/*Algunos EVENTOS que Define JS: buscar cuales son los mas usados o comunes
     click - onmouseover - blur -focus -submit -
     input - change - DOM ContentLoaded -...*/

/* --->  ESTRUCTURA//Sintaxis -> 2 opciones

    - alternativa -> metodo addEventListener()
    - alternativa -> un atributo en el HTML + funcion desde JS

  --->  PARTES de un evento:
    *  evento en si (accion a la que estamos atentos )
    *  elemento en el que se va a ejecutar esa accion
    *  funcion como respuesta 

  --->  Los EVENTOS GENERAN un OBJETO llamado EVENT (Es una palabra reservada)
       (contiene informacion sobre el evento que ocurrio )

    this -> referencia al elemento/nodo en el que lo estamos invocando 
*/

//--->nodo.addEventLister("evento",funcion) Se usa solo en Js, no tengo que hacer nada en HTML.
// El "evento" podria ser el Click que hace el usuario.
let contador=0;
let boton=document.querySelector("button");

boton.addEventListener("click",(event)=>{
    console.log(event)
    contador++
    //console.log(contador)
    console.log('evento click')
    event.target.textContent=`Se pulso ${contador} veces`
});

function contadorfn(){
    console.log("evento mouseover")
};

boton.addEventListener("mouseover",contadorfn);

//-->Eventos: definen ciertas funciones que se ejecuten
//  en consecuencia por el accionar el usuario.


//-----------------------------------------------------------
//     USANDO un atributo en el HTML + funcion desde JS.
 
const cambioFondo=(nodo)=>{
    //let tarjeta=document.getElementsByClassName("tarjeta")[0];
    //tarjeta.style.backgroundColor="#F90"

    nodo.style.backgroundColor="rgb(195, 207, 88)"
    document.querySelector("h1").textContent="Modificamos tambien el titulo principal"
};

// FUNCTION accion(e) { *Linea 10 del HTML
//    .....
//  }

//Otros ejemplos
let lista=[]
const agregar=()=>{
    lista.push({
        tipo:'vela',
        precio:1000
    });
    console.log(lista)
} 
const eventoBlur=()=>{  //Linea 16 del HTML
    console.log("evento blur ejecutado")
}



//------------------------------------------------------------------
//                    preventDefault()
//preventDefault() -> metodo que vive en el objeto event
//--> ¡¡¡Bloquea la accion por defecto del elemento!!! 

function hacerOtraCosa(e) { 
    //e.preventDefault(); //Linea 15 del HTML, bloquearia esta linea
    console.log("ahora va a hacer lo que le indique en esta funcion al pulsar el ancla en vez de redirigir")
}

//---------------------------------------------------------------------
//                 ¡Intro a Formularios!
//         Form --->> se usa para Formularios
const ejecutarA=(e)=>{
    e.preventDefault();
    let palabra=document.getElementById("palabra");

    console.dir(palabra)//nodo input
    console.log(`se coloco en el input la palabra : ${palabra.value}`)
    //${} --> se usa para
}

// .value --> es una propiedad en la que se almancena la inforacion
//  que se coloco en la etiqueta input (html)
// Para acceder a esa informacion lo hacemos con ".value"
// .value es un valor interno en el que vemos lo que el usuario escribio
