const btnencriptar = document.getElementById('btnencriptar');
const btndesencriptar = document.getElementById('btndesencriptar');
const btncopiar = document.getElementById('btncopiar');
const divsaludo = document.getElementById("divsaludo");
const divsalida = document.getElementById("divsalida");
const taentrada = document.getElementById("taentrada");
const tasalida = document.getElementById("tasalida");

btnencriptar.addEventListener('click', function handleClick() {
    procesaEntrada(algoritmoEncripta);
});

btndesencriptar.addEventListener('click', function handleClick() {
    procesaEntrada(algoritmoDesencripta);
});

function procesaEntrada(callback) {
    let texto = taentrada.value.trim();
    if (texto.length == 0) {
        taentrada.value = texto;
        return;
    }

    var patt = new RegExp(/^[a-z!\s]+$/g);
    if (patt.test(texto)) {
        tasalida.value = callback(texto);
        muestraResultado();
    } else
        alert("Por favor ingresa solo letras minúsculas y sin acentos");
}

function algoritmoEncripta(texto) {
    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("i", "imes");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("u", "ufat");
    return texto;
}

function algoritmoDesencripta(texto) {
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    return texto;
}

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