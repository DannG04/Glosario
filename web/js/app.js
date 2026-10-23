// Se carga como script clásico (sin módulos) para que también funcione abriendo el archivo con doble clic.
(function () {
const { OrbitControls, CSS2DRenderer, CSS2DObject } = THREE;

const { datos, terminos, porId, normalizar, escapar } = window.Glosario;
const temas = datos.temas;
const $ = (s) => document.querySelector(s);
const movimientoReducido = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ */
/* Textos generales                                                    */
/* ------------------------------------------------------------------ */
$("#ciclo").textContent = datos.meta.ciclo;
// Las cifras suben desde cero al cargar.
function contar(el, fin) {
  if (movimientoReducido) { el.textContent = fin; return; }
  const t0 = performance.now() + 400, dur = 1400;
  (function paso(ahora) {
    const k = Math.max(0, Math.min(1, (ahora - t0) / dur));
    el.textContent = Math.round(fin * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(paso);
  })(performance.now());
}
contar($("#n-temas"), temas.length);
contar($("#n-terminos"), terminos.length);
contar($("#n-enlaces"), datos.enlaces.length);
{
  const m = datos.meta;
  const html = `<img src="img/logo-unsis.png" alt="Escudo de la ${escapar(m.universidad)}">
    <div><b>${escapar(m.alumno)}</b><span>${escapar(m.licenciatura)} · Grupo ${escapar(m.grupo)}</span>
    <span>Docente: ${escapar(m.docente)}</span><span>${escapar(m.universidad)}</span></div>`;
  $("#creditos-mapa").innerHTML = $("#creditos-lista").innerHTML = html;
}

/* ------------------------------------------------------------------ */
/* Escena                                                              */
/* ------------------------------------------------------------------ */
const contenedor = $("#escena");
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
} catch {
  $("#sin-webgl").hidden = false;
  $("#intro").hidden = $("#leyenda").hidden = $("#ayuda").hidden = $("#herramientas").hidden = true;
}

const escena = new THREE.Scene();
escena.fog = new THREE.FogExp2(0x050a14, 0.0032);
const camara = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);
// En pantallas verticales (celular) la cámara se aleja para que quepa todo el mapa.
const vertical = innerWidth / Math.max(1, innerHeight - 120) < 1;
const VISTA_INICIAL = new THREE.Vector3(0, 175, 215).multiplyScalar(vertical ? 1.75 : 1);
if (vertical) escena.fog.density = 0.0017;
camara.position.copy(VISTA_INICIAL);

const etiquetas = new CSS2DRenderer();
etiquetas.domElement.style.cssText = "position:absolute;inset:0;pointer-events:none";

let controles;
if (renderer) {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  contenedor.append(renderer.domElement, etiquetas.domElement);
  controles = new OrbitControls(camara, renderer.domElement);
  controles.enableDamping = true;
  controles.dampingFactor = 0.07;
  controles.minDistance = 12;
  controles.maxDistance = 520;
  controles.autoRotate = !movimientoReducido;
  controles.autoRotateSpeed = 0.35;
  $("#rotar").checked = controles.autoRotate;
}

function textoBrillo() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  const r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  r.addColorStop(0, "rgba(255,255,255,1)");
  r.addColorStop(0.2, "rgba(255,255,255,0.55)");
  r.addColorStop(0.5, "rgba(255,255,255,0.12)");
  r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}
const BRILLO = textoBrillo();

// Fondo de estrellas
{
  const n = 1800, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const v = new THREE.Vector3().randomDirection().multiplyScalar(500 + Math.random() * 700);
    pos.set([v.x, v.y, v.z], i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  escena.add(new THREE.Points(geo, new THREE.PointsMaterial({
    size: 1.6, color: 0x8fb3e0, transparent: true, opacity: 0.55, fog: false, sizeAttenuation: true,
  })));
}

/* ------------------------------------------------------------------ */
/* Distribución de nodos                                               */
/* ------------------------------------------------------------------ */
const nodos = [];          // { tipo, ref, pos, mesh, brillo, etiqueta, color }
const nodoDe = new Map();  // ref -> nodo
const golpeables = [];

const geoEsfera = new THREE.SphereGeometry(1, 24, 16);
const geoGolpe = new THREE.SphereGeometry(1, 8, 6);

function crearNodo(tipo, ref, pos, radio, color, htmlEtiqueta, claseEtiqueta) {
  const col = new THREE.Color(color);
  const grupo = new THREE.Group();
  grupo.position.copy(pos);

  const mat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 1 });
  const mesh = new THREE.Mesh(tipo === "tema" ? new THREE.IcosahedronGeometry(1, 1) : geoEsfera, mat);
  mesh.scale.setScalar(radio);
  grupo.add(mesh);

  if (tipo === "tema") {
    const alambre = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 1),
      new THREE.MeshBasicMaterial({ color: col, wireframe: true, transparent: true, opacity: 0.6 }));
    alambre.scale.setScalar(radio * 1.7);
    grupo.add(alambre);
    mesh.userData.alambre = alambre;
  }
  if (tipo === "grupo") {
    const anillo = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.08, 8, 40),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.8 }));
    anillo.scale.setScalar(radio * 1.8);
    grupo.add(anillo);
    mesh.userData.anillo = anillo;
  }

  const brillo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: BRILLO, color: col, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0.85,
  }));
  brillo.scale.setScalar(radio * (tipo === "termino" ? 6 : 7));
  grupo.add(brillo);

  const golpe = new THREE.Mesh(geoGolpe, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
  golpe.scale.setScalar(Math.max(radio * 1.6, 2.4));
  grupo.add(golpe);

  const div = document.createElement("div");
  div.className = "etq " + claseEtiqueta;
  div.style.setProperty("--c", color);
  div.innerHTML = htmlEtiqueta;
  const etiqueta = new CSS2DObject(div);
  grupo.add(etiqueta);

  escena.add(grupo);
  const nodo = { tipo, ref, pos: pos.clone(), grupo, mesh, mat, brillo, etiqueta, div, radio, color: col, orden: nodos.length };
  golpe.userData.nodo = nodo;
  golpeables.push(golpe);
  nodos.push(nodo);
  nodoDe.set(ref, nodo);
  return nodo;
}

