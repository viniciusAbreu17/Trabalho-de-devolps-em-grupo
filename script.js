const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");

// Botão destaque
botaoDestaque.addEventListener("click", () => {
    servicos.scrollIntoView({ behavior: "smooth" });
});

// Formulário
formContato.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nome = document.querySelector("#nome").value;
    const assunto = document.querySelector("#assunto").value;
    const mensagem = document.querySelector("#mensagem").value;

    // Verifica se algum campo está vazio
    if (nome === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Se todos os campos estiverem preenchidos
    alert("Formulário enviado com sucesso!");

    // Mostra mensagem na página
    resposta.textContent = `Obrigado pelo contato, ${nome}!`;

    // Limpa o formulário
    formContato.reset();
});
