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

    document.getElementById(conteudo).classList.add("ativo");
    if (conteudo === "habilidades") {
      requestAnimationFrame(() => {
        desenharConexoesPrincipais();
      });
    }
  });
});

// =========================
// TRAJETÓRIA / FOTOS
// =========================

const fotosTrajetoria = document.querySelectorAll(".sobre-foto");

const trajetoriaIndice = document.getElementById("trajetoria-indice");

const trajetoriaTitulo = document.getElementById("trajetoria-titulo");

const trajetoriaTexto = document.getElementById("trajetoria-texto");

const momentosTrajetoria = [
  {
    indice: "01 / 04",

    titulo: "Da rua para o design.",

    texto:
      "Minha relação com o processo criativo começou nas artes visuais, principalmente através da tatuagem, ilustração e graffiti. Foi onde comecei a explorar composição, cor, identidade e diferentes formas de comunicar visualmente.",
  },

  {
    indice: "02 / 04",

    titulo: "Transformando expressão em projeto.",

    texto:
      "O interesse pela criação visual me levou ao Design de Produto e ao trabalho profissional com design. Passei a aplicar essa bagagem artística em projetos para marcas, explorando identidade visual, motion design e comunicação.",
  },

  {
    indice: "03 / 04",

    titulo: "Da estética para a experiência.",

    texto:
      "Com UX e UI, meu olhar começou a ir além da composição visual. Passei a pensar também em fluxos, comportamento, necessidades do usuário e em como decisões de design podem tornar produtos digitais mais claros e significativos.",
  },

  {
    indice: "04 / 04",

    titulo: "Design encontra tecnologia.",

    texto:
      "Hoje amplio essa trajetória através do desenvolvimento de software. A tecnologia se tornou uma nova ferramenta para transformar ideias em produtos, levando comigo a bagagem construída no design e nas artes para criar soluções digitais que conectem função, experiência e identidade.",
  },
];

fotosTrajetoria.forEach((foto) => {
  foto.addEventListener("click", () => {
    const indice = Number(foto.dataset.indice);

    const momento = momentosTrajetoria[indice];

    fotosTrajetoria.forEach((item) => {
      item.classList.remove("ativa");
    });

    foto.classList.add("ativa");

    trajetoriaIndice.textContent = momento.indice;

    trajetoriaTitulo.textContent = momento.titulo;

    trajetoriaTexto.textContent = momento.texto;
  });
});

