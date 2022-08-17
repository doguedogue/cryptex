const btnencriptar = document.getElementById('btnencriptar');
const btndesencriptar = document.getElementById('btndesencriptar');



btnencriptar.addEventListener('click', function handleClick() {
    alert("Hola! Encriptar");
    muestraResultado();
});

btndesencriptar.addEventListener('click', function handleClick() {
    alert("Hola! Desencriptar");
    muestraResultado();
});



function muestraResultado() {
    const divsaludo = document.getElementById("divsaludo");
    const divsalida = document.getElementById("divsalida");

    divsaludo.style.display = "none";
    divsalida.style.display = "block";
}