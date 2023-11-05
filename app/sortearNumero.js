const menorValorElem = document.querySelector("#menor-valor");
const maiorValorElem = document.querySelector("#maior-valor");

const menorValor = 1;
const maiorValor = 1000;

const numSecreto = gerarNumAleatorio();

menorValorElem.textContent = menorValor;
maiorValorElem.textContent = maiorValor;

function gerarNumAleatorio() {
  return parseInt(Math.random() * (maiorValor - menorValor + 1) + menorValor);
}