const dadosSkills = {
  javascript: {
    categoria: "DESENVOLVIMENTO",
    titulo: "JavaScript",
    texto:
      "Utilizo JavaScript no desenvolvimento de aplicações web, trabalhando com lógica, manipulação de interfaces e integração entre diferentes partes da aplicação.",
  },

  typescript: {
    categoria: "DESENVOLVIMENTO",
    titulo: "TypeScript",
    texto:
      "Tecnologia que venho aprofundando na graduação e em projetos pessoais, trabalhando com tipagem, interfaces, classes, orientação a objetos e tipos genéricos.",
  },

  html: {
    categoria: "DESENVOLVIMENTO",
    titulo: "HTML",
    texto:
      "Utilizo HTML para estruturar interfaces web de forma semântica e organizada, servindo como base para meus projetos front-end.",
  },

  css: {
    categoria: "DESENVOLVIMENTO",
    titulo: "CSS",
    texto:
      "Utilizo CSS na construção de interfaces responsivas, composição visual, layouts e interações, conectando minha experiência em design ao desenvolvimento front-end.",
  },

  node: {
    categoria: "DESENVOLVIMENTO",
    titulo: "Node.js",
    texto:
      "Utilizo Node.js no desenvolvimento de aplicações back-end, principalmente na construção de servidores, organização da lógica da aplicação e integração com bancos de dados.",
  },

  postgresql: {
    categoria: "DESENVOLVIMENTO",
    titulo: "PostgreSQL",
    texto:
      "Utilizo PostgreSQL na modelagem e manipulação de bancos de dados relacionais, trabalhando com consultas SQL, relacionamentos e integração com aplicações.",
  },

  python: {
    categoria: "DESENVOLVIMENTO",
    titulo: "Python",
    texto:
      "Possuo conhecimentos básicos em Python, utilizados principalmente em estudos acadêmicos envolvendo lógica, orientação a objetos e recursão.",
  },

  figma: {
    categoria: "DESIGN & UX",
    titulo: "Figma",
    texto:
      "Utilizo Figma para criação de interfaces, protótipos e exploração de fluxos de navegação antes da implementação.",
  },

  ux: {
    categoria: "DESIGN & UX",
    titulo: "UX Design",
    texto:
      "Minha experiência em UX contribui para compreender necessidades dos usuários, estruturar jornadas e pensar soluções além da interface visual.",
  },

  ui: {
    categoria: "DESIGN & UX",
    titulo: "UI Design",
    texto:
      "Aplico princípios de composição, hierarquia visual, tipografia e identidade na criação de interfaces digitais.",
  },

  prototipagem: {
    categoria: "DESIGN & UX",
    titulo: "Prototipagem",
    texto:
      "Utilizo protótipos para explorar soluções, validar fluxos e transformar ideias em experiências navegáveis antes do desenvolvimento.",
  },

  research: {
    categoria: "DESIGN & UX",
    titulo: "UX Research",
    texto:
      "Tenho experiência com práticas de pesquisa voltadas à compreensão de usuários e utilização dessas informações durante o processo de criação.",
  },

  git: {
    categoria: "PROCESSO & ARQUITETURA",
    titulo: "Git & GitHub",
    texto:
      "Utilizo Git e GitHub para versionamento, organização do desenvolvimento e colaboração em projetos, incluindo trabalho com branches e Pull Requests.",
  },

  scrum: {
    categoria: "PROCESSO & ARQUITETURA",
    titulo: "Scrum",
    texto:
      "Tenho experiência prática com Scrum em projetos acadêmicos, incluindo atuação como Product Owner, organização de backlog, priorização e comunicação com stakeholders.",
  },

  uml: {
    categoria: "PROCESSO & ARQUITETURA",
    titulo: "UML",
    texto:
      "Utilizo UML em atividades acadêmicas e projetos pessoais para representar estruturas, interações e apoiar o planejamento de sistemas.",
  },

  docker: {
    categoria: "PROCESSO & ARQUITETURA",
    titulo: "Docker",
    texto:
      "Utilizo Docker para criar ambientes padronizados de execução e organizar serviços de aplicações, como servidor e banco de dados.",
  },

  arquitetura: {
    categoria: "PROCESSO & ARQUITETURA",
    titulo: "Arquitetura de software",
    texto:
      "Venho trabalhando com organização de aplicações em responsabilidades, camadas e módulos, buscando separar interface, regras de negócio e acesso aos dados.",
  },
};

const botoesSkills = document.querySelectorAll(".skill-node");

const skillsMapa = document.querySelector(".skills-mapa");

const skillPopover = document.querySelector("#skill-popover");

const popoverCategoria = document.querySelector("#skill-popover-categoria");

const popoverTitulo = document.querySelector("#skill-popover-titulo");

const popoverTexto = document.querySelector("#skill-popover-texto");

const characterSheet = document.querySelector("#character-sheet");

const characterSheetFechar = document.querySelector("#character-sheet-fechar");

