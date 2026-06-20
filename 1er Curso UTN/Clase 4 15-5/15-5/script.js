//----------------------DOM-------------------------------18/05
// -> Document Object Model
//Interfaz entre HTML y JS 
//Podemos manipular lo que reproduce del HTML y de manera indirecta al CSS

//Arbol de nodos 
//nodos -> elementos HTML en'formato' objeto

//document
//console.dir
console.dir(document)

//Acceder a los nodos 
//getElementsByTagName() -> nos trae un array con todos los enodos cuya etiqueta sea esa que indiquemos entre parentesis

let titulos=document.getElementsByTagName('h2');
console.log(titulos)
titulos[0].textContent="Otro titulo"
titulos[1].classList.add("clase2") //agregar una clase a una etiqueta 