class Juego {
  constructor() {
    this.estado = 0; 
    this.personaje = null;
    this.enemigo = null;
    this.laberinto = null;
    this.imgLadrillo = imgLadrillo;
    
   
    this.pantallas = new Pantallas();
    
    this.iniciar();
  }
  
  dibujar() {
    if (this.estado === 0) {
      this.pantallas.dibujarInstrucciones();
    } else if (this.estado === 1) {
      this.jugar();
    } else if (this.estado === 2) {
      this.pantallas.dibujarGanar();
    } else if (this.estado === 3) {
      this.pantallas.dibujarPerder();
    }
  }
  
  iniciar() {
    this.laberinto = new Laberinto();
    this.laberinto.cargarImagen(this.imgLadrillo);
    this.crearPersonaje();
    this.crearEnemigo();
  }
  
  reiniciar() {
    this.crearPersonaje();
    this.crearEnemigo();
    this.estado = 1;
  }
  
  crearPersonaje() {
    this.personaje = new Personaje(30, 30);
  }
  
  crearEnemigo() {
    this.enemigo = new Enemigo(400, 200);
  }
  
  jugar() {
    background(15);
    fill(255);
    textSize(12);
    textAlign(LEFT, TOP);
    text("¡Escapa del asesino hacia la salida (abajo a la derecha)!", 20, 10);
    
    //comienza a dibujarse el laberinto
    this.laberinto.dibujar();
    
    //se dibujo y se mueve el asesino
    this.enemigo.mover(this.personaje.posX, this.personaje.posY);
    this.enemigo.dibujar();
    
    //colision con el laberinto
    this.personaje.mover(this.laberinto);
    this.personaje.dibujar();
    
    //colision con el enemigo 
    if (this.colisionaPersonajeEnemigo()) {
      this.estado = 3;
    }
    
    //Meta o slida 
    if (this.personaje.posX > 720 && this.personaje.posY > 320) {
      this.estado = 2;
    }
  }
  
  colisionaPersonajeEnemigo() {
    let px = this.personaje.posX;
    let py = this.personaje.posY;
    let pt = this.personaje.tam;
    
    let ex = this.enemigo.posX;
    let ey = this.enemigo.posY;
    let et = 30;
    
    return px < ex + et && px + pt > ex && py < ey + et && py + pt > ey;
  }
  
  manejarClicks() {
    if (this.estado === 0 && mouseX >= 320 && mouseX <= 480 && mouseY >= 280 && mouseY <= 320) {
      this.estado = 1;
    } else if ((this.estado === 2 || this.estado === 3) && mouseX >= 320 && mouseX <= 480 && mouseY >= 280 && mouseY <= 320) {
      this.reiniciar();
    }
  }
}
