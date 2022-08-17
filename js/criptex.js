const btnencriptar = document.getElementById('btnencriptar');
const btndesencriptar = document.getElementById('btndesencriptar');
const divsaludo = document.getElementById("divsaludo");
const divsalida = document.getElementById("divsalida");
const taentrada = document.getElementById("taentrada");
const tasalida = document.getElementById("tasalida");

btnencriptar.addEventListener('click', function handleClick() {
    let texto = taentrada.value;
    var patt = new RegExp(/^[a-z\s]+$/g);
    if (patt.test(texto)) {
        tasalida.value = "encriptado:" + texto;
        muestraResultado();
    } else
        alert("Por favor ingresa solo letras minúsculas y sin acentos");
});

btndesencriptar.addEventListener('click', function handleClick() {
    let texto = taentrada.value;
    var patt = new RegExp(/^[a-z\s]+$/g);
    if (patt.test(texto)) {
        tasalida.value = "desencriptado:" + texto;
        muestraResultado();
    } else
        alert("Por favor ingresa solo letras minúsculas y sin acentos");
});



function muestraResultado() {
    divsaludo.style.display = "none";
    divsalida.style.display = "block";
}