let video = document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton = document.getElementById("pause");

// Calculate threshold distances dynamically based on card layouts
const getDistances = () => {
    const card1 = document.querySelector("#cardHist1");
    if (!card1) return 0;
    return window.innerHeight * 0.35 + card1.offsetHeight;
}

const navChange1 = () => {
    const distanciaHis1 = getDistances();
    const card2 = document.querySelector("#cardHist2");
    const card2Offset = card2 ? card2.offsetHeight : 0;

    if (window.innerHeight * 0.1 < window.scrollY && distanciaHis1 > window.scrollY) {
        document.querySelector("#cardHist1 > img").style.animation = "slideFromLeft 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
        document.querySelector("#cardHist1 > div").style.animation = "slideFromRight 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
        return; 
    }

    if (distanciaHis1 < window.scrollY && (distanciaHis1 + card2Offset) > window.scrollY) {
        document.querySelector("#cardHist2 > img").style.animation = "slide2DLeft 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
        document.querySelector("#cardHist2 > div").style.animation = "slide2DRight 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
        return; 
    }

    if ((distanciaHis1 + card2Offset) < window.scrollY) {
        document.querySelector("#cardHist3 > img").style.animation = "slideFromLeft 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
        document.querySelector("#cardHist3 > div").style.animation = "slideFromRight 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
         document.querySelector("#more-text").style.animation = "slideFromLeft 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
        return; 
    }
} 

let transformarTiempoActual = (tiempo) => {
    if (tiempo < 60) {
        if (tiempo.toFixed(0) < 10) {
            return `00:0${tiempo.toFixed(0)}`;
        }
        return `00:${tiempo.toFixed(0)}`;
    } else {
        let minutos = parseInt(tiempo / 60);
        let segundos = (tiempo / 60 - minutos) * 60;
        if (segundos < 10) {
            return `${minutos}:0${segundos.toFixed(0)}`;
        }
        return `${minutos}:${segundos.toFixed(0)}`;
    }
}

let timeProgression;

setTimeout(() => {
    const showTimeEl = document.getElementById('showTime');
    if (showTimeEl) {
        showTimeEl.innerHTML = `Duracion video 04:41`;
    }
}, 100);

if (playBoton && video) {
    playBoton.addEventListener('click', () => {
        video.play();
        timeProgression = setInterval(() => {
            const showTimeEl = document.getElementById('showTime');
            if (showTimeEl) {
                showTimeEl.innerHTML = `${transformarTiempoActual(video.currentTime)}`;
            }
        }, 1000);
    });
}

if (pauseBoton && video) {
    pauseBoton.addEventListener('click', () => {
        video.pause();
        clearInterval(timeProgression);
    });
}

// Attach event listeners
window.addEventListener("scroll", navChange1);
document.addEventListener("DOMContentLoaded", () => {
    navChange1();
});
