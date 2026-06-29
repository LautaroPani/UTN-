let menu = document.querySelector('.menu');
let flag = false;
let contador = 0;

function iniciar() {
    var imagenes = document.querySelectorAll('.imagenes');
    soltar = document.getElementById('cajasoltar');  
    soltar2 = document.getElementById('cajasoltar2'); 
    soltar3 = document.getElementById('cajasoltar3'); 

    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }

    soltar.addEventListener('dragenter', function(e) { e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e) { e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false);

    soltar2.addEventListener('dragenter', function(e) { e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e) { e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);

    soltar3.addEventListener('dragenter', function(e) { e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e) { e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);
}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData('Text');
    let imagen = document.getElementById(id);
    
    if (!imagen) return;
    imagen.style.display = 'none';
    
    let contenedor;
    if (e.target.tagName === "P") {
        contenedor = e.target.parentNode;
    } else {
        contenedor = e.target;
    }
    
    contenedor.innerHTML = '<img src="' + imagen.src + '" height="100%" width="100%">';
    contador++;
    
    if (contador === 3) {
        let imagen1 = document.querySelector("#cajasoltar>img").getAttribute("src").split("/").includes("Rompe1.png");
        let imagen2 = document.querySelector("#cajasoltar2>img").getAttribute("src").split("/").includes("rompe2.png");
        let imagen3 = document.querySelector("#cajasoltar3>img").getAttribute("src").split("/").includes("Rompe3.png");
        
        document.querySelector(".cajas").style.gap = "0px";
        let cajitas = document.querySelectorAll(".caja");

        document.querySelector(".cajas").style.transform = "scale(1.3)";
        document.querySelector(".cajas").style.gap = "0";
        for (let caja of cajitas) {
            caja.style.border = "0";
        }
        
        if (imagen1 && imagen2 && imagen3) {
            setTimeout(() => {
                document.querySelector(".cajas").style.transform = "scale(1)";
                document.querySelector(".cajas").style.gap = "0";
            }, 1000);
            
            setTimeout(() => { 
                const titleEl = document.querySelector(".espacio-titulo");
                titleEl.innerHTML = `<span>Felicitaciones!!<br>Puzzle correctamente resuelto`;
                titleEl.style.animation = "feliz 3s forwards";
                titleEl.style.position = "relative";
                document.querySelector(".cajas").style.opacity = "0";
                document.querySelector(".cajas").style.gap = "0";
            }, 2000);
        } else {
            for (let caja of cajitas) {
                caja.style.border = "0";
                caja.classList.remove("cajaHover");
            }
            setTimeout(() => {
                for (let caja of cajitas) {
                    caja.style.opacity = "0.7";
                }
                const titleEl = document.querySelector(".espacio-titulo");
                titleEl.innerHTML = `Lo sentimos ,Puzzle no resuelto.<br/>Prueba otra vez <img width=50px src="./assets/icons/icon-download.png"/>`;
                titleEl.style.animation = "feliz 3s forwards";
                titleEl.style.zIndex = "3";
                titleEl.style.position = "relative";
                titleEl.style.color = "var(--color-primary)";
                titleEl.style.textShadow = "0 0 10px var(--color-shadow)";
                
                document.querySelector(".cajas").style.transform = "scale(1)";
                document.querySelector(".cajas").style.gap = "0";
            }, 2000);
        }
    }
}

function reinicio() {
    window.location.reload();
}

iniciar();
