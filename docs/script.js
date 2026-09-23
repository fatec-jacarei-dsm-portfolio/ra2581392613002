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
  });
});

const etapasProcesso = {
  esboco: {
    titulo: "Esboço",
    texto:
      "Ideias começam no papel, explorando possibilidades, referências e diferentes caminhos para a solução.",
  },

  logica: {
    titulo: "Lógica",
    texto:
      "A ideia é estruturada. Organizo fluxos, relações e regras para transformar o conceito em uma solução possível.",
  },

  implementacao: {
    titulo: "Implementação",
    texto:
      "A solução ganha forma através do desenvolvimento, dos testes e da experimentação até se tornar um produto funcional.",
  },
};

const botoesProcesso = document.querySelectorAll(".processo-botao");

const processoTitulo = document.getElementById("processo-titulo");

const processoTexto = document.getElementById("processo-texto");

botoesProcesso.forEach((botao) => {
  botao.addEventListener("click", () => {
    const etapa = botao.dataset.etapa;

    const conteudo = etapasProcesso[etapa];

    botoesProcesso.forEach((item) => {
      item.classList.remove("ativo");
    });

    botao.classList.add("ativo");

   
    processoTitulo.textContent = conteudo.titulo;

    processoTexto.textContent = conteudo.texto;
  });
});

// =========================
// AVATAR / PAPEL NO PROJETO
// =========================

const avatarBotao = document.getElementById("avatar-botao");

const avatarPainel = document.getElementById("avatar-painel");

avatarBotao.addEventListener("click", () => {
  const estaAberto = avatarPainel.classList.toggle("ativo");

  avatarBotao.setAttribute("aria-expanded", estaAberto);
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



botoesSkills.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    event.stopPropagation();

    const nomeSkill = botao.dataset.skill;
    const skillSelecionada = dadosSkills[nomeSkill];

    if (!skillSelecionada) {
      return;
    }

    /* remove seleção anterior */

    botoesSkills.forEach((item) => {
      item.classList.remove("skill-ativa");
    });

    botao.classList.add("skill-ativa");

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

skillsMapa.addEventListener("click", () => {
  skillPopover.classList.remove("ativo");

  botoesSkills.forEach((item) => {
    item.classList.remove("skill-ativa");
  });
});
