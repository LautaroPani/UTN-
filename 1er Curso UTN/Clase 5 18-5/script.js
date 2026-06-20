// document -> documento HTML al que se encuentra vinculado el archivo  JS
console.dir(document)

//          ---------- DOM ----------    

//METODOS para obtener nodos(elementos HTML).
//   getElementById() -> obtener el primer nodo del HTML que contenga ese id(obtenemos el nodo(objeto) o null)
// - getElementsByTagName() - getElementsByClassName()-> un array con todos los elementos(nodos) que tengan esa etiqueta o clase o un array vacio
//   querySelector()-> nos devuelve el primer nodo que encuentre con ese selector - o null
//   querySelectorAll()-> nos devuelve un array con los nodos que encuentre con ese selector o un array vacio
//   selectores -> .(clase) #(id) compuestos -> padre>hijo| refDeAlLado+elemento

let texto2=document.getElementById("texto2") ;
let titulos=document.getElementsByTagName("h3");
let conjunto=document.getElementsByClassName("conjunto");
let conjuntoSelector=document.querySelectorAll(".conjunto")
console.dir(texto2,titulos)
console.log(conjunto)
console.log(conjuntoSelector)
let lista=document.querySelector("ul")
//algunas propiedades de nodos
//textContent-> el texto interno de un elemento
//innerHTML -> el contenido HTML de un elemento 

console.log(texto2.textContent)

texto2.textContent="Un nuevo texto que le modificacmos"

//console.dir(lista.innerHTML)

// CREAR nodos por medio del DOM 
//una mas desarrollada
//createElement()
let contenedor=document.createElement("div");
// contenedor.textContent="Soy un div nuevo";

// contenedor.setAttribute("class","Hola")

// //para agregar al HTML -> appendChild()

// section.appendChild(contenedor)

//opcion mas simplificada 
contenedor.innerHTML=`
     <img src="./assets/vela.jpg" alt="">
            <p>Lorem ipsum dolor sit.</p>
            <a>Mas info...</a>
`

contenedor.classList.add("tarjeta");
 let section=document.querySelector("section")
//section.appendChild(contenedor)

//--------------------------
let listaProductos=[{
    libroNombre:'libro 1',
    precio:1000,
    stock:10
},{
    libroNombre:'libro 2',
    precio:3000,
    stock:4
},{
    libroNombre:'libro 3',
    precio:4000,
    stock:6
},{
    libroNombre:'libro 4',
    precio:5000,
    stock:8
},{
    libroNombre:'libro 5',
    precio:6000,
    stock:100
},{
    libroNombre:'libro 6',
    precio:7000,
    stock:80
}];


function armarTarjetaLibro(libros) {
    for(let libro of libros){
        let tarjeta=document.createElement("div");

        tarjeta.className="tarjeta";

        tarjeta.innerHTML=`
            <h3>${libro.libroNombre}</h3>
            <ul>
                <li>${libro.precio}</li>
                <li>${libro.stock}</li>
            </ul>

        `
    section.appendChild(tarjeta)
    }
}
armarTarjetaLibro(listaProductos)

const verStockFalante=()=>{
   let librosFaltantes= listaProductos.filter((libro)=>libro.stock<10);
    console.log(librosFaltantes);
    let listaFaltantes=document.querySelector(".faltantes")
    librosFaltantes.forEach((libro)=>{
        let item=document.createElement("li");
        item.textContent=`Tenemos faltantes del libro ${libro.libroNombre}`;
        listaFaltantes.appendChild(item)
    })
};

const verStockFalanteBis=()=>{
    //funcion de permisos
  for(let libro of listaProductos){
    if(libro.stock<10 && libro.stock>5){
        let listaFaltantes=document.querySelector(".faltantes")
        let item=document.createElement("li");
        item.textContent=`Tenemos faltantes del libro ${libro.libroNombre} .Actualmente hay ${libro.stock} libros`;
        listaFaltantes.appendChild(item)
    }
    
  }
};


verStockFalanteBis()
//verStockFalante()

///-------------------------
//       CONDICIONALES 

//operador ternario 
// sintaxis ->  condicion?accion-true:accion-false;
let edad=20;
let registrado=true

edad>18?console.log("vender la entrada"):console.log("no le podemos vender la entrada")

//stock<10? "necesitamos reponer" :"no es necesario";

// -------------------------------------------
// ------------IF - IF / ELSE---------

/*sintaxis ->

    if(condicion){
        accion/es si se cumple (true)
    }
------------------------
    if(condicion){
        accion/es si se cumple (true)
    }else{
        accion/es si es que no se cumple (false)
        }
*/


if(edad>18){
    if(registrado){
        let ticket={
            nro:213123,
            funcionHora:'20:30 hs',
            precio:1000
        }
        console.log(ticket)
    }else{
        console.log("le pedimos que se registre")
    }
    
}else{
    console.log("no le podemos vender la entrada")
}

//-------------- SWITCH ----------------

/*sintaxis

    switch(key){
        case valor: .....
        break;
        case valor: .....
        break;
        case valor: .....
        break;
    }
*/

//lunes -> gimnasio
//martes -> danza
//miercoles -> ingles
//jueves -> canto
//viernes -> salida
let dia="jueves"
switch (dia) {
    case "lunes":
        console.log("va al gimnasio")
        break;

    case "martes":
        console.log("va al danza")
    break;

    case "miercoles":
        console.log("va al ingles")
    break;

    case "jueves":
        console.log("va al canto")
    break;

    case "viernes":
        console.log("sale")
    break;
    default:   // default se usa para cuando la respuesta no coincide con ninguno de los anteriores
        console.log("no tiene planes para estos dias")
        break;
}

if(dia =="lunes")console.log("va al gimancion") //Si el If lo hago en una sola linea puedo obviar las llaves
if(dia =="martes") {                            //Si hago en varias lineas uso las llaves {}
    console.log("va al danza")
}
if(dia =="miercoles") console.log("va al ingles")
if(dia =="jueves") console.log("va al canto")
if(dia =="viernes")console.log("sale")
//...