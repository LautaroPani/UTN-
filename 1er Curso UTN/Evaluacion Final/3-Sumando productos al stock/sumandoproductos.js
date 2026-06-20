// EVALUACIÓN FINAL: Trabajo Integrador - 3 Sumando Productos
let usuarioAdministrador = "Cosme Fulanito"
let password = "Admin123"
let productos = [
    {
        nombre: "remera",
        precio: 2500,
        stock: 40
    },
    {
        nombre: "buzo",
        precio: 5750,
        stock: 32
    }
];

let botonIngresar = document.querySelector("#ingresar");
let botonAgregar = document.querySelector("#agregar");
let resultado = document.querySelector("#resultado");
let mensaje = document.querySelector("#mensaje");

let autorizado = false;

mostrarProductos(); 

botonIngresar.addEventListener("click", validarUsuario);
botonAgregar.addEventListener("click", agregarProducto);

function validarUsuario() {
    let usuario = document.querySelector("#usuario").value;
    let pass = document.querySelector("#password").value;
    if (
        usuario === usuarioAdministrador &&
        pass === password
    ) {

        autorizado = true;
        mensaje.textContent =
            "Acceso permitido";
        mensaje.style.color = "green";

    } else {
        autorizado = false;
        mensaje.textContent =
            "Usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }
}


function agregarProducto() {
    if (!autorizado) {
        mensaje.textContent =
            "Debe iniciar sesión primero";
        mensaje.style.color = "orange";
        return;
    }
    let nombre =
        document.querySelector("#nombreProducto").value;
    let precio =
        parseFloat(
            document.querySelector("#precioProducto").value
        );
    let stock =
        parseInt(
            document.querySelector("#stockProducto").value
        );
    let nuevoProducto = {
        nombre: nombre,
        precio: precio,
        stock: stock
    };

    productos.push(nuevoProducto);
    mostrarProductos();

    mensaje.textContent =
        "Producto agregado correctamente";
    mensaje.style.color = "green";

    document.querySelector("#nombreProducto").value = "";
    document.querySelector("#precioProducto").value = "";
    document.querySelector("#stockProducto").value = "";
    document.querySelector("#nombreProducto").focus();
}

function mostrarProductos() {
    resultado.innerHTML = "";
    for (let producto of productos) {
        resultado.innerHTML += `
            <p>
                <strong>${producto.nombre}</strong>
                - Precio: $${producto.precio}
                - Stock: ${producto.stock}
            </p>

        `;
    }
}