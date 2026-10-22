# Glosario de terminología y temas — Seguridad de Centros de Informática (Primer parcial)
#
# Formato (este archivo lo lee build.py para generar el sitio web y el PDF):
#   ## id | Título del tema | subtítulo                → nuevo tema (rama del mapa)
#   ### Subgrupo                                      → agrupa términos dentro del tema
#   - Término | descripción (máx. 20 palabras) | tema:Término relacionado; tema:Otro
#   La parte de relaciones es opcional.
#   Una línea "> texto" debajo de un término agrega una fórmula o ejemplo resaltado.
#   ids de tema: triada, politicas, riesgos, marcos, dlp, bia

## triada | Tríada de la seguridad (CIA) | Los tres objetivos que guían toda protección de la información
### Pilares
- Confidencialidad | Garantiza que solo quien tiene autorización y necesidad de saber pueda consultar la información. | triada:Cifrado; dlp:DLP
- Integridad | Asegura que los datos permanezcan exactos y sin alteraciones no autorizadas al guardarse o enviarse. | triada:Hash
- Disponibilidad | Los sistemas y datos responden cuando el usuario autorizado los requiere, incluso ante fallas. | bia:RTO
### Mecanismos que la sostienen
- Cifrado | Transforma los datos con una clave para que resulten ilegibles a quien no la posee.
- Cifrado simétrico / asimétrico | El simétrico usa una sola clave secreta; el asimétrico, un par de llaves pública y privada.
- Hash | Valor calculado sobre los datos; si cambia al recalcularlo, la información fue alterada.
- Redundancia (RAID, clúster) | Discos en arreglo o servidores en espejo: si uno se cae, otro toma su lugar. | triada:Disponibilidad
- Respaldo | Copia periódica de la información que permite recuperarla tras una pérdida, daño o ataque. | bia:RPO
### Control de acceso
- Identificación | El usuario declara quién es mediante una cuenta, tarjeta inteligente o rasgo biométrico.
- Autenticación | Comprobación de esa identidad con algo que la persona sabe, tiene o es.
- Autorización | Permisos concretos que recibe el usuario ya autenticado sobre cada recurso. | triada:Mínimo privilegio
- Mínimo privilegio | Otorgar únicamente los permisos indispensables para desempeñar el puesto. | politicas:Separación de funciones
- No repudio | Evidencia que impide al autor de una acción negar que la hizo, como firmas o bitácoras.
### Modelos ampliados
- Hexada de Parker | Amplía la tríada con posesión o control, autenticidad y utilidad: seis principios en total.
- Posesión o control | Quién tiene físicamente el medio donde residen los datos, aunque estos estén cifrados.
- Autenticidad | Certeza de que la información proviene realmente del origen que dice tener.
- Utilidad | Que los datos sirvan para su propósito; un archivo cifrado sin su clave pierde utilidad.
- Defensa en profundidad | Capas sucesivas de protección física y lógica; si una falla, la siguiente detiene al atacante.
### Ataques contra la tríada
- Intercepción | Acceso no autorizado a datos o aplicaciones; afecta sobre todo la confidencialidad. | triada:Confidencialidad
- Interrupción | Deja inutilizable un recurso de forma temporal o permanente; golpea la disponibilidad. | triada:Disponibilidad
- Modificación | Alteración indebida de la información; compromete principalmente la integridad. | triada:Integridad
- Fabricación | Introducir datos, transacciones o procesos falsos dentro de un sistema legítimo.

