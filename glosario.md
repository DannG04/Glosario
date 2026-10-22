# Glosario de terminología y temas — Seguridad de Centros de Informática (Primer parcial)
#
# Formato (este archivo lo lee build.py para generar el sitio web y el PDF):
#   ## id | Título del tema | subtítulo                → nuevo tema (rama del mapa)
#   ### Subgrupo                                      → agrupa términos dentro del tema
#   - Término | descripción (máx. 20 palabras) | tema:Término relacionado; tema:Otro
#   La parte de relaciones es opcional.
#   Una línea "> texto" debajo de un término agrega una fórmula o ejemplo resaltado.
#   ids de tema: cia, basicos, controles, politicas, marcos, soluciones, riesgos, dlp, continuidad

## cia | Objetivos principales de la seguridad | Lo que toda medida de seguridad busca proteger
### Tríada CIA
- Confidencialidad | Solo las personas autorizadas pueden ver la información; se protege con cifrado y control de acceso. | soluciones:Cifrado; dlp:DLP
- Integridad | La información se mantiene exacta y completa; nadie la modifica sin permiso o sin dejar rastro. | soluciones:Función hash; soluciones:Firma digital
- Disponibilidad | Los sistemas y datos están accesibles y funcionando cuando los usuarios autorizados los necesitan. | continuidad:BCP; continuidad:Alta disponibilidad
### Complementos (AAA y no repudio)
- Autenticación | Comprobar que alguien es quien dice ser mediante contraseña, token, tarjeta o biometría. | soluciones:MFA
- Autorización | Definir qué puede hacer un usuario ya autenticado y a qué recursos tiene acceso. | controles:RBAC
- Contabilidad (auditoría) | Registrar quién hizo qué y cuándo para poder revisar y rastrear las acciones. | soluciones:SIEM
- No repudio | Garantía de que el autor de una acción o mensaje no puede negar haberlo realizado. | soluciones:Firma digital

## basicos | Conceptos básicos de seguridad | El vocabulario base del riesgo y los ataques
### Fundamentos
- Seguridad de la información | Proteger la información, en cualquier formato, contra acceso, uso, cambio o destrucción no autorizados.
- Ciberseguridad | Parte de la seguridad enfocada en defender sistemas, redes y datos digitales contra ataques.
- Activo | Cualquier recurso valioso para la organización: datos, equipos, software, personas o reputación. | riesgos:AV
### Elementos del riesgo
- Amenaza | Cualquier evento, persona o situación que podría causar daño a un activo.
- Vulnerabilidad | Debilidad en un sistema, proceso o persona que una amenaza puede aprovechar. | riesgos:Escaneo de vulnerabilidades
- Riesgo | Posibilidad de que una amenaza aproveche una vulnerabilidad y cause un daño. | riesgos:Gestión de riesgos
> Riesgo = Probabilidad × Impacto
- Impacto | Daño o consecuencia que sufre la organización cuando un riesgo se materializa.
- Exploit | Código o técnica que aprovecha una vulnerabilidad específica para atacar un sistema.
- Incidente de seguridad | Evento que compromete la confidencialidad, integridad o disponibilidad de la información. | continuidad:IMP
### Actores y vectores
- Actor de amenaza | Quien origina el ataque: hacker, empleado, hacktivista, crimen organizado o un Estado.
- Amenaza interna (insider) | Riesgo causado por personas con acceso legítimo, ya sea por descuido o con mala intención. | dlp:Exfiltración
- Vector de ataque | Camino o medio que usa el atacante para entrar: correo, USB, red o sitio web.
- Superficie de ataque | Conjunto de todos los puntos por donde un sistema podría ser atacado.
- APT | Amenaza persistente avanzada: atacante con muchos recursos que permanece oculto largo tiempo en la red.
### Ataques comunes
- Malware | Software malicioso hecho para dañar, espiar o tomar el control de un equipo. | marcos:NIST SP 800-83
- Ransomware | Malware que cifra los archivos de la víctima y pide un rescate para liberarlos. | continuidad:Respaldo
- Ingeniería social | Manipular a las personas para que revelen información o hagan algo inseguro. | politicas:Concientización
- Phishing | Correo o mensaje falso que se hace pasar por alguien confiable para robar datos o contraseñas.
- Día cero (zero-day) | Vulnerabilidad que el fabricante aún no conoce ni ha corregido, pero ya puede explotarse. | soluciones:Gestión de parches
- DoS / DDoS | Ataque que satura un servicio con tráfico para que deje de estar disponible. | cia:Disponibilidad

