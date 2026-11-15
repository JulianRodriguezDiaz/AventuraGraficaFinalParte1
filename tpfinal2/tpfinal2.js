//TP#Final — Video Juego Web [Etapa 2]
//link video: 

//variables
let objJuego;
let imgInicio;
let imgLadrillo;
let tipografía;

function preload(){
  //imgLadrillo = loadImage("ladrillo.jpg");
  //imgInicio = loadImage("fondo_callejon.png");
 tipografía = loadFont("/assets/RomanAntique.ttf");
  
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
