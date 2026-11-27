// =========================
// AVATAR / PAPEL NO PROJETO
// =========================

const avatarBotao = document.getElementById("avatar-botao");

const avatarPainel = document.getElementById("avatar-painel");

avatarBotao.addEventListener("click", () => {
  const estaAberto = avatarPainel.classList.toggle("ativo");

  avatarBotao.setAttribute("aria-expanded", estaAberto);
});

// ========================================
// SCRUM DUNGEON — SPRINTS
// ========================================

const dadosSprints = {
  1: {
    numero: "SPRINT 01",
    titulo: "Planejar",

    descricao:
      "Na primeira Sprint estruturamos as bases do projeto. Definimos o fluxo da experiência, casos de uso, prototipação e arquitetura, além de alinharmos a organização da equipe dentro da metodologia Scrum.",

    video: "https://www.youtube.com/embed/0MVQDj3I3wc",

    imagens: [
      {
        src: "../assets/scrum-dungeon/sprint1-esboço-inicial-ui.jpeg",
        legenda: "Esboços iniciais da interface e estrutura de navegação",
      },
      {
        src: "../assets/scrum-dungeon/sprint-1-fluxo-geral.png",
        legenda: "Fluxo geral da experiência",
      },
      {
        src: "../assets/scrum-dungeon/sprint-1-diagrama-uso.png",
        legenda: "Diagrama de casos de uso",
      },
      {
        src: "../assets/scrum-dungeon/sprint-1-diagrama-de-sequencia.png",
        legenda: "Diagrama de sequência",
      },
    ],
  },

  2: {
    numero: "SPRINT 02",
    titulo: "Construir",

    descricao:
      "Na segunda Sprint começamos a transformar o protótipo em uma experiência funcional. Desenvolvemos os sistemas de progressão e reprovação, progressão da história, reset e liberação de capítulos, além de construirmos o primeiro capítulo e estabelecermos o tom da narrativa e as regras do jogo.",

    video: "https://www.youtube.com/embed/DoX2dENC2lA",

    imagens: [
      {
        src: "../assets/scrum-dungeon/sprint-2-sistema-aprovacao.png",
        legenda: "Sistema de aprovação e progressão",
      },
      {
        src: "../assets/scrum-dungeon/sprint-2-sistema-reprovacao.png",
        legenda: "Sistema de reprovação",
      },

      {
        src: "../assets/scrum-dungeon/sprint-2-mapa.png",
        legenda: "Mapa de capítulos e sistema de progressão da experiência",
      },
    ],
  },

  3: {
    numero: "SPRINT 03",
    titulo: "Refinar",

    descricao:
      "Na terceira Sprint o foco foi finalizar e padronizar a identidade visual da experiência. Implementamos o sistema de artefatos, animações, funcionalidade de perfil e efeitos sonoros, refinando a interação e a apresentação final do Scrum Dungeon.",

    video: "https://www.youtube.com/embed/iSikcW3CIZE?start=43",

    imagens: [
      {
        src: "../assets/scrum-dungeon/sprint-3-artefato.png",
        legenda: "Sistema de artefatos",
      },
      {
        src: "../assets/scrum-dungeon/sprint-3-boss.png",
        legenda: "Experiência e identidade visual",
      },
      {
        src: "../assets/scrum-dungeon/sprint-3-mapa.png",
        legenda: "Mapa e progressão da experiência",
      },
    ],
  },
};

const botoesSprint = document.querySelectorAll(".scrum-sprint-botao");

const scrumVideo = document.querySelector("#scrum-video");

const scrumSprintNumero = document.querySelector("#scrum-sprint-numero");
const scrumSprintTitulo = document.querySelector("#scrum-sprint-titulo");
const scrumSprintDescricao = document.querySelector("#scrum-sprint-descricao");

const scrumGaleriaImagem = document.querySelector("#scrum-galeria-imagem");
const scrumGaleriaLegenda = document.querySelector("#scrum-galeria-legenda");
const scrumGaleriaContador = document.querySelector("#scrum-galeria-contador");

const scrumGaleriaAnterior = document.querySelector("#scrum-galeria-anterior");
const scrumGaleriaProxima = document.querySelector("#scrum-galeria-proxima");

let sprintAtual = 1;
let imagemAtual = 0;

function atualizarGaleria() {
  const sprint = dadosSprints[sprintAtual];
  const imagem = sprint.imagens[imagemAtual];

  scrumGaleriaImagem.src = imagem.src;
  scrumGaleriaImagem.alt = imagem.legenda;

  scrumGaleriaLegenda.textContent = imagem.legenda;

  scrumGaleriaContador.textContent = `${String(imagemAtual + 1).padStart(2, "0")} / ${String(sprint.imagens.length).padStart(2, "0")}`;
}

function atualizarSprint(numeroSprint) {
  sprintAtual = numeroSprint;
  imagemAtual = 0;

  const sprint = dadosSprints[sprintAtual];

  scrumSprintNumero.textContent = sprint.numero;
  scrumSprintTitulo.textContent = sprint.titulo;
  scrumSprintDescricao.textContent = sprint.descricao;

  scrumVideo.src = sprint.video;
  scrumVideo.title = `Scrum Dungeon — ${sprint.numero}`;

  botoesSprint.forEach((botao) => {
    botao.classList.toggle(
      "ativo",
      Number(botao.dataset.sprint) === sprintAtual,
    );
  });

  atualizarGaleria();
}

botoesSprint.forEach((botao) => {
  botao.addEventListener("click", () => {
    const numeroSprint = Number(botao.dataset.sprint);

    atualizarSprint(numeroSprint);
  });
});

scrumGaleriaProxima.addEventListener("click", () => {
  const imagens = dadosSprints[sprintAtual].imagens;

  imagemAtual++;

  if (imagemAtual >= imagens.length) {
    imagemAtual = 0;
  }

  atualizarGaleria();
});

scrumGaleriaAnterior.addEventListener("click", () => {
  const imagens = dadosSprints[sprintAtual].imagens;

  imagemAtual--;

  if (imagemAtual < 0) {
    imagemAtual = imagens.length - 1;
  }

  atualizarGaleria();
});

const scrumLightbox = document.querySelector("#scrum-lightbox");
const scrumLightboxImagem = document.querySelector("#scrum-lightbox-imagem");
const scrumLightboxLegenda = document.querySelector("#scrum-lightbox-legenda");
const scrumLightboxFechar = document.querySelector("#scrum-lightbox-fechar");

function abrirLightbox() {
  scrumLightboxImagem.src = scrumGaleriaImagem.src;
  scrumLightboxImagem.alt = scrumGaleriaImagem.alt;

  scrumLightboxLegenda.textContent = scrumGaleriaLegenda.textContent;

  scrumLightbox.classList.add("ativo");
  scrumLightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

function fecharLightbox() {
  scrumLightbox.classList.remove("ativo");
  scrumLightbox.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

scrumGaleriaImagem.addEventListener("click", abrirLightbox);

scrumLightboxFechar.addEventListener("click", fecharLightbox);

scrumLightbox.addEventListener("click", (event) => {
  if (event.target === scrumLightbox) {
    fecharLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && scrumLightbox.classList.contains("ativo")) {
    fecharLightbox();
  }
});