## controles | Controles de seguridad y de acceso | Las medidas que reducen el riesgo
### Principios
- Control (contramedida) | Medida que reduce un riesgo evitando, detectando o corrigiendo un problema. | riesgos:Mitigar
- Defensa en profundidad | Usar varias capas de protección para que, si una falla, otra siga protegiendo.
- Privilegio mínimo | Dar a cada usuario solo los permisos indispensables para hacer su trabajo.
- Confianza cero (zero trust) | No confiar en nadie por defecto: verificar cada acceso, venga de dentro o fuera de la red. | soluciones:IAM
### Por su naturaleza
- Administrativo (gerencial) | Se basa en políticas, procesos y gestión, como reglas, capacitación y análisis de riesgos. | politicas:Política de seguridad
- Técnico (lógico) | Se implementa con tecnología, como firewall, cifrado, antivirus o contraseñas. | soluciones:Firewall
- Operativo | Lo realizan personas en el día a día: guardias, respaldos y revisión de bitácoras.
- Físico | Protege instalaciones y equipos con cerraduras, cámaras, credenciales y rejas.
### Por su función
- Preventivo | Busca impedir que el incidente ocurra, como un firewall o una cerradura.
- Detectivo | Descubre un incidente mientras ocurre o después, como un IDS o una cámara. | soluciones:IDS
- Correctivo | Reduce el daño y restablece el sistema después del incidente, como restaurar un respaldo.
- Disuasivo | Desanima al atacante antes de intentarlo, como letreros o vigilancia visible.
- Compensatorio | Alternativa que se usa cuando el control principal no se puede aplicar.
### Modelos de control de acceso
- DAC | Control discrecional: el dueño del recurso decide quién puede usarlo, como los permisos de archivos.
- MAC | Control obligatorio: el sistema da acceso según etiquetas de clasificación como confidencial o secreto.
- RBAC | Control basado en roles: los permisos se asignan al puesto y no a la persona.
- ABAC | Control basado en atributos: decide según datos del usuario, del recurso, la hora o la ubicación.
- Basado en reglas | El acceso depende de reglas generales del sistema, como horarios o listas del firewall.

## politicas | Políticas de seguridad | Las reglas de la organización y de su personal
### Jerarquía documental
- Política de seguridad | Documento de alto nivel, aprobado por la dirección, que define qué se protege y por qué.
- Estándar | Regla obligatoria y específica para cumplir una política, por ejemplo la longitud mínima de contraseña.
- Procedimiento | Pasos detallados y en orden para realizar una tarea de seguridad.
- Guía (lineamiento) | Recomendación no obligatoria que orienta sobre la mejor forma de actuar.
- Línea base (baseline) | Configuración mínima de seguridad que todos los sistemas deben cumplir.
### Políticas comunes
- Uso aceptable (AUP) | Reglas sobre lo que el usuario puede y no puede hacer con los recursos de la empresa.
- Política de contraseñas | Define la complejidad, vigencia y manejo correcto de las contraseñas. | soluciones:MFA
- Escritorio limpio | No dejar documentos ni sesiones abiertas a la vista al retirarse del lugar de trabajo.
- Acuerdo de confidencialidad (NDA) | Contrato en el que una persona se compromete a no revelar información de la empresa. | cia:Confidencialidad
### Controles de personal
- Separación de funciones | Dividir una tarea crítica entre varias personas para que nadie pueda cometer fraude solo.
- Rotación de puestos | Cambiar periódicamente al personal de puesto para detectar abusos y evitar depender de alguien.
- Vacaciones obligatorias | Obligar al empleado a ausentarse para que otro revise su trabajo y detecte irregularidades.
- Concientización | Capacitar a los usuarios para reconocer amenazas como el phishing y actuar de forma segura. | basicos:Phishing
### Gobierno y cumplimiento
- GRC | Gobierno, riesgo y cumplimiento: alinear la seguridad con los objetivos, riesgos y leyes del negocio. | riesgos:Gestión de riesgos
- Cumplimiento (compliance) | Demostrar que la organización respeta leyes, normas y políticas internas. | marcos:GDPR
- Debida diligencia | Investigar y conocer los riesgos antes de tomar una decisión.
- Debido cuidado | Actuar con responsabilidad para proteger los activos una vez que se conocen los riesgos.

