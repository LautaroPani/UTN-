
//Ejercicio 1

//----Colocar en el HTML----//

/*
    <label for="nombre">
        Nombre
        <input type="text" name="nombre" required>
    </label>

    <label for="apellido">
        Apellido
        <input type="text" name="apellido" required>
    </label>

*/

//Ejercicio 2

//----Colocar en el HTML----//

/*

    <label for="mensaje" class="distancia">
        
        Comentario 
    
        <textarea name="mensaje" placeholder="Escribir mensaje..." maxlength=50></textarea>
    </label>


*/

//Ejercicio 3

//----Colocar en el HTML----//

/*
      
    <label for="turnoT" >
        Turno Tarde
        <input type="radio" name="turnoT" value="tarde"  disabled/>
    </label>
    
    <label for="turnoN" >
        Turno Noche
        <input type="radio" name="turnoN" value="noche" disabled/>
    </label>
           
*/

//Ejercicio 4

//----Colocar en el HTML----//

/*            
       
        <label for="htmlYcss" id="labelJQuery">
            JQuery
            <input type="checkbox" name="htmlYcss" value="JQuery" onclick=nuevoFondo()>
        </label>
*/ 

function nuevoFondo(){

    let labelJQuery=document.getElementById("labelJQuery");
    labelJQueryclassList.toggle("fondo");
}


// otra forma de hacerlo //


//----Colocar en el HTML----//

/*            
       
        <label for="JQuery" id="labelJQuery">
            JQuery
            <input type="checkbox" name="JQuery" value="JQuery" class="JQ">
        </label>
*/ 

//y en JavaScript:

let labelJQuery=document.getElementById("labelJQuery");
let inputJQuery = document.querySelector(".JQ");

inputJQuery.addEventListener("click",()=>{
    labelJQuery.classList.toggle("fondo");
})


//Ejercicio 5

//en el HTML le agregamos un id "correo" al input del email
let correo=document.getElementById("correo");


correo.addEventListener("mouseover",()=>{
    console.log(document.forms[0].elements[2].value)
})


//Ejercicio 6

//----Colocar en el archivo CSS style.css----//

/* 

    input:invalid{
        border: 2px solid red;
    }
*/