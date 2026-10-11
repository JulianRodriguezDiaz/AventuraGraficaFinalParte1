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

//Aca se cargan las imagenes.
function preload() {
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

  for (let i = 0; i < totalFramesLluvia; i++) {
    framesLluvia[i] = loadImage('assets/lluvia_' + i + '.png');
  }
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(0);
  
  //Maquinita de estados. Se vuelve a llamar la funcion
  maquinaEstados();
}
