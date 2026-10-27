// Lógica de Alternância de Tema
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

// Funções de Cálculo
function somar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let resultado = numero1 + numero2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function subtrair() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let resultado = numero1 - numero2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function multiplicar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let resultado = numero1 * numero2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function dividir() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    if (numero2 === 0) {
        document.getElementById("resultado").innerHTML = "Não é possível dividir por zero.";
        return;
    }

    let resultado = numero1 / numero2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