## marcos | Marcos, estándares y normativas | Referencias externas para organizar la seguridad
### Normas ISO
- ISO/IEC 27001 | Norma internacional certificable para crear y mantener un sistema de gestión de seguridad de la información.
- ISO/IEC 27002 | Guía de buenas prácticas que describe los controles de seguridad que apoyan a la ISO 27001.
- SGSI | Sistema de gestión de seguridad de la información: ciclo continuo para manejar los riesgos de la información.
### NIST y CIS
- NIST CSF | Marco de ciberseguridad organizado en cinco funciones para gestionar riesgos.
> Identificar → Proteger → Detectar → Responder → Recuperar
- NIST SP 800-53 | Catálogo amplio de controles de seguridad y privacidad para sistemas de información. | controles:Control (contramedida)
- NIST SP 800-83 | Guía para prevenir y atender incidentes de malware en equipos de escritorio y laptops. | basicos:Malware
- CIS Controls | Lista de 18 controles prácticos y priorizados para defenderse de los ataques más comunes.
### Leyes y regulaciones
- GDPR (RGPD) | Reglamento europeo que protege los datos personales y da derechos a sus dueños. | dlp:PII
- PCI DSS | Estándar obligatorio para quien procesa, guarda o transmite datos de tarjetas de pago.
- HIPAA | Ley de Estados Unidos que protege la información médica de los pacientes.
- CCPA | Ley de privacidad de California que da al consumidor control sobre sus datos personales.
### Gobierno de datos
- DAMA-DMBOK | Guía de buenas prácticas para la gestión y el gobierno de los datos. | dlp:Clasificación de datos

## soluciones | Soluciones tecnológicas de ciberseguridad | Herramientas que ponen en práctica los controles
### Red y perímetro
- Firewall | Filtra el tráfico entre redes y bloquea lo que no cumple las reglas definidas.
- IDS | Sistema de detección de intrusos: vigila el tráfico y avisa ante actividad sospechosa.
- IPS | Sistema de prevención de intrusos: detecta el ataque y además lo bloquea automáticamente.
- VPN | Túnel cifrado para conectarse de forma segura a una red a través de Internet.
- Segmentación de red | Dividir la red en zonas separadas, como VLAN o DMZ, para contener los ataques.
- NAC | Control de acceso a la red: solo deja conectarse a equipos que cumplen las políticas.
### Monitoreo y endpoint
- SIEM | Reúne y correlaciona bitácoras de muchos sistemas para detectar incidentes en tiempo real.
- SOC | Centro de operaciones de seguridad: equipo que vigila y responde a incidentes de forma continua.
- Antivirus / antimalware | Software que detecta, bloquea y elimina programas maliciosos en el equipo. | basicos:Malware
- EDR | Herramienta que registra la actividad de cada equipo y responde automáticamente ante amenazas.
- Gestión de parches | Instalar actualizaciones a tiempo para cerrar vulnerabilidades conocidas. | basicos:Vulnerabilidad
### Identidad y criptografía
- IAM | Gestión de identidades y accesos: administra cuentas, roles y permisos de los usuarios. | controles:RBAC
- MFA | Autenticación multifactor: pide dos o más pruebas, como contraseña y un código en el celular. | cia:Autenticación
- Cifrado | Convierte datos legibles en ilegibles con una clave, para que solo el autorizado pueda leerlos. | cia:Confidencialidad
- Función hash | Genera una huella única de los datos; si cambian aunque sea un poco, cambia el hash. | cia:Integridad
- Firma digital | Usa criptografía para probar quién envió un mensaje y que no fue alterado. | cia:No repudio
- Certificado digital (PKI) | Documento electrónico, emitido por una autoridad confiable, que une una llave pública con su dueño.

