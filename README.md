# Jogo do número secreto com reconhecimento de voz

Práitica de lógica de programação utilizando javascript do curso da Alura através deste desafio de um jogo de adivinhação do número secreto através de reconhecimento de voz.

## 🚀 Funcionalidades

- Geração de um número secreto
- Identificação do palpite por reconhecimento de voz
- Tratamento da transcrição do audio para validação do palpite
- Dicas ao longo do jogo para orientar o acerto do número secreto
- Encerramento do jogo pelo comando de voz `Game Over`

## 🛠 Tecnologia aplicada

Javascript, HTML, CSS, Web Speech API

## 🕹 Uso/Exemplos

#### Função para tratamento da transcrição

```javascript
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
```

## Autores

- [@michelsandre](https://www.github.com/michelsandre)
