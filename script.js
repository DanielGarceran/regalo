const btnEntrar = document.getElementById("btnEntrar");
const inicio = document.getElementById("inicio");
const universo = document.getElementById("universo");
const floresContainer = document.getElementById("flores");
const musica = document.getElementById("musica");

const texto = document.getElementById("texto");
const btnValentin = document.getElementById("btnValentin");
const respuesta = document.getElementById("respuesta");

const mensaje = "TE AMO KEILYS";
let i = 0;

btnEntrar.onclick = function() {
    console.log("Botón presionado"); // para probar

    inicio.style.display = "none";
    universo.style.display = "block";

    musica.play();
    escribirTexto();
    crearFlores();
};

function escribirTexto() {
    if (i < mensaje.length) {
        texto.innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribirTexto, 200);
    }
}

function crearFlores() {
    for (let j = 0; j < 30; j++) {
        let flor = document.createElement("div");
        flor.className = "flor";
        flor.innerHTML = "🌼✨";

        flor.style.left = Math.random() * window.innerWidth + "px";
        flor.style.top = Math.random() * window.innerHeight + "px";
        flor.style.animationDuration = (Math.random() * 3 + 3) + "s";

        floresContainer.appendChild(flor);
    }
}

btnValentin.onclick = function() {
    respuesta.style.display = "block";
    btnValentin.style.display = "none";
};
