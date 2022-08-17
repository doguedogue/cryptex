const btnencriptar = document.getElementById('btnencriptar');
const btndesencriptar = document.getElementById('btndesencriptar');
const btncopiar = document.getElementById('btncopiar');
const divsaludo = document.getElementById("divsaludo");
const divsalida = document.getElementById("divsalida");
const taentrada = document.getElementById("taentrada");
const tasalida = document.getElementById("tasalida");

btnencriptar.addEventListener('click', function handleClick() {
    let texto = taentrada.value.trim();
    if (texto.length == 0) {
        taentrada.value = texto;
        return;
    }

    var patt = new RegExp(/^[a-z\s]+$/g);
    if (patt.test(texto)) {
        tasalida.value = "encriptado:" + texto;
        muestraResultado();
    } else
        alert("Por favor ingresa solo letras minúsculas y sin acentos");
});

btndesencriptar.addEventListener('click', function handleClick() {
    let texto = taentrada.value.trim();
    if (texto.length == 0) {
        taentrada.value = texto;
        return;
    }

    var patt = new RegExp(/^[a-z\s]+$/g);
    if (patt.test(texto)) {
        tasalida.value = "desencriptado:" + texto;
        muestraResultado();
    } else
        alert("Por favor ingresa solo letras minúsculas y sin acentos");
});

btncopiar.addEventListener('click', function handleClick() {
    copyToClipboard();
});


const copyToClipboard = () => {
    tasalida.select();
    tasalida.setSelectionRange(0, 99999);
    document.execCommand('copy');
    tasalida.setSelectionRange(0, 0);
};

function muestraResultado() {
    divsaludo.style.display = "none";
    divsalida.style.display = "block";
}