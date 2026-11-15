//TP#Final — Video Juego Web [Etapa 2]

let objJuego;
let imgInicio;
let imgLadrillo;
let imgDetective = [];
let imgAsesino = [];
let imgSuelo;

function preload() {
  // imgLadrillo = loadImage("ladrillo.jpg");
  // imgInicio = loadImage("fondo_callejon.png");
  imgSuelo = loadImage("assets/Suelo.png");
  
  // Detective
  imgDetective[0] = loadImage("assets/detective_0.png");
  imgDetective[1] = loadImage("assets/detective_1.png");
  
  // Asesino
  imgAsesino[0] = loadImage("assets/asesino_0.png");
  imgAsesino[1] = loadImage("assets/asesino_1.png");
}

function setup() {
  createCanvas(800, 400);
  objJuego = new Juego(imgLadrillo, imgSuelo, imgDetective, imgAsesino);
}

function draw() {
  background(210);
  objJuego.dibujar();
}

function mousePressed() {
  objJuego.manejarClicks(); // Clicks en los botones de inicio y reinicio
}
