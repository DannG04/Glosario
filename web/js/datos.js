// Archivo generado por build.py a partir de glosario.md. No editar a mano.
window.GLOSARIO = {
 "meta": {
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
  "url": "https://glosario-beryl.vercel.app"
 },
 "temas": [
  {
   "id": "triada",
   "titulo": "Tríada de la seguridad (CIA)",
   "subtitulo": "Los tres objetivos que guían toda protección de la información",
   "grupos": [
    {
     "titulo": "Pilares",
     "terminos": [
      {
       "nombre": "Confidencialidad",
       "desc": "Garantiza que solo quien tiene autorización y necesidad de saber pueda consultar la información.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-0-0"
      },
      {
       "nombre": "Integridad",
       "desc": "Asegura que los datos permanezcan exactos y sin alteraciones no autorizadas al guardarse o enviarse.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-0-1"
      },
      {
       "nombre": "Disponibilidad",
       "desc": "Los sistemas y datos responden cuando el usuario autorizado los requiere, incluso ante fallas.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-0-2"
      }
     ]
    },
    {
     "titulo": "Mecanismos que la sostienen",
     "terminos": [
      {
       "nombre": "Cifrado",
       "desc": "Transforma los datos con una clave para que resulten ilegibles a quien no la posee.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-1-0"
      },
      {
       "nombre": "Cifrado simétrico / asimétrico",
       "desc": "El simétrico usa una sola clave secreta; el asimétrico, un par de llaves pública y privada.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-1-1"
      },
      {
       "nombre": "Hash",
       "desc": "Valor calculado sobre los datos; si cambia al recalcularlo, la información fue alterada.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-1-2"
      },
      {
       "nombre": "Redundancia (RAID, clúster)",
       "desc": "Discos en arreglo o servidores en espejo: si uno se cae, otro toma su lugar.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-1-3"
      },
      {
       "nombre": "Respaldo",
       "desc": "Copia periódica de la información que permite recuperarla tras una pérdida, daño o ataque.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-1-4"
      }
     ]
    },
    {
     "titulo": "Control de acceso",
     "terminos": [
      {
       "nombre": "Identificación",
       "desc": "El usuario declara quién es mediante una cuenta, tarjeta inteligente o rasgo biométrico.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-2-0"
      },
      {
       "nombre": "Autenticación",
       "desc": "Comprobación de esa identidad con algo que la persona sabe, tiene o es.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-2-1"
      },
      {
       "nombre": "Autorización",
       "desc": "Permisos concretos que recibe el usuario ya autenticado sobre cada recurso.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-2-2"
      },
      {
       "nombre": "Mínimo privilegio",
       "desc": "Otorgar únicamente los permisos indispensables para desempeñar el puesto.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-2-3"
      },
      {
       "nombre": "No repudio",
       "desc": "Evidencia que impide al autor de una acción negar que la hizo, como firmas o bitácoras.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-2-4"
      }
     ]
    },
    {
     "titulo": "Modelos ampliados",
     "terminos": [
      {
       "nombre": "Hexada de Parker",
       "desc": "Amplía la tríada con posesión o control, autenticidad y utilidad: seis principios en total.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-3-0"
      },
      {
       "nombre": "Posesión o control",
       "desc": "Quién tiene físicamente el medio donde residen los datos, aunque estos estén cifrados.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-3-1"
      },
      {
       "nombre": "Autenticidad",
       "desc": "Certeza de que la información proviene realmente del origen que dice tener.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-3-2"
      },
      {
       "nombre": "Utilidad",
       "desc": "Que los datos sirvan para su propósito; un archivo cifrado sin su clave pierde utilidad.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-3-3"
      },
      {
       "nombre": "Defensa en profundidad",
       "desc": "Capas sucesivas de protección física y lógica; si una falla, la siguiente detiene al atacante.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-3-4"
      }
     ]
    },
    {
     "titulo": "Ataques contra la tríada",
     "terminos": [
      {
       "nombre": "Intercepción",
       "desc": "Acceso no autorizado a datos o aplicaciones; afecta sobre todo la confidencialidad.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-4-0"
      },
      {
       "nombre": "Interrupción",
       "desc": "Deja inutilizable un recurso de forma temporal o permanente; golpea la disponibilidad.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-4-1"
      },
      {
       "nombre": "Modificación",
       "desc": "Alteración indebida de la información; compromete principalmente la integridad.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-4-2"
      },
      {
       "nombre": "Fabricación",
       "desc": "Introducir datos, transacciones o procesos falsos dentro de un sistema legítimo.",
       "formula": [],
       "ejemplo": false,
       "id": "triada-4-3"
      }
     ]
    }
   ]
  },
  {
   "id": "politicas",
   "titulo": "Políticas de seguridad",
   "subtitulo": "Reglas documentadas que dirigen la conducta de usuarios y personal de TI",
   "grupos": [
    {
     "titulo": "Concepto y jerarquía",
     "terminos": [
      {
       "nombre": "Política de seguridad",
       "desc": "Documento que establece cómo la organización atenderá un aspecto de seguridad y qué espera del personal.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-0"
      },
      {
       "nombre": "Estándar",
       "desc": "Nivel de operación deseado y medible, por ejemplo 99.5 % de disponibilidad de la red.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-1"
      },
      {
       "nombre": "Guía (lineamiento)",
       "desc": "Sugerencia general, a veces opcional, sobre cómo alcanzar un estándar.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-2"
      },
      {
       "nombre": "Procedimiento",
       "desc": "Instrucciones específicas, paso a paso, para resolver una situación concreta.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-3"
      },
      {
       "nombre": "Política regulatoria",
       "desc": "Indica al personal cómo cumplir una ley, como HIPAA al manejar expedientes médicos electrónicos.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-4"
      },
      {
       "nombre": "Política consultiva",
       "desc": "Recomienda buenas prácticas sin exigir su cumplimiento obligatorio.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-5"
      }
     ]
    },
    {
     "titulo": "Políticas para usuarios",
     "terminos": [
      {
       "nombre": "Uso aceptable (AUP)",
       "desc": "Define qué puede y qué no puede hacer el empleado con equipos, red e internet; suele firmarse.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-1-0"
      },
      {
       "nombre": "Política de contraseñas",
       "desc": "Fija longitud, complejidad y vigencia, y prohíbe compartir credenciales.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-1-1"
      },
      {
       "nombre": "Uso del correo electrónico",
       "desc": "Regula el uso personal y las precauciones ante adjuntos de remitentes desconocidos.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-1-2"
      },
      {
       "nombre": "Instalación de software",
       "desc": "Solo personal autorizado puede instalar o desinstalar programas en los equipos.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-1-3"
      },
      {
       "nombre": "Política de privacidad",
       "desc": "Explica cómo se resguardan los datos personales de usuarios internos y externos.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-1-4"
      }
     ]
    },
    {
     "titulo": "Administración de sistemas",
     "terminos": [
      {
       "nombre": "Altas de empleados",
       "desc": "Procedimiento para crear cuentas con los accesos justos que necesita el nuevo trabajador.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-2-0"
      },
      {
       "nombre": "Bajas de empleados",
       "desc": "Al salir alguien, su cuenta se deshabilita de inmediato y se recuperan sus credenciales.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-2-1"
      },
      {
       "nombre": "Gestión de cambios",
       "desc": "Toda modificación a sistemas se propone, evalúa y aprueba por las áreas afectadas antes de aplicarse.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-2-2"
      },
      {
       "nombre": "Respuesta a incidentes",
       "desc": "Pasos ante virus, intrusiones o negación de servicio: aislar, notificar, registrar y aprender.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-2-3"
      }
     ]
    },
    {
     "titulo": "Controles de personal",
     "terminos": [
      {
       "nombre": "Separación de funciones",
       "desc": "Una tarea crítica requiere a más de una persona, lo que reparte el control y frena fraudes.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-3-0"
      },
      {
       "nombre": "Rotación de puestos",
       "desc": "Intercambiar roles cada cierto tiempo para ampliar habilidades y descubrir irregularidades.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-3-1"
      },
      {
       "nombre": "Vacaciones obligatorias",
       "desc": "Días consecutivos de ausencia que permiten a otra persona revisar el trabajo del titular.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-3-2"
      },
      {
       "nombre": "Capacitación y concientización",
       "desc": "Formación periódica para que el personal reconozca amenazas como phishing o ingeniería social.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-3-3"
      }
     ]
    },
    {
     "titulo": "Responsabilidad legal",
     "terminos": [
      {
       "nombre": "Debida diligencia",
       "desc": "Conocer y evaluar los riesgos y vulnerabilidades de la infraestructura de TI.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-4-0"
      },
      {
       "nombre": "Debido cuidado",
       "desc": "Acciones de mitigación que se toman frente a los riesgos ya identificados.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-4-1"
      },
      {
       "nombre": "Debido proceso",
       "desc": "Principio de respetar y proteger los derechos del personal ante sanciones o demandas.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-4-2"
      }
     ]
    }
   ]
  },
  {
   "id": "riesgos",
   "titulo": "Análisis y evaluación del riesgo",
   "subtitulo": "Identificar, medir y priorizar riesgos de forma cualitativa y cuantitativa",
   "grupos": [
    {
     "titulo": "Elementos",
     "terminos": [
      {
       "nombre": "Activo",
       "desc": "Lo que vale la pena proteger porque su pérdida perjudica al negocio, sea tangible o intangible.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-0"
      },
      {
       "nombre": "Amenaza",
       "desc": "Fuerza externa capaz de vulnerar los controles de seguridad de la organización.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-1"
      },
      {
       "nombre": "Vulnerabilidad",
       "desc": "Debilidad interna de los controles que una amenaza podría aprovechar.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-2"
      },
      {
       "nombre": "Riesgo",
       "desc": "Surge cuando una amenaza coincide con una vulnerabilidad; si falta una de las dos, no existe.",
       "formula": [
        "Riesgo = Amenaza × Vulnerabilidad"
       ],
       "ejemplo": false,
       "id": "riesgos-0-3"
      },
      {
       "nombre": "Impacto",
       "desc": "Magnitud del daño que sufre la organización si el riesgo llega a concretarse.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-4"
      }
     ]
    },
    {
     "titulo": "Evaluación cualitativa",
     "terminos": [
      {
       "nombre": "Evaluación cualitativa",
       "desc": "Expertos juzgan probabilidad e impacto con escalas como alto, moderado y bajo.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-1-0"
      },
      {
       "nombre": "Matriz de riesgos",
       "desc": "Cuadro de probabilidad contra impacto que muestra a simple vista qué riesgos atender primero.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-1-1"
      },
      {
       "nombre": "Registro de riesgos",
       "desc": "Bitácora donde cada área anota sus riesgos y tratamientos; se revisa cada año.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-1-2"
      }
     ]
    },
    {
     "titulo": "Evaluación cuantitativa",
     "terminos": [
      {
       "nombre": "Evaluación cuantitativa",
       "desc": "Usa datos numéricos y monetarios para estimar la pérdida esperada de cada riesgo.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-2-0"
      },
      {
       "nombre": "AV (valor del activo)",
       "desc": "Costo en dinero de reemplazar o reconstruir el activo evaluado.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-2-1"
      },
      {
       "nombre": "EF (factor de exposición)",
       "desc": "Fracción, expresada en porcentaje, del valor del activo que destruiría un evento.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-2-2"
      },
      {
       "nombre": "SLE (expectativa de pérdida única)",
       "desc": "Cuánto dinero cuesta que el evento ocurra una vez.",
       "formula": [
        "SLE = AV × EF"
       ],
       "ejemplo": false,
       "id": "riesgos-2-3"
      },
      {
       "nombre": "ARO (tasa anual de ocurrencia)",
       "desc": "Frecuencia esperada al año; una inundación por siglo se expresa como 0.01.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-2-4"
      },
      {
       "nombre": "ALE (expectativa de pérdida anual)",
       "desc": "Costo anual del riesgo; un control no debería costar más que lo que ahorra.",
       "formula": [
        "ALE = SLE × ARO"
       ],
       "ejemplo": false,
       "id": "riesgos-2-5"
      },
      {
       "nombre": "Ejemplo: sismo en el centro de datos",
       "desc": "AV de $20 millones, EF de 50 % y ARO de 0.03.",
       "formula": [
        "SLE = $10 millones  ·  ALE = $300,000 al año"
       ],
       "ejemplo": true,
       "id": "riesgos-2-6"
      }
     ]
    },
    {
     "titulo": "Tratamiento del riesgo",
     "terminos": [
      {
       "nombre": "Evitar",
       "desc": "Cambiar la actividad del negocio para eliminar el riesgo, como reubicar un centro de datos.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-3-0"
      },
      {
       "nombre": "Transferir",
       "desc": "Trasladar el impacto económico a otra entidad mediante un seguro o una cláusula de indemnización.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-3-1"
      },
      {
       "nombre": "Mitigación",
       "desc": "Estrategia favorita en seguridad: poner firewalls, IPS u otros controles ligados directamente al riesgo.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-3-2"
      },
      {
       "nombre": "Disuasión",
       "desc": "Medidas que desaniman al atacante, como acciones legales firmes o vigilancia visible.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-3-3"
      },
      {
       "nombre": "Aceptar",
       "desc": "Solo vigilar el riesgo sin actuar, decisión válida únicamente tras un análisis que la justifique.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-3-4"
      }
     ]
    },
    {
     "titulo": "Gestión de vulnerabilidades",
     "terminos": [
      {
       "nombre": "Escaneo de vulnerabilidades",
       "desc": "Revisión no intrusiva que detecta debilidades conocidas sin explotarlas.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-4-0"
      },
      {
       "nombre": "Prueba de penetración",
       "desc": "Ataque autorizado y más intrusivo que intenta explotar las vulnerabilidades encontradas.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-4-1"
      }
     ]
    }
   ]
  },
  {
   "id": "marcos",
   "titulo": "Estándares y marcos de seguridad",
   "subtitulo": "Referencias reconocidas para organizar, medir y mejorar la seguridad",
   "grupos": [
    {
     "titulo": "NIST Cybersecurity Framework",
     "terminos": [
      {
       "nombre": "NIST CSF",
       "desc": "Marco voluntario de EE. UU. para gestionar el riesgo cibernético; su versión 1.0 es de 2014.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-0-0"
      },
      {
       "nombre": "Núcleo del marco",
       "desc": "Actividades y resultados organizados en funciones, categorías, subcategorías y referencias informativas.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-0-1"
      },
      {
       "nombre": "Funciones del núcleo",
       "desc": "Cinco actividades que se realizan en paralelo y de forma continua, no como pasos en serie.",
       "formula": [
        "Identificar · Proteger · Detectar · Responder · Recuperar"
       ],
       "ejemplo": false,
       "id": "marcos-0-2"
      },
      {
       "nombre": "Niveles de implementación",
       "desc": "Grado de madurez en la gestión del riesgo: parcial, informado, repetible y adaptativo.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-0-3"
      },
      {
       "nombre": "Perfil actual y objetivo",
       "desc": "Comparar dónde está la organización y dónde quiere llegar revela las brechas por cubrir.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-0-4"
      }
     ]
    },
    {
     "titulo": "CIS Controls",
     "terminos": [
      {
       "nombre": "CIS Controls v8.1",
       "desc": "Conjunto priorizado de 18 controles con acciones concretas contra los ataques más comunes.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-1-0"
      },
      {
       "nombre": "Salvaguarda",
       "desc": "Acción específica y medible dentro de cada control CIS; antes se llamaba subcontrol.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-1-1"
      },
      {
       "nombre": "Grupos de implementación (IG)",
       "desc": "IG1, IG2 e IG3 priorizan salvaguardas según los recursos y el riesgo de cada empresa.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-1-2"
      },
      {
       "nombre": "IG1: higiene cibernética esencial",
       "desc": "Salvaguardas mínimas que toda organización debería aplicar contra los ataques frecuentes.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-1-3"
      }
     ]
    },
    {
     "titulo": "Normas ISO/IEC",
     "terminos": [
      {
       "nombre": "ISO/IEC 27001",
       "desc": "Estándar internacional cuyos requisitos permiten que una empresa audite y certifique su SGSI.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-0"
      },
      {
       "nombre": "ISO/IEC 27002",
       "desc": "Código de buenas prácticas con controles de seguridad; también orienta la clasificación de datos.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-1"
      },
      {
       "nombre": "SGSI",
       "desc": "Sistema de gestión que asigna recursos y controles según el tipo y valor de cada clase de información.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-2"
      },
      {
       "nombre": "ISO/IEC 38505-1",
       "desc": "Aplica los principios de gobierno de TI de ISO 38500 al gobierno de los datos.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-3"
      },
      {
       "nombre": "Modelo EDM",
       "desc": "El órgano de gobierno evalúa, dirige y monitorea cómo se manejan y usan los datos.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-4"
      },
      {
       "nombre": "Seis principios de gobierno",
       "desc": "Responsabilidad, estrategia, adquisición, desempeño, conformidad y comportamiento humano.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-5"
      }
     ]
    },
    {
     "titulo": "Leyes y regulaciones",
     "terminos": [
      {
       "nombre": "HIPAA",
       "desc": "Norma de EE. UU. que obliga a hospitales y aseguradoras a resguardar los expedientes de salud.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-3-0"
      },
      {
       "nombre": "SOX",
       "desc": "Ley Sarbanes-Oxley: exige controles y transparencia sobre la información financiera de empresas que cotizan en bolsa.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-3-1"
      },
      {
       "nombre": "GLBA",
       "desc": "Ley Gramm-Leach-Bliley: obliga a las financieras a proteger datos de clientes y combate el pretexting.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-3-2"
      },
      {
       "nombre": "Privacy Act (1974)",
       "desc": "Ley que fija estándares para manejar la información personal en poder del gobierno federal.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-3-3"
      }
     ]
    }
   ]
  },
  {
   "id": "dlp",
   "titulo": "Prevención de pérdida de datos (DLP)",
   "subtitulo": "Saber dónde está la información sensible y evitar que salga sin control",
   "grupos": [
    {
     "titulo": "Concepto",
     "terminos": [
      {
       "nombre": "DLP",
       "desc": "Herramientas y procesos que identifican datos sensibles y bloquean su salida o uso indebido.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-0-0"
      },
      {
       "nombre": "Pérdida vs. fuga de datos",
       "desc": "En la pérdida el dato deja de estar disponible; en la fuga termina en manos de terceros.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-0-1"
      },
      {
       "nombre": "Amenaza interna",
       "desc": "Empleado o contratista con acceso legítimo que, por error o con intención, expone información.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-0-2"
      }
     ]
    },
    {
     "titulo": "Gestión de datos (CIS Control 3)",
     "terminos": [
      {
       "nombre": "Proceso de gestión de datos",
       "desc": "Define dueños, manejo, retención y eliminación de los datos según su sensibilidad.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-0"
      },
      {
       "nombre": "Inventario de datos",
       "desc": "Registro actualizado de qué datos sensibles existen, dónde se guardan y quién los custodia.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-1"
      },
      {
       "nombre": "Clasificación de datos",
       "desc": "Etiquetar la información según su sensibilidad: pública, interna, confidencial o restringida.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-2"
      },
      {
       "nombre": "PII",
       "desc": "Cualquier dato que identifique, directa o indirectamente, a una persona física.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-3"
      },
      {
       "nombre": "Flujo de datos",
       "desc": "Documentar por dónde viaja la información, incluidos los proveedores de servicio.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-4"
      },
      {
       "nombre": "Retención de datos",
       "desc": "Conservar la información solo durante los plazos mínimo y máximo que se definieron.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-5"
      },
      {
       "nombre": "Eliminación segura",
       "desc": "Destruir o purgar datos y medios para que no puedan recuperarse.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-6"
      }
     ]
    },
    {
     "titulo": "Estados de los datos",
     "terminos": [
      {
       "nombre": "Datos en reposo",
       "desc": "Archivos y registros guardados que no se están moviendo; el cifrado de disco los protege.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-2-0"
      },
      {
       "nombre": "Datos en tránsito",
       "desc": "Información que viaja por la red; requiere canales cifrados como TLS.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-2-1"
      },
      {
       "nombre": "Datos en uso",
       "desc": "Información abierta o procesándose en memoria en un momento dado.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-2-2"
      }
     ]
    },
    {
     "titulo": "Tipos de DLP",
     "terminos": [
      {
       "nombre": "DLP de red",
       "desc": "Inspecciona el tráfico que sale de la organización: correo, web y transferencias de archivos.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-3-0"
      },
      {
       "nombre": "DLP de endpoint",
       "desc": "Agente instalado en el equipo que vigila copias a USB, impresiones o capturas de pantalla.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-3-1"
      },
      {
       "nombre": "DLP en la nube",
       "desc": "Aplica las reglas de DLP a correo, almacenamiento y aplicaciones contratadas como servicio (SaaS).",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-3-2"
      }
     ]
    },
    {
     "titulo": "Técnicas y respuesta",
     "terminos": [
      {
       "nombre": "Coincidencia de patrones",
       "desc": "Busca estructuras conocidas, como 16 dígitos de una tarjeta o una CURP, en el contenido revisado.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-4-0"
      },
      {
       "nombre": "Huella digital de documentos",
       "desc": "Reconoce copias de archivos sensibles comparando su hash o fragmentos de contenido.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-4-1"
      },
      {
       "nombre": "Seudonimización y anonimización",
       "desc": "Sustituir identificadores por alias, o alterarlos de forma irreversible, para proteger a la persona.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-4-2"
      },
      {
       "nombre": "Bitácora de acceso",
       "desc": "Registrar quién consulta datos sensibles para detectar y rastrear abusos.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-4-3"
      }
     ]
    }
   ]
  },
  {
   "id": "bia",
   "titulo": "Análisis de impacto al negocio (BIA)",
   "subtitulo": "Qué procesos son críticos y cuánto tiempo puede resistir la organización sin ellos",
   "grupos": [
    {
     "titulo": "Concepto",
     "terminos": [
      {
       "nombre": "BIA",
       "desc": "Análisis que identifica los procesos críticos y estima el daño que causa interrumpirlos con el paso del tiempo.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-0-0"
      },
      {
       "nombre": "Proceso crítico",
       "desc": "Actividad sin la cual la organización no puede cumplir su misión ni generar ingresos.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-0-1"
      },
      {
       "nombre": "Dependencias",
       "desc": "Personas, sistemas, proveedores e instalaciones que un proceso necesita para operar.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-0-2"
      },
      {
       "nombre": "Punto único de falla",
       "desc": "Componente cuya caída detiene todo el proceso porque no tiene respaldo.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-0-3"
      }
     ]
    },
    {
     "titulo": "Métricas de tiempo",
     "terminos": [
      {
       "nombre": "MTD (tiempo máximo tolerable)",
       "desc": "Lapso máximo de interrupción antes de que el daño resulte inaceptable.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-1-0"
      },
      {
       "nombre": "RTO",
       "desc": "Tiempo objetivo para restablecer un proceso; siempre debe ser menor que el MTD.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-1-1"
      },
      {
       "nombre": "RPO",
       "desc": "Cantidad máxima de datos, medida en tiempo, que se puede perder; marca la frecuencia de respaldos.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-1-2"
      },
      {
       "nombre": "MTTR",
       "desc": "Tiempo promedio que tarda en repararse un componente que falló.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-1-3"
      },
      {
       "nombre": "MTBF",
       "desc": "Tiempo promedio que opera un equipo entre una falla y la siguiente.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-1-4"
      }
     ]
    },
    {
     "titulo": "Tipos de impacto",
     "terminos": [
      {
       "nombre": "Impacto financiero",
       "desc": "Ingresos perdidos, multas y costos adicionales provocados por la interrupción.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-2-0"
      },
      {
       "nombre": "Impacto operativo",
       "desc": "Retrasos, trabajo acumulado y pérdida de productividad mientras el proceso está detenido.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-2-1"
      },
      {
       "nombre": "Impacto reputacional",
       "desc": "Desconfianza de clientes y socios ante fallas visibles del servicio.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-2-2"
      },
      {
       "nombre": "Impacto legal o regulatorio",
       "desc": "Sanciones por incumplir contratos o leyes durante la interrupción.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-2-3"
      }
     ]
    },
    {
     "titulo": "Etapas del BIA",
     "terminos": [
      {
       "nombre": "Recolección de información",
       "desc": "Entrevistas y cuestionarios a los responsables de cada área sobre sus procesos.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-3-0"
      },
      {
       "nombre": "Priorización de procesos",
       "desc": "Ordenar los procesos según su impacto para decidir qué recuperar primero.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-3-1"
      },
      {
       "nombre": "Informe BIA",
       "desc": "Documento con hallazgos, tiempos y prioridades que la dirección revisa y aprueba.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-3-2"
      }
     ]
    },
    {
     "titulo": "Relación con otros planes",
     "terminos": [
      {
       "nombre": "BCP",
       "desc": "Estrategia para que la empresa siga dando servicio durante una crisis; se diseña con los resultados del BIA.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-4-0"
      },
      {
       "nombre": "DRP",
       "desc": "Parte técnica de la continuidad: cómo levantar servidores, redes y datos después de un desastre.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-4-1"
      },
      {
       "nombre": "Pruebas del plan",
       "desc": "Simulacros periódicos que validan los tiempos de recuperación y mantienen el BIA actualizado.",
       "formula": [],
       "ejemplo": false,
       "id": "bia-4-2"
      }
     ]
    }
   ]
  }
 ],
 "enlaces": [
  {
   "de": "triada-0-0",
   "a": "triada-1-0"
  },
  {
   "de": "triada-0-0",
   "a": "dlp-0-0"
  },
  {
   "de": "triada-0-1",
   "a": "triada-1-2"
  },
  {
   "de": "triada-0-2",
   "a": "bia-1-1"
  },
  {
   "de": "triada-1-3",
   "a": "triada-0-2"
  },
  {
   "de": "triada-1-4",
   "a": "bia-1-2"
  },
  {
   "de": "triada-2-2",
   "a": "triada-2-3"
  },
  {
   "de": "triada-2-3",
   "a": "politicas-3-0"
  },
  {
   "de": "triada-4-0",
   "a": "triada-0-0"
  },
  {
   "de": "triada-4-1",
   "a": "triada-0-2"
  },
  {
   "de": "triada-4-2",
   "a": "triada-0-1"
  },
  {
   "de": "politicas-0-4",
   "a": "marcos-3-0"
  },
  {
   "de": "politicas-1-4",
   "a": "dlp-1-3"
  },
  {
   "de": "politicas-2-0",
   "a": "triada-2-3"
  },
  {
   "de": "politicas-4-0",
   "a": "riesgos-0-3"
  },
  {
   "de": "politicas-4-1",
   "a": "riesgos-3-2"
  },
  {
   "de": "riesgos-0-0",
   "a": "riesgos-2-1"
  },
  {
   "de": "riesgos-0-2",
   "a": "riesgos-4-0"
  },
  {
   "de": "riesgos-0-4",
   "a": "bia-0-0"
  },
  {
   "de": "marcos-2-1",
   "a": "dlp-1-2"
  },
  {
   "de": "marcos-3-3",
   "a": "dlp-1-3"
  },
  {
   "de": "dlp-0-2",
   "a": "politicas-3-0"
  },
  {
   "de": "dlp-1-0",
   "a": "marcos-1-0"
  },
  {
   "de": "dlp-2-0",
   "a": "triada-1-0"
  },
  {
   "de": "dlp-4-1",
   "a": "triada-1-2"
  },
  {
   "de": "dlp-4-3",
   "a": "triada-2-4"
  },
  {
   "de": "bia-0-3",
   "a": "triada-1-3"
  },
  {
   "de": "bia-2-3",
   "a": "marcos-3-1"
  },
  {
   "de": "bia-3-1",
   "a": "riesgos-1-1"
  }
 ]
};