botoesSkills.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    event.stopPropagation();

    const nomeSkill = botao.dataset.skill;
    const skillSelecionada = dadosSkills[nomeSkill];

    if (nomeSkill === "centro") {
      characterSheet.classList.add("ativo");
      skillsMapa.classList.add("character-aberto");

      characterSheet.setAttribute("aria-hidden", "false");

      return;
    }

    if (!skillSelecionada) {
      return;
    }

    /* remove seleção anterior */

    botoesSkills.forEach((item) => {
      item.classList.remove("skill-ativa");
    });

    botao.classList.add("skill-ativa");
    document.querySelectorAll(".skill-conexao").forEach((linha) => {
      linha.classList.remove("conexao-ativa");
    });

    document
      .querySelectorAll(`.skill-conexao[data-skill="${nomeSkill}"]`)
      .forEach((linha) => {
        linha.classList.add("conexao-ativa");
      });

    let classeCategoria;

    if (skillSelecionada.categoria === "DESENVOLVIMENTO") {
      classeCategoria = "conexao-dev";
    }

    if (skillSelecionada.categoria === "DESIGN & UX") {
      classeCategoria = "conexao-design";
    }

    if (skillSelecionada.categoria === "PROCESSO & ARQUITETURA") {
      classeCategoria = "conexao-processo";
    }

    document
      .querySelectorAll(`.${classeCategoria}.conexao-tronco`)
      .forEach((linha) => {
        linha.classList.add("conexao-ativa");
      });

    document.querySelectorAll(".conexao-espinha").forEach((linha) => {
      const skillsDaLinha = linha.dataset.skills?.split(" ") || [];

      if (skillsDaLinha.includes(nomeSkill)) {
        linha.classList.add("conexao-ativa");
      }
    });

    /* coloca o conteúdo no balão */

    popoverCategoria.textContent = skillSelecionada.categoria;

    popoverTitulo.textContent = skillSelecionada.titulo;

    popoverTexto.textContent = skillSelecionada.texto;

    /* descobre posição do botão */

    const botaoRect = botao.getBoundingClientRect();

    const mapaRect = skillsMapa.getBoundingClientRect();

    /* posiciona acima do botão */

    let esquerda = botaoRect.left - mapaRect.left + botaoRect.width / 2 - 150;

    const margem = 15;

    const larguraPopover = 300;

    if (esquerda < margem) {
      esquerda = margem;
    }

    if (esquerda + larguraPopover > mapaRect.width - margem) {
      esquerda = mapaRect.width - larguraPopover - margem;
    }

    let topo = botaoRect.top - mapaRect.top - skillPopover.offsetHeight - 20;

    if (topo < 15) {
      topo = botaoRect.bottom - mapaRect.top + 20;

      skillPopover.classList.add("popover-abaixo");
    } else {
      skillPopover.classList.remove("popover-abaixo");
    }

    skillPopover.style.left = `${esquerda}px`;
    skillPopover.style.top = `${topo}px`;

    skillPopover.classList.add("ativo");
  });
});

characterSheetFechar.addEventListener("click", (event) => {
  event.stopPropagation();

  characterSheet.classList.remove("ativo");
  skillsMapa.classList.remove("character-aberto");

  characterSheet.setAttribute("aria-hidden", "true");
});

skillsMapa.addEventListener("click", () => {
  skillPopover.classList.remove("ativo");

  botoesSkills.forEach((item) => {
    item.classList.remove("skill-ativa");
  });
});

// =========================
// SKILL TREE / CONEXÕES
// =========================

const svgConexoes = document.querySelector("#skills-conexoes");

const skillCentro = document.querySelector(".skill-centro");

const grupoDev = document.querySelector(".grupo-dev");

const grupoDesign = document.querySelector(".grupo-design");

const grupoProcesso = document.querySelector(".grupo-processo");

function encontrarCentro(elemento) {
  const elementoRect = elemento.getBoundingClientRect();
  const mapaRect = skillsMapa.getBoundingClientRect();

  return {
    x: elementoRect.left - mapaRect.left + elementoRect.width / 2,

    y: elementoRect.top - mapaRect.top + elementoRect.height / 2,
  };
}

function encontrarHub(grupo, direcao) {
  const grupoRect = grupo.getBoundingClientRect();
  const mapaRect = skillsMapa.getBoundingClientRect();

  const centroX = grupoRect.left - mapaRect.left + grupoRect.width / 2;

  const centroY = grupoRect.top - mapaRect.top + grupoRect.height / 2;

  if (direcao === "direita") {
    return {
      x: grupoRect.right - mapaRect.left + 25,
      y: centroY,
    };
  }

  if (direcao === "esquerda") {
    return {
      x: grupoRect.left - mapaRect.left - 25,
      y: centroY,
    };
  }

  return {
    x: centroX,
    y: grupoRect.top - mapaRect.top - 25,
  };
}

