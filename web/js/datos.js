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
   "id": "cia",
   "titulo": "Objetivos principales de la seguridad",
   "subtitulo": "Lo que toda medida de seguridad busca proteger",
   "grupos": [
    {
     "titulo": "Tríada CIA",
     "terminos": [
      {
       "nombre": "Confidencialidad",
       "desc": "Solo las personas autorizadas pueden ver la información; se protege con cifrado y control de acceso.",
       "formula": [],
       "ejemplo": false,
       "id": "cia-0-0"
      },
      {
       "nombre": "Integridad",
       "desc": "La información se mantiene exacta y completa; nadie la modifica sin permiso o sin dejar rastro.",
       "formula": [],
       "ejemplo": false,
       "id": "cia-0-1"
      },
      {
       "nombre": "Disponibilidad",
       "desc": "Los sistemas y datos están accesibles y funcionando cuando los usuarios autorizados los necesitan.",
       "formula": [],
       "ejemplo": false,
       "id": "cia-0-2"
      }
     ]
    },
    {
     "titulo": "Complementos (AAA y no repudio)",
     "terminos": [
      {
       "nombre": "Autenticación",
       "desc": "Comprobar que alguien es quien dice ser mediante contraseña, token, tarjeta o biometría.",
       "formula": [],
       "ejemplo": false,
       "id": "cia-1-0"
      },
      {
       "nombre": "Autorización",
       "desc": "Definir qué puede hacer un usuario ya autenticado y a qué recursos tiene acceso.",
       "formula": [],
       "ejemplo": false,
       "id": "cia-1-1"
      },
      {
       "nombre": "Contabilidad (auditoría)",
       "desc": "Registrar quién hizo qué y cuándo para poder revisar y rastrear las acciones.",
       "formula": [],
       "ejemplo": false,
       "id": "cia-1-2"
      },
      {
       "nombre": "No repudio",
       "desc": "Garantía de que el autor de una acción o mensaje no puede negar haberlo realizado.",
       "formula": [],
       "ejemplo": false,
       "id": "cia-1-3"
      }
     ]
    }
   ]
  },
  {
   "id": "basicos",
   "titulo": "Conceptos básicos de seguridad",
   "subtitulo": "El vocabulario base del riesgo y los ataques",
   "grupos": [
    {
     "titulo": "Fundamentos",
     "terminos": [
      {
       "nombre": "Seguridad de la información",
       "desc": "Proteger la información, en cualquier formato, contra acceso, uso, cambio o destrucción no autorizados.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-0-0"
      },
      {
       "nombre": "Ciberseguridad",
       "desc": "Parte de la seguridad enfocada en defender sistemas, redes y datos digitales contra ataques.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-0-1"
      },
      {
       "nombre": "Activo",
       "desc": "Cualquier recurso valioso para la organización: datos, equipos, software, personas o reputación.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-0-2"
      }
     ]
    },
    {
     "titulo": "Elementos del riesgo",
     "terminos": [
      {
       "nombre": "Amenaza",
       "desc": "Cualquier evento, persona o situación que podría causar daño a un activo.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-1-0"
      },
      {
       "nombre": "Vulnerabilidad",
       "desc": "Debilidad en un sistema, proceso o persona que una amenaza puede aprovechar.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-1-1"
      },
      {
       "nombre": "Riesgo",
       "desc": "Posibilidad de que una amenaza aproveche una vulnerabilidad y cause un daño.",
       "formula": [
        "Riesgo = Probabilidad × Impacto"
       ],
       "ejemplo": false,
       "id": "basicos-1-2"
      },
      {
       "nombre": "Impacto",
       "desc": "Daño o consecuencia que sufre la organización cuando un riesgo se materializa.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-1-3"
      },
      {
       "nombre": "Exploit",
       "desc": "Código o técnica que aprovecha una vulnerabilidad específica para atacar un sistema.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-1-4"
      },
      {
       "nombre": "Incidente de seguridad",
       "desc": "Evento que compromete la confidencialidad, integridad o disponibilidad de la información.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-1-5"
      }
     ]
    },
    {
     "titulo": "Actores y vectores",
     "terminos": [
      {
       "nombre": "Actor de amenaza",
       "desc": "Quien origina el ataque: hacker, empleado, hacktivista, crimen organizado o un Estado.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-2-0"
      },
      {
       "nombre": "Amenaza interna (insider)",
       "desc": "Riesgo causado por personas con acceso legítimo, ya sea por descuido o con mala intención.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-2-1"
      },
      {
       "nombre": "Vector de ataque",
       "desc": "Camino o medio que usa el atacante para entrar: correo, USB, red o sitio web.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-2-2"
      },
      {
       "nombre": "Superficie de ataque",
       "desc": "Conjunto de todos los puntos por donde un sistema podría ser atacado.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-2-3"
      },
      {
       "nombre": "APT",
       "desc": "Amenaza persistente avanzada: atacante con muchos recursos que permanece oculto largo tiempo en la red.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-2-4"
      }
     ]
    },
    {
     "titulo": "Ataques comunes",
     "terminos": [
      {
       "nombre": "Malware",
       "desc": "Software malicioso hecho para dañar, espiar o tomar el control de un equipo.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-3-0"
      },
      {
       "nombre": "Ransomware",
       "desc": "Malware que cifra los archivos de la víctima y pide un rescate para liberarlos.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-3-1"
      },
      {
       "nombre": "Ingeniería social",
       "desc": "Manipular a las personas para que revelen información o hagan algo inseguro.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-3-2"
      },
      {
       "nombre": "Phishing",
       "desc": "Correo o mensaje falso que se hace pasar por alguien confiable para robar datos o contraseñas.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-3-3"
      },
      {
       "nombre": "Día cero (zero-day)",
       "desc": "Vulnerabilidad que el fabricante aún no conoce ni ha corregido, pero ya puede explotarse.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-3-4"
      },
      {
       "nombre": "DoS / DDoS",
       "desc": "Ataque que satura un servicio con tráfico para que deje de estar disponible.",
       "formula": [],
       "ejemplo": false,
       "id": "basicos-3-5"
      }
     ]
    }
   ]
  },
  {
   "id": "controles",
   "titulo": "Controles de seguridad y de acceso",
   "subtitulo": "Las medidas que reducen el riesgo",
   "grupos": [
    {
     "titulo": "Principios",
     "terminos": [
      {
       "nombre": "Control (contramedida)",
       "desc": "Medida que reduce un riesgo evitando, detectando o corrigiendo un problema.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-0-0"
      },
      {
       "nombre": "Defensa en profundidad",
       "desc": "Usar varias capas de protección para que, si una falla, otra siga protegiendo.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-0-1"
      },
      {
       "nombre": "Privilegio mínimo",
       "desc": "Dar a cada usuario solo los permisos indispensables para hacer su trabajo.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-0-2"
      },
      {
       "nombre": "Confianza cero (zero trust)",
       "desc": "No confiar en nadie por defecto: verificar cada acceso, venga de dentro o fuera de la red.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-0-3"
      }
     ]
    },
    {
     "titulo": "Por su naturaleza",
     "terminos": [
      {
       "nombre": "Administrativo (gerencial)",
       "desc": "Se basa en políticas, procesos y gestión, como reglas, capacitación y análisis de riesgos.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-1-0"
      },
      {
       "nombre": "Técnico (lógico)",
       "desc": "Se implementa con tecnología, como firewall, cifrado, antivirus o contraseñas.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-1-1"
      },
      {
       "nombre": "Operativo",
       "desc": "Lo realizan personas en el día a día: guardias, respaldos y revisión de bitácoras.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-1-2"
      },
      {
       "nombre": "Físico",
       "desc": "Protege instalaciones y equipos con cerraduras, cámaras, credenciales y rejas.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-1-3"
      }
     ]
    },
    {
     "titulo": "Por su función",
     "terminos": [
      {
       "nombre": "Preventivo",
       "desc": "Busca impedir que el incidente ocurra, como un firewall o una cerradura.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-2-0"
      },
      {
       "nombre": "Detectivo",
       "desc": "Descubre un incidente mientras ocurre o después, como un IDS o una cámara.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-2-1"
      },
      {
       "nombre": "Correctivo",
       "desc": "Reduce el daño y restablece el sistema después del incidente, como restaurar un respaldo.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-2-2"
      },
      {
       "nombre": "Disuasivo",
       "desc": "Desanima al atacante antes de intentarlo, como letreros o vigilancia visible.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-2-3"
      },
      {
       "nombre": "Compensatorio",
       "desc": "Alternativa que se usa cuando el control principal no se puede aplicar.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-2-4"
      }
     ]
    },
    {
     "titulo": "Modelos de control de acceso",
     "terminos": [
      {
       "nombre": "DAC",
       "desc": "Control discrecional: el dueño del recurso decide quién puede usarlo, como los permisos de archivos.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-3-0"
      },
      {
       "nombre": "MAC",
       "desc": "Control obligatorio: el sistema da acceso según etiquetas de clasificación como confidencial o secreto.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-3-1"
      },
      {
       "nombre": "RBAC",
       "desc": "Control basado en roles: los permisos se asignan al puesto y no a la persona.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-3-2"
      },
      {
       "nombre": "ABAC",
       "desc": "Control basado en atributos: decide según datos del usuario, del recurso, la hora o la ubicación.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-3-3"
      },
      {
       "nombre": "Basado en reglas",
       "desc": "El acceso depende de reglas generales del sistema, como horarios o listas del firewall.",
       "formula": [],
       "ejemplo": false,
       "id": "controles-3-4"
      }
     ]
    }
   ]
  },
  {
   "id": "politicas",
   "titulo": "Políticas de seguridad",
   "subtitulo": "Las reglas de la organización y de su personal",
   "grupos": [
    {
     "titulo": "Jerarquía documental",
     "terminos": [
      {
       "nombre": "Política de seguridad",
       "desc": "Documento de alto nivel, aprobado por la dirección, que define qué se protege y por qué.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-0"
      },
      {
       "nombre": "Estándar",
       "desc": "Regla obligatoria y específica para cumplir una política, por ejemplo la longitud mínima de contraseña.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-1"
      },
      {
       "nombre": "Procedimiento",
       "desc": "Pasos detallados y en orden para realizar una tarea de seguridad.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-2"
      },
      {
       "nombre": "Guía (lineamiento)",
       "desc": "Recomendación no obligatoria que orienta sobre la mejor forma de actuar.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-3"
      },
      {
       "nombre": "Línea base (baseline)",
       "desc": "Configuración mínima de seguridad que todos los sistemas deben cumplir.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-0-4"
      }
     ]
    },
    {
     "titulo": "Políticas comunes",
     "terminos": [
      {
       "nombre": "Uso aceptable (AUP)",
       "desc": "Reglas sobre lo que el usuario puede y no puede hacer con los recursos de la empresa.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-1-0"
      },
      {
       "nombre": "Política de contraseñas",
       "desc": "Define la complejidad, vigencia y manejo correcto de las contraseñas.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-1-1"
      },
      {
       "nombre": "Escritorio limpio",
       "desc": "No dejar documentos ni sesiones abiertas a la vista al retirarse del lugar de trabajo.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-1-2"
      },
      {
       "nombre": "Acuerdo de confidencialidad (NDA)",
       "desc": "Contrato en el que una persona se compromete a no revelar información de la empresa.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-1-3"
      }
     ]
    },
    {
     "titulo": "Controles de personal",
     "terminos": [
      {
       "nombre": "Separación de funciones",
       "desc": "Dividir una tarea crítica entre varias personas para que nadie pueda cometer fraude solo.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-2-0"
      },
      {
       "nombre": "Rotación de puestos",
       "desc": "Cambiar periódicamente al personal de puesto para detectar abusos y evitar depender de alguien.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-2-1"
      },
      {
       "nombre": "Vacaciones obligatorias",
       "desc": "Obligar al empleado a ausentarse para que otro revise su trabajo y detecte irregularidades.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-2-2"
      },
      {
       "nombre": "Concientización",
       "desc": "Capacitar a los usuarios para reconocer amenazas como el phishing y actuar de forma segura.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-2-3"
      }
     ]
    },
    {
     "titulo": "Gobierno y cumplimiento",
     "terminos": [
      {
       "nombre": "GRC",
       "desc": "Gobierno, riesgo y cumplimiento: alinear la seguridad con los objetivos, riesgos y leyes del negocio.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-3-0"
      },
      {
       "nombre": "Cumplimiento (compliance)",
       "desc": "Demostrar que la organización respeta leyes, normas y políticas internas.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-3-1"
      },
      {
       "nombre": "Debida diligencia",
       "desc": "Investigar y conocer los riesgos antes de tomar una decisión.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-3-2"
      },
      {
       "nombre": "Debido cuidado",
       "desc": "Actuar con responsabilidad para proteger los activos una vez que se conocen los riesgos.",
       "formula": [],
       "ejemplo": false,
       "id": "politicas-3-3"
      }
     ]
    }
   ]
  },
  {
   "id": "marcos",
   "titulo": "Marcos, estándares y normativas",
   "subtitulo": "Referencias externas para organizar la seguridad",
   "grupos": [
    {
     "titulo": "Normas ISO",
     "terminos": [
      {
       "nombre": "ISO/IEC 27001",
       "desc": "Norma internacional certificable para crear y mantener un sistema de gestión de seguridad de la información.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-0-0"
      },
      {
       "nombre": "ISO/IEC 27002",
       "desc": "Guía de buenas prácticas que describe los controles de seguridad que apoyan a la ISO 27001.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-0-1"
      },
      {
       "nombre": "SGSI",
       "desc": "Sistema de gestión de seguridad de la información: ciclo continuo para manejar los riesgos de la información.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-0-2"
      }
     ]
    },
    {
     "titulo": "NIST y CIS",
     "terminos": [
      {
       "nombre": "NIST CSF",
       "desc": "Marco de ciberseguridad organizado en cinco funciones para gestionar riesgos.",
       "formula": [
        "Identificar → Proteger → Detectar → Responder → Recuperar"
       ],
       "ejemplo": false,
       "id": "marcos-1-0"
      },
      {
       "nombre": "NIST SP 800-53",
       "desc": "Catálogo amplio de controles de seguridad y privacidad para sistemas de información.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-1-1"
      },
      {
       "nombre": "NIST SP 800-83",
       "desc": "Guía para prevenir y atender incidentes de malware en equipos de escritorio y laptops.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-1-2"
      },
      {
       "nombre": "CIS Controls",
       "desc": "Lista de 18 controles prácticos y priorizados para defenderse de los ataques más comunes.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-1-3"
      }
     ]
    },
    {
     "titulo": "Leyes y regulaciones",
     "terminos": [
      {
       "nombre": "GDPR (RGPD)",
       "desc": "Reglamento europeo que protege los datos personales y da derechos a sus dueños.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-0"
      },
      {
       "nombre": "PCI DSS",
       "desc": "Estándar obligatorio para quien procesa, guarda o transmite datos de tarjetas de pago.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-1"
      },
      {
       "nombre": "HIPAA",
       "desc": "Ley de Estados Unidos que protege la información médica de los pacientes.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-2"
      },
      {
       "nombre": "CCPA",
       "desc": "Ley de privacidad de California que da al consumidor control sobre sus datos personales.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-2-3"
      }
     ]
    },
    {
     "titulo": "Gobierno de datos",
     "terminos": [
      {
       "nombre": "DAMA-DMBOK",
       "desc": "Guía de buenas prácticas para la gestión y el gobierno de los datos.",
       "formula": [],
       "ejemplo": false,
       "id": "marcos-3-0"
      }
     ]
    }
   ]
  },
  {
   "id": "soluciones",
   "titulo": "Soluciones tecnológicas de ciberseguridad",
   "subtitulo": "Herramientas que ponen en práctica los controles",
   "grupos": [
    {
     "titulo": "Red y perímetro",
     "terminos": [
      {
       "nombre": "Firewall",
       "desc": "Filtra el tráfico entre redes y bloquea lo que no cumple las reglas definidas.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-0-0"
      },
      {
       "nombre": "IDS",
       "desc": "Sistema de detección de intrusos: vigila el tráfico y avisa ante actividad sospechosa.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-0-1"
      },
      {
       "nombre": "IPS",
       "desc": "Sistema de prevención de intrusos: detecta el ataque y además lo bloquea automáticamente.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-0-2"
      },
      {
       "nombre": "VPN",
       "desc": "Túnel cifrado para conectarse de forma segura a una red a través de Internet.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-0-3"
      },
      {
       "nombre": "Segmentación de red",
       "desc": "Dividir la red en zonas separadas, como VLAN o DMZ, para contener los ataques.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-0-4"
      },
      {
       "nombre": "NAC",
       "desc": "Control de acceso a la red: solo deja conectarse a equipos que cumplen las políticas.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-0-5"
      }
     ]
    },
    {
     "titulo": "Monitoreo y endpoint",
     "terminos": [
      {
       "nombre": "SIEM",
       "desc": "Reúne y correlaciona bitácoras de muchos sistemas para detectar incidentes en tiempo real.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-1-0"
      },
      {
       "nombre": "SOC",
       "desc": "Centro de operaciones de seguridad: equipo que vigila y responde a incidentes de forma continua.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-1-1"
      },
      {
       "nombre": "Antivirus / antimalware",
       "desc": "Software que detecta, bloquea y elimina programas maliciosos en el equipo.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-1-2"
      },
      {
       "nombre": "EDR",
       "desc": "Herramienta que registra la actividad de cada equipo y responde automáticamente ante amenazas.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-1-3"
      },
      {
       "nombre": "Gestión de parches",
       "desc": "Instalar actualizaciones a tiempo para cerrar vulnerabilidades conocidas.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-1-4"
      }
     ]
    },
    {
     "titulo": "Identidad y criptografía",
     "terminos": [
      {
       "nombre": "IAM",
       "desc": "Gestión de identidades y accesos: administra cuentas, roles y permisos de los usuarios.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-2-0"
      },
      {
       "nombre": "MFA",
       "desc": "Autenticación multifactor: pide dos o más pruebas, como contraseña y un código en el celular.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-2-1"
      },
      {
       "nombre": "Cifrado",
       "desc": "Convierte datos legibles en ilegibles con una clave, para que solo el autorizado pueda leerlos.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-2-2"
      },
      {
       "nombre": "Función hash",
       "desc": "Genera una huella única de los datos; si cambian aunque sea un poco, cambia el hash.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-2-3"
      },
      {
       "nombre": "Firma digital",
       "desc": "Usa criptografía para probar quién envió un mensaje y que no fue alterado.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-2-4"
      },
      {
       "nombre": "Certificado digital (PKI)",
       "desc": "Documento electrónico, emitido por una autoridad confiable, que une una llave pública con su dueño.",
       "formula": [],
       "ejemplo": false,
       "id": "soluciones-2-5"
      }
     ]
    }
   ]
  },
  {
   "id": "riesgos",
   "titulo": "Análisis y gestión de riesgos",
   "subtitulo": "Medir, priorizar y decidir qué hacer con cada riesgo",
   "grupos": [
    {
     "titulo": "Proceso",
     "terminos": [
      {
       "nombre": "Gestión de riesgos",
       "desc": "Proceso continuo para identificar, evaluar, tratar y vigilar los riesgos de la organización.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-0"
      },
      {
       "nombre": "Evaluación de riesgos",
       "desc": "Identificar amenazas y vulnerabilidades de cada activo y estimar su probabilidad e impacto.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-1"
      },
      {
       "nombre": "Análisis cualitativo",
       "desc": "Clasifica los riesgos con escalas descriptivas (bajo, medio, alto) según probabilidad e impacto.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-2"
      },
      {
       "nombre": "Análisis cuantitativo",
       "desc": "Asigna valores en dinero a los riesgos para calcular las pérdidas esperadas.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-3"
      },
      {
       "nombre": "Matriz de riesgos",
       "desc": "Tabla de probabilidad contra impacto que ayuda a priorizar los riesgos con colores.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-4"
      },
      {
       "nombre": "Registro de riesgos",
       "desc": "Documento que enlista cada riesgo con su dueño, nivel y plan de tratamiento.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-5"
      },
      {
       "nombre": "Dueño del riesgo",
       "desc": "Persona responsable de vigilar un riesgo y decidir cómo tratarlo.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-0-6"
      }
     ]
    },
    {
     "titulo": "Fórmulas del análisis cuantitativo",
     "terminos": [
      {
       "nombre": "AV (valor del activo)",
       "desc": "Cuánto dinero vale el activo, según su costo de reposición e importancia.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-1-0"
      },
      {
       "nombre": "EF (factor de exposición)",
       "desc": "Porcentaje del valor del activo que se perdería si ocurre el evento.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-1-1"
      },
      {
       "nombre": "SLE (pérdida esperada única)",
       "desc": "Dinero que se pierde en un solo incidente.",
       "formula": [
        "SLE = AV × EF"
       ],
       "ejemplo": false,
       "id": "riesgos-1-2"
      },
      {
       "nombre": "ARO (tasa anual de ocurrencia)",
       "desc": "Cuántas veces al año se espera el evento; una vez cada 4 años equivale a 0.25.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-1-3"
      },
      {
       "nombre": "ALE (pérdida anual esperada)",
       "desc": "Pérdida esperada por año; sirve para decidir cuánto vale la pena invertir en controles.",
       "formula": [
        "ALE = SLE × ARO"
       ],
       "ejemplo": false,
       "id": "riesgos-1-4"
      },
      {
       "nombre": "Ejemplo: robo de servidor",
       "desc": "AV = $20,000, EF = 70 %, ARO = 0.25 (1 robo cada 4 años).",
       "formula": [
        "SLE = $14,000  ·  ALE = $3,500 al año"
       ],
       "ejemplo": true,
       "id": "riesgos-1-5"
      }
     ]
    },
    {
     "titulo": "Tipos de riesgo",
     "terminos": [
      {
       "nombre": "Riesgo inherente",
       "desc": "Nivel de riesgo que existe antes de aplicar cualquier control.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-2-0"
      },
      {
       "nombre": "Riesgo residual",
       "desc": "Riesgo que sigue existiendo aun después de aplicar los controles.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-2-1"
      },
      {
       "nombre": "Apetito de riesgo",
       "desc": "Cantidad de riesgo que la organización está dispuesta a aceptar para lograr sus metas.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-2-2"
      }
     ]
    },
    {
     "titulo": "Tratamiento del riesgo",
     "terminos": [
      {
       "nombre": "Evitar",
       "desc": "Eliminar o dejar de hacer la actividad que genera el riesgo.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-3-0"
      },
      {
       "nombre": "Mitigar (reducir)",
       "desc": "Aplicar controles para bajar la probabilidad o el impacto del riesgo.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-3-1"
      },
      {
       "nombre": "Transferir",
       "desc": "Pasar el impacto económico a un tercero, como una aseguradora o un proveedor.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-3-2"
      },
      {
       "nombre": "Aceptar",
       "desc": "Asumir el riesgo conscientemente porque controlarlo cuesta más que el daño posible.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-3-3"
      }
     ]
    },
    {
     "titulo": "Gestión de vulnerabilidades",
     "terminos": [
      {
       "nombre": "Escaneo de vulnerabilidades",
       "desc": "Revisión automática de sistemas para encontrar debilidades conocidas.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-4-0"
      },
      {
       "nombre": "Prueba de penetración (pentest)",
       "desc": "Ataque simulado y autorizado para comprobar si las vulnerabilidades realmente pueden explotarse.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-4-1"
      },
      {
       "nombre": "CVE",
       "desc": "Identificador público y único que se asigna a cada vulnerabilidad conocida.",
       "formula": [],
       "ejemplo": false,
       "id": "riesgos-4-2"
      }
     ]
    }
   ]
  },
  {
   "id": "dlp",
   "titulo": "Prevención de pérdida de datos (DLP)",
   "subtitulo": "Evitar que la información sensible salga de donde debe estar",
   "grupos": [
    {
     "titulo": "Concepto",
     "terminos": [
      {
       "nombre": "DLP",
       "desc": "Estrategia, procesos y herramientas que evitan que los datos sensibles se pierdan, roben o usen mal.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-0-0"
      },
      {
       "nombre": "Filtración (data breach)",
       "desc": "Incidente en el que alguien no autorizado logra acceder a información sensible.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-0-1"
      },
      {
       "nombre": "Fuga de datos (data leak)",
       "desc": "Exposición accidental de datos sensibles por un error técnico o humano.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-0-2"
      },
      {
       "nombre": "Exfiltración",
       "desc": "Robo de datos: el atacante copia o saca la información hacia un lugar que él controla.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-0-3"
      },
      {
       "nombre": "Proceso DLP",
       "desc": "Cuatro pasos que se repiten de forma continua.",
       "formula": [
        "Identificar y clasificar → Monitorear → Proteger → Documentar"
       ],
       "ejemplo": false,
       "id": "dlp-0-4"
      }
     ]
    },
    {
     "titulo": "Estados de los datos",
     "terminos": [
      {
       "nombre": "Datos en reposo",
       "desc": "Datos almacenados en discos, bases de datos o la nube.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-0"
      },
      {
       "nombre": "Datos en tránsito",
       "desc": "Datos que viajan por la red; son los más expuestos a ser interceptados.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-1"
      },
      {
       "nombre": "Datos en uso",
       "desc": "Datos que se están abriendo, editando o procesando en ese momento.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-1-2"
      }
     ]
    },
    {
     "titulo": "Tipos de datos",
     "terminos": [
      {
       "nombre": "Clasificación de datos",
       "desc": "Ordenar la información según su sensibilidad para saber cuánto protegerla.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-2-0"
      },
      {
       "nombre": "PII",
       "desc": "Información de identificación personal: datos que identifican a alguien, como nombre, CURP o correo.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-2-1"
      },
      {
       "nombre": "Propiedad intelectual",
       "desc": "Creaciones valiosas de la empresa, como diseños, código, fórmulas o patentes.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-2-2"
      },
      {
       "nombre": "Estructurados / no estructurados",
       "desc": "Los primeros tienen formato fijo en bases de datos; los segundos son documentos, imágenes o correos.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-2-3"
      },
      {
       "nombre": "Shadow data / shadow IT",
       "desc": "Datos y herramientas que se usan fuera del control del área de TI.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-2-4"
      }
     ]
    },
    {
     "titulo": "Tipos de DLP",
     "terminos": [
      {
       "nombre": "DLP de red",
       "desc": "Vigila los datos que entran, salen y se mueven dentro de la red.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-3-0"
      },
      {
       "nombre": "DLP de endpoint",
       "desc": "Supervisa laptops, celulares y servidores, y bloquea acciones como copiar a una USB.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-3-1"
      },
      {
       "nombre": "DLP en la nube",
       "desc": "Clasifica, monitorea y cifra los datos guardados en servicios en la nube.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-3-2"
      }
     ]
    },
    {
     "titulo": "Técnicas de detección",
     "terminos": [
      {
       "nombre": "Huella digital de datos",
       "desc": "Reconoce archivos sensibles por sus etiquetas, metadatos o valor hash.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-4-0"
      },
      {
       "nombre": "Coincidencia de patrones",
       "desc": "Detecta formatos conocidos, como números de tarjeta o CURP, dentro del contenido.",
       "formula": [],
       "ejemplo": false,
       "id": "dlp-4-1"
      }
     ]
    }
   ]
  },
  {
   "id": "continuidad",
   "titulo": "Continuidad del negocio y recuperación (BCP / DRP)",
   "subtitulo": "Seguir operando y recuperarse tras un desastre",
   "grupos": [
    {
     "titulo": "Planes",
     "terminos": [
      {
       "nombre": "BCP",
       "desc": "Plan de continuidad del negocio: mantiene las operaciones esenciales de toda la empresa durante una crisis.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-0-0"
      },
      {
       "nombre": "DRP",
       "desc": "Plan de recuperación ante desastres: restaura los sistemas de TI y los datos; forma parte del BCP.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-0-1"
      },
      {
       "nombre": "BCDR",
       "desc": "Gestión conjunta de la continuidad del negocio y la recuperación ante desastres.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-0-2"
      },
      {
       "nombre": "BIA",
       "desc": "Análisis de impacto al negocio: identifica procesos críticos y el daño de detenerlos; es el punto de partida.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-0-3"
      },
      {
       "nombre": "IMP",
       "desc": "Plan de gestión de incidentes: atiende un incidente de seguridad antes de que se convierta en crisis.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-0-4"
      },
      {
       "nombre": "BRP",
       "desc": "Plan de reanudación del negocio: cómo retomar las operaciones comerciales y la cadena de suministro.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-0-5"
      },
      {
       "nombre": "COOP",
       "desc": "Plan de continuidad de operaciones: sostiene las funciones esenciales durante interrupciones largas.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-0-6"
      },
      {
       "nombre": "OEP",
       "desc": "Plan de emergencia para ocupantes: protege a empleados y visitantes, por ejemplo con evacuaciones.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-0-7"
      },
      {
       "nombre": "Plan de comunicación",
       "desc": "Define cómo informar a empleados, clientes, proveedores y medios durante una crisis.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-0-8"
      }
     ]
    },
    {
     "titulo": "Métricas",
     "terminos": [
      {
       "nombre": "RTO",
       "desc": "Tiempo objetivo de recuperación: tiempo máximo que un proceso puede estar detenido.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-1-0"
      },
      {
       "nombre": "RPO",
       "desc": "Punto objetivo de recuperación: cantidad máxima de datos, medida en tiempo, que se puede perder.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-1-1"
      },
      {
       "nombre": "MTBF",
       "desc": "Tiempo medio entre fallas: cuánto funciona un equipo, en promedio, antes de fallar.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-1-2"
      },
      {
       "nombre": "MTTR",
       "desc": "Tiempo medio de reparación: cuánto tarda, en promedio, un equipo en volver a funcionar.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-1-3"
      }
     ]
    },
    {
     "titulo": "Estrategias de recuperación",
     "terminos": [
      {
       "nombre": "Respaldo (backup)",
       "desc": "Copia periódica de los datos guardada en otro lugar para poder restaurarlos.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-2-0"
      },
      {
       "nombre": "Sitio caliente",
       "desc": "Instalación alterna equipada y lista para operar casi de inmediato; es la más costosa.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-2-1"
      },
      {
       "nombre": "Sitio tibio",
       "desc": "Instalación con parte del equipo; necesita algo de tiempo para empezar a operar.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-2-2"
      },
      {
       "nombre": "Sitio frío",
       "desc": "Espacio con energía y conexión básicas, pero sin equipos; es el más lento y barato.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-2-3"
      },
      {
       "nombre": "Alta disponibilidad",
       "desc": "Duplicar componentes para que el servicio siga funcionando aunque uno falle.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-2-4"
      },
      {
       "nombre": "Recuperación virtualizada",
       "desc": "Usar máquinas virtuales que arrancan en minutos para recuperar aplicaciones críticas.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-2-5"
      }
     ]
    },
    {
     "titulo": "Gestión del plan",
     "terminos": [
      {
       "nombre": "Inventario de activos",
       "desc": "Lista de activos clasificados como críticos, importantes o sin importancia para la operación.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-3-0"
      },
      {
       "nombre": "Roles del plan",
       "desc": "Informante de incidentes, supervisor del DRP y gestor de activos coordinan la respuesta.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-3-1"
      },
      {
       "nombre": "Pruebas y simulacros",
       "desc": "Ensayos periódicos que confirman que el plan funciona y que el personal sabe qué hacer.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-3-2"
      },
      {
       "nombre": "Resiliencia",
       "desc": "Capacidad de la empresa para adaptarse y seguir operando ante cualquier adversidad.",
       "formula": [],
       "ejemplo": false,
       "id": "continuidad-3-3"
      }
     ]
    }
   ]
  }
 ],
 "enlaces": [
  {
   "de": "cia-0-0",
   "a": "soluciones-2-2"
  },
  {
   "de": "cia-0-0",
   "a": "dlp-0-0"
  },
  {
   "de": "cia-0-1",
   "a": "soluciones-2-3"
  },
  {
   "de": "cia-0-1",
   "a": "soluciones-2-4"
  },
  {
   "de": "cia-0-2",
   "a": "continuidad-0-0"
  },
  {
   "de": "cia-0-2",
   "a": "continuidad-2-4"
  },
  {
   "de": "cia-1-0",
   "a": "soluciones-2-1"
  },
  {
   "de": "cia-1-1",
   "a": "controles-3-2"
  },
  {
   "de": "cia-1-2",
   "a": "soluciones-1-0"
  },
  {
   "de": "cia-1-3",
   "a": "soluciones-2-4"
  },
  {
   "de": "basicos-0-2",
   "a": "riesgos-1-0"
  },
  {
   "de": "basicos-1-1",
   "a": "riesgos-4-0"
  },
  {
   "de": "basicos-1-2",
   "a": "riesgos-0-0"
  },
  {
   "de": "basicos-1-5",
   "a": "continuidad-0-4"
  },
  {
   "de": "basicos-2-1",
   "a": "dlp-0-3"
  },
  {
   "de": "basicos-3-0",
   "a": "marcos-1-2"
  },
  {
   "de": "basicos-3-1",
   "a": "continuidad-2-0"
  },
  {
   "de": "basicos-3-2",
   "a": "politicas-2-3"
  },
  {
   "de": "basicos-3-4",
   "a": "soluciones-1-4"
  },
  {
   "de": "basicos-3-5",
   "a": "cia-0-2"
  },
  {
   "de": "controles-0-0",
   "a": "riesgos-3-1"
  },
  {
   "de": "controles-0-3",
   "a": "soluciones-2-0"
  },
  {
   "de": "controles-1-0",
   "a": "politicas-0-0"
  },
  {
   "de": "controles-1-1",
   "a": "soluciones-0-0"
  },
  {
   "de": "controles-2-1",
   "a": "soluciones-0-1"
  },
  {
   "de": "politicas-1-1",
   "a": "soluciones-2-1"
  },
  {
   "de": "politicas-1-3",
   "a": "cia-0-0"
  },
  {
   "de": "politicas-2-3",
   "a": "basicos-3-3"
  },
  {
   "de": "politicas-3-0",
   "a": "riesgos-0-0"
  },
  {
   "de": "politicas-3-1",
   "a": "marcos-2-0"
  },
  {
   "de": "marcos-1-1",
   "a": "controles-0-0"
  },
  {
   "de": "marcos-2-0",
   "a": "dlp-2-1"
  },
  {
   "de": "marcos-3-0",
   "a": "dlp-2-0"
  },
  {
   "de": "soluciones-1-2",
   "a": "basicos-3-0"
  },
  {
   "de": "soluciones-1-4",
   "a": "basicos-1-1"
  },
  {
   "de": "soluciones-2-0",
   "a": "controles-3-2"
  },
  {
   "de": "riesgos-0-1",
   "a": "basicos-1-0"
  },
  {
   "de": "riesgos-4-1",
   "a": "basicos-1-4"
  },
  {
   "de": "dlp-1-1",
   "a": "soluciones-0-3"
  },
  {
   "de": "dlp-4-0",
   "a": "soluciones-2-3"
  },
  {
   "de": "continuidad-0-3",
   "a": "riesgos-0-1"
  },
  {
   "de": "continuidad-3-0",
   "a": "basicos-0-2"
  }
 ]
};
