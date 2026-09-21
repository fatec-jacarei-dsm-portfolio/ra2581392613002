const botoesSobre = document.querySelectorAll(".sobre-botao");
const paineisSobre = document.querySelectorAll(".sobre-painel");

botoesSobre.forEach((botao) => {

    botao.addEventListener("click", () => {

        const conteudo = botao.dataset.conteudo;

        botoesSobre.forEach((item) => {
            item.classList.remove("ativo");
        });

        paineisSobre.forEach((painel) => {
            painel.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        document
            .getElementById(conteudo)
            .classList.add("ativo");

    });

});

const etapasProcesso = {
    esboco: {
        numero: "01",
        titulo: "Esboço",
        texto:
            "Ideias começam no papel, explorando possibilidades, referências e diferentes caminhos para a solução."
    },

    logica: {
        numero: "02",
        titulo: "Lógica",
        texto:
            "A ideia é estruturada. Organizo fluxos, relações e regras para transformar o conceito em uma solução possível."
    },

    implementacao: {
        numero: "03",
        titulo: "Implementação",
        texto:
            "A solução ganha forma através do desenvolvimento, dos testes e da experimentação até se tornar um produto funcional."
    }
};


const botoesProcesso =
    document.querySelectorAll(".processo-botao");

const processoNumero =
    document.getElementById("processo-numero");

const processoTitulo =
    document.getElementById("processo-titulo");

const processoTexto =
    document.getElementById("processo-texto");


botoesProcesso.forEach((botao) => {

    botao.addEventListener("click", () => {

        const etapa = botao.dataset.etapa;

        const conteudo = etapasProcesso[etapa];

        botoesProcesso.forEach((item) => {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        processoNumero.textContent =
            conteudo.numero;

        processoTitulo.textContent =
            conteudo.titulo;

        processoTexto.textContent =
            conteudo.texto;

    });

});