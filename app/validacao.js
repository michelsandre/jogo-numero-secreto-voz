let fimDoJogo = false;

function verificaChuteValido(chute) {
  const numero = +chute;

  if (chute == "game over") {
    document.body.style.backgroundColor = "#000";
    document.body.innerHTML = `
    <h1 class="game-over">Game Over</h1>
    <h3>Que pena, te espero na próxima</h3>`;

    fimDoJogo = true;
    return;
  }

  if (chuteForInvalido(numero)) {
    chuteElem.innerHTML += `<div>Valor inválido</div>`;
    return;
  }

  if (numeroForaDoPermitido(numero)) {
    chuteElem.innerHTML += `<div>Valor fora da faixa permitida entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`;

    fimDoJogo = true;
    ganhouJogo();
  } else if (numero < numSecreto) {
    chuteElem.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
  } else {
    chuteElem.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}
function numeroForaDoPermitido(numero) {
  return numero < menorValor || numero > maiorValor;
}

document.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});

// Animação importada de Canvas Confetti
function ganhouJogo() {
  confetti({
    particleCount: 300,
    spread: 150,
  });
}
