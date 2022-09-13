"use strict";
const $topLeft = document.querySelector("#top-left");
const $topRight = document.querySelector("#top-right");
const $bottomRight = document.querySelector("#bottom-right");
const $bottomLeft = document.querySelector("#bottom-left");
const $box = document.querySelector("#box");
const $button = document.querySelector("#copiar");
const $valor = document.querySelector("#resposta");
const $salvar = document.querySelector("#transformar");
$salvar.addEventListener("click", function (e) {
    $box.style.borderTopLeftRadius = $topLeft.value + "%";
    $box.style.borderTopRightRadius = $topRight.value + "%";
    $box.style.borderBottomRightRadius = $bottomRight.value + "%";
    $box.style.borderBottomLeftRadius = $bottomLeft.value + "%";
    $valor.innerHTML = `<input id="input-copiar" value="border-radius: ${$topLeft.value}% ${$topRight.value}% ${$bottomRight.value}% ${$bottomLeft.value}%" readonly></input>`;
});
$button.addEventListener("click", function (e) {
    const $inputCopiar = document.querySelector("#input-copiar");
    $inputCopiar.select();
    navigator.clipboard.writeText($inputCopiar.value);
    alert("Copied the text: " + $inputCopiar.value);
});
