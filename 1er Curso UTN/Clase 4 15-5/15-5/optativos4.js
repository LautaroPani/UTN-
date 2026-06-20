//Ejercicio 1:
let a = document.getElementsByTagName('a');

console.log(a.length)
//-------------------------------------------


//Ejercicio 2
let img = document.createElement('img');
img.setAttribute('src','./img/una-imagen-local.jpg');
//-------------------------------------------


//Ejercicio 3
let texto = document.getElementById("parrafo")

texto.innerHTML=`
El DOM (Document Object Model, o en español Modelo de Objetos de Documentos) 
es una interfaz entre JavaScript y HTML o XML (otro metalenguaje que no abordamos en este curso). 
Nos permite acceder a sus partes y propiedades e ir interactuando con ellas. 
<br>Tenemos que tener en cuenta que cuando hablamos de propiedades de las partes del HTML 
estamos hablando de su CSS por lo que el DOM nos va a permitir modificar el CSS también, 
por medio de HTML`
//.innerHTML --> leer o modificar el HTML interno de un elemento
//-------------------------------------------


//Ejercicio 4
let menu = document.querySelector("ul");

menu.classList.add("menu");

let items = document.querySelectorAll("li");

for(let item of items){

    item.style.listStyleType = "none";

}
//-------------------------------------------


//Ejercicio 5
//let tituloPrincipal =  document.getElementsByTagName ("h1");
//tituloPrincipal [0].textContent = "Introduccion del DOM";

document.querySelector("h1").textContent = "Introduccion del DOM";
//-------------------------------------------


//Ejercicio 6
let lista= document.createElement('ul');
let titulo = document.getElementsByTagName('h2');
let body = document.getElementsByTagName("body");

let metodos =["createElement()","appendChild()", "insertBefore()", "removeChild()",
    "replaceChild()","removeAttribute()","classList.add()","classList.remove()","classList.toggle()"]

    for( metodo of metodos){
        let item = document.createElement('li');
        item.textContent= metodo;

        lista.appendChild(item)

    }

body[0].appendChild(lista)


