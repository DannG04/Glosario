// Utilidades compartidas entre el mapa interactivo (index.html) y la versión imprimible.
(function () {
  const G = window.GLOSARIO;

  // Color por tema: "web" para fondo oscuro, "print" para papel blanco.
  const COLORES = {
    triada:    { web: "#38bdf8", print: "#0369a1", icono: "◈" },
    politicas: { web: "#fbbf24", print: "#b45309", icono: "§" },
    riesgos:   { web: "#fb923c", print: "#c2410c", icono: "▲" },
    marcos:    { web: "#a78bfa", print: "#6d28d9", icono: "▤" },
    dlp:       { web: "#f472b6", print: "#be185d", icono: "⛁" },
    bia:       { web: "#34d399", print: "#047857", icono: "↻" },
  };

  const terminos = [];
  const porId = {};
  G.temas.forEach((tema, ti) => {
    tema.numero = ti + 1;
    tema.color = COLORES[tema.id] || { web: "#94a3b8", print: "#475569", icono: "•" };
    tema.total = 0;
    tema.grupos.forEach((grupo) => {
      grupo.terminos.forEach((t) => {
        t.tema = tema;
        t.grupo = grupo;
        t.relaciones = [];
        terminos.push(t);
        porId[t.id] = t;
        tema.total++;
      });
    });
  });
  G.enlaces.forEach((e) => {
    porId[e.de].relaciones.push(porId[e.a]);
    porId[e.a].relaciones.push(porId[e.de]);
  });

  const normalizar = (s) =>
    s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();

  // Peso de relación entre temas (para el mapa general).
  function relacionesEntreTemas() {
    const m = {};
    G.enlaces.forEach((e) => {
      const a = porId[e.de].tema.id, b = porId[e.a].tema.id;
      if (a === b) return;
      const k = [a, b].sort().join("|");
      m[k] = (m[k] || 0) + 1;
    });
    return Object.entries(m).map(([k, n]) => {
      const [a, b] = k.split("|");
      return { a, b, n };
    });
  }

  const escapar = (s) =>
    s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  window.Glosario = { datos: G, terminos, porId, normalizar, relacionesEntreTemas, escapar };
})();