## riesgos | Análisis y gestión de riesgos | Medir, priorizar y decidir qué hacer con cada riesgo
### Proceso
- Gestión de riesgos | Proceso continuo para identificar, evaluar, tratar y vigilar los riesgos de la organización.
- Evaluación de riesgos | Identificar amenazas y vulnerabilidades de cada activo y estimar su probabilidad e impacto. | basicos:Amenaza
- Análisis cualitativo | Clasifica los riesgos con escalas descriptivas (bajo, medio, alto) según probabilidad e impacto.
- Análisis cuantitativo | Asigna valores en dinero a los riesgos para calcular las pérdidas esperadas.
- Matriz de riesgos | Tabla de probabilidad contra impacto que ayuda a priorizar los riesgos con colores.
- Registro de riesgos | Documento que enlista cada riesgo con su dueño, nivel y plan de tratamiento.
- Dueño del riesgo | Persona responsable de vigilar un riesgo y decidir cómo tratarlo.
### Fórmulas del análisis cuantitativo
- AV (valor del activo) | Cuánto dinero vale el activo, según su costo de reposición e importancia. | basicos:Activo
- EF (factor de exposición) | Porcentaje del valor del activo que se perdería si ocurre el evento.
- SLE (pérdida esperada única) | Dinero que se pierde en un solo incidente.
> SLE = AV × EF
- ARO (tasa anual de ocurrencia) | Cuántas veces al año se espera el evento; una vez cada 4 años equivale a 0.25.
- ALE (pérdida anual esperada) | Pérdida esperada por año; sirve para decidir cuánto vale la pena invertir en controles.
> ALE = SLE × ARO
- Ejemplo: robo de servidor | AV = $20,000, EF = 70 %, ARO = 0.25 (1 robo cada 4 años).
> SLE = $14,000  ·  ALE = $3,500 al año
### Tipos de riesgo
- Riesgo inherente | Nivel de riesgo que existe antes de aplicar cualquier control.
- Riesgo residual | Riesgo que sigue existiendo aun después de aplicar los controles.
- Apetito de riesgo | Cantidad de riesgo que la organización está dispuesta a aceptar para lograr sus metas.
### Tratamiento del riesgo
- Evitar | Eliminar o dejar de hacer la actividad que genera el riesgo.
- Mitigar (reducir) | Aplicar controles para bajar la probabilidad o el impacto del riesgo. | controles:Control (contramedida)
- Transferir | Pasar el impacto económico a un tercero, como una aseguradora o un proveedor.
- Aceptar | Asumir el riesgo conscientemente porque controlarlo cuesta más que el daño posible.
### Gestión de vulnerabilidades
- Escaneo de vulnerabilidades | Revisión automática de sistemas para encontrar debilidades conocidas. | basicos:Vulnerabilidad
- Prueba de penetración (pentest) | Ataque simulado y autorizado para comprobar si las vulnerabilidades realmente pueden explotarse. | basicos:Exploit
- CVE | Identificador público y único que se asigna a cada vulnerabilidad conocida.

