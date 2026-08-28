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
    if (nome === "" || assunto === "" || mensagem === "") {
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
function abrirGmail() {
    var destinatario = 'lesilva.andrade0804@gmail.com';
    var mensagem = document.getElementById('mensagem').value;
    var assunto = document.getElementById('assunto').value;
 
    const url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(destinatario) + 
                "&su=" + encodeURIComponent(assunto) + 
                "&body=" + encodeURIComponent(mensagem);
 
    window.open(url, "_blank");
    $.toast({
        heading: 'Guia aberta!',
        text: 'Uma guia foi aberta para o envio do email',
        showHideTransition: 'fade',
        icon: 'success',
        bgColor: "#8A2BE2",
        hideAfter: 15000,
        loaderBg: '#87ceeb',
    });

