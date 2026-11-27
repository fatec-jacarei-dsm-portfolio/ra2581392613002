(() => {
  const progress = document.querySelector(".case-progress");
  if (progress) {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    update();
  }
  if (
    !("IntersectionObserver" in window) ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("reveal-pending");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(
      ".home-intro-grid, .projeto-cabecalho, .greener-experiencia-cabecalho, .greener-evolucao-cabecalho, .sobre-cabecalho",
    )
    .forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) return;
      el.classList.add("reveal-ready", "reveal-pending");
      observer.observe(el);
    });
})();

/* ========================================
   HERO — PARALLAX SELETIVO
======================================== */

(() => {

  const hero = document.querySelector(".hero-palco");

  if (!hero) return;


  /* ========================================
     ACESSIBILIDADE E DISPOSITIVOS
  ======================================== */

  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const dispositivoCompativel = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  );


  /* ========================================
     CONFIGURAÇÃO DAS CAMADAS
  ======================================== */

  const camadas = [

    {
      elemento: hero.querySelector(".hero-malha"),
      intensidade: 4
    },

  
    {
      elemento: hero.querySelector(".hero-circulo"),
      intensidade: 24
    }

  ].filter(camada => camada.elemento);


  /* ========================================
     ESTADO DO MOVIMENTO
  ======================================== */

  let alvoX = 0;
  let alvoY = 0;

  let atualX = 0;
  let atualY = 0;

  let frameId = null;

  const suavidade = 0.075;


  /* ========================================
     ATUALIZAÇÃO VISUAL
  ======================================== */

  function atualizarCamadas() {

    camadas.forEach(camada => {

      const x = atualX * camada.intensidade;
      const y = atualY * camada.intensidade;

      camada.elemento.style.setProperty(
        "--parallax-x",
        `${x.toFixed(2)}px`
      );

      camada.elemento.style.setProperty(
        "--parallax-y",
        `${y.toFixed(2)}px`
      );

    });

  }


  /* ========================================
     LOOP DA ANIMAÇÃO
  ======================================== */

  function animar() {

    atualX += (alvoX - atualX) * suavidade;
    atualY += (alvoY - atualY) * suavidade;

    const distanciaX = Math.abs(alvoX - atualX);
    const distanciaY = Math.abs(alvoY - atualY);

    const movimentoConcluido =
      distanciaX < 0.001 &&
      distanciaY < 0.001;

    if (movimentoConcluido) {

      atualX = alvoX;
      atualY = alvoY;

      atualizarCamadas();

      frameId = null;

      return;

    }

    atualizarCamadas();

    frameId = requestAnimationFrame(animar);

  }


  /* ========================================
     INICIAR ANIMAÇÃO
  ======================================== */

  function iniciarAnimacao() {

    if (frameId !== null) return;

    frameId = requestAnimationFrame(animar);

  }


  /* ========================================
     MOVIMENTO DO CURSOR
  ======================================== */

  function atualizarCursor(evento) {

    if (
      movimentoReduzido.matches ||
      !dispositivoCompativel.matches ||
      evento.pointerType === "touch"
    ) {
      return;
    }

    const limites = hero.getBoundingClientRect();

    if (!limites.width || !limites.height) return;

    const centroX = limites.left + limites.width / 2;
    const centroY = limites.top + limites.height / 2;

    alvoX =
      (evento.clientX - centroX) /
      (limites.width / 2);

    alvoY =
      (evento.clientY - centroY) /
      (limites.height / 2);

    alvoX = Math.max(-1, Math.min(1, alvoX));
    alvoY = Math.max(-1, Math.min(1, alvoY));

    iniciarAnimacao();

  }


  /* ========================================
     RETORNO À POSIÇÃO ORIGINAL
  ======================================== */

  function restaurarPosicao() {

    alvoX = 0;
    alvoY = 0;

    iniciarAnimacao();

  }


  /* ========================================
     DESATIVAR MOVIMENTO
  ======================================== */

  function verificarPreferencias() {

    if (
      !movimentoReduzido.matches &&
      dispositivoCompativel.matches
    ) {
      return;
    }

    if (frameId !== null) {

      cancelAnimationFrame(frameId);

      frameId = null;

    }

    alvoX = 0;
    alvoY = 0;

    atualX = 0;
    atualY = 0;

    atualizarCamadas();

  }


  /* ========================================
     EVENTOS
  ======================================== */

  hero.addEventListener(
    "pointermove",
    atualizarCursor
  );

  hero.addEventListener(
    "pointerleave",
    restaurarPosicao
  );

  movimentoReduzido.addEventListener(
    "change",
    verificarPreferencias
  );

  dispositivoCompativel.addEventListener(
    "change",
    verificarPreferencias
  );

})();

/* ========================================
   PROJETOS — SCROLL REVEAL EDITORIAL
======================================== */

(() => {

  /* ELEMENTOS OBSERVADOS */

  const elementos = document.querySelectorAll(
    "[data-editorial-reveal]"
  );

  if (!elementos.length) return;


  /* ACESSIBILIDADE */

  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (
    movimentoReduzido.matches ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }


  /* OBSERVADOR */

  const observer = new IntersectionObserver(

    (entradas, observador) => {

      entradas.forEach(entrada => {

        if (!entrada.isIntersecting) return;

        const elemento = entrada.target;

        elemento.classList.remove(
          "editorial-pendente"
        );

        elemento.classList.add(
          "editorial-visivel"
        );

        observador.unobserve(elemento);

      });

    },

    {
      root: null,

      rootMargin: "0px",

      threshold: 0.2
    }

  );


  /* INICIALIZAÇÃO */

  elementos.forEach(elemento => {

    elemento.classList.add(
      "editorial-pendente"
    );

    observer.observe(elemento);

  });


  /* ALTERAÇÃO DAS PREFERÊNCIAS */

  movimentoReduzido.addEventListener(
    "change",
    evento => {

      if (!evento.matches) return;

      observer.disconnect();

      elementos.forEach(elemento => {

        elemento.classList.remove(
          "editorial-pendente",
          "editorial-visivel"
        );

      });

    }
  );

})();