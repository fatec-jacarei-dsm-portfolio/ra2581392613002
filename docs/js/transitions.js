/* ========================================
   VH — PAGE TRANSITION CONTROLLER
======================================== */

(() => {

  /* ========================================
     IDENTIFICAR O DESTINO
  ======================================== */

  function identificarDestino(url) {

    if (!url) return "index";

    try {

      const caminho = new URL(
        url,
        window.location.href
      ).pathname.toLowerCase();

      if (caminho.endsWith("/scrum-dungeon.html")) {
        return "scrum";
      }

      if (caminho.endsWith("/greener.html")) {
        return "greener";
      }

      return "index";

    } catch {

      return "index";

    }

  }


  /* ========================================
     APLICAR IDENTIDADE
  ======================================== */

  function aplicarTipo(transicao, destino) {

    if (!transicao?.types) return;

    const tipo = identificarDestino(destino);

    transicao.types.add(tipo);

  }


  /* ========================================
     SAÍDA DA PÁGINA ATUAL
  ======================================== */

  window.addEventListener("pageswap", evento => {

    if (!evento.viewTransition) return;

    const destino = evento.activation?.entry?.url;

    aplicarTipo(
      evento.viewTransition,
      destino
    );

  });


  /* ========================================
     ENTRADA NA NOVA PÁGINA
  ======================================== */

  window.addEventListener("pagereveal", evento => {

    if (!evento.viewTransition) return;

    aplicarTipo(
      evento.viewTransition,
      window.location.href
    );

  });

})();