// Base ortonormal perpendicular a un vector
function base(d) {
  const a = Math.abs(d.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
  const u = new THREE.Vector3().crossVectors(d, a).normalize();
  const v = new THREE.Vector3().crossVectors(d, u).normalize();
  return [u, v];
}

const CENTRO = { id: "centro" };
const nodoCentro = renderer && crearNodo("centro", CENTRO, new THREE.Vector3(), 5, "#38bdf8",
  escapar(datos.meta.materia), "etq-centro");

// Cada línea se dibuja justo después de crear su nodo hijo; "hijo" guarda ese nodo para la animación de entrada.
const lineasJerarquia = { pos: [], col: [], hijo: [] };
function lineaJerarquia(a, b, ca, cb) {
  lineasJerarquia.pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
  lineasJerarquia.col.push(ca.r, ca.g, ca.b, cb.r, cb.g, cb.b);
  lineasJerarquia.hijo.push(nodos.length - 1);
}

const R_TEMA = 100;
if (renderer) temas.forEach((tema, i) => {
  const ang = (i / temas.length) * Math.PI * 2;
  const pos = new THREE.Vector3(Math.cos(ang) * R_TEMA, Math.sin(i * 2.1) * 26, Math.sin(ang) * R_TEMA);
  const color = tema.color.web;
  const nt = crearNodo("tema", tema, pos, 3.4, color,
    `<span>${String(tema.numero).padStart(2, "0")}</span>${escapar(tema.titulo)}`, "etq-tema");
  lineaJerarquia(new THREE.Vector3(), pos, nodoCentro.color, nt.color);

  const d = pos.clone().normalize();
  const [u, v] = base(d);
  const ng = tema.grupos.length;
  tema.grupos.forEach((grupo, gi) => {
    const a = (gi / ng) * Math.PI * 2 + i;
    const off = u.clone().multiplyScalar(Math.cos(a)).add(v.clone().multiplyScalar(Math.sin(a)));
    const pg = pos.clone().addScaledVector(off, 19).addScaledVector(d, 9);
    const ngr = crearNodo("grupo", grupo, pg, 1.3, color, escapar(grupo.titulo), "etq-grupo");
    ngr.tema = tema;
    lineaJerarquia(pos, pg, nt.color, ngr.color);

    // Términos alrededor del subgrupo (esfera de Fibonacci desplazada hacia afuera)
    const n = grupo.terminos.length;
    const radio = 5 + n * 0.75;
    const fuera = pg.clone().sub(pos).normalize().add(d).normalize();
    const centro = pg.clone().addScaledVector(fuera, radio * 0.75);
    grupo.terminos.forEach((t, k) => {
      const y = n === 1 ? 0 : 1 - (k / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const phi = k * Math.PI * (3 - Math.sqrt(5));
      const p = centro.clone().add(new THREE.Vector3(Math.cos(phi) * r, y, Math.sin(phi) * r).multiplyScalar(radio));
      const ntm = crearNodo("termino", t, p, t.ejemplo ? 0.8 : 1.05, color, escapar(t.nombre), "etq-termino");
      lineaJerarquia(pg, p, ngr.color, ntm.color);
    });
  });
});

let matJerarquia, geoJerarquia;
if (renderer) {
  geoJerarquia = new THREE.BufferGeometry();
  geoJerarquia.setAttribute("position", new THREE.Float32BufferAttribute(lineasJerarquia.pos, 3));
  geoJerarquia.setAttribute("color", new THREE.Float32BufferAttribute(lineasJerarquia.col, 3));
  matJerarquia = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.28, depthWrite: false });
  escena.add(new THREE.LineSegments(geoJerarquia, matJerarquia));
}

// Relaciones entre términos: arcos que pasan cerca del centro
const arcos = [];
const PUNTOS_ARCO = 48;
if (renderer) datos.enlaces.forEach((e) => {
  const A = nodoDe.get(porId[e.de]), B = nodoDe.get(porId[e.a]);
  const medio = A.pos.clone().add(B.pos).multiplyScalar(0.5);
  const mismoTema = A.ref.tema === B.ref.tema;
  const ctrl = medio.multiplyScalar(mismoTema ? 1.25 : 0.3);
  ctrl.y += mismoTema ? 10 : 18;
  const curva = new THREE.QuadraticBezierCurve3(A.pos, ctrl, B.pos);
  const pts = curva.getPoints(PUNTOS_ARCO);
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  const cols = [];
  pts.forEach((_, i) => {
    const c = A.color.clone().lerp(B.color, i / (pts.length - 1));
    cols.push(c.r, c.g, c.b);
  });
  geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
  const mat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending });
  const linea = new THREE.Line(geo, mat);
  escena.add(linea);

  const pulso = new THREE.Sprite(new THREE.SpriteMaterial({
    map: BRILLO, color: 0xffffff, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0.9,
  }));
  pulso.scale.setScalar(2.2);
  escena.add(pulso);
  arcos.push({ A, B, curva, geo, mat, pulso, fase: Math.random(), vel: 0.08 + Math.random() * 0.06 });
});

