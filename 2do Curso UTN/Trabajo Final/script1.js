document.addEventListener("DOMContentLoaded", () => {
    const card1 = document.querySelector("#card1");
    const card2 = document.querySelector("#card2");
    if (card1) card1.style.animation = "aparecerIzq 1.2s 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
    if (card2) card2.style.animation = "aparecerDerecha 1.2s 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
});