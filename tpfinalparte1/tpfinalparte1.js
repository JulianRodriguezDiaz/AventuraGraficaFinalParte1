//Pude hacer los botones y agregar detalles minimos, 
//quedaria copiar y pegar llamar funciones, etc y estaria lo principal
//dejamos sonido para lo ultimo :)
let imgFondo;
let framesLluvia = [];
let totalFramesLluvia = 8;
let frameActual = 0;
let contadorFrames = 0;
let imgLogo;
let imgInicio;
let imgOficina;
let imgCuadroTexto; 
let imgMarcoPersonaje;
let imgFondoNegro;
let imgBodega;
let imgCuadroDecision;
let imgDepartamento;
let imgDiscoteca;
let imgCallejon;
let imgFinalMalo;
let imgFinalBueno;
let imgAlmacen;
let imgAlmacenEnLlamas;
let imgFinalNeutral;

let maxTexto = 0;
let indiceTexto = 0;

// Esto es para la maquinita de estados
let estadoPantalla = 0;

//Esto es para sonidos
let ambienteDiscoteca;
let lluvia;
let risa;
let pasos;
let notaPianoSuspenso;
let notaPianoDross;
let latidos;

function preload() {
  //Aca se cargan las imagenes.
  imgInicio = loadImage('assets/start.png');
  imgFondo = loadImage('assets/fondo_ciudad.jpg');
  imgLogo = loadImage('assets/logo.png'); 
  imgOficina = loadImage('assets/fondo_oficina.jpg'); 
  imgCuadroTexto = loadImage('assets/cuadro_texto.png');
  imgMarcoPersonaje = loadImage('assets/marco_personaje.png');
  imgFondoNegro = loadImage('assets/fondo_negro.png');
  imgBodega = loadImage('assets/fondo_bodega.jpg');
  imgCuadroDecision = loadImage('assets/cuadro_decision.png');
  imgDepartamento = loadImage('assets/fondo_departamento.png');
  imgDiscoteca = loadImage('assets/fondo_discoteca.png');
  imgCallejon = loadImage('assets/fondo_callejon.png');
  imgFinalMalo = loadImage('assets/final_malo.jpg');   
  imgFinalBueno = loadImage('assets/final_bueno.jpg');
  imgAlmacen = loadImage('assets/fondo_almacen.png');
  imgAlmacenEnLlamas = loadImage('assets/fondo_almacen_en_llamas.png');
  imgFinalNeutral = loadImage('assets/final_neutral.jpg');
  
  //animación lluvia sprites.
  for (let i = 0; i < totalFramesLluvia; i++) {
    framesLluvia[i] = loadImage('assets/lluvia_' + i + '.png');
  }
  
  //Aca se cargan los sonidos.
  ambienteDiscoteca = loadSound('assets/323255__scale75__hip-hop_liquid.wav');
  lluvia = loadSound('assets/613852__suso_ramallo__rain-oc818.wav');
  risa = loadSound('assets/366176__nanakisan__evil-laugh-06-gen-4.wav');
  pasos = loadSound('assets/508708__mgc5066__steps.wav');
  notaPianoSuspenso = loadSound('assets/648909__tusic99__reversed-piano-note-with-clean-no-reverb.wav');
  notaPianoDross = loadSound('assets/sonidoPianoDross.mp3');
  latidos = loadSound('assets/418866__name__heartbeat-loop.wav');
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(0);
  
  //Maquinita de estados. Se vuelve a llamar la funcion
  maquinaEstados();
}