/* ------------------------------------------------------------------ */
/* Estado: selección, foco y resaltado                                 */
/* ------------------------------------------------------------------ */
const estado = { seleccion: null, hover: null, todas: false };
const quiz = { activo: false, preguntas: [], i: 0, aciertos: 0, fallos: 0, resuelta: false, pista: false };

// La selección manda; sin selección, el nodo bajo el puntero ilumina su vecindario.
function focoActual() {
  if (estado.seleccion) return estado.seleccion;
  return estado.hover && estado.hover.tipo !== "centro" ? estado.hover : null;
}

function activos(s = focoActual()) {
  if (!s) return null;
  const set = new Set([s]);
  if (s.tipo === "termino") {
    set.add(nodoDe.get(s.ref.grupo));
    set.add(nodoDe.get(s.ref.tema));
    s.ref.relaciones.forEach((r) => set.add(nodoDe.get(r)));
  } else if (s.tipo === "tema") {
    s.ref.grupos.forEach((g) => {
      set.add(nodoDe.get(g));
      g.terminos.forEach((t) => set.add(nodoDe.get(t)));
    });
  } else if (s.tipo === "grupo") {
    set.add(nodoDe.get(s.tema));
    s.ref.terminos.forEach((t) => set.add(nodoDe.get(t)));
  }
  return set;
}

// Las opacidades no cambian de golpe: se guarda la meta y el bucle de animación se acerca a ella.
const fundibles = new Set();
function fundir(mat, opacidad) {
  mat.userData.meta = opacidad;
  fundibles.add(mat);
}

function aplicarResaltado() {
  const foco = focoActual(), set = activos(foco), sel = activos(estado.seleccion);
  const tenue = estado.seleccion ? 0.12 : 0.22;
  nodos.forEach((n) => {
    const on = !set || set.has(n) || n.tipo === "centro";
    fundir(n.mat, on ? 1 : tenue);
    fundir(n.brillo.material, on ? 0.85 : 0.05);
    if (n.mesh.userData.alambre) fundir(n.mesh.userData.alambre.material, on ? 0.6 : 0.08);
    if (n.mesh.userData.anillo) fundir(n.mesh.userData.anillo.material, on ? 0.8 : 0.1);
    n.apagado = !on;
    // Solo la selección bloquea los clics; el resaltado por hover es pasajero.
    n.atenuado = !!sel && !sel.has(n) && n.tipo !== "centro";
  });
  fundir(matJerarquia, set ? 0.1 : 0.28);
  arcos.forEach((a) => {
    const on = !set || (set.has(a.A) && set.has(a.B) &&
      (foco.tipo !== "termino" || a.A === foco || a.B === foco));
    fundir(a.mat, !set ? 0.5 : on ? 1 : 0.04);
    a.pulso.visible = on;
  });
}

function visibilidadEtiquetas() {
  const set = activos();
  const camPos = camara.position;
  nodos.forEach((n) => {
    let ver;
    if (n.tipo === "centro") ver = !set;
    else if (n.tipo === "tema") ver = !n.apagado || n === estado.hover;
    else if (n.tipo === "grupo") {
      ver = (set && set.has(n)) || estado.todas || camPos.distanceTo(n.pos) < 90;
      if (n.apagado) ver = false;
    } else {
      ver = n === estado.hover || (set && set.has(n)) || estado.todas || camPos.distanceTo(n.pos) < 55;
      if (n.apagado && n !== estado.hover) ver = false;
    }
    if (llegada && llegada.ms < n.aparece) ver = false;
    n.div.classList.toggle("oculta", !ver);
    n.div.classList.toggle("destacado", n === estado.seleccion || n === estado.hover);
  });
}

/* Vuelo de cámara */
let vuelo = null;
let llegada = null; // animación de entrada: { ms, camara }
function volarA(objetivo, distancia) {
  const desde = camara.position.clone();
  const dir = objetivo.clone().sub(controles.target);
  if (dir.lengthSq() < 1) dir.copy(camara.position).sub(controles.target);
  const haciaAfuera = objetivo.lengthSq() > 1 ? objetivo.clone().normalize() : new THREE.Vector3(0, 0.3, 1).normalize();
  const hasta = objetivo.clone().add(haciaAfuera.multiplyScalar(distancia).add(new THREE.Vector3(0, distancia * 0.35, 0)));
  vuelo = { desde, hasta, tDesde: controles.target.clone(), tHasta: objetivo.clone(), t: 0, dur: movimientoReducido ? 1 : 1100 };
}

function seleccionar(nodo, { volar = true, desdeHash = false } = {}) {
  estado.seleccion = nodo;
  if (renderer) {
    aplicarResaltado();
    if (nodo && volar) {
      const dist = nodo.tipo === "tema" ? 85 : nodo.tipo === "grupo" ? 60 : 55;
      volarA(nodo.pos, dist);
    } else if (!nodo && volar) {
      vuelo = { desde: camara.position.clone(), hasta: VISTA_INICIAL.clone(), tDesde: controles.target.clone(),
        tHasta: new THREE.Vector3(), t: 0, dur: movimientoReducido ? 1 : 1100 };
    }
    if (nodo) controles.autoRotate = false;
  }
  $("#intro").classList.toggle("oculta", !!nodo);
  marcarLeyenda();
  pintarPanel();
  if (!desdeHash) actualizarHash();
}

/* ------------------------------------------------------------------ */
/* Panel de detalle                                                    */
/* ------------------------------------------------------------------ */
const panel = $("#panel"), panelContenido = $("#panel-contenido");

function botonTermino(t, extra = "") {
  return `<li><button data-termino="${t.id}" style="--c:${t.tema.color.web}">
    <span class="punto"></span><span>${escapar(t.nombre)}</span>${extra}</button></li>`;
}

