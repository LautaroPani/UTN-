
//Ejercicio 1
/*
let remera ={
	categoria:"indumentaria",
	color:"rojo"
}

remera.precio=300;
remera.stock=10;

//Ejercicio 2

remera.stock=4


//Ejercicio 3

let titulo= document.querySelector('h1');

titulo.addEventListener('mouseover',()=>{
    if(titulo.style.fontSize != "20px"){
       titulo.style.fontSize="20px";
        titulo.style.color="green";  
    }else{
        titulo.style.fontSize="30px";
        titulo.style.color="black";  
    }
   
})
*/
//Ejercicio 4

//puntos a y b 
/*
let botones= document.querySelectorAll("button");
let compra =[];


botones.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        if(boton.innerHTML == "pantalon"){
            if(pantalon.stock>0){
                pantalon.stock -=1
                compra.push("pantalon")
            }else{
                alert("No hay stock de pantalones")
            }
        }
        else if (boton.innerHTML == 'Campera'){
            if(campera.stock >0){
                campera.stock -=1
                compra.push("campera")
            }else{
                alert("No hay stock de camperas")
            }
        }
        else if(boton.innerHTML == "zapatilla"){
            if(zapatilla.stock >0){
                zapatilla.stock -=1
                compra.push("zapatilla")
            }else{
                alert("No hay stock de zapatillas")
            }
        }
    })
})

botones.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        console.log("Hiciste Click")
        boton.classList.add("fondo")

        //y en css definimos .fondo{background-color:pink;}
        //o
        
        boton.style.backgroundColor ="pink"
    })
})

//punto c
 let contador =0;
botones.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        contador = contador+1
        console.log(`el boton  se clickeo ${contador} veces`)
    })
})


//Ejercicio 5 Mini calculadora

let botonCalc= document.querySelectorAll('.botonCalc'); //todas las etiquetas que tienen los numeros y los operadores tienen la clase "botonCalc"
let botonEjecutar= document.querySelector('button'); //el boton de "ejecutar" es la unica etiqueta <button> del archivo
let resultado= document.querySelector('#resultado');// el contendor donde se encuentra la palabra "resultado" donde hay que colocar el resultado del calculo tiene como id="resultado"
let teclaCalc=[];

botonCalc.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        console.log('click'+ boton.textContent)

        teclaCalc.push(boton.textContent)

    });
});

botonEjecutar.addEventListener('click',()=>{

     let num1=parseInt(teclaCalc[0]);
     let num2=parseInt(teclaCalc[2]) ;

    if(teclaCalc.find((tecla)=> tecla === "+" )){
        let suma = num1+num2 
        resultado.innerHTML = `<p>${suma}</p>`

    }else{
        if(teclaCalc.find((tecla)=> tecla == "-")){
            let resta=num1 - num2
            resultado.innerHTML = `<p>${resta}</p>`
        } else{
                if(teclaCalc.find((tecla)=> tecla == "*" )){
                    let multi=num1 * num2
                    resultado.innerHTML =multi
                }else{

                    let divi=num1 / num2
                    resultado.innerHTML = divi
                }
        }
        
    }   
   
    
    teclaCalc.splice(0,3)//para que una vez hecho el calculo elimine todos los items del array y podamos volver a utilizar la calculadora
});*/


$("#button").click(()=>{
    console.log($(this))
    $(this).toggleClass("boton-activado")
});