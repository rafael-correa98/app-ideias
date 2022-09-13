const $topLeft = document.querySelector("#top-left") as HTMLInputElement;
const $topRight = document.querySelector("#top-right") as HTMLInputElement;
const $bottomRight = document.querySelector("#bottom-right") as HTMLInputElement;
const $bottomLeft = document.querySelector("#bottom-left") as HTMLInputElement;
const $box = document.querySelector("#box") as HTMLDivElement;
const $button = document.querySelector("#copiar") as HTMLButtonElement;
const $valor = document.querySelector("#resposta") as HTMLDivElement;
const $salvar = document.querySelector("#transformar") as HTMLButtonElement;

$salvar.addEventListener("click", function(e){
    $box.style.borderTopLeftRadius = $topLeft.value + "%"
    $box.style.borderTopRightRadius = $topRight.value + "%"
    $box.style.borderBottomRightRadius = $bottomRight.value + "%"
    $box.style.borderBottomLeftRadius = $bottomLeft.value + "%"
    $valor.innerHTML = `<input id="input-copiar" value="border-radius: ${$topLeft.value}% ${$topRight.value}% ${$bottomRight.value}% ${$bottomLeft.value}%" readonly></input>`
    
})

$button.addEventListener("click", function(e){
    const $inputCopiar = document.querySelector("#input-copiar") as HTMLInputElement;
    $inputCopiar.select()
    navigator.clipboard.writeText($inputCopiar.value);
    alert("Copied the text: " + $inputCopiar.value);
})