function pintarPanel() {
  const n = estado.seleccion;
  // En el quiz el panel delataría la respuesta, así que espera a que se resuelva la pregunta.
  if (!n || n.tipo === "centro" || (quiz.activo && !quiz.resuelta)) { panel.hidden = true; return; }
  panel.hidden = false;
  panel.scrollTop = 0;
  let html = "";
  if (n.tipo === "termino") {
    const t = n.ref, c = t.tema.color.web;
    html += `<div class="ruta" style="--c:${c}"><button data-tema="${t.tema.id}" class="chip">${t.tema.color.icono} ${escapar(t.tema.titulo)}</button>
      <span>›</span><span>${escapar(t.grupo.titulo)}</span></div>
      <h3>${escapar(t.nombre)}</h3><p class="desc">${escapar(t.desc)}</p>`;
    t.formula.forEach((f) => (html += `<div class="formula" style="--c:${c}">${escapar(f)}</div>`));
    if (t.relaciones.length) {
      html += `<h4>Se relaciona con</h4><ul class="lista-terminos">${t.relaciones
        .map((r) => botonTermino(r, `<small>${escapar(r.tema.titulo)}</small>`)).join("")}</ul>`;
    }
    const hermanos = t.grupo.terminos.filter((x) => x !== t);
    if (hermanos.length) {
      html += `<h4>En el mismo grupo</h4><ul class="lista-terminos">${hermanos.map((x) => botonTermino(x)).join("")}</ul>`;
    }
  } else {
    const tema = n.tipo === "tema" ? n.ref : n.tema, c = tema.color.web;
    const grupos = n.tipo === "tema" ? tema.grupos : [n.ref];
    html += `<div class="ruta" style="--c:${c}"><span class="chip">${tema.color.icono} Tema ${String(tema.numero).padStart(2, "0")}</span>
      ${n.tipo === "grupo" ? `<span>›</span><button data-tema="${tema.id}">${escapar(tema.titulo)}</button>` : ""}</div>
      <h3>${escapar(n.tipo === "tema" ? tema.titulo : n.ref.titulo)}</h3>
      <p class="subt">${n.tipo === "tema" ? escapar(tema.subtitulo) + ` · ${tema.total} términos` : `${n.ref.terminos.length} términos`}</p>`;
    grupos.forEach((g) => {
      if (n.tipo === "tema") html += `<div class="grupo-titulo">${escapar(g.titulo)}</div>`;
      html += `<ul class="lista-terminos">${g.terminos.map((x) => botonTermino(x)).join("")}</ul>`;
    });
  }
  panelContenido.innerHTML = html;
}

document.addEventListener("click", (e) => {
  const bt = e.target.closest("[data-termino]");
  if (bt) {
    const t = porId[bt.dataset.termino];
    if (document.body.dataset.vista === "lista" && !bt.closest(".panel")) return;
    seleccionar(nodoDe.get(t) || { tipo: "termino", ref: t });
    return;
  }
  const btema = e.target.closest("[data-tema]");
  if (btema) {
    const tema = temas.find((x) => x.id === btema.dataset.tema);
    seleccionar(nodoDe.get(tema) || { tipo: "tema", ref: tema });
  }
});
$("#cerrar-panel").addEventListener("click", () => seleccionar(null, { volar: false }));

/* ------------------------------------------------------------------ */
/* Leyenda                                                             */
/* ------------------------------------------------------------------ */
$("#lista-temas").innerHTML = temas.map((t) => `<li><button data-tema="${t.id}" style="--c:${t.color.web}">
  <span class="num">${String(t.numero).padStart(2, "0")}</span><span class="punto"></span>
  <span class="nombre">${escapar(t.titulo)}</span><span class="cuenta">${t.total}</span></button></li>`).join("");

function marcarLeyenda() {
  const s = estado.seleccion;
  const temaActivo = s && (s.tipo === "tema" ? s.ref : s.tipo === "grupo" ? s.tema : s.ref.tema);
  document.querySelectorAll("#lista-temas button").forEach((b) =>
    b.classList.toggle("activo", !!temaActivo && b.dataset.tema === temaActivo.id));
}
$("#ver-todo").addEventListener("click", () => seleccionar(null));
$("#todas-etiquetas").addEventListener("change", (e) => (estado.todas = e.target.checked));
$("#rotar").addEventListener("change", (e) => controles && (controles.autoRotate = e.target.checked));
$("#leyenda-toggle").addEventListener("click", () => {
  const l = $("#leyenda");
  l.classList.toggle("cerrada");
  $("#leyenda-toggle").setAttribute("aria-expanded", !l.classList.contains("cerrada"));
});
if (matchMedia("(max-width: 760px)").matches) $("#leyenda").classList.add("cerrada");

/* ------------------------------------------------------------------ */
/* Interacción con el puntero                                          */
/* ------------------------------------------------------------------ */
const ray = new THREE.Raycaster();
const puntero = new THREE.Vector2(9, 9);
const tooltip = $("#tooltip");
let ptrX = 0, ptrY = 0, abajo = null;

function nodoBajoPuntero() {
  ray.setFromCamera(puntero, camara);
  const hits = ray.intersectObjects(golpeables, false);
  for (const h of hits) {
    const n = h.object.userData.nodo;
    if (!n.atenuado || n.tipo === "tema") return n;
  }
  return null;
}

