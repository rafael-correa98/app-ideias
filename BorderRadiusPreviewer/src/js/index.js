"use strict";
const $topLeft = document.querySelector("#top-left");
const $topRight = document.querySelector("#top-right");
const $bottomRight = document.querySelector("#bottom-right");
const $bottomLeft = document.querySelector("#bottom-left");
const $box = document.querySelector("#box");
const $button = document.querySelector("#copiar");
const $valor = document.querySelector("#resposta");
const $salvar = document.querySelector("#transformar");
const $inputCopiar = document.querySelector("#input-copiar");
$salvar.addEventListener("click", function (e) {
    $box.style.borderTopLeftRadius = $topLeft.value + "%";
    $box.style.borderTopRightRadius = $topRight.value + "%";
    $box.style.borderBottomRightRadius = $bottomRight.value + "%";
    $box.style.borderBottomLeftRadius = $bottomLeft.value + "%";
    $valor.innerHTML = `<input id="input-copiar" value="border-radius: ${$topLeft.value}% ${$topRight.value}% ${$bottomRight.value}% ${$bottomLeft.value}%" readonly></input>`;
});
$button.addEventListener("click", function (e) {
    $inputCopiar.select();
    navigator.clipboard.writeText($inputCopiar.innerText);
});
// $button.addEventListener("click", function(e){
//     // $topLeft.select()
//     // $topRight.select()
//     // $bottomLeft.select()
//     // $bottomRight.select()
//     navigator.clipboard.writeText($topLeft.value);
//     navigator.clipboard.writeText($topRight.value);
//     navigator.clipboard.writeText($bottomRight.value);
//     navigator.clipboard.writeText($bottomLeft.value);
//     // /* Select the text field */
//     // copyText.select();
//     // copyText.setSelectionRange(0, 99999); /* For mobile devices */
//     //  /* Copy the text inside the text field */
//     // navigator.clipboard.writeText(copyText.value);
//     // /* Alert the copied text */
//     // alert("Copied the text: " + copyText.value);
// })
