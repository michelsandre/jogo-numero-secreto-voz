// API reconhecimento de voz
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Seleciona elemento
const chuteElem = document.getElementById("chute");

// Dicionario para converter o numero por extenso em dígito (problema no reconhecimento)
const dicionario = {
  zero: 0,
  um: 1,
  uma: 1,
  dois: 2,
  duas: 2,
  três: 3,
  quatro: 4,
  cinco: 5,
  seis: 6,
  sete: 7,
};

// Configuração da API de reconhecimento de voz
const recognition = new SpeechRecognition();
recognition.lang = "pt-BR";
// recognition.interimResults = true;
recognition.start();

recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => {
  if (!fimDoJogo) {
    recognition.start();
  }
});

// Função executado a final da fala
function onSpeak(e) {
  const transcriaoAudio = e.results[0][0].transcript;
  const chute = trataTranscricao(transcriaoAudio);

  exibeChuteNaTela(chute);
  verificaChuteValido(chute);
}

// Imprime o chute na tela
function exibeChuteNaTela(chute) {
  chuteElem.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>`;
}

// Função para tratamento da transcrição do audio
function trataTranscricao(transcricaoAudio) {
  // Divide cada palavra em um array
  const tratamento = transcricaoAudio.split(" ");
  let resultado = "";

  // Traduz a palavra do array de acordo com o dicionario, se existir
  for (palavra in dicionario) {
    const index = tratamento.indexOf(palavra);
    if (index >= 0) {
      tratamento[index] = dicionario[palavra];
    }
  }

  tratamento.forEach((item, i) => {
    tratamento[i] *= 1; // Multiplica cada item do array por 1, para transformar em um número

    // Verifica se o item é um número, se sim, mostra como resultado
    if (!Number.isNaN(tratamento[i])) {
      resultado = tratamento[i];
    }
  });

  // Se não for obtido nenhum número, retorna a transcrição na íntegra
  if (!resultado) {
    resultado = transcricaoAudio;
  }

  return resultado;
}