if (renderer) {
  const lienzo = renderer.domElement;
  lienzo.addEventListener("pointermove", (e) => {
    const r = lienzo.getBoundingClientRect();
    puntero.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ptrX = e.clientX; ptrY = e.clientY;
  });
  lienzo.addEventListener("pointerleave", () => puntero.set(9, 9));
  lienzo.addEventListener("pointerdown", (e) => (abajo = { x: e.clientX, y: e.clientY }));
  lienzo.addEventListener("pointerup", (e) => {
    if (!abajo || Math.hypot(e.clientX - abajo.x, e.clientY - abajo.y) > 6) return;
    const r = lienzo.getBoundingClientRect();
    puntero.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    const n = nodoBajoPuntero();
    if (n && n.tipo === "termino" && quiz.activo && !quiz.resuelta) responderQuiz(n);
    else if (n) seleccionar(n.tipo === "centro" ? null : n);
    else if (estado.seleccion) seleccionar(null, { volar: false });
  });
  controles.addEventListener("start", () => {
    $("#ayuda").style.opacity = 0;
    if (llegada) llegada.camara = false;
  });
}

function actualizarHover() {
  const n = nodoBajoPuntero();
  if (n !== estado.hover) {
    estado.hover = n;
    contenedor.style.cursor = n ? "pointer" : "";
    if (!estado.seleccion) aplicarResaltado();
  }
  if (n && n.tipo !== "centro") {
    const tema = n.tipo === "tema" ? n.ref : n.tipo === "grupo" ? n.tema : n.ref.tema;
    const titulo = n.tipo === "tema" ? n.ref.titulo : n.tipo === "grupo" ? n.ref.titulo : n.ref.nombre;
    const cuerpo = n.tipo === "termino" ? (quiz.activo && !quiz.resuelta ? "¿Será este?" : n.ref.desc)
      : n.tipo === "tema" ? n.ref.subtitulo : `${n.ref.terminos.length} términos`;
    tooltip.innerHTML = `<span class="chip" style="--c:${tema.color.web}">${escapar(tema.titulo)}</span><b>${escapar(titulo)}</b>${escapar(cuerpo)}`;
    tooltip.hidden = false;
    const w = tooltip.offsetWidth, h = tooltip.offsetHeight;
    tooltip.style.left = Math.min(ptrX + 16, innerWidth - w - 10) + "px";
    tooltip.style.top = Math.min(ptrY + 16, innerHeight - h - 10) + "px";
  } else tooltip.hidden = true;
}

/* ------------------------------------------------------------------ */
/* Bucle de animación                                                  */
/* ------------------------------------------------------------------ */
function redimensionar() {
  if (!renderer) return;
  const w = contenedor.clientWidth, h = contenedor.clientHeight;
  renderer.setSize(w, h);
  etiquetas.setSize(w, h);
  camara.aspect = w / h;
  camara.fov = w < 700 ? 62 : 50;
  camara.updateProjectionMatrix();
}
addEventListener("resize", redimensionar);

const reloj = new THREE.Clock();
const suavizar = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/* Entrada: el mapa se arma nodo por nodo mientras la cámara sale de la niebla */
const ENTRADA = { nodos: 1900, arcos: 700, camara: 2800 };
function prepararEntrada() {
  const paso = ENTRADA.nodos / nodos.length;
  nodos.forEach((n) => {
    n.aparece = 150 + n.orden * paso;
    n.grupo.scale.setScalar(0.001);
  });
  geoJerarquia.setDrawRange(0, 0);
  arcos.forEach((a) => a.geo.setDrawRange(0, 0));
  llegada = { ms: 0, camara: true };
}

function avanzarEntrada(dt) {
  const ms = (llegada.ms += dt * 1000);
  if (vuelo) llegada.camara = false;
  if (llegada.camara) {
    const k = Math.min(1, ms / ENTRADA.camara);
    camara.position.setLength(VISTA_INICIAL.length() * (1 + 1.2 * Math.pow(1 - k, 3)));
  }
  const hijos = lineasJerarquia.hijo;
  let n = 0;
  while (n < hijos.length && nodos[hijos[n]].aparece <= ms) n++;
  geoJerarquia.setDrawRange(0, n * 2);
  const ka = Math.min(1, Math.max(0, (ms - ENTRADA.nodos) / ENTRADA.arcos));
  arcos.forEach((a) => {
    a.geo.setDrawRange(0, Math.ceil(ka * (PUNTOS_ARCO + 1)));
    a.pulso.visible = false;
  });
  if (ms >= Math.max(ENTRADA.nodos + ENTRADA.arcos, ENTRADA.camara)) {
    geoJerarquia.setDrawRange(0, Infinity);
    llegada = null;
    aplicarResaltado();
  }
}

function animar() {
  requestAnimationFrame(animar);
  if (document.body.dataset.vista !== "mapa") return;
  const dt = reloj.getDelta(), t = reloj.elapsedTime;

  if (vuelo) {
    vuelo.t = Math.min(1, vuelo.t + (dt * 1000) / vuelo.dur);
    const k = suavizar(vuelo.t);
    camara.position.lerpVectors(vuelo.desde, vuelo.hasta, k);
    controles.target.lerpVectors(vuelo.tDesde, vuelo.tHasta, k);
    if (vuelo.t >= 1) vuelo = null;
  }
  if (llegada) avanzarEntrada(dt);
  controles.update();

  const kf = movimientoReducido ? 1 : 1 - Math.exp(-dt * 12);
  fundibles.forEach((m) => (m.opacity += (m.userData.meta - m.opacity) * kf));

  if (!movimientoReducido) {
    nodos.forEach((n, i) => {
      if (n.tipo === "tema") {
        n.mesh.rotation.y += dt * 0.3;
        n.mesh.userData.alambre.rotation.y -= dt * 0.15;
        n.mesh.userData.alambre.rotation.x += dt * 0.1;
      } else if (n.tipo === "grupo") {
        n.mesh.userData.anillo.lookAt(camara.position);
      }
      const escala = llegada && llegada.ms < n.aparece ? 0.001
        : n === estado.seleccion ? 1.6 : n === estado.hover ? 1.35 : 1;
      const pulso = 1 + Math.sin(t * 2 + i) * 0.05;
      n.grupo.scale.lerp(new THREE.Vector3(escala, escala, escala).multiplyScalar(pulso), 0.15);
    });
    arcos.forEach((a) => {
      a.fase = (a.fase + dt * a.vel) % 1;
      a.pulso.position.copy(a.curva.getPoint(a.fase));
    });
    if (nodoCentro) nodoCentro.mesh.rotation.y += dt * 0.2;
  } else {
    arcos.forEach((a) => (a.pulso.visible = false));
  }

  actualizarHover();
  visibilidadEtiquetas();
  renderer.render(escena, camara);
  etiquetas.render(escena, camara);
}