function criarLinha(inicio, fim, classe = "", skill = "") {
  const linha = document.createElementNS("http://www.w3.org/2000/svg", "line");

  linha.setAttribute("x1", inicio.x);
  linha.setAttribute("y1", inicio.y);
  linha.setAttribute("x2", fim.x);
  linha.setAttribute("y2", fim.y);

  linha.setAttribute("class", `skill-conexao ${classe}`);

  if (skill) {
    linha.dataset.skill = skill;
  }

  svgConexoes.appendChild(linha);
}
function conectarGrupoAoHub(grupo, hub, classe) {
  const skills = [...grupo.querySelectorAll(".skill-node")];

  const centros = skills.map((skill) => {
    return {
      ponto: encontrarCentro(skill),
      nome: skill.dataset.skill,
    };
  });

  // =========================
  // DESENVOLVIMENTO
  // =========================

  if (grupo.classList.contains("grupo-dev")) {
    const xEspinha = hub.x - 45;

    const menorY = Math.min(...centros.map((centro) => centro.ponto.y));

    const maiorY = Math.max(...centros.map((centro) => centro.ponto.y));

    // espinha dividida em segmentos
    for (let i = 0; i < centros.length - 1; i++) {
      const atual = centros[i];
      const proximo = centros[i + 1];

      const segmento = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );

      segmento.setAttribute("x1", xEspinha);
      segmento.setAttribute("y1", atual.ponto.y);
      segmento.setAttribute("x2", xEspinha);
      segmento.setAttribute("y2", proximo.ponto.y);

      segmento.setAttribute("class", `skill-conexao ${classe} conexao-espinha`);

      const menorSegmentoY = Math.min(atual.ponto.y, proximo.ponto.y);

      const maiorSegmentoY = Math.max(atual.ponto.y, proximo.ponto.y);

      const skillsDoSegmento = centros
        .filter((skill) => {
          const skillY = skill.ponto.y;

          if (skillY < hub.y) {
            return menorSegmentoY >= skillY && menorSegmentoY < hub.y;
          }

          if (skillY > hub.y) {
            return maiorSegmentoY <= skillY && maiorSegmentoY > hub.y;
          }

          return false;
        })
        .map((skill) => skill.nome);

      segmento.dataset.skills = skillsDoSegmento.join(" ");

      svgConexoes.appendChild(segmento);
    }

    // cada skill → espinha
    centros.forEach((skill) => {
      criarLinha(
        skill.ponto,
        {
          x: xEspinha,
          y: skill.ponto.y,
        },
        classe,
        skill.nome,
      );
    });

    // espinha → hub
    criarLinha(
      {
        x: xEspinha,
        y: hub.y,
      },
      hub,
      `${classe} conexao-tronco`,
    );

    return;
  }

  // =========================
  // DESIGN
  // =========================

  if (grupo.classList.contains("grupo-design")) {
    const xEspinha = hub.x + 45;

    const menorY = Math.min(...centros.map((centro) => centro.ponto.y));

    const maiorY = Math.max(...centros.map((centro) => centro.ponto.y));

    // espinha dividida em segmentos
    for (let i = 0; i < centros.length - 1; i++) {
      const atual = centros[i];
      const proximo = centros[i + 1];

      const segmento = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );

      segmento.setAttribute("x1", xEspinha);
      segmento.setAttribute("y1", atual.ponto.y);
      segmento.setAttribute("x2", xEspinha);
      segmento.setAttribute("y2", proximo.ponto.y);

      segmento.setAttribute("class", `skill-conexao ${classe} conexao-espinha`);

      const menorSegmentoY = Math.min(atual.ponto.y, proximo.ponto.y);

      const maiorSegmentoY = Math.max(atual.ponto.y, proximo.ponto.y);

      const skillsDoSegmento = centros
        .filter((skill) => {
          const skillY = skill.ponto.y;

          if (skillY < hub.y) {
            return menorSegmentoY >= skillY && menorSegmentoY < hub.y;
          }

          if (skillY > hub.y) {
            return maiorSegmentoY <= skillY && maiorSegmentoY > hub.y;
          }

          return false;
        })
        .map((skill) => skill.nome);

      segmento.dataset.skills = skillsDoSegmento.join(" ");

      svgConexoes.appendChild(segmento);
    }

    centros.forEach((skill) => {
      criarLinha(
        {
          x: xEspinha,
          y: skill.ponto.y,
        },
        skill.ponto,
        classe,
        skill.nome,
      );
    });

    criarLinha(
      hub,
      {
        x: xEspinha,
        y: hub.y,
      },
      `${classe} conexao-tronco`,
    );
    return;
  }

  // =========================
  // PROCESSO
  // =========================

  centros.forEach((skill) => {
    const centroSkill = skill.ponto;

    const caminho = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );

    const pontoIntermediarioY = hub.y + 35;

    const desenho = `
    M ${hub.x} ${hub.y}
    L ${hub.x} ${pontoIntermediarioY}
    L ${centroSkill.x} ${centroSkill.y}
  `;

    caminho.setAttribute("d", desenho);

    caminho.setAttribute("class", `skill-conexao ${classe}`);

    caminho.dataset.skill = skill.nome;

    svgConexoes.appendChild(caminho);
  });
}
function desenharConexoesPrincipais() {
  svgConexoes.innerHTML = "";

  const larguraMapa = skillsMapa.clientWidth;
  const alturaMapa = skillsMapa.clientHeight;

  svgConexoes.setAttribute("viewBox", `0 0 ${larguraMapa} ${alturaMapa}`);

  svgConexoes.setAttribute("preserveAspectRatio", "none");

  const centro = encontrarCentro(skillCentro);

  const hubDev = encontrarHub(grupoDev, "direita");

  const hubDesign = encontrarHub(grupoDesign, "esquerda");

  const hubProcesso = encontrarHub(grupoProcesso, "topo");

  criarLinha(centro, hubDev, "conexao-dev conexao-tronco");

  criarLinha(centro, hubDesign, "conexao-design conexao-tronco");

  criarLinha(centro, hubProcesso, "conexao-processo conexao-tronco");

  conectarGrupoAoHub(grupoDev, hubDev, "conexao-dev");

  conectarGrupoAoHub(grupoDesign, hubDesign, "conexao-design");

  conectarGrupoAoHub(grupoProcesso, hubProcesso, "conexao-processo");
}

