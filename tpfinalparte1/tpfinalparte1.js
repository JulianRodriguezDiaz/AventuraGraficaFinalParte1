let imgFondo;
let framesLluvia = [];
let totalFramesLluvia = 8;
let frameActual = 0;
let contadorFrames = 0;
let imgLogo;
let imgInicio;
let imgOficina;
let imgAlmacen;
let imgAlmacenLlamas;
let imgDiscoteca;
let imgBodega;
let imgCallejon;
let imgDepa;

// Esto es para maquina de Estados
let estadoPantalla = 0;

// Aca se cargan las imagenes
function preload() {
  imgInicio = loadImage('assets/start.png');
  imgFondo = loadImage('assets/fondo_ciudad.jpg');
  imgLogo = loadImage('assets/logo.png'); 
  imgOficina = loadImage('assets/fondo_oficina.jpg'); 
  imgAlmacen = loadImage ('assets/fondo_almacen.png');
  imgAlmacenLlamas = loadImage ('assets/fondo_almacen_en_llamas.png');
  imgDiscoteca = loadImage ('assets/fondo_discoteca.png');
  imgBodega = loadImage ('assets/fondo_bodega.jpg');
  imgCallejon = loadImage ('assets/fondo_callejón.png');
  imgDepa = loadImage ('assets/fondo_departamento.png');

  for (let i = 0; i < totalFramesLluvia; i++) {
    framesLluvia[i] = loadImage('assets/lluvia_' + i + '.png');
  }
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(0);

//Maquinita de estados
  if (estadoPantalla == 0) {
    dibujarPantallaInicio();
  } else if (estadoPantalla == 1) {
    dibujarEscena1();
  }
}

//funcion para todo lo que es la primera pantalla y que este ordenadito
function dibujarPantallaInicio() {
//fondo y lluvia solo en pantalla 0
  image(imgFondo, 0, 0);

  contadorFrames++;
  if (contadorFrames >= 4) {
    frameActual = (frameActual + 1) % totalFramesLluvia;
    contadorFrames = 0;
  }

  if (framesLluvia[frameActual]) {
    image(framesLluvia[frameActual], 0, 0);
  }

//esto seria el logo
  imageMode(CENTER);
  image(imgLogo, width / 2, 120);
  imageMode(CORNER);

//esto seria el boton
  image(imgInicio, 300, 280, 200, 100);
}

//Pasa a otra pantalla en este caso Oficina
function dibujarEscena1() {
  image(imgOficina, 0, 0, width, height);
}

//Boton
function mousePressed() {
  if (estadoPantalla == 0) {

    if (mouseX > 300 && mouseX < 500 && mouseY > 280 && mouseY < 380) {
      estadoPantalla = 1;
    }
  }
}
