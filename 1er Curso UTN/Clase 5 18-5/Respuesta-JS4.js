// Ejercicio 1 

function nota() {
  let nota= prompt("ingrese la nota del alumno"); 

    if(nota<= 5){
        console.log("insuficiente")
    }
    if(nota == 6){
        console.log("Suficiente")
    }
    if(nota == 7){
        console.log("Bien")
    }
    if(nota == 8){
        console.log("Notable")
    }
    if(nota >= 9){
        console.log("Sobresaliente")
    }
}
nota()

// Ejercicio 2

function juegoAventura() {
    let juego= prompt("Ingrese alguno de estos numeros:1) - Para comenzar  2) - Para Salir");


    if (juego == 1) {
        let puerta= prompt("Eliga una puerta (coloque el numero de la opcion):1) - Abrir puerta A          2) - Abrir puerta B");
        if(puerta == 1){
            alert("Cuidado hay un tigre!!")
        let opcion= prompt("Escriba el numero de su opcion: 1 - Darle un pedazo de carne 2 -Cerra la puerta e irse corriendo")
            if(opcion ==1){
                alert("Felicitaciones!! El león se corre y encontramos el tesoro")
            }else{
                alert("Adios!!")
            }
        }
        if(puerta ==2){
            alert("OH! Camino sin salida =(")
        }
    } else {
        alert("Adios!");
    }
}

// Ejercicio 3

function entradaVIP() {
    let edad = prompt("Ingrese su edad : ");

    if(edad >=18){
        let clave= prompt("Ingrese la clave para poder entrar");
        if(clave === claveDeIngreso){
            console.log("Puede ingresar a la parte VIP");
        }else{
            console.log("Clave incorrecta, no puede estar en la parte VIP!");
        }
    }else{
        console.log("No tiene edad suficiente para ingresar");
    }
}


// Ejercicio 4

function harryPotter() {

    let container = document.getElementById("container");

    for(let i = 1; i <= 100; i++){
        let texto = document.createElement("p"); 
        if(i%2 === 0 && i%3 === 0) {
          
         texto.textContent='Voldemort';
        } else if (i%2 === 0) {
          texto.textContent='Harry';
        } else if(i%3 === 0) {
          texto.textContent='Potter';
        } else {
          texto.textContent= i ;
        }
        container.appendChild(texto)
      }
}

// Ejercicio 5

function bisiesto() {
    
    let año =  prompt("Ingrese un año ");

    if((año % 4)== 0){
        let divisiblePor100=(año % 100)== 0;
        let divisiblePor400=(año % 400)== 0;

        if(!divisiblePor100 || divisiblePor400){
            alert("el año ingresado es bisiesto");
        }else{
            alert("el año ingresado no es bisiesto");
        }
    }else{
        alert("el año ingresado no es bisiesto");
    }


}

// Ejercicio 6

function descuento() {
    let total = parseInt(prompt("Ingrese el monto total de su compra"));
    let esSocio= prompt("Esta registrado en el sitio? ingrese el numero 1 en caso de estarlo o 2 en caso de no estarlo");

    if(esSocio == "1"){

        if(total >= 200){
            total= total -10
        }
        if(total >= 400){
            total = total * 0.90
        }
        if(total >= 1100){
            total = total - 150
        }
    }else{
        if(total >= 1100){
            total = total - 10
        }
    }
}