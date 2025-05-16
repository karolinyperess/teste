function mostrarMensagem() {
  const msg = document.getElementById("mensagem");
  msg.classList.add("mensagem-visivel");
}

function criarCoracao() {
  const coracoes = document.querySelector(".coracoes");
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 20 + "px";
  coracao.textContent = "❤️";
  coracoes.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 6000);
}

setInterval(criarCoracao, 500);
