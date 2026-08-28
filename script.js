const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");

botaoDestaque.addEventListener("click", () => {
    servicos.scrollIntoView({ behavior: "smooth" });
});

formContato.addEventListener("submit", (evento) => {

    evento.preventDefault();

    // Pega os valores dos campos
    const nome = document.querySelector("#nome").value;
    const assunto = document.querySelector("#assunto").value;
    const mensagem = document.querySelector("#mensagem").value;

    // Verifica se algum campo está vazio
    if (nome === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Abre uma nova guia
    window.open(url, "_blank");

    // Toast
    $.toast({
        heading: "Guia aberta!",
        text: "Uma guia foi aberta para o envio do email",
        showHideTransition: "fade",
        icon: "success",
        bgColor: "#8A2BE2",
        hideAfter: 15000,
        loaderBg: "#87ceeb"
    });

    // Mensagem de sucesso
    alert("Formulário enviado com sucesso!");

    // Mostra resposta na página
    resposta.textContent = `Obrigado pelo contato, ${nome}!`;

    // Limpa o formulário
    formContato.reset();
});
