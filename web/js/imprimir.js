// Construye la versión imprimible (carta horizontal) a partir de los mismos datos del mapa 3D.
(function () {
  const { datos, terminos, porId, normalizar, relacionesEntreTemas, escapar } = window.Glosario;
  const { meta, temas } = datos;
  const doc = document.getElementById("documento");
  const dos = (n) => String(n).padStart(2, "0");
  const corto = (s) => s.replace(/\s*\(.*?\)/g, "").trim();
  const PAG_TEMA = (t) => t.numero + 2;
  const TOTAL = temas.length + 4;
  const rad = (g) => (g * Math.PI) / 180;

  function pagina(clase, html, n, color) {
    const el = document.createElement("section");
    el.className = "pagina " + clase;
    if (color) el.style.setProperty("--c", color);
    el.innerHTML = html + (n ? `<div class="pie"><span>${escapar(meta.titulo)} · ${escapar(meta.materia)} · ${escapar(meta.alumno)} · Grupo ${escapar(meta.grupo)}</span><span>${n} / ${TOTAL}</span></div>` : "");
    doc.appendChild(el);
    return el;
  }

  /* ---------- Geometría radial compartida (portada y mapa general) ---------- */
  function geometriaRadial(rTema, rGrupo) {
    const grupos = [];
    temas.forEach((t) => t.grupos.forEach((g) => grupos.push({ g, t })));
    const paso = 360 / grupos.length;
    grupos.forEach((x, i) => (x.ang = -90 + paso * (i + 0.5)));
    const posTema = {};
    temas.forEach((t) => {
      const angs = grupos.filter((x) => x.t === t).map((x) => x.ang);
      const ang = angs.reduce((a, b) => a + b, 0) / angs.length;
      posTema[t.id] = { ang, x: Math.cos(rad(ang)) * rTema, y: Math.sin(rad(ang)) * rTema };
    });
    grupos.forEach((x) => { x.x = Math.cos(rad(x.ang)) * rGrupo; x.y = Math.sin(rad(x.ang)) * rGrupo; });
    return { grupos, posTema };
  }

  function cuerdas(posTema, factor, ancho, opacidad) {
    return relacionesEntreTemas().map(({ a, b, n }) => {
      const A = posTema[a], B = posTema[b];
      const cx = ((A.x + B.x) / 2) * factor, cy = ((A.y + B.y) / 2) * factor;
      return `<path d="M${A.x},${A.y} Q${cx},${cy} ${B.x},${B.y}" fill="none" stroke="url(#gr-${a}-${b})"
        stroke-width="${ancho(n)}" stroke-linecap="round" opacity="${opacidad}"/>`;
    }).join("");
  }

  function degradados(posTema, campo) {
    return relacionesEntreTemas().map(({ a, b }) => {
      const A = posTema[a], B = posTema[b];
      const ca = temas.find((t) => t.id === a).color[campo], cb = temas.find((t) => t.id === b).color[campo];
      return `<linearGradient id="gr-${a}-${b}" gradientUnits="userSpaceOnUse" x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}">
        <stop offset="0" stop-color="${ca}"/><stop offset="1" stop-color="${cb}"/></linearGradient>`;
    }).join("");
  }

  /* ---------- 1. Portada ---------- */
  function portada() {
    const { grupos, posTema } = geometriaRadial(150, 255);
    let svg = `<svg viewBox="-330 -330 660 660" preserveAspectRatio="xMidYMid meet"><defs>${degradados(posTema, "web")}
      <radialGradient id="halo"><stop offset="0" stop-color="#38bdf8" stop-opacity=".35"/><stop offset="1" stop-color="#38bdf8" stop-opacity="0"/></radialGradient>
      <filter id="brillo" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter></defs>`;
    // anillos de fondo
    [80, 150, 255, 310].forEach((r) => (svg += `<circle r="${r}" fill="none" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 5"/>`));
    svg += cuerdas(posTema, 0.25, (n) => 1 + n * 0.9, 0.75);
    temas.forEach((t) => {
      const P = posTema[t.id];
      svg += `<line x1="0" y1="0" x2="${P.x}" y2="${P.y}" stroke="${t.color.web}" stroke-opacity=".35"/>`;
    });
    grupos.forEach((x) => {
      const P = posTema[x.t.id];
      svg += `<line x1="${P.x}" y1="${P.y}" x2="${x.x}" y2="${x.y}" stroke="${x.t.color.web}" stroke-opacity=".45"/>`;
      // términos como pequeñas estrellas alrededor del grupo
      const n = x.g.terminos.length;
      x.g.terminos.forEach((_, k) => {
        const a = rad(x.ang + (k - (n - 1) / 2) * 2.4);
        const r = 285 + (k % 2) * 16;
        const tx = Math.cos(a) * r, ty = Math.sin(a) * r;
        svg += `<line x1="${x.x}" y1="${x.y}" x2="${tx}" y2="${ty}" stroke="${x.t.color.web}" stroke-opacity=".25"/>
          <circle cx="${tx}" cy="${ty}" r="2" fill="${x.t.color.web}"/>`;
      });
      svg += `<circle cx="${x.x}" cy="${x.y}" r="4.5" fill="#0b1324" stroke="${x.t.color.web}" stroke-width="1.6"/>`;
    });
    temas.forEach((t) => {
      const P = posTema[t.id];
      svg += `<circle cx="${P.x}" cy="${P.y}" r="22" fill="${t.color.web}" opacity=".5" filter="url(#brillo)"/>
        <circle cx="${P.x}" cy="${P.y}" r="15" fill="${t.color.web}"/>
        <text x="${P.x}" y="${P.y + 4}" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="11" fill="#0b1324">${dos(t.numero)}</text>`;
    });
    svg += `<circle r="70" fill="url(#halo)"/><circle r="34" fill="#0b1324" stroke="#38bdf8" stroke-width="2"/>
      <path transform="translate(-13 -15) scale(0.9)" d="M16 2 4 7v8c0 7.5 5.1 13.4 12 15 6.9-1.6 12-7.5 12-15V7L16 2z" fill="rgba(56,189,248,.15)" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="1.4" cy="-1.5" r="3.6" fill="#38bdf8"/></svg>`;

    pagina("portada", `
      <div class="izq">
        <div class="institucion">
          <img src="img/logo-unsis.png" alt="Escudo de la ${escapar(meta.universidad)}">
          <div><b>${escapar(meta.universidad)}</b><span>${escapar(meta.licenciatura)}</span></div>
        </div>
        <p class="ojo">Mapa visual · ${escapar(meta.parcial)}</p>
        <h1>${escapar(meta.titulo)}</h1>
        <p class="materia">${escapar(meta.materia)}</p>
        <dl>
          <dt>Alumno</dt><dd class="${meta.alumno ? "" : "vacio"}">${escapar(meta.alumno || "")}</dd>
          <dt>Docente</dt><dd>${escapar(meta.docente)}</dd>
          <dt>Grupo</dt><dd>${escapar(meta.grupo)}</dd>
          <dt>Ciclo</dt><dd>${escapar(meta.ciclo)}</dd>
          <dt>Entrega</dt><dd>${escapar(meta.fecha)}</dd>
        </dl>
        <div class="cifras">
          <div><b>${temas.length}</b><span>temas</span></div>
          <div><b>${terminos.length}</b><span>términos</span></div>
          <div><b>${datos.enlaces.length}</b><span>relaciones</span></div>
        </div>
        <p class="nota">Cada tema es una rama del mapa; sus subtemas agrupan los términos y las líneas
          de colores conectan conceptos de distintos temas.${meta.url ? ` Versión interactiva en 3D: <a href="${escapar(meta.url)}">${escapar(meta.url.replace(/^https?:\/\//, ""))}</a>` : ""}</p>
      </div>
      <div class="der">${svg}</div>`);
  }

  /* ---------- 2. Mapa general ---------- */
  function mapaGeneral() {
    const R_T = 108, R_G = 190;
    const { grupos, posTema } = geometriaRadial(R_T, R_G);
    let svg = `<svg viewBox="-400 -385 800 770"><defs>${degradados(posTema, "print")}</defs>`;
    svg += `<circle r="${R_G}" fill="none" stroke="#e2e8f0" stroke-dasharray="2 4"/><circle r="${R_T}" fill="none" stroke="#e2e8f0" stroke-dasharray="2 4"/>`;
    svg += cuerdas(posTema, 0.2, (n) => 1.2 + n * 1.4, 0.55);
    temas.forEach((t) => {
      const P = posTema[t.id];
      svg += `<line x1="0" y1="0" x2="${P.x}" y2="${P.y}" stroke="${t.color.print}" stroke-width="2" stroke-opacity=".5"/>`;
    });
    grupos.forEach((x) => {
      const P = posTema[x.t.id], c = x.t.color.print;
      const mx = Math.cos(rad(x.ang)) * (R_T + 40), my = Math.sin(rad(x.ang)) * (R_T + 40);
      svg += `<path d="M${P.x},${P.y} Q${mx},${my} ${x.x},${x.y}" fill="none" stroke="${c}" stroke-width="1.3" stroke-opacity=".7"/>`;
      svg += `<circle cx="${x.x}" cy="${x.y}" r="5" fill="#fff" stroke="${c}" stroke-width="1.8"/>`;
      const izq = Math.cos(rad(x.ang)) < 0;
      const rot = izq ? x.ang + 180 : x.ang;
      const lx = Math.cos(rad(x.ang)) * (R_G + 11), ly = Math.sin(rad(x.ang)) * (R_G + 11);
      svg += `<text transform="translate(${lx} ${ly}) rotate(${rot})" text-anchor="${izq ? "end" : "start"}" dominant-baseline="middle"
        font-family="Inter" font-size="12.5" font-weight="500" fill="#1e293b">${escapar(x.g.titulo)}
        <tspan fill="#94a3b8" font-family="JetBrains Mono" font-size="10">${x.g.terminos.length}</tspan></text>`;
    });
    temas.forEach((t) => {
      const P = posTema[t.id];
      svg += `<circle cx="${P.x}" cy="${P.y}" r="22" fill="${t.color.print}" stroke="#fff" stroke-width="3"/>
        <text x="${P.x}" y="${P.y + 5}" text-anchor="middle" font-family="Inter" font-weight="800" font-size="15" fill="#fff">${dos(t.numero)}</text>`;
    });
    svg += `<circle r="48" fill="#0b1324"/>
      <text text-anchor="middle" font-family="Inter" font-weight="700" fill="#fff" font-size="10.5">
        <tspan x="0" y="-9">Seguridad de</tspan><tspan x="0" y="5">Centros de</tspan><tspan x="0" y="19">Informática</tspan></text></svg>`;

    const rels = relacionesEntreTemas();
    const lista = temas.map((t) => {
      const vecinos = rels.filter((r) => r.a === t.id || r.b === t.id)
        .map((r) => temas.find((x) => x.id === (r.a === t.id ? r.b : r.a)))
        .sort((a, b) => a.numero - b.numero);
      return `<div class="item" style="--c:${t.color.print}">
        <span class="n">${dos(t.numero)}</span>
        <div><b>${escapar(t.titulo)}</b><small>${escapar(t.subtitulo)} · ${t.total} términos</small>
          <div class="conecta">${vecinos.map((v) => `<span class="mini" style="--c:${v.color.print}">${dos(v.numero)}</span>`).join("")}</div></div>
        <span class="pag">p. ${PAG_TEMA(t)}</span></div>`;
    }).join("");

    pagina("", `
      <div class="cab"><div><p class="ojo">Vista general</p><h2>Mapa de temas del primer parcial</h2>
        <p>Del centro salen los ${temas.length} temas; cada tema se divide en subtemas y las bandas internas muestran qué temas comparten conceptos.</p></div></div>
      <div class="general">
        <div class="radial">${svg}</div>
        <div class="lista">${lista}
          <div class="leyenda-lectura">
            <span><i></i> Tema → subtema</span>
            <span><i class="rel"></i> Conceptos compartidos (más grueso = más relaciones)</span>
            <span><span class="mini" style="--c:#475569">00</span> Tema relacionado</span>
          </div>
        </div>
      </div>`, 2);
  }

  /* ---------- 3. Una página por tema ---------- */
  function paginaTema(t) {
    const externas = new Set();
    t.grupos.forEach((g) => g.terminos.forEach((x) => x.relaciones.forEach((r) => r.tema !== t && externas.add(r.tema))));
    const nRel = datos.enlaces.filter((e) => porId[e.de].tema === t || porId[e.a].tema === t).length;

    const columnas = t.grupos.map((g) => `
      <div class="columna">
        <div class="nodo-grupo">${escapar(g.titulo)}</div>
        ${g.terminos.map((x) => `
          <div class="tarjeta${x.ejemplo ? " ejemplo" : ""}">
            <h4>${escapar(x.ejemplo ? x.nombre.replace(/^ejemplo:\s*/i, "") : x.nombre)}</h4>
            <p>${escapar(x.desc)}</p>
            ${x.formula.map((f) => `<div class="formula">${escapar(f)}</div>`).join("")}
            ${x.relaciones.length ? `<div class="rels">${x.relaciones.map((r) =>
              `<span class="rel" style="--rc:${r.tema.color.print}"><span class="mini">${dos(r.tema.numero)}</span>${escapar(corto(r.nombre))}</span>`).join("")}</div>` : ""}
          </div>`).join("")}
      </div>`).join("");

    const el = pagina("", `
      <div class="cab">
        <span class="num">${dos(t.numero)}</span>
        <div><h2>${escapar(t.titulo)}</h2><p>${escapar(t.subtitulo)}</p></div>
        <div class="datos"><b>${t.total}</b> términos · <b>${t.grupos.length}</b> subtemas<br>
          <b>${nRel}</b> relaciones${externas.size ? " con " + [...externas].sort((a, b) => a.numero - b.numero)
            .map((x) => `<span class="mini" style="--c:${x.color.print}">${dos(x.numero)}</span>`).join(" ") : ""}</div>
      </div>
      <div class="mapa-tema">
        <svg class="conectores"></svg>
        <div class="nodo-tema"><span class="ico">${t.color.icono}</span>${escapar(t.titulo)}</div>
        <div class="columnas">${columnas}</div>
      </div>`, PAG_TEMA(t), t.color.print);
    return el;
  }

  // Ajusta la escala del texto (hasta 1.25) para que el mapa del tema llene la página sin desbordarse.
  function ajustar(pag) {
    const mapa = pag.querySelector(".mapa-tema");
    if (!mapa) return;
    let escala = 1.25;
    mapa.style.setProperty("--escala", escala);
    const sobra = () => {
      const limite = mapa.getBoundingClientRect().bottom;
      return [...mapa.querySelectorAll(".columna")].some((c) => c.getBoundingClientRect().bottom > limite + 0.5);
    };
    while (sobra() && escala > 0.66) {
      escala -= 0.02;
      mapa.style.setProperty("--escala", escala.toFixed(2));
    }
  }

  // Dibuja las líneas tema → subtema → término.
  function conectar(pag) {
    const mapa = pag.querySelector(".mapa-tema");
    if (!mapa) return;
    const svg = mapa.querySelector("svg.conectores");
    const base = mapa.getBoundingClientRect();
    const r = (el) => {
      const b = el.getBoundingClientRect();
      return { x: b.left - base.left, y: b.top - base.top, w: b.width, h: b.height };
    };
    const color = getComputedStyle(pag).getPropertyValue("--c").trim();
    const T = r(mapa.querySelector(".nodo-tema"));
    let d = "";
    let rail = "";
    mapa.querySelectorAll(".columna").forEach((col) => {
      const G = r(col.querySelector(".nodo-grupo"));
      const x0 = T.x + T.w / 2, y0 = T.y + T.h, x1 = G.x + G.w / 2, y1 = G.y;
      const ym = (y0 + y1) / 2;
      d += `M${x0},${y0} C${x0},${ym} ${x1},${ym} ${x1},${y1} `;
      const tarjetas = [...col.querySelectorAll(".tarjeta")].map(r);
      if (!tarjetas.length) return;
      const xr = tarjetas[0].x - 4.5;
      const ult = tarjetas[tarjetas.length - 1];
      rail += `M${x1},${G.y + G.h} L${x1},${G.y + G.h + 3} Q${x1},${tarjetas[0].y - 2} ${xr},${tarjetas[0].y + 6} L${xr},${ult.y + ult.h / 2} `;
      tarjetas.forEach((c) => (rail += `M${xr},${c.y + c.h / 2} L${c.x},${c.y + c.h / 2} `));
    });
    svg.innerHTML = `<path d="${d}" fill="none" stroke="${color}" stroke-width="1.6" stroke-opacity=".75"/>
      <path d="${rail}" fill="none" stroke="${color}" stroke-width="0.9" stroke-opacity=".45"/>`;
  }

  /* ---------- 4. Red de relaciones entre términos ---------- */
  function red() {
    const nodos = terminos.filter((t) => t.relaciones.length);
    const R = 215;
    const huecos = temas.filter((t) => nodos.some((n) => n.tema === t)).length;
    const paso = 360 / (nodos.length + huecos * 1.5);
    let a = -90, previo = null;
    const pos = new Map();
    nodos.forEach((n) => {
      if (previo && previo !== n.tema) a += paso * 1.5;
      if (!previo) a += paso * 0.75;
      pos.set(n, { ang: a, x: Math.cos(rad(a)) * R, y: Math.sin(rad(a)) * R });
      previo = n.tema;
      a += paso;
    });

    let defs = "", lineas = "", puntos = "", arcos = "";
    datos.enlaces.forEach((e, i) => {
      const A = pos.get(porId[e.de]), B = pos.get(porId[e.a]);
      defs += `<linearGradient id="rl${i}" gradientUnits="userSpaceOnUse" x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}">
        <stop offset="0" stop-color="${porId[e.de].tema.color.print}"/><stop offset="1" stop-color="${porId[e.a].tema.color.print}"/></linearGradient>`;
      lineas += `<path d="M${A.x},${A.y} Q${(A.x + B.x) * 0.12},${(A.y + B.y) * 0.12} ${B.x},${B.y}" fill="none" stroke="url(#rl${i})" stroke-width="1.4" opacity=".7"/>`;
    });
    temas.forEach((t) => {
      const angs = nodos.filter((n) => n.tema === t).map((n) => pos.get(n).ang);
      if (!angs.length) return;
      const a0 = Math.min(...angs) - paso * 0.45, a1 = Math.max(...angs) + paso * 0.45, r = R - 12;
      const large = a1 - a0 > 180 ? 1 : 0;
      arcos += `<path d="M${Math.cos(rad(a0)) * r},${Math.sin(rad(a0)) * r} A${r},${r} 0 ${large} 1 ${Math.cos(rad(a1)) * r},${Math.sin(rad(a1)) * r}"
        fill="none" stroke="${t.color.print}" stroke-width="7" stroke-linecap="round"/>`;
      const am = (a0 + a1) / 2, rr = R - 32;
      arcos += `<text x="${Math.cos(rad(am)) * rr}" y="${Math.sin(rad(am)) * rr + 4}" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="11" fill="${t.color.print}">${dos(t.numero)}</text>`;
    });
    nodos.forEach((n) => {
      const P = pos.get(n), c = n.tema.color.print;
      puntos += `<circle cx="${P.x}" cy="${P.y}" r="${2.6 + n.relaciones.length * 0.6}" fill="#fff" stroke="${c}" stroke-width="1.8"/>`;
      const izq = Math.cos(rad(P.ang)) < 0;
      const lx = Math.cos(rad(P.ang)) * (R + 10), ly = Math.sin(rad(P.ang)) * (R + 10);
      puntos += `<text transform="translate(${lx} ${ly}) rotate(${izq ? P.ang + 180 : P.ang})" text-anchor="${izq ? "end" : "start"}"
        dominant-baseline="middle" font-family="Inter" font-size="11" font-weight="500" fill="#1e293b">${escapar(corto(n.nombre))}</text>`;
    });
    const svg = `<svg viewBox="-395 -380 790 760"><defs>${defs}</defs>${arcos}${lineas}${puntos}</svg>`;

    const top = [...nodos].sort((a, b) => b.relaciones.length - a.relaciones.length).slice(0, 8)
      .map((n) => `<div><span>${escapar(n.nombre)}</span><span>${n.relaciones.length} · ${dos(n.tema.numero)}</span></div>`).join("");

    pagina("", `
      <div class="cab"><div><p class="ojo">Conexiones</p><h2>Red de relaciones entre términos</h2>
        <p>Los ${nodos.length} términos que se conectan con otros, agrupados por tema alrededor del círculo.</p></div></div>
      <div class="red">${svg}
        <div class="explica">
          <h3>Cómo leerla</h3>
          <p>Cada punto es un término y cada línea une dos conceptos relacionados. El color de la línea va del tema de un término al del otro; el tamaño del punto crece con su número de conexiones.</p>
          <p>Las líneas que cruzan el centro muestran cómo un tema se apoya en otro; por ejemplo, la confidencialidad se garantiza con cifrado y DLP.</p>
          <h3>Términos más conectados</h3>
          <div class="top">${top}</div>
        </div>
      </div>`, TOTAL - 1);
  }

  /* ---------- 5. Índice alfabético ---------- */
  function indice() {
    const orden = [...terminos].sort((a, b) => a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" }));
    let html = "", letra = "";
    orden.forEach((t) => {
      const l = normalizar(t.nombre)[0].toUpperCase();
      if (l !== letra) { letra = l; html += `<h5>${/[0-9]/.test(l) ? "#" : l}</h5>`; }
      html += `<div><span class="nom">${escapar(t.nombre)}</span><span class="pts"></span>
        <span class="mini" style="--c:${t.tema.color.print}">${dos(t.tema.numero)}</span></div>`;
    });
    pagina("", `
      <div class="cab"><div><p class="ojo">Referencia rápida</p><h2>Índice alfabético</h2>
        <p>El número de color indica el tema; cada tema empieza en la página ${PAG_TEMA(temas[0])} (tema 01) y sigue en orden.</p></div></div>
      <div class="indice">${html}</div>`, TOTAL);
  }

  /* ---------- Construcción ---------- */
  portada();
  mapaGeneral();
  const paginasTema = temas.map(paginaTema);
  red();
  indice();

  const listo = document.fonts ? document.fonts.ready : Promise.resolve();
  listo.then(() => {
    paginasTema.forEach((p) => { ajustar(p); conectar(p); });
    document.body.dataset.listo = "1";
  });
})();