/* ------------------------------------------------------------------ */
/* Vista de glosario (tarjetas)                                        */
/* ------------------------------------------------------------------ */
const filtroTemas = new Set();
$("#filtros").innerHTML =
  `<button data-filtro="" aria-pressed="true" style="--c:#38bdf8">Todos</button>` +
  temas.map((t) => `<button data-filtro="${t.id}" aria-pressed="false" style="--c:${t.color.web}"><span class="punto"></span>${escapar(t.titulo)}</button>`).join("");

$("#secciones").innerHTML = temas.map((t) => `
  <section class="seccion" data-seccion="${t.id}" style="--c:${t.color.web}">
    <div class="seccion-cab"><span class="num">${String(t.numero).padStart(2, "0")}</span>
      <div><h2>${escapar(t.titulo)}</h2><p>${escapar(t.subtitulo)}</p></div></div>
    ${t.grupos.map((g) => `<div class="grupo"><h3>${escapar(g.titulo)}</h3><div class="tarjetas">
      ${g.terminos.map((x) => `<article class="tarjeta" id="t-${x.id}" data-ir-termino="${x.id}" tabindex="0">
        <h4>${escapar(x.nombre)}</h4><p>${escapar(x.desc)}</p>
        ${x.formula.map((f) => `<div class="formula">${escapar(f)}</div>`).join("")}
        ${x.relaciones.length ? `<div class="rels">${x.relaciones.map((r) =>
          `<span class="chip" style="--c:${r.tema.color.web}">↔ ${escapar(r.nombre)}</span>`).join("")}</div>` : ""}
      </article>`).join("")}</div></div>`).join("")}
  </section>`).join("");

function filtrarLista() {
  const q = normalizar($("#buscar").value);
  let visibles = 0;
  document.querySelectorAll(".seccion").forEach((s) => {
    const okTema = !filtroTemas.size || filtroTemas.has(s.dataset.seccion);
    let n = 0;
    s.querySelectorAll(".grupo").forEach((g) => {
      let ng = 0;
      g.querySelectorAll(".tarjeta").forEach((c) => {
        const t = porId[c.dataset.irTermino];
        const ok = okTema && (!q || normalizar(t.nombre + " " + t.desc).includes(q));
        c.hidden = !ok;
        if (ok) ng++;
      });
      g.hidden = !ng;
      n += ng;
    });
    s.hidden = !n;
    visibles += n;
  });
  $("#vacio").hidden = visibles > 0;
  progresoLectura();
}

// Barra de progreso de lectura bajo la barra superior.
function progresoLectura() {
  const s = document.scrollingElement;
  const max = s.scrollHeight - s.clientHeight;
  $("#progreso").style.setProperty("--p", max > 0 ? s.scrollTop / max : 0);
}
addEventListener("scroll", progresoLectura, { passive: true });

// Reflejo del color del tema que sigue al puntero sobre cada tarjeta.
$("#secciones").addEventListener("pointermove", (e) => {
  const c = e.target.closest(".tarjeta");
  if (!c) return;
  const r = c.getBoundingClientRect();
  c.style.setProperty("--x", e.clientX - r.left + "px");
  c.style.setProperty("--y", e.clientY - r.top + "px");
});

