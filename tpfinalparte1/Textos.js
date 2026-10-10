// Arreglos con textos oficina
let dialogoOficina = [ 
  "La lluvia golpea con fuerza la ventana de la oficina. Esa tranquilidad no iba a durar mucho.",
  "Otro cigarrillo que se apaga... Esta ciudad nunca descansa, y yo tampoco.",
  "(Suena el telefono sobre el escritorio).",
  "¿Marquez al habla? Decime que son buenas noticias...",
  "Una voz agitada al otro lado de la linea confirma lo peor: Hallaron un cuerpo cerca del faro.",
  "Maldita sea, en unos momentos estaré allí.",
  "No terminaré hasta que este maldito esté tras las rejas..."
];
let nombresOficina = [
  "NARRADOR",
  "MARQUEZ",
  "NARRADOR",
  "MARQUEZ",
  "NARRADOR",
  "MARQUEZ",
  "MARQUEZ"
];

// Arreglos con textos de la bodega
let dialogoBodega = [
  "(Marquez llega a la ubicación de la víctima)",
  "Llegué. El olor a humedad y metal oxidado es insoportable.",
  "Ahí está... Lucas. La silueta de tiza y los marcadores de evidencia cuentan una historia que debo descifrar.",
  "Muy bien, tendré que empezar a averiguar qué ocurrió aquí.",
  "Entre las pertenencias de Lucas encontré la dirección de su novio Eric y la tarjeta de la discoteca, dónde trabajaba como barman...",
  "Tengo poco tiempo. ¿Por dónde me conviene empezar la investigación?"
];
let nombresBodega = [
  "NARRADOR",
  "MARQUEZ",
  "MARQUEZ",
  "MARQUEZ",
  "MARQUEZ",
  "MARQUEZ",
];

 // Arreglos con textos de departamento
let dialogoDepartamento = [
  "(Marquez golpea la puerta del departamento de Eric. Tardan en abrir.)",
  "Buenas noches, ¿En qué puedo ayudarlo?",
  "Soy Marquez, el detective a cargo de la investigación de la muerte de su pareja. Vengo a hacerle unas preguntas.",
  "Si adelante, pase por favor.",
  "(Marquez entra al departamento, es pequeño pero acogedor.)",
  "¿Podrías contarme un poco sobre Lucas antes de ir al trabajo?",
  "Sí. Yo estaba trabajando en la mesa del comedor acá en casa y él estaba a mi lado escribiendo en su diario íntimo...",
  "A las 11 pm, él avisó que iba a trabajar, se preparó y se marchó. A las 2 am le mandé mensaje porque me estaba empezando a preocupar.",
  "Al no recibir respuesta alguna no dormí en toda la noche esperando a que regrese, hasta que me llamaron y me dijeron que lo hallaron muerto...",
  "Comprendo, y siento mucho su pérdida. Resolveré este caso para hacer justicia. Sino es molestia, me gustaría echarle un vistazo al diario íntimo.",
  "(Eric asiente y va a la habitación a buscarlo. Al encontralo, vuelve con Marquez y se lo da, donde empieza a leer detenidamente las páginas tratando de buscar alguna pista.)",
  "(Marquez descubre algo: en las páginas encuentra un código morse secreto que dice ALMACEN JAIME.)",
  "Eric, ¿Podrías decirme un poco sobre el Almacen Jaime?",
  "Es en donde trabajabamos los dos antes de que cerrara permanentemente, ahora por lo que entiendo está abandonado.",
  "Bien, iré a investigar a ese lugar. Cualquier cosa que averigues no dudes en avisar, adiós.",
  "(Marquez se dirige al almacen abandonado.)"
];

let nombresDepartamento = [
  "NARRADOR",
  "ERIC BENJAMÍN",
  "MARQUEZ",
  "ERIC BENJAMÍN",
  "NARRADOR",
  "MARQUEZ",
  "ERIC BENJAMÍN",
  "ERIC BENJAMÍN",
  "ERIC BENJAMÍN",
  "MARQUEZ",
  "NARRADOR",
  "NARRADOR",
  "MARQUEZ",
  "ERIC BENJAMÍN",
  "MARQUEZ",
  "NARRADOR"
]

 //Arreglos Discoteca
