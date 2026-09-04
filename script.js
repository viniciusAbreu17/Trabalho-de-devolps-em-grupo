const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");

// Botão "Ver serviços"
botaoDestaque.addEventListener("click", () => {
  servicos.scrollIntoView({
    behavior: "smooth",
  });
});

// Formulário de contato
formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const assunto = document.querySelector("#assunto").value.trim();
  const mensagem = document.querySelector("#mensagem").value.trim();

  // Verifica se algum campo está vazio
  if (nome === "" || assunto === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Mostra mensagem de sucesso
  resposta.textContent = `Obrigado pelo contato, ${nome}!`;

  // Abre o Gmail
  abrirGmail(nome, assunto, mensagem);

  // Limpa os campos
  formContato.reset();
});

// Abre o Gmail com os dados do formulário
function abrirGmail(nome, assunto, mensagem) {
  const destinatario = "empresaReal@gmail.com";

  const corpo = `Nome: ${nome}\n\nMensagem:\n${mensagem}`;

  const url =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=" +
    encodeURIComponent(destinatario) +
    "&su=" +
    encodeURIComponent(assunto) +
    "&body=" +
    encodeURIComponent(corpo);

  window.open(url, "_blank");
}
