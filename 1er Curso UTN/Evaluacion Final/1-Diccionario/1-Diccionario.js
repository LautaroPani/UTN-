//    -------      EVALUACIÓN FINAL: Trabajo Integrador          --------

//1-Diccionario:

let diccionario = [
    {
        palabra: "peregrino",
        definicion: "Persona que anda o viaja por tierras extrañas que presentan dificultades."
    },
    {
        palabra: "berenjena",
        definicion: "Planta de fruto comestible."
    },
    {
        palabra: "bucle",
        definicion: "Secuencia de instrucciones de código que se ejecuta repetidas veces."
    },
    {
        palabra: "estetoscopio",
        definicion: "Instrumento médico que sirve para explorar los sonidos producidos por los órganos."
    },
    {
        palabra: "recoleccion",
        definicion: "Acción o actividad de recolectar los frutos de la tierra."
    }
];


let boton = document.querySelector("#buscar");
let input = document.querySelector("#palabra");
let resultado = document.querySelector("#resultado");

boton.addEventListener("click", buscarDefinicion);

function buscarDefinicion() {
    let palabraIngresada = input.value.trim();
    let encontrada = false;

    for (let item of diccionario) {
        if (item.palabra.toLowerCase() === palabraIngresada.toLowerCase()) {
            resultado.innerHTML = `
                <h3>Definición</h3>
                <p>${item.definicion}</p>
            `;
            resultado.style.backgroundColor = "#d1fae5";
            encontrada = true;
            break;
        }
    }

    if (!encontrada) {
        resultado.innerHTML = `
            <p>
                Lo sentimos, nuestro diccionario no dispone
                de esta definición por el momento.
            </p>
        `;
        resultado.style.backgroundColor = "#d1fae5";
    }
} 