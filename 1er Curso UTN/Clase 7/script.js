//                                      Formularios -> validadores 
// ---------------- HTML -> atributos:  ----------------------------------
// Todos estos son atributos HTML que se usan principalmente en formularios 
//(<input>, <textarea>, etc.) para controlar qué puede escribir el usuario.

// -> Required: Le dice al navegador que el usuario debe completar ese campo antes de enviar el formulario.
// Ejemplo. Si el usuario intenta enviar el formulario vacío:
// ❌ No se envía.
// El navegador muestra un mensaje de error.

// -> Readonly: El usuario puede ver el valor pero NO modificarlo.
//Ejemplo: El usuario ve:
// Lautaro
// pero no puede escribir ni borrar.

// -> Disabled: deshabilitado. El elemento queda completamente bloqueado.
// ✔ Se ve grisado.
// ✔ No se puede escribir.
// ✔ No se puede seleccionar.
// ✔ No se envía en formularios.

// -> min: Valor mínimo permitido.. 
// El usuario no debería ingresar números menores a:
// 18
// 🧪 Ejemplo
// <input type="number" min="1">
// No permite:
// 0
// -1

// -> max: Valor máximo permitido.
/* <input type="number" max="100"> //en HTML
🎯 ¿Qué pasa?
No permite números mayores a: 100  */

// -> minlength: Cantidad mínima de caracteres.
/* <input type="text" minlength="3">
🎯 ¿Qué pasa?
Si escribe:
Jo
❌ Error
Porque tiene solo 2 caracteres.
Si escribe:
Juan
✅ Correcto */

// -> maxlength: Cantidad máxima de caracteres.
/* <input type="text" maxlength="10">
🎯 ¿Qué pasa?
El usuario solo puede escribir hasta:
10 caracteres
🧪 Ejemplo
Permite:
Hola12345
No permite seguir escribiendo después del décimo carácter. */


// ---------------- JS -> eventos ----------------------------

// ---------------- Formularios ->----------------------------
// submit(envio de formulario) 
// input -> ejecuta cada vez que cambia la propiedad value
// change -> cada vez que hay cambios en el contenido
// blur /focus -> cuando dejo de hacer foco/ cuando hago foco
// click -> cuando pulso un elemento


const enviarFormulario=(e)=>{
    e.preventDefault();
    let form=e.target 
    console.dir(form)
    let campoNombre=form.elements[0].value;
    let campoEmail=form.elements[1].value;
    let campoPassword=form.elements[2].value


    if(campoNombre !=='' && campoEmail !== '' && campoPassword !== '' && campoPassword.length >=8 ){
        console.log("envio al servicio ( asincronia - )")
    }
    
}

let inputNombre=document.getElementById("nombre");
let inputCorreo=document.querySelector("#correo");
let botonMostrar=document.querySelector("#show")

inputNombre.addEventListener("blur",()=>{
    console.log("inputName")
   if(inputNombre.value !== ''){
        document.querySelector("#correo").disabled=false
    }
});

inputCorreo.addEventListener("change",()=>{

    console.log(inputCorreo.value);
    console.log("se ejecuto el evento change de inputCorreo")
})

const verificacionContrasena=(nodo)=>{
    let valor=nodo.value;
    let mensaje=document.getElementById("mensaje")
   if(valor.length<8 || /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/.test(valor)){
        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/.test(valor)){
            mensaje.textContent="La contraseña debe tener al menos una mayuscula,una mayuscula y un simbolo"
        }else{
            mensaje.textContent="La contraseña debe tener al menos 8 caracteres"
        }
        mensaje.style.display="block"
   }else{
        mensaje.style.display="none"
   }
   console.log(valor)

   let cumple=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/.test(valor)
   console.log(cumple)

};

botonMostrar.addEventListener("click",(event)=>{
    event.preventDefault();//no actua por defecto como todos los botones dentro del formulario 

    let inputContrasena=document.querySelector("#password");    
    if(inputContrasena.type == "password"){
        inputContrasena.type="text";
        botonMostrar.textContent="Ocultar contraseña"
    }else{
        inputContrasena.type="password";
        botonMostrar.textContent="Mostrar contraseña"
    }
})



 //-----------------------------------------------------------------------
let alumnos=["Juan Martin","Pedro","Marta","Matilda", "Juan Cruz"]


//buscar el nodo de un formulario
console.dir(document.forms[1])
let form2=document.forms[1];


form2.addEventListener("submit",(event)=>{
    event.preventDefault();
   let valorInput=form2.elements[0].value;
    console.log(valorInput) 
    
    let alumnoEncontrado=alumnos.filter((nombre)=>{
        let nombreMinuscula=nombre.toLowerCase();

        let inputMinuscula=valorInput.toLowerCase();

        if(nombreMinuscula.includes(inputMinuscula))

       return nombreMinuscula
    });
    console.log(alumnos[0].includes("Laura"))
    if(alumnoEncontrado!== undefined) alert(` Se encontro al alumno ${alumnoEncontrado}`)
})



 //-----------------------------------------------------------------------
//-----------------EXTRA! regex  --> 1:48:00 (clase 7)--------------------
//regex ->expresion, cadena de caracteres(string)que definen un patron de busqueda 
//Regular Expression(Expresiones Regulares)

//----funcion nativa de JS -> test() ------
//sintaxis -> ExprecionRegex.test(stringChequear) -> nos da un booleano

/* para validar:  --> Ver en la linea 103 --> .test(valor)
- mayusculas+minusculas+simbolos:
 /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;

 - solo numeros:/^\d+$/
 - correos:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
 - todo menos numeros 0-9:/^[^0-9]+$/
 - solo letras: /^[A-Za-z]+$/
 */