## politicas | Políticas de seguridad | Reglas documentadas que dirigen la conducta de usuarios y personal de TI
### Concepto y jerarquía
- Política de seguridad | Documento que establece cómo la organización atenderá un aspecto de seguridad y qué espera del personal.
- Estándar | Nivel de operación deseado y medible, por ejemplo 99.5 % de disponibilidad de la red.
- Guía (lineamiento) | Sugerencia general, a veces opcional, sobre cómo alcanzar un estándar.
- Procedimiento | Instrucciones específicas, paso a paso, para resolver una situación concreta.
- Política regulatoria | Indica al personal cómo cumplir una ley, como HIPAA al manejar expedientes médicos electrónicos. | marcos:HIPAA
- Política consultiva | Recomienda buenas prácticas sin exigir su cumplimiento obligatorio.
### Políticas para usuarios
- Uso aceptable (AUP) | Define qué puede y qué no puede hacer el empleado con equipos, red e internet; suele firmarse.
- Política de contraseñas | Fija longitud, complejidad y vigencia, y prohíbe compartir credenciales.
- Uso del correo electrónico | Regula el uso personal y las precauciones ante adjuntos de remitentes desconocidos.
- Instalación de software | Solo personal autorizado puede instalar o desinstalar programas en los equipos.
- Política de privacidad | Explica cómo se resguardan los datos personales de usuarios internos y externos. | dlp:PII
### Administración de sistemas
- Altas de empleados | Procedimiento para crear cuentas con los accesos justos que necesita el nuevo trabajador. | triada:Mínimo privilegio
- Bajas de empleados | Al salir alguien, su cuenta se deshabilita de inmediato y se recuperan sus credenciales.
- Gestión de cambios | Toda modificación a sistemas se propone, evalúa y aprueba por las áreas afectadas antes de aplicarse.
- Respuesta a incidentes | Pasos ante virus, intrusiones o negación de servicio: aislar, notificar, registrar y aprender.
### Controles de personal
- Separación de funciones | Una tarea crítica requiere a más de una persona, lo que reparte el control y frena fraudes.
- Rotación de puestos | Intercambiar roles cada cierto tiempo para ampliar habilidades y descubrir irregularidades.
- Vacaciones obligatorias | Días consecutivos de ausencia que permiten a otra persona revisar el trabajo del titular.
- Capacitación y concientización | Formación periódica para que el personal reconozca amenazas como phishing o ingeniería social.
### Responsabilidad legal
- Debida diligencia | Conocer y evaluar los riesgos y vulnerabilidades de la infraestructura de TI. | riesgos:Riesgo
- Debido cuidado | Acciones de mitigación que se toman frente a los riesgos ya identificados. | riesgos:Mitigación
- Debido proceso | Principio de respetar y proteger los derechos del personal ante sanciones o demandas.

## riesgos | Análisis y evaluación del riesgo | Identificar, medir y priorizar riesgos de forma cualitativa y cuantitativa
### Elementos
- Activo | Lo que vale la pena proteger porque su pérdida perjudica al negocio, sea tangible o intangible. | riesgos:AV
- Amenaza | Fuerza externa capaz de vulnerar los controles de seguridad de la organización.
- Vulnerabilidad | Debilidad interna de los controles que una amenaza podría aprovechar. | riesgos:Escaneo de vulnerabilidades
- Riesgo | Surge cuando una amenaza coincide con una vulnerabilidad; si falta una de las dos, no existe.
> Riesgo = Amenaza × Vulnerabilidad
- Impacto | Magnitud del daño que sufre la organización si el riesgo llega a concretarse. | bia:BIA
### Evaluación cualitativa
- Evaluación cualitativa | Expertos juzgan probabilidad e impacto con escalas como alto, moderado y bajo.
- Matriz de riesgos | Cuadro de probabilidad contra impacto que muestra a simple vista qué riesgos atender primero.
- Registro de riesgos | Bitácora donde cada área anota sus riesgos y tratamientos; se revisa cada año.
### Evaluación cuantitativa
- Evaluación cuantitativa | Usa datos numéricos y monetarios para estimar la pérdida esperada de cada riesgo.
- AV (valor del activo) | Costo en dinero de reemplazar o reconstruir el activo evaluado.
- EF (factor de exposición) | Fracción, expresada en porcentaje, del valor del activo que destruiría un evento.
- SLE (expectativa de pérdida única) | Cuánto dinero cuesta que el evento ocurra una vez.
> SLE = AV × EF
- ARO (tasa anual de ocurrencia) | Frecuencia esperada al año; una inundación por siglo se expresa como 0.01.
- ALE (expectativa de pérdida anual) | Costo anual del riesgo; un control no debería costar más que lo que ahorra.
> ALE = SLE × ARO
- Ejemplo: sismo en el centro de datos | AV de $20 millones, EF de 50 % y ARO de 0.03.
> SLE = $10 millones  ·  ALE = $300,000 al año
### Tratamiento del riesgo
- Evitar | Cambiar la actividad del negocio para eliminar el riesgo, como reubicar un centro de datos.
- Transferir | Trasladar el impacto económico a otra entidad mediante un seguro o una cláusula de indemnización.
- Mitigación | Estrategia favorita en seguridad: poner firewalls, IPS u otros controles ligados directamente al riesgo.
- Disuasión | Medidas que desaniman al atacante, como acciones legales firmes o vigilancia visible.
- Aceptar | Solo vigilar el riesgo sin actuar, decisión válida únicamente tras un análisis que la justifique.
### Gestión de vulnerabilidades
- Escaneo de vulnerabilidades | Revisión no intrusiva que detecta debilidades conocidas sin explotarlas.
- Prueba de penetración | Ataque autorizado y más intrusivo que intenta explotar las vulnerabilidades encontradas.

