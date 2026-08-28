const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");
botaoDestaque.addEventListener("click", () => {
  servicos.scrollIntoView({ behavior: "smooth" });
});
formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = document.querySelector("#nome").value;
  resposta.textContent = `Obrigado pelo contato, ${nome}!`;
});

 // Verifica se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Se todos os campos estiverem preenchidos
    alert("Formulário enviado com sucesso!");

    // Mostra mensagem na página
    resposta.textContent = `Obrigado pelo contato, ${nome}!`;

    // Limpa os campos do formulário
    formContato.reset();
});
