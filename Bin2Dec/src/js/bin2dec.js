"use strict";
// const $form = document.querySelector(".form") as HTMLFormElement;
const $btnBinario = document.querySelector("#salvar-binario");
const $valorBinario = document.querySelector("#entrada-binario");
const $resultado = document.querySelector("#resultado");
$valorBinario.addEventListener("keyup", function controle(event) {
    if (!(event.code === "Digit0" || event.code === "Digit1")) {
        alert(`Digite 0 ou 1`);
        $valorBinario.value = "";
    }
});
function calcular() {
    const results = parseInt($valorBinario.value, 2);
    $resultado.innerText = JSON.stringify(Math.log10(results));
}