## marcos | Estándares y marcos de seguridad | Referencias reconocidas para organizar, medir y mejorar la seguridad
### NIST Cybersecurity Framework
- NIST CSF | Marco voluntario de EE. UU. para gestionar el riesgo cibernético; su versión 1.0 es de 2014.
- Núcleo del marco | Actividades y resultados organizados en funciones, categorías, subcategorías y referencias informativas.
- Funciones del núcleo | Cinco actividades que se realizan en paralelo y de forma continua, no como pasos en serie.
> Identificar · Proteger · Detectar · Responder · Recuperar
- Niveles de implementación | Grado de madurez en la gestión del riesgo: parcial, informado, repetible y adaptativo.
- Perfil actual y objetivo | Comparar dónde está la organización y dónde quiere llegar revela las brechas por cubrir.
### CIS Controls
- CIS Controls v8.1 | Conjunto priorizado de 18 controles con acciones concretas contra los ataques más comunes.
- Salvaguarda | Acción específica y medible dentro de cada control CIS; antes se llamaba subcontrol.
- Grupos de implementación (IG) | IG1, IG2 e IG3 priorizan salvaguardas según los recursos y el riesgo de cada empresa.
- IG1: higiene cibernética esencial | Salvaguardas mínimas que toda organización debería aplicar contra los ataques frecuentes.
### Normas ISO/IEC
- ISO/IEC 27001 | Estándar internacional cuyos requisitos permiten que una empresa audite y certifique su SGSI.
- ISO/IEC 27002 | Código de buenas prácticas con controles de seguridad; también orienta la clasificación de datos. | dlp:Clasificación de datos
- SGSI | Sistema de gestión que asigna recursos y controles según el tipo y valor de cada clase de información.
- ISO/IEC 38505-1 | Aplica los principios de gobierno de TI de ISO 38500 al gobierno de los datos.
- Modelo EDM | El órgano de gobierno evalúa, dirige y monitorea cómo se manejan y usan los datos.
- Seis principios de gobierno | Responsabilidad, estrategia, adquisición, desempeño, conformidad y comportamiento humano.
### Leyes y regulaciones
- HIPAA | Norma de EE. UU. que obliga a hospitales y aseguradoras a resguardar los expedientes de salud.
- SOX | Ley Sarbanes-Oxley: exige controles y transparencia sobre la información financiera de empresas que cotizan en bolsa.
- GLBA | Ley Gramm-Leach-Bliley: obliga a las financieras a proteger datos de clientes y combate el pretexting.
- Privacy Act (1974) | Ley que fija estándares para manejar la información personal en poder del gobierno federal. | dlp:PII

