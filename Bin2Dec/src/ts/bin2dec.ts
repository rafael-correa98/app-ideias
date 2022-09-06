// const $form = document.querySelector(".form") as HTMLFormElement;
const $btnBinario = document.querySelector("#salvar-binario") as HTMLButtonElement;
const $valorBinario = document.querySelector("#entrada-binario") as HTMLInputElement;
const $resultado = document.querySelector("#resultado") as HTMLDivElement;


$valorBinario.addEventListener("keyup", function controle(event){
    if(!(event.code === "Digit0" || event.code === "Digit1")){ 
        alert(`Digite 0 ou 1`);
        $valorBinario.value = ""
    }

})

function calcular() {
    const results = parseInt($valorBinario.value, 2);
    $resultado.innerText = JSON.stringify(Math.log10(results));
}




