//TP#Final — Video Juego Web [Etapa 2]

let objJuego;
let imgInicio;
let imgLadrillo;
let imgDetective = [];
let imgAsesino = [];
let imgSuelo;
let sonidoMenu;
let sonidoJuego;
let sonidoVictoria;
let sonidoDerrota;
let audioActivado;
let tipografia;

function preload() {
  // imgLadrillo = loadImage("ladrillo.jpg");
  imgInicio = loadImage("assets/fondo_callejon.png");
  imgSuelo = loadImage("assets/Suelo.png");
  tipografia = loadFont("assets/RomanAntique.ttf");
  
  // Detective
  imgDetective[0] = loadImage("assets/detective_0.png");
  imgDetective[1] = loadImage("assets/detective_1.png");
  
  // Asesino
  imgAsesino[0] = loadImage("assets/asesino_0.png");
  imgAsesino[1] = loadImage("assets/asesino_1.png");
  
  //sonido
  sonidoMenu = loadSound("assets/789772__dan2008__calm-menu-music-loopable-lo-fi.wav");
  sonidoJuego = loadSound("assets/507770__bloodpixelhero__your-last-game.wav");
  sonidoVictoria = loadSound("assets/843046__silverillusionist__victory-fanfare-8-bit-thunder-4.wav");
  sonidoDerrota = loadSound("assets/76376__deleted_user_877451__game_over.wav");
  audioActivado = false;
}

function setup() {
  createCanvas(800, 400);
  objJuego = new Juego(imgLadrillo, imgSuelo, imgDetective, imgAsesino, imgInicio);
}

function draw() {
  background(210);
  objJuego.dibujar();
}

function mousePressed() {
  //para que suene el sonido de menu
  if (!audioActivado) {
    userStartAudio();
    sonidoMenu.loop();
    audioActivado = true;
    return;
  }
  objJuego.manejarClicks(); // Clicks en los botones de inicio y reinicio
}