// Las tarjetas aparecen escalonadas conforme entran en pantalla.
if ("IntersectionObserver" in window && !movimientoReducido) {
  document.body.classList.add("revelar");
  const obs = new IntersectionObserver((entradas) => {
    entradas.filter((e) => e.isIntersecting).forEach((e, i) => {
      e.target.style.setProperty("--d", Math.min(i * 40, 320) + "ms");
      e.target.classList.add("revelada");
      obs.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".tarjeta").forEach((c) => obs.observe(c));
}

$("#filtros").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const id = b.dataset.filtro;
  if (!id) filtroTemas.clear();
  else filtroTemas.has(id) ? filtroTemas.delete(id) : filtroTemas.add(id);
  document.querySelectorAll("#filtros button").forEach((x) =>
    x.setAttribute("aria-pressed", x.dataset.filtro ? filtroTemas.has(x.dataset.filtro) : !filtroTemas.size));
  filtrarLista();
});

$("#secciones").addEventListener("click", (e) => {
  const c = e.target.closest("[data-ir-termino]");
  if (c) irAlMapa(porId[c.dataset.irTermino]);
});
$("#secciones").addEventListener("keydown", (e) => {
  const c = e.target.closest("[data-ir-termino]");
  if (c && e.key === "Enter") irAlMapa(porId[c.dataset.irTermino]);
});

function irAlMapa(t) {
  if (!renderer) return;
  cambiarVista("mapa");
  seleccionar(nodoDe.get(t));
}

function irALista(t) {
  cambiarVista("lista");
  const c = document.getElementById("t-" + t.id);
  if (!c) return;
  if (c.hidden) { filtroTemas.clear(); $("#buscar").value = ""; filtrarLista(); }
  c.scrollIntoView({ behavior: movimientoReducido ? "auto" : "smooth", block: "center" });
  c.classList.remove("destello");
  void c.offsetWidth;
  c.classList.add("destello");
}

/* ------------------------------------------------------------------ */
/* Cambio de vista                                                     */
/* ------------------------------------------------------------------ */
function cambiarVista(v) {
  document.body.dataset.vista = v;
  $("#vista-mapa").hidden = v !== "mapa";
  $("#vista-lista").hidden = v !== "lista";
  document.querySelectorAll(".conmutador button").forEach((b) => b.setAttribute("aria-selected", b.dataset.vista === v));
  tooltip.hidden = true;
  if (v === "lista") filtrarLista();
  else { redimensionar(); reloj.getDelta(); }
  progresoLectura();
  actualizarHash();
}
document.querySelectorAll(".conmutador button, [data-ir]").forEach((b) =>
  b.addEventListener("click", () => cambiarVista(b.dataset.vista || b.dataset.ir)));

/* ------------------------------------------------------------------ */
/* Búsqueda con sugerencias                                            */
/* ------------------------------------------------------------------ */
const entrada = $("#buscar"), sug = $("#sugerencias");
let resultados = [], indice = 0;

function buscar(q) {
  q = normalizar(q);
  if (!q) return [];
  return terminos
    .map((t) => {
      const n = normalizar(t.nombre), d = normalizar(t.desc);
      const p = n.startsWith(q) ? 0 : n.includes(q) ? 1 : d.includes(q) ? 2 : -1;
      return { t, p };
    })
    .filter((x) => x.p >= 0)
    .sort((a, b) => a.p - b.p || a.t.nombre.localeCompare(b.t.nombre, "es"))
    .slice(0, 8)
    .map((x) => x.t);
}

function pintarSugerencias() {
  if (!entrada.value.trim()) { sug.hidden = true; return; }
  sug.hidden = false;
  sug.innerHTML = resultados.length
    ? resultados.map((t, i) => `<li role="option" data-i="${i}" aria-selected="${i === indice}">
        <span class="punto" style="background:${t.tema.color.web}"></span><b>${escapar(t.nombre)}</b>
        <small>${escapar(t.tema.titulo)}</small></li>`).join("")
    : `<li class="nada">Sin resultados</li>`;
}

function elegir(t) {
  sug.hidden = true;
  entrada.blur();
  if (document.body.dataset.vista === "lista") {
    entrada.value = "";
    filtrarLista();
    irALista(t);
  } else {
    entrada.value = "";
    irAlMapa(t);
  }
}

entrada.addEventListener("input", () => {
  resultados = buscar(entrada.value);
  indice = 0;
  pintarSugerencias();
  if (document.body.dataset.vista === "lista") filtrarLista();
});
entrada.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") { indice = Math.min(indice + 1, resultados.length - 1); pintarSugerencias(); e.preventDefault(); }
  else if (e.key === "ArrowUp") { indice = Math.max(indice - 1, 0); pintarSugerencias(); e.preventDefault(); }
  else if (e.key === "Enter" && resultados[indice]) elegir(resultados[indice]);
  else if (e.key === "Escape") { entrada.value = ""; sug.hidden = true; filtrarLista(); entrada.blur(); }
});
entrada.addEventListener("focus", () => { if (entrada.value) pintarSugerencias(); });
entrada.addEventListener("blur", () => setTimeout(() => (sug.hidden = true), 150));
sug.addEventListener("mousedown", (e) => {
  const li = e.target.closest("[data-i]");
  if (li) { e.preventDefault(); elegir(resultados[+li.dataset.i]); }
});

addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== entrada) { e.preventDefault(); entrada.focus(); }
  else if (e.key === "Escape" && document.activeElement !== entrada && estado.seleccion) seleccionar(null);
});

/* ------------------------------------------------------------------ */
/* Término al azar                                                     */
/* ------------------------------------------------------------------ */
$("#azar").addEventListener("click", () => {
  const actual = estado.seleccion && estado.seleccion.ref;
  let t;
  do t = terminos[Math.floor(Math.random() * terminos.length)]; while (t === actual);
  irAlMapa(t);
});

/* ------------------------------------------------------------------ */
/* Quiz: se muestra una definición y hay que encontrar el nodo          */
/* ------------------------------------------------------------------ */
const cajaQuiz = $("#quiz");
const RONDA = 10, INTENTOS = 3;

