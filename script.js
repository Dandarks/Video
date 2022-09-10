let video = document.getElementById("music");
var controle = document.getElementById("controle");

function aparecer () {
    controle.style.opacity = 1;    
    controle.style.transition = "opacity 0.5s";
    controle.addEventListener("mouseout", sumir);
}

function sumir () {
    controle.style.opacity = 0;
    controle.style.transition = "opacity 0.5s";
}

function play () {
    video.play();
}

function pause () {
    video.pause()
}

function avancar () {
    video.currentTime += 15;
}

function recuar () {
    video.currentTime -= 15;
}

function aumentar () {
    video.playbackRate += 0.1;
}

function diminuir () {
    video.playbackRate -= 0.1;
}