let dialogoDiscoteca = [
  "(Marquez se dirige a la discoteca, donde hay gente bailando en la pista ignorando los hechos. Va a la barra.)",
  "(Marquez reconoce al barman Yahir, quien se sabe que fue la última persona que vió e interactuó con la víctima.)",
  "Buenas noches Yahir, soy Marquez, el detective a cargo de la investigación de la muerte de Lucas. Vengo a hacerle unas preguntas.",
  "O-Oh Buenas noches...no pense que vendría a investigar sabiendo que el lugar está lleno de gente...",
  "Bueno, eso no es impedimento para avanzar en la investigación. Bueno Yahir, ¿Podrías contarme un poco sobre Lucas cuando vino acá?",
  "E-este sí...él vino porque dijo que había encontrado otro empleo y que renunciaría. Nos quedamos conversando un poco, le di su liquidación y se fue...",
  "Bien...¿Y no le comentó a dónde se dirigía exactamente?",
  "E-em no, no recuerdo que haya mencionado algo al respecto.",
  "Entonces...¿Cómo explica que el cuerpo de Lucas haya aparecido en la bodega de este lugar si se supone que se había ido?.",
  "¡Discúlpeme pero me ofende muchísimo que esté dudando de mí cuando le digo que no se nada!",
  "Además aún no tienen muchas pistas sobre cómo lo asesinaron siquiera, no descubrieron la pistola...",
  "(Marquez se da cuenta de dos cosas: el nerviosismo de Yahir y que él nunca mencionó respecto al objeto/arma utilizada para asesinar a Lucas.)",
  "Tiene razón Yahir. Aún no tenemos la pista respecto al objeto/arma...",
  "¿V-Vio? Se lo dije, no tienen nada contra de m-mí...y con su permiso, seguiré trabajando.",
  "(Yahir va a atender a dos clientes, Marquez aprovecha la informacíon para regresar a la bodega y buscar pistas de la pistola.)"
];

let nombresDiscoteca = [
  "NARRADOR",
  "NARRADOR",
  "MARQUEZ",
  "YAHIR",
  "MARQUEZ",
  "YAHIR",
  "MARQUEZ",
  "YAHIR",
  "MARQUEZ",
  "YAHIR",
  "YAHIR",
  "NARRADOR",
  "MARQUEZ",
  "YAHIR",
  "NARRADOR"
];
 //Arreglos bodega 2
let dialogoSegundaBodega = [
  "Volví a la bodega... Tengo que revisar cada rincón otra vez. No se me puede escapar nada.",
  "Estudio los detalles que pasé por alto la primera vez... ¡Acá hay algo más!",
  "(Marquez descubre la pistola en la bolsa de basura que estaba cerca del cuerpo y rastros de sangre muy pequeños que dan al callejón del faro.)",
  "Con estas nuevas pistas, ahora sí sé exactamente hacia dónde tengo que ir.",
];

let nombresSegundaBodega = [
  "MARQUEZ",
  "MARQUEZ",
  "NARRADOR",
  "MARQUEZ"
];
 //Arreglos Callejon
let dialogoCallejon = [
  "El callejón está oscuro y silencioso. Los vidrios rotos crujen bajo los zapatos del detective.",
  "Acá es donde las pistas de la bodega finalmente cobran sentido. Hay marcas recientes en la pared.",
  "Las pistas finalmente me guían hasta aquí. Tendré que averiguar qué es lo que esconde este Calejón tan oscuro...",
  "(Pasos desde la oscuridad).",
  "hee hee hee.",
  "¿Eh?, ¿Quién anda ahí?.",
  "¡TU PEOR PESADILLAAAAAAAA!.",
  "(Yahir corre hacia el detective con un bate para atacarlo).",
  "¡DETENTE! (¡Oh por Dios! ¿Qué hago?)."
];

let nombresCallejon = [
  "NARRADOR",
  "NARRADOR",
  "MARQUEZ",
  "???",
  "???",
  "MARQUEZ",
  "YAHIR",
  "NARRADOR",
  "MARQUEZ"
];
 //Arreglos final bueno
 let dialogoFinalBueno = [
 "FINAL BUENO: Marquez ganó el combate contra Yahir. Finalmente, el asesino es atrapado y llevado a juicio, donde se descubre que Yahir fue el asesino de Lucas".
 
];
 let nombresFinalBueno = [
 "NARRADOR"
 ]
  //Arreglos final malo
 let dialogoFinalMalo = [
 "FINAL MALO: Marquez corre desesperado buscando una salida. El aire le falta y las piernas no le responden más. En un segundo de debilidad, Yahir lo sorprende por la espalda y lo ataca brutalmente. El asesino acaba con el detective y escapa impune, dejando atrás la escena del crimen."
 
];
 let nombresFinalMalo = [
 "NARRADOR"
 ]
 
 
