//TP#Final — Video Juego Web [Etapa 2]
//link video: 

//variables
let objJuego;

function preload(){
  
}

function setup() {
  createCanvas(800,400);
  objJuego = new Juego();
}


function draw() {
  objJuego.dibujar();
}
