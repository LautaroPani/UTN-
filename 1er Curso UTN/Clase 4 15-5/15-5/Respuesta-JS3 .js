
//Ejercicio 1
let a = document.getElementsByTagName('a');

console.log(a.length)


//Ejercicio 2 
//Para usar otro metodo, le agregue un id al texto llamado 'parrafo'
let texto = document.getElementById('parrafo');
let body = document.getElementsByTagName("body");


let img = document.createElement('img');
img.setAttribute('src','./img/una-imagen-local.jpg');

body[0].insertBefore(img,texto)

//Ejercicio 3
//Para usar otro metodo, le agregue un id al texto llamado 'parrafo',
//pero podriamos utilizar otros metodos del DOM para llamar a la etiqueta
let texto = document.getElementById('parrafo');

texto.innerHTML=` 
El DOM (Document Object Model, o en español Modelo de Objetos de Documentos) es una interfaz entre JavaScript y HTML o XML (otro metalenguaje que no abordamos en este curso). Nos permite acceder a sus partes y propiedades e ir interactuando con ellas. <br>Tenemos que tener en cuenta que cuando hablamos de propiedades de las partes del HTML estamos hablando de su CSS por lo que el DOM nos va a permitir modificar el CSS también, por medio de HTML`


//Ejercicio 4
//Creo una clase en un archivo CSS que tenga las propiedades de flexbox y del fondo para que me quede 
// el menu posicionado y con el fondo.La llame "menu"

let menu = document.getElementsByTagName('ul');
let itemMenu= document.getElementsByTagName('li');

menu[0].classList.add('menu');

for(item of itemMenu){
    item.style.listStyleType='none'
}


//Ejercicio 5


 let tituloPrincipal = document.getElementsByTagName('h1');

 tituloPrincipal[0].textContent = 'Introducción del DOM';



//Ejercicio 6

let lista= document.createElement('ul');
let titulo = document.getElementsByTagName('h2');
let body = document.getElementsByTagName("body");


let metodos =["createElement()","appendChild()", "insertBefore()", "removeChild()","replaceChild()","removeAttribute()","classList.add()","classList.remove()","classList.toggle()"]


    for( metodo of metodos){
        let item = document.createElement('li');
        item.textContent= metodo;

        lista.appendChild(item)

    }

body[0].appendChild(lista)