function mezclar(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Tapa el nombre del término dentro de su definición, incluidas variantes como
// "Redundancia" o "RAID" para "Redundancia (RAID, clúster)".
function definicionSinNombre(t) {
  const variantes = new Set([t.nombre, ...t.nombre.split(/\s*\/\s*/)]);
  const m = t.nombre.match(/^(.*?)\s*\((.*)\)$/);
  if (m) {
    variantes.add(m[1]);
    m[2].split(/,\s*/).forEach((v) => variantes.add(v));
  }
  const alternativas = [...variantes].filter((v) => v.length > 1)
    .sort((a, b) => b.length - a.length)
    .map((v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(?<![\\p{L}\\d])(?:${alternativas.join("|")})(?![\\p{L}\\d])`, "giu");
  return t.desc.split(re).map(escapar).join('<span class="hueco">?</span>');
}

function pintarQuiz(aviso = "") {
  const salir = `<button class="cerrar" data-quiz="salir" aria-label="Salir del quiz">×</button>`;
  const t = quiz.preguntas[quiz.i];
  if (!t) {
    const r = quiz.aciertos / quiz.preguntas.length;
    const frase = r >= 0.8 ? "¡Excelente! Ya dominas el tema." : r >= 0.5 ? "Bien, aunque vale la pena repasar un poco." : "Toca repasar el glosario y volver a intentarlo.";
    cajaQuiz.innerHTML = `${salir}<p class="etiqueta">Quiz terminado</p>
      <p class="quiz-final"><strong>${quiz.aciertos}</strong> de ${quiz.preguntas.length} aciertos</p>
      <p class="quiz-aviso">${frase}</p>
      <div class="quiz-botones"><button class="boton" data-quiz="salir">Salir</button>
        <button class="boton primario" data-quiz="otra">Otra ronda</button></div>`;
    return;
  }
  const chip = quiz.pista || quiz.resuelta
    ? `<span class="chip" style="--c:${t.tema.color.web}">${t.tema.color.icono} ${escapar(t.tema.titulo)}</span>` : "";
  cajaQuiz.innerHTML = `${salir}
    <div class="quiz-cab"><span class="etiqueta">Quiz · ${quiz.i + 1} de ${quiz.preguntas.length}</span>
      <span class="quiz-marcador">✓ ${quiz.aciertos}</span></div>
    <p class="quiz-def">${definicionSinNombre(t)}</p>
    ${chip}
    <p class="quiz-aviso">${aviso || "¿Qué término es? Haz clic en su nodo del mapa."}</p>
    <div class="quiz-botones">${quiz.resuelta
      ? `<button class="boton primario" data-quiz="siguiente">${quiz.i + 1 < quiz.preguntas.length ? "Siguiente →" : "Ver resultado"}</button>`
      : `<button class="boton" data-quiz="pista"${quiz.pista ? " disabled" : ""}>Pista</button>
         <button class="boton" data-quiz="rendirse">Ver respuesta</button>`}</div>`;
}

function iniciarQuiz() {
  cambiarVista("mapa");
  quiz.activo = true;
  quiz.preguntas = mezclar(terminos.filter((t) => !t.ejemplo)).slice(0, RONDA);
  quiz.i = quiz.aciertos = 0;
  document.body.classList.add("en-quiz");
  cajaQuiz.hidden = false;
  nuevaPregunta();
}

function nuevaPregunta() {
  quiz.fallos = 0;
  quiz.resuelta = quiz.pista = false;
  seleccionar(null);
  pintarQuiz();
}

function revelar(aviso) {
  quiz.resuelta = true;
  seleccionar(nodoDe.get(quiz.preguntas[quiz.i]));
  pintarQuiz(aviso);
}

function responderQuiz(n) {
  const t = quiz.preguntas[quiz.i];
  if (n.ref === t) {
    quiz.aciertos++;
    return revelar(`<b class="bien">¡Correcto!</b> Es «${escapar(t.nombre)}».`);
  }
  quiz.fallos++;
  if (quiz.fallos >= INTENTOS) return revelar(`<b class="mal">Se acabaron los intentos.</b> Era «${escapar(t.nombre)}».`);
  const quedan = INTENTOS - quiz.fallos;
  pintarQuiz(`<b class="mal">No es «${escapar(n.ref.nombre)}».</b> ${quedan === 1 ? "Te queda 1 intento" : `Te quedan ${quedan} intentos`}.`);
  cajaQuiz.classList.remove("error");
  void cajaQuiz.offsetWidth;
  cajaQuiz.classList.add("error");
}

function salirQuiz() {
  quiz.activo = false;
  cajaQuiz.hidden = true;
  document.body.classList.remove("en-quiz");
  seleccionar(null);
}

cajaQuiz.addEventListener("click", (e) => {
  const b = e.target.closest("[data-quiz]");
  if (!b) return;
  const t = quiz.preguntas[quiz.i];
  switch (b.dataset.quiz) {
    case "salir": return salirQuiz();
    case "otra": return iniciarQuiz();
    case "pista":
      quiz.pista = true;
      seleccionar(nodoDe.get(t.tema));
      return pintarQuiz("Está en este tema; lo demás queda apagado.");
    case "rendirse": return revelar(`Era «${escapar(t.nombre)}».`);
    case "siguiente":
      quiz.i++;
      if (quiz.i < quiz.preguntas.length) return nuevaPregunta();
      seleccionar(null);
      return pintarQuiz();
  }
});
cajaQuiz.addEventListener("animationend", () => cajaQuiz.classList.remove("error"));
$("#iniciar-quiz").addEventListener("click", iniciarQuiz);

/* ------------------------------------------------------------------ */
/* Enlaces directos (#termino=..., #tema=..., #glosario)               */
/* ------------------------------------------------------------------ */
function actualizarHash() {
  const s = estado.seleccion;
  let h = document.body.dataset.vista === "lista" ? "glosario" : "";
  if (s && !h) h = s.tipo === "termino" ? "termino=" + s.ref.id : s.tipo === "tema" ? "tema=" + s.ref.id : "";
  history.replaceState(null, "", h ? "#" + h : location.pathname + location.search);
}

function leerHash() {
  const h = decodeURIComponent(location.hash.slice(1));
  if (h === "glosario" || !renderer) return cambiarVista("lista");
  const [clave, valor] = h.split("=");
  if (clave === "termino" && porId[valor]) seleccionar(nodoDe.get(porId[valor]), { desdeHash: true });
  if (clave === "tema") {
    const t = temas.find((x) => x.id === valor);
    if (t) seleccionar(nodoDe.get(t), { desdeHash: true });
  }
}

/* ------------------------------------------------------------------ */
redimensionar();
if (renderer) {
  aplicarResaltado();
  if (!movimientoReducido && !location.hash) prepararEntrada();
  animar();
}
leerHash();
})();
