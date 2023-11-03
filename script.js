menorValorElem = document.querySelector("#menor-valor");
maiorValorElem = document.querySelector("#maior-valor");
palpiteElem = document.querySelector("#chute").querySelector("span");
dicaElem = document.querySelector("#chute").querySelectorAll("div")[1];

let menorValor = 0;
let maiorValor = 100;
let palpite = 25;

menorValorElem.textContent = menorValor;
maiorValorElem.textContent = maiorValor;

palpiteElem.textContent = palpite;
dicaElem.innerHTML = `O número secreto é maior <i class="fa-solid fa-up-long"></i>`;
