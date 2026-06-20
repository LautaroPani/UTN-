const botonNoche = document.getElementById("noche");
const contenedor = document.getElementById("contenedor");
const murcielago = document.getElementById("murcielago");

botonNoche.addEventListener("mouseover", () => {
    contenedor.style.backgroundColor = "#564497";
    murcielago.style.display = "block";
});


botonNoche.addEventListener("mouseout", () => {
    contenedor.style.backgroundColor = "#fffffb";
    murcielago.style.display = "none";
});