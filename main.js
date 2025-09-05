window.iniciarJogo = function () {
  const nome = prompt("Olá! Qual é o seu nome?")
  if (nome === null) {
    alert("Cancelado. Até mais!")
    return
  }

  const numAleatorio = Math.floor(Math.random() * 100) + 1
  let tentativas = 10

  while (true) {
    let entrada = prompt(`${nome}, digite um número de 1 a 100:`)
    if (entrada === null) {
      alert("Cancelado. Até mais!")
      break
    }

    let numUsuario = Number(entrada)

    if (tentativas > 0 && numUsuario === numAleatorio) {
      let usadas = 11 - tentativas
      alert(`🎉 Parabéns, ${nome}!! Você acertou na ${usadas}ª tentativa!`)
      break
    } else if (tentativas > 0) {
      alert("Você errou o número.")
      tentativas--
      if (numUsuario > numAleatorio) {
        alert("Seu número é MAIOR que o número secreto.")
      } else if (numUsuario < numAleatorio && numUsuario != 0) {
        alert("Seu número é MENOR que o número secreto.")
      } else if (numUsuario === 0) {
        alert("Digite um número válido ou maior que 0.")
      } else {
        alert("Isso nem é um número válido.")
      }
    }

    if (tentativas != 0) {
      alert(`Você tem ${tentativas} tentativas restantes`)
    } else {
      alert(`❌ Você gastou todas as suas tentativas, ${nome}. O número secreto era ${numAleatorio}.`)
      alert("Clique em 'Começar' para jogar de novo.")
      break
    }
  }
}