// Centro principal: VH
const centro = encontrarCentro(skillCentro);

// Hubs invisíveis de cada área
const hubDev = encontrarHub(grupoDev, "direita");

const hubDesign = encontrarHub(grupoDesign, "esquerda");

const hubProcesso = encontrarHub(grupoProcesso, "topo");

// VH → áreas
criarLinha(centro, hubDev, "conexao-dev");

criarLinha(centro, hubDesign, "conexao-design");

criarLinha(centro, hubProcesso, "conexao-processo");

// áreas → habilidades
conectarGrupoAoHub(grupoDev, hubDev, "conexao-dev");

conectarGrupoAoHub(grupoDesign, hubDesign, "conexao-design");

conectarGrupoAoHub(grupoProcesso, hubProcesso, "conexao-processo");

desenharConexoesPrincipais();
window.addEventListener("resize", desenharConexoesPrincipais);

// ========================================
// HERO — TROCA TIPOGRÁFICA
// ========================================

const heroNome = document.querySelector(".hero-nome");

const fontesHero = ["fonte-tech", "fonte-editorial", "fonte-experimental"];

let fonteHeroAtual = 0;

function trocarFonteHero() {
  heroNome.classList.add("glitch");

  setTimeout(() => {
    heroNome.classList.remove(...fontesHero);

    fonteHeroAtual++;

    if (fonteHeroAtual >= fontesHero.length) {
      fonteHeroAtual = 0;
    }

    heroNome.classList.add(fontesHero[fonteHeroAtual]);
  }, 90);

  setTimeout(() => {
    heroNome.classList.remove("glitch");
  }, 180);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(trocarFonteHero, 2500);
}

/* ========================================
   HOME — FILTROS ANIMADOS DOS PROJETOS
======================================== */

