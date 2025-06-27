let binario = document.getElementById("binario")
let decimal = document.getElementById("decimal")
let botao = document.getElementById("botao")

binario.addEventListener("input", e => {
    e.target.value = e.target.value.replace(/[^01]/g, "");
})

botao.addEventListener("click", () => {
    let valorBin = binario.value;

    if (valorBin === "") {
        alert("Digite um número binário antes de converter!");
    }

    let valorDec = parseInt(valorBin, 2);

    if (isNaN(valorDec)) {
        alert("Formato inválido! Digite apenas 0 e 1.")
    } else {
        decimal.value = valorDec
    }
})