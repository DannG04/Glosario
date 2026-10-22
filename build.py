#!/usr/bin/env python3
"""Genera el sitio y el PDF del glosario a partir de glosario.md.

Uso:
    python3 build.py           -> genera web/js/datos.js y el PDF
    python3 build.py --datos   -> solo genera web/js/datos.js
    python3 build.py --serve   -> genera todo y abre un servidor local en :8000
"""
import json
import re
import shutil
import subprocess
import sys
import unicodedata
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
FUENTE = RAIZ / "glosario.md"
WEB = RAIZ / "web"
DATOS_JS = WEB / "js" / "datos.js"
NOMBRE_PDF = "Glosario de terminologia y temas - Seguridad de Centros de Informatica.pdf"

# Datos de la portada (edítalos aquí)
META = {
    "titulo": "Glosario de terminología y temas",
    "materia": "Seguridad de Centros de Informática",
    "ciclo": "Ciclo Escolar 26-27A",
    "parcial": "Primer parcial",
    "alumno": "Daniel González Ruiz",
    "docente": "Dr. Arisaí Darío Barragán López",
    "universidad": "Universidad de la Sierra Sur",
    "licenciatura": "Licenciatura en Informática",
    "grupo": "906",
    "fecha": "23 de octubre de 2026",
    "url": "",
}


def normalizar(texto):
    texto = unicodedata.normalize("NFD", texto.lower())
    texto = "".join(c for c in texto if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", texto).strip()


def parsear(md):
    temas, tema, grupo, termino = [], None, None, None
    for n, linea in enumerate(md.splitlines(), 1):
        linea = linea.rstrip()
        if linea.startswith("## "):
            partes = [p.strip() for p in linea[3:].split("|")]
            tema = {"id": partes[0], "titulo": partes[1],
                    "subtitulo": partes[2] if len(partes) > 2 else "", "grupos": []}
            temas.append(tema)
            grupo = termino = None
        elif linea.startswith("### ") and tema:
            grupo = {"titulo": linea[4:].strip(), "terminos": []}
            tema["grupos"].append(grupo)
            termino = None
        elif linea.startswith("- ") and grupo:
            partes = [p.strip() for p in linea[2:].split("|")]
            nombre, desc = partes[0], partes[1] if len(partes) > 1 else ""
            rels = []
            if len(partes) > 2 and partes[2]:
                for r in partes[2].split(";"):
                    if ":" in r:
                        t, nom = r.split(":", 1)
                        rels.append((t.strip(), nom.strip(), n))
            termino = {"nombre": nombre, "desc": desc, "formula": [],
                       "ejemplo": normalizar(nombre).startswith("ejemplo"), "_rels": rels}
            grupo["terminos"].append(termino)
        elif linea.startswith("> ") and termino:
            termino["formula"].append(linea[2:].strip())
    return temas


def resolver(temas):
    """Asigna ids a los términos y convierte las relaciones 'tema:Nombre' en ids."""
    por_tema = {}
    for t in temas:
        por_tema[t["id"]] = []
        for gi, g in enumerate(t["grupos"]):
            for ti, term in enumerate(g["terminos"]):
                term["id"] = f'{t["id"]}-{gi}-{ti}'
                por_tema[t["id"]].append(term)

    def buscar(tema_id, nombre):
        clave = normalizar(nombre)
        candidatos = por_tema.get(tema_id, [])
        for term in candidatos:
            if normalizar(term["nombre"]) == clave:
                return term
        for term in candidatos:
            base = normalizar(re.sub(r"\s*\(.*?\)", "", term["nombre"]))
            if base == clave or normalizar(term["nombre"]).startswith(clave):
                return term
        return None

    enlaces, avisos, vistos = [], [], set()
    for t in temas:
        for g in t["grupos"]:
            for term in g["terminos"]:
                for tema_id, nombre, n in term.pop("_rels"):
                    destino = buscar(tema_id, nombre)
                    if not destino:
                        avisos.append(f"línea {n}: no se encontró '{tema_id}:{nombre}'")
                        continue
                    par = tuple(sorted((term["id"], destino["id"])))
                    if par not in vistos and destino is not term:
                        vistos.add(par)
                        enlaces.append({"de": term["id"], "a": destino["id"]})
    return enlaces, avisos


def generar_datos():
    temas = parsear(FUENTE.read_text(encoding="utf-8"))
    enlaces, avisos = resolver(temas)
    for a in avisos:
        print("  aviso:", a)
    datos = {"meta": META, "temas": temas, "enlaces": enlaces}
    DATOS_JS.write_text(
        "// Archivo generado por build.py a partir de glosario.md. No editar a mano.\n"
        "window.GLOSARIO = " + json.dumps(datos, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8")
    total = sum(len(g["terminos"]) for t in temas for g in t["grupos"])
    print(f"✓ {DATOS_JS.relative_to(RAIZ)}: {len(temas)} temas, {total} términos, {len(enlaces)} relaciones")


def buscar_chrome():
    for nombre in ("google-chrome", "google-chrome-stable", "chromium", "chromium-browser"):
        ruta = shutil.which(nombre)
        if ruta:
            return ruta
    return None


def generar_pdf():
    chrome = buscar_chrome()
    if not chrome:
        print("✗ No se encontró Chrome/Chromium. Abre web/imprimir.html y usa Imprimir → Guardar como PDF.")
        return
    salida = RAIZ / NOMBRE_PDF
    subprocess.run([
        chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
        "--run-all-compositor-stages-before-draw", "--virtual-time-budget=15000",
        f"--print-to-pdf={salida}", (WEB / "imprimir.html").as_uri(),
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    shutil.copy(salida, WEB / "glosario.pdf")
    print(f"✓ {salida.name} (copia en web/glosario.pdf)")


if __name__ == "__main__":
    generar_datos()
    if "--datos" not in sys.argv:
        generar_pdf()
    if "--serve" in sys.argv:
        print("→ http://localhost:8000  (Ctrl+C para salir)")
        subprocess.run([sys.executable, "-m", "http.server", "8000", "-d", str(WEB)])
