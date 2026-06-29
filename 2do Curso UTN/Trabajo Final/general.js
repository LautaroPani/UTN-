(function() {
    const savedTheme = localStorage.getItem("theme") || "night";
    const body = document.body;
    const btn = document.querySelector(".button-theame");
    if (savedTheme === "night") {
        body.className = "body-night";
        if (btn) {
            btn.className = "button-theame day";
            btn.querySelector("img").src = "./assets/icons/sun.svg";
        }
    } else {
        body.className = "body-day";
        if (btn) {
            btn.className = "button-theame night";
            btn.querySelector("img").src = "./assets/icons/moon-stars.svg";
        }
    }
})();

function desptemaDia() {
    let body = document.querySelector("body");
    body.classList.remove("body-night");
    body.classList.add("body-day");
    const img = document.querySelector(".button-theame>img");
    if (img) img.src = './assets/icons/moon-stars.svg';
    document.documentElement.className = "light";
    localStorage.setItem("theme", "day");
}

function temaNoche() {
    let body = document.querySelector("body");
    body.classList.remove("body-day");
    body.classList.add("body-night");
    const img = document.querySelector(".button-theame>img");
    if (img) img.src = './assets/icons/sun.svg';
    document.documentElement.className = "dark";
    localStorage.setItem("theme", "night");
}

function changeTheame(nodo) {
    if (nodo.className.includes("night")) {
        nodo.classList.remove("night");
        nodo.classList.add("day");
        temaNoche();
    } else if (nodo.className.includes("day")) {
        nodo.classList.remove("day");
        nodo.classList.add("night");
        desptemaDia();
    }
}

const navChange = () => {
    const nav = document.querySelector("nav");
    if (!nav) return;
    const maxScroll = 150;
    const opacity = Math.min(window.scrollY / maxScroll, 1);
    nav.style.setProperty('--nav-opacity', opacity);

    if (opacity > 0.5) {
        nav.classList.add("fondoNav");
    } else {
        nav.classList.remove("fondoNav");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    navChange();
});