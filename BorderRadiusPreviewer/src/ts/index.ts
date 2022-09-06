const $topLeft = document.querySelector("#top-left") as HTMLInputElement;
const $topRight = document.querySelector("#top-right") as HTMLInputElement;
const $bottomRight = document.querySelector("#bottom-right") as HTMLInputElement;
const $bottomLeft = document.querySelector("#bottom-left") as HTMLInputElement;
const $box = document.querySelector("#box") as HTMLDivElement;
const $button = document.querySelector("#copiar") as HTMLButtonElement;
const $valor = document.querySelector("#resposta") as HTMLDivElement;
const $salvar = document.querySelector("#transformar") as HTMLButtonElement;
const $inputCopiar = document.querySelector("#input-copiar") as HTMLInputElement;

$salvar.addEventListener("click", function(e){
    $box.style.borderTopLeftRadius = $topLeft.value + "%"
    $box.style.borderTopRightRadius = $topRight.value + "%"
    $box.style.borderBottomRightRadius = $bottomRight.value + "%"
    $box.style.borderBottomLeftRadius = $bottomLeft.value + "%"
    $valor.innerHTML = `<input id="input-copiar" value="border-radius: ${$topLeft.value}% ${$topRight.value}% ${$bottomRight.value}% ${$bottomLeft.value}%" readonly></input>`
    
})

$button.addEventListener("click", function(e){
    $inputCopiar.select()
    navigator.clipboard.writeText($inputCopiar.innerText);
})




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