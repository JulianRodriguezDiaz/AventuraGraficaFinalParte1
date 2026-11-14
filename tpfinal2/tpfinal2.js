//TP#Final — Video Juego Web [Etapa 2]
//link video: 

//variables
let objJuego;
let imgInicio;
let imgLadrillo;

function preload(){
  //imgLadrillo = loadImage("ladrillo.jpg");
  //imgInicio = loadImage("fondo_callejon.png");
 
  
}

function setup() {
  createCanvas(800,400);
  objJuego = new Juego(imgLadrillo);
}


function draw() {
  background(210);
  objJuego.dibujar();
}

function mousePressed() {
  objJuego.manejarClicks(); // clicks en los botones de inicio y reinicio
}