## dlp | Prevención de pérdida de datos (DLP) | Saber dónde está la información sensible y evitar que salga sin control
### Concepto
- DLP | Herramientas y procesos que identifican datos sensibles y bloquean su salida o uso indebido.
- Pérdida vs. fuga de datos | En la pérdida el dato deja de estar disponible; en la fuga termina en manos de terceros.
- Amenaza interna | Empleado o contratista con acceso legítimo que, por error o con intención, expone información. | politicas:Separación de funciones
### Gestión de datos (CIS Control 3)
- Proceso de gestión de datos | Define dueños, manejo, retención y eliminación de los datos según su sensibilidad. | marcos:CIS Controls v8.1
- Inventario de datos | Registro actualizado de qué datos sensibles existen, dónde se guardan y quién los custodia.
- Clasificación de datos | Etiquetar la información según su sensibilidad: pública, interna, confidencial o restringida.
- PII | Cualquier dato que identifique, directa o indirectamente, a una persona física.
- Flujo de datos | Documentar por dónde viaja la información, incluidos los proveedores de servicio.
- Retención de datos | Conservar la información solo durante los plazos mínimo y máximo que se definieron.
- Eliminación segura | Destruir o purgar datos y medios para que no puedan recuperarse.
### Estados de los datos
- Datos en reposo | Archivos y registros guardados que no se están moviendo; el cifrado de disco los protege. | triada:Cifrado
- Datos en tránsito | Información que viaja por la red; requiere canales cifrados como TLS.
- Datos en uso | Información abierta o procesándose en memoria en un momento dado.
### Tipos de DLP
- DLP de red | Inspecciona el tráfico que sale de la organización: correo, web y transferencias de archivos.
- DLP de endpoint | Agente instalado en el equipo que vigila copias a USB, impresiones o capturas de pantalla.
- DLP en la nube | Aplica las reglas de DLP a correo, almacenamiento y aplicaciones contratadas como servicio (SaaS).
### Técnicas y respuesta
- Coincidencia de patrones | Busca estructuras conocidas, como 16 dígitos de una tarjeta o una CURP, en el contenido revisado.
- Huella digital de documentos | Reconoce copias de archivos sensibles comparando su hash o fragmentos de contenido. | triada:Hash
- Seudonimización y anonimización | Sustituir identificadores por alias, o alterarlos de forma irreversible, para proteger a la persona.
- Bitácora de acceso | Registrar quién consulta datos sensibles para detectar y rastrear abusos. | triada:No repudio

## bia | Análisis de impacto al negocio (BIA) | Qué procesos son críticos y cuánto tiempo puede resistir la organización sin ellos
### Concepto
- BIA | Análisis que identifica los procesos críticos y estima el daño que causa interrumpirlos con el paso del tiempo.
- Proceso crítico | Actividad sin la cual la organización no puede cumplir su misión ni generar ingresos.
- Dependencias | Personas, sistemas, proveedores e instalaciones que un proceso necesita para operar.
- Punto único de falla | Componente cuya caída detiene todo el proceso porque no tiene respaldo. | triada:Redundancia
### Métricas de tiempo
- MTD (tiempo máximo tolerable) | Lapso máximo de interrupción antes de que el daño resulte inaceptable.
- RTO | Tiempo objetivo para restablecer un proceso; siempre debe ser menor que el MTD.
- RPO | Cantidad máxima de datos, medida en tiempo, que se puede perder; marca la frecuencia de respaldos.
- MTTR | Tiempo promedio que tarda en repararse un componente que falló.
- MTBF | Tiempo promedio que opera un equipo entre una falla y la siguiente.
### Tipos de impacto
- Impacto financiero | Ingresos perdidos, multas y costos adicionales provocados por la interrupción.
- Impacto operativo | Retrasos, trabajo acumulado y pérdida de productividad mientras el proceso está detenido.
- Impacto reputacional | Desconfianza de clientes y socios ante fallas visibles del servicio.
- Impacto legal o regulatorio | Sanciones por incumplir contratos o leyes durante la interrupción. | marcos:SOX
### Etapas del BIA
- Recolección de información | Entrevistas y cuestionarios a los responsables de cada área sobre sus procesos.
- Priorización de procesos | Ordenar los procesos según su impacto para decidir qué recuperar primero. | riesgos:Matriz de riesgos
- Informe BIA | Documento con hallazgos, tiempos y prioridades que la dirección revisa y aprueba.
### Relación con otros planes
- BCP | Estrategia para que la empresa siga dando servicio durante una crisis; se diseña con los resultados del BIA.
- DRP | Parte técnica de la continuidad: cómo levantar servidores, redes y datos después de un desastre.
- Pruebas del plan | Simulacros periódicos que validan los tiempos de recuperación y mantienen el BIA actualizado.
