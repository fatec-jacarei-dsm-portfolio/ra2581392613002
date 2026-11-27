/* ========================================
   GREENER — GALERIA DE FUNCIONALIDADES
======================================== */

(() => {

  const demo = document.getElementById("greener-demo");

  if (!demo) return;

  /* ========================================
     DADOS DAS FUNCIONALIDADES
  ======================================== */

  const assetPath = "../assets/Greener/";

  const funcionalidades = [

    {
      id: "monitoramento",

      titulo: "Monitoramento",

      descricao:
        "Acompanhamento dos serviços monitorados, " +
        "com consolidação do consumo energético, " +
        "emissões de carbono e indicadores de " +
        "disponibilidade.",

      tags: [
        "Métricas",
        "Energia",
        "CO₂e",
        "Monitoramento"
      ],

      imagens: [
        {
          arquivo: "print-monitoramento.png",
          legenda: "Visão geral"
        }
      ]
    },

    {
      id: "analise",

      titulo: "Análises",

      descricao:
        "Exploração dos indicadores ambientais de " +
        "cada serviço, permitindo analisar históricos, " +
        "consumo de recursos computacionais e rankings " +
        "de impacto ambiental.",

      tags: [
        "Histórico",
        "Indicadores",
        "Rankings",
        "Filtros"
      ],

      imagens: [
        {
          arquivo: "print-analise.png",
          legenda: "Análise individual"
        }
      ]
    },

    {
      id: "comparacao",

      titulo: "Comparação de serviços",

      descricao:
        "Análise comparativa de serviços por meio de " +
        "diferentes visualizações, permitindo identificar " +
        "diferenças de consumo energético, emissões " +
        "e utilização de recursos computacionais.",

      tags: [
        "Comparação",
        "Gráficos",
        "Visualização de dados",
        "Filtros"
      ],

      imagens: [
        {
          arquivo: "print-comparacao.png",
          legenda: "Visão 01"
        },
        {
          arquivo: "print-comparacao2.png",
          legenda: "Visão 02"
        },
        {
          arquivo: "print-comparacao3.png",
          legenda: "Visão 03"
        }
      ]
    },

    {
      id: "redistribuicao",

      titulo: "Redistribuição",

      descricao:
        "Exploração de possibilidades de redistribuição " +
        "dos serviços, considerando informações " +
        "ambientais para apoiar decisões relacionadas " +
        "à sustentabilidade computacional.",

      tags: [
        "Distribuição",
        "Sustentabilidade",
        "Tomada de decisão"
      ],

      imagens: [
        {
          arquivo: "print-redistribuicao.png",
          legenda: "Redistribuição"
        }
      ]
    },

    {
      id: "karma",

      titulo: "Karma — Assistente de IA",

      descricao:
        "Assistente de inteligência artificial integrado " +
        "ao GreenER, concebido para tornar a exploração " +
        "das informações ambientais mais acessível, " +
        "interativa e intuitiva.",

      tags: [
        "Inteligência artificial",
        "Assistente",
        "UX/UI",
        "Identidade visual"
      ],

      imagens: [
        {
          arquivo: "print-karma.png",
          legenda: "Assistente Karma"
        }
      ]
    }

  ];


  /* ========================================
     ELEMENTOS DA INTERFACE
  ======================================== */

  const tabs = demo.querySelectorAll(
    ".greener-demo-tab"
  );

  const screen = demo.querySelector(
    ".greener-demo-screen"
  );

  const path = demo.querySelector(
    "#greener-demo-path"
  );

  const expand = demo.querySelector(
    "#greener-demo-expand"
  );

  const title = demo.querySelector(
    "#greener-demo-title"
  );

  const text = demo.querySelector(
    "#greener-demo-text"
  );

  const tags = demo.querySelector(
    "#greener-demo-tags"
  );

  const counter = demo.querySelector(
    "#greener-demo-counter"
  );

  const variants = demo.querySelector(
    "#greener-demo-variants"
  );

  const prev = demo.querySelector(
    "#greener-demo-prev"
  );

  const next = demo.querySelector(
    "#greener-demo-next"
  );


  /* ========================================
     ESTADO DA GALERIA
  ======================================== */

  let funcionalidadeAtual = 0;
  let imagemAtual = 0;

  let ultimaSolicitacao = 0;


  /* ========================================
     ATUALIZAÇÃO DA CAPTURA DE TELA
  ======================================== */

  function atualizarImagem() {

    const funcionalidade =
      funcionalidades[funcionalidadeAtual];

    const imagem =
      funcionalidade.imagens[imagemAtual];

    const src = assetPath + imagem.arquivo;

    // Identifica a solicitação mais recente.
    // Evita inconsistências em cliques rápidos.

    const solicitacao = ++ultimaSolicitacao;

    const novaImagem = new Image();

    novaImagem.id = "greener-demo-image";

    novaImagem.alt =
      `${funcionalidade.titulo} — ${imagem.legenda}`;

    novaImagem.decoding = "async";

    novaImagem.onload = () => {

      if (solicitacao !== ultimaSolicitacao) {
        return;
      }

      screen.replaceChildren(novaImagem);

      expand.href = src;

    };

    novaImagem.onerror = () => {

      if (solicitacao !== ultimaSolicitacao) {
        return;
      }

      const mensagem = document.createElement("p");

      mensagem.textContent =
        "Não foi possível carregar esta visualização.";

      screen.replaceChildren(mensagem);

      expand.href = src;

      console.warn(
        "GreenER: imagem não encontrada:",
        src
      );

    };

    novaImagem.src = src;

  }


  /* ========================================
     SELETORES SECUNDÁRIOS
  ======================================== */

  function atualizarVariantes() {

    const funcionalidade =
      funcionalidades[funcionalidadeAtual];

    variants.replaceChildren();

    variants.hidden =
      funcionalidade.imagens.length <= 1;

    if (variants.hidden) return;

    funcionalidade.imagens.forEach((imagem, index) => {

      const button = document.createElement("button");

      button.type = "button";

      button.className = "greener-demo-variant";

      button.textContent = imagem.legenda;

      button.classList.toggle(
        "ativo",
        index === imagemAtual
      );

      button.setAttribute(
        "aria-pressed",
        String(index === imagemAtual)
      );

      button.addEventListener("click", () => {

        imagemAtual = index;

        atualizarImagem();

        variants.querySelectorAll("button")
          .forEach((item, itemIndex) => {

            const ativo = itemIndex === imagemAtual;

            item.classList.toggle("ativo", ativo);

            item.setAttribute(
              "aria-pressed",
              String(ativo)
            );

          });

      });

      variants.appendChild(button);

    });

  }


  /* ========================================
     ATUALIZAÇÃO DAS TAGS
  ======================================== */

  function atualizarTags(funcionalidade) {

    tags.replaceChildren();

    funcionalidade.tags.forEach((tag) => {

      const elemento = document.createElement("span");

      elemento.textContent = tag;

      tags.appendChild(elemento);

    });

  }


  /* ========================================
     RENDERIZAÇÃO DA FUNCIONALIDADE
  ======================================== */

  function renderizarFuncionalidade() {

    const funcionalidade =
      funcionalidades[funcionalidadeAtual];

    const numeroAtual =
      String(funcionalidadeAtual + 1).padStart(2, "0");

    const total =
      String(funcionalidades.length).padStart(2, "0");


    // Atualiza os seletores principais.

    tabs.forEach((tab) => {

      const ativo =
        tab.dataset.feature === funcionalidade.id;

      tab.classList.toggle("ativo", ativo);

      tab.setAttribute(
        "aria-pressed",
        String(ativo)
      );

    });


    // Atualiza os textos.

    title.textContent = funcionalidade.titulo;

    text.textContent = funcionalidade.descricao;

    path.textContent =
      `GreenER / ${funcionalidade.titulo}`;

    counter.textContent =
      `${numeroAtual} / ${total}`;


    // Atualiza os componentes restantes.

    atualizarTags(funcionalidade);

    atualizarVariantes();

    atualizarImagem();

  }


  /* ========================================
     SELEÇÃO DE FUNCIONALIDADE
  ======================================== */

  function selecionarFuncionalidade(index) {

    const total = funcionalidades.length;

    funcionalidadeAtual =
      ((index % total) + total) % total;

    imagemAtual = 0;

    renderizarFuncionalidade();

  }


  /* ========================================
     EVENTOS DOS SELETORES
  ======================================== */

  tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      const index = funcionalidades.findIndex(
        (item) => item.id === tab.dataset.feature
      );

      if (index !== -1) {

        selecionarFuncionalidade(index);

      }

    });

  });


  /* ========================================
     EVENTOS DE NAVEGAÇÃO
  ======================================== */

  prev.addEventListener("click", () => {

    selecionarFuncionalidade(
      funcionalidadeAtual - 1
    );

  });

  next.addEventListener("click", () => {

    selecionarFuncionalidade(
      funcionalidadeAtual + 1
    );

  });


  /* ========================================
     INICIALIZAÇÃO
  ======================================== */

  renderizarFuncionalidade();

})();