(() => {

  const secao = document.getElementById("projetos");

  if (!secao) return;


  /* ========================================
     ELEMENTOS
  ======================================== */

  const filtros = secao.querySelectorAll(
    ".projeto-filtro"
  );

  const projetos = secao.querySelectorAll(
    ".projeto-editorial"
  );

  const conteudo = secao.querySelector(
    ".projetos-conteudo"
  );

  const estadoVazio = secao.querySelector(
    "#projetos-vazio"
  );

  const contagem = secao.querySelector(
    "#projetos-contagem"
  );

  const contadorTotal = secao.querySelector(
    '[data-filtro="todos"] > span'
  );

  if (!conteudo || !estadoVazio || !contagem) {
    return;
  }


  /* ========================================
     ACESSIBILIDADE
  ======================================== */

  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


  /* ========================================
     ESTADO
  ======================================== */

  let categoriaAtual = "todos";
  let categoriaRenderizada = "todos";

  let animacaoAtual = null;
  let versaoTransicao = 0;


  /* ========================================
     ATUALIZAR BOTÕES
  ======================================== */

  function atualizarFiltros() {

    filtros.forEach(filtro => {

      const ativo =
        filtro.dataset.filtro === categoriaAtual;

      filtro.classList.toggle("ativo", ativo);

      filtro.setAttribute(
        "aria-pressed",
        String(ativo)
      );

    });

  }


  /* ========================================
     ATUALIZAR GALERIA
  ======================================== */

  function atualizarProjetos() {

    let totalVisivel = 0;

    projetos.forEach(projeto => {

      const categoria = projeto.dataset.categoria;

      const visivel =
        categoriaAtual === "todos" ||
        categoria === categoriaAtual;

      projeto.hidden = !visivel;

      if (visivel) {
        totalVisivel++;
      }

    });

    estadoVazio.hidden = totalVisivel > 0;

    const numero = String(totalVisivel)
      .padStart(2, "0");

    const texto =
      totalVisivel === 1
        ? "PROJETO"
        : "PROJETOS";

    contagem.textContent = `${numero} ${texto}`;

    categoriaRenderizada = categoriaAtual;

  }


  /* ========================================
     VERIFICAR ALTERAÇÕES VISUAIS
  ======================================== */

  function obterProjetosVisiveis(categoria) {

    return Array.from(projetos).filter(projeto =>

      categoria === "todos" ||
      projeto.dataset.categoria === categoria

    );

  }


  function possuiAlteracaoVisual(categoria) {

    const anteriores = obterProjetosVisiveis(
      categoriaRenderizada
    );

    const proximos = obterProjetosVisiveis(
      categoria
    );

    return (
      anteriores.length !== proximos.length ||
      anteriores.some(
        (projeto, indice) =>
          projeto !== proximos[indice]
      )
    );

  }


  /* ========================================
     TRANSIÇÃO ENTRE CATEGORIAS
  ======================================== */

  async function selecionarCategoria(categoria) {

    if (categoria === categoriaAtual) return;

    categoriaAtual = categoria;

    const versao = ++versaoTransicao;

    atualizarFiltros();


    /* CANCELAR TRANSIÇÕES ANTERIORES */

    animacaoAtual?.cancel();

    animacaoAtual = null;


    /* EVITAR ANIMAÇÕES DESNECESSÁRIAS */

    if (
      movimentoReduzido.matches ||
      typeof conteudo.animate !== "function" ||
      !possuiAlteracaoVisual(categoria)
    ) {

      atualizarProjetos();

      return;

    }


    /* FASE 01 — SAÍDA */

    const saida = conteudo.animate(

      [
        {
          opacity: 1,
          translate: "0 0"
        },
        {
          opacity: 0,
          translate: "0 -6px"
        }
      ],

      {
        duration: 180,
        easing: "ease-in",
        fill: "forwards"
      }

    );

    animacaoAtual = saida;


    try {

      await saida.finished;

    } catch {

      // A animação foi cancelada.
      return;

    }


    /* VERIFICAR SE A SELEÇÃO CONTINUA VÁLIDA */

    if (versao !== versaoTransicao) return;


    /* FASE 02 — ATUALIZAR CONTEÚDO */

    atualizarProjetos();

    saida.cancel();


    /* FASE 03 — ENTRADA */

    const entrada = conteudo.animate(

      [
        {
          opacity: 0,
          translate: "0 12px"
        },
        {
          opacity: 1,
          translate: "0 0"
        }
      ],

      {
        duration: 420,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)"
      }

    );

    animacaoAtual = entrada;


    try {

      await entrada.finished;

    } catch {

      return;

    }

    if (animacaoAtual === entrada) {
      animacaoAtual = null;
    }

  }


  /* ========================================
     EVENTOS
  ======================================== */

  filtros.forEach(filtro => {

    filtro.addEventListener("click", () => {

      selecionarCategoria(
        filtro.dataset.filtro
      );

    });

  });


  /* ========================================
     ALTERAÇÃO DAS PREFERÊNCIAS
  ======================================== */

  movimentoReduzido.addEventListener(
    "change",
    evento => {

      if (!evento.matches) return;

      versaoTransicao++;

      animacaoAtual?.cancel();

      animacaoAtual = null;

      atualizarProjetos();

    }
  );


  /* ========================================
     INICIALIZAÇÃO
  ======================================== */

  if (contadorTotal) {

    contadorTotal.textContent =
      `(${String(projetos.length).padStart(2, "0")})`;

  }

  atualizarFiltros();

  atualizarProjetos();

})();