## dlp | Prevención de pérdida de datos (DLP) | Evitar que la información sensible salga de donde debe estar
### Concepto
- DLP | Estrategia, procesos y herramientas que evitan que los datos sensibles se pierdan, roben o usen mal. | cia:Confidencialidad
- Filtración (data breach) | Incidente en el que alguien no autorizado logra acceder a información sensible.
- Fuga de datos (data leak) | Exposición accidental de datos sensibles por un error técnico o humano.
- Exfiltración | Robo de datos: el atacante copia o saca la información hacia un lugar que él controla. | basicos:Amenaza interna (insider)
- Proceso DLP | Cuatro pasos que se repiten de forma continua.
> Identificar y clasificar → Monitorear → Proteger → Documentar
### Estados de los datos
- Datos en reposo | Datos almacenados en discos, bases de datos o la nube.
- Datos en tránsito | Datos que viajan por la red; son los más expuestos a ser interceptados. | soluciones:VPN
- Datos en uso | Datos que se están abriendo, editando o procesando en ese momento.
### Tipos de datos
- Clasificación de datos | Ordenar la información según su sensibilidad para saber cuánto protegerla.
- PII | Información de identificación personal: datos que identifican a alguien, como nombre, CURP o correo. | marcos:GDPR
- Propiedad intelectual | Creaciones valiosas de la empresa, como diseños, código, fórmulas o patentes.
- Estructurados / no estructurados | Los primeros tienen formato fijo en bases de datos; los segundos son documentos, imágenes o correos.
- Shadow data / shadow IT | Datos y herramientas que se usan fuera del control del área de TI.
### Tipos de DLP
- DLP de red | Vigila los datos que entran, salen y se mueven dentro de la red.
- DLP de endpoint | Supervisa laptops, celulares y servidores, y bloquea acciones como copiar a una USB.
- DLP en la nube | Clasifica, monitorea y cifra los datos guardados en servicios en la nube.
### Técnicas de detección
- Huella digital de datos | Reconoce archivos sensibles por sus etiquetas, metadatos o valor hash. | soluciones:Función hash
- Coincidencia de patrones | Detecta formatos conocidos, como números de tarjeta o CURP, dentro del contenido.

## continuidad | Continuidad del negocio y recuperación (BCP / DRP) | Seguir operando y recuperarse tras un desastre
### Planes
- BCP | Plan de continuidad del negocio: mantiene las operaciones esenciales de toda la empresa durante una crisis. | cia:Disponibilidad
- DRP | Plan de recuperación ante desastres: restaura los sistemas de TI y los datos; forma parte del BCP.
- BCDR | Gestión conjunta de la continuidad del negocio y la recuperación ante desastres.
- BIA | Análisis de impacto al negocio: identifica procesos críticos y el daño de detenerlos; es el punto de partida. | riesgos:Evaluación de riesgos
- IMP | Plan de gestión de incidentes: atiende un incidente de seguridad antes de que se convierta en crisis. | basicos:Incidente de seguridad
- BRP | Plan de reanudación del negocio: cómo retomar las operaciones comerciales y la cadena de suministro.
- COOP | Plan de continuidad de operaciones: sostiene las funciones esenciales durante interrupciones largas.
- OEP | Plan de emergencia para ocupantes: protege a empleados y visitantes, por ejemplo con evacuaciones.
- Plan de comunicación | Define cómo informar a empleados, clientes, proveedores y medios durante una crisis.
### Métricas
- RTO | Tiempo objetivo de recuperación: tiempo máximo que un proceso puede estar detenido.
- RPO | Punto objetivo de recuperación: cantidad máxima de datos, medida en tiempo, que se puede perder.
- MTBF | Tiempo medio entre fallas: cuánto funciona un equipo, en promedio, antes de fallar.
- MTTR | Tiempo medio de reparación: cuánto tarda, en promedio, un equipo en volver a funcionar.
### Estrategias de recuperación
- Respaldo (backup) | Copia periódica de los datos guardada en otro lugar para poder restaurarlos. | basicos:Ransomware
- Sitio caliente | Instalación alterna equipada y lista para operar casi de inmediato; es la más costosa.
- Sitio tibio | Instalación con parte del equipo; necesita algo de tiempo para empezar a operar.
- Sitio frío | Espacio con energía y conexión básicas, pero sin equipos; es el más lento y barato.
- Alta disponibilidad | Duplicar componentes para que el servicio siga funcionando aunque uno falle.
- Recuperación virtualizada | Usar máquinas virtuales que arrancan en minutos para recuperar aplicaciones críticas.
### Gestión del plan
- Inventario de activos | Lista de activos clasificados como críticos, importantes o sin importancia para la operación. | basicos:Activo
- Roles del plan | Informante de incidentes, supervisor del DRP y gestor de activos coordinan la respuesta.
- Pruebas y simulacros | Ensayos periódicos que confirman que el plan funciona y que el personal sabe qué hacer.
- Resiliencia | Capacidad de la empresa para adaptarse y seguir operando ante cualquier adversidad.
