//------------- LIBRERIAS --------------------
//React - Skeleton - validator - sweet alert
//------------- FRAMEWORK ------------------- 
// Angular - Bootstrap - Vue

//-> Algo a tener en cuenta siempre es, ver las actualizaciones de la libreria
//porque pueden cambiar los metodos, los nombres...
//ver la documentaciones que traen las librerias



//RECOMENDACIÓN DE LA PROFE: Estudiar al menos 2 horas por dia
//Estudiar codigos, hacer ejercicios, aplicar a proyectos...

// ver IA Grabiti --> es para ENTREVISTAS



//               Libreria: JQuery

//--- >  Con JQuery
$("h2").addClass("azul");


//--- >  Con JS comun
document.querySelector("h2").classList.add("rojo");


//------------------------------------------------
//Eventos con JQuery 
// -> click() change() | .on()
// $("#btnMostrar").on("click",()=>{
//     $("#mensaje").show()
// });

//Eventos con JS comun
// -> click() change() | .on()
document.getElementById("btnMostrar").addEventListener("click",()=>{
    document.getElementById("mensaje").style.display='block'
})


//------------Cosas a tener en cuenta de JQuery-------------------

// Para buscar un selector (nodo) en JQuery

// Sintaxis -> $("selector") = Es lo mismo que poner queryselector() en el JS
// selectores : #id , .class, etiqueta, padre>hijo


// Sintaxis de los metodos de JQuery
//    -> $("selector").metodo()

// Muchos METODOS que nos brindan en JQuery. Alguno de ellos son:

// html() -> es como el innerHTM de JS------------------

$("div").html(`
    <p>hola soy una tarjeta</p>
    <button>Click</button>
    `

);

// attr("atributo","valor");----------------------------

$("div").attr("style","border:2px solid black")

// toggleClass() y
// on() -> addEventListener()---------------------------

$("#btnMostrar").on("mouseover",()=>{
    $("h1").toggleClass("rojo")
})

// hide() -> display:none ; show() -> display:block-----

let bandera=false
$("#btnMostrar").on("click",()=>{
    bandera=!bandera;
    if(bandera){
         $("#mensaje").show()
    }else{
        $("#mensaje").hide()
    }
});

let h1=$("h1");
let textos=$("p")

console.dir(h1);
console.dir(textos[1].textContent)

// val()

$("#form").on("click",()=>{
    $("#nombre").val()
})