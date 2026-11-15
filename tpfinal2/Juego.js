class Juego {
  constructor(ladrillo, suelo, det, asesino) {
    this.estado = 0; 
    this.personaje = null;
    this.enemigo = null;
    this.laberinto = null;
    this.imgLadrillo = ladrillo;
    this.imgSuelo = suelo; 
    this.imgDetective = det;
    this.imgAsesino = asesino;
      
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
    this.laberinto.cargarSuelo(this.imgSuelo); 
    this.crearPersonaje();
    this.crearEnemigo();
  }
  
  reiniciar() {
    this.crearPersonaje();
    this.crearEnemigo();
    this.cambiarEstado(1);
  }
  
  crearPersonaje() {
    this.personaje = new Personaje(30, 30, this.imgDetective);
  }
  
  crearEnemigo() {
    this.enemigo = new Enemigo(400, 200, this.imgAsesino);
  }
  
  jugar() {
    // El fondo negro o plano ya no hace falta porque el laberinto dibuja el suelo de fondo[cite: 5]
    
    // Laberinto (dibuja el suelo y las paredes)
    this.laberinto.dibujar();
    
    // Texto de ayuda superior
    fill(255);
    noStroke();
    textSize(12);
    textAlign(LEFT, TOP);
    text("¡Escapa del asesino hacia la salida (abajo a la derecha)!", 20, 10);
    
    // Enemigo
    this.enemigo.mover(this.personaje.posX, this.personaje.posY);
    this.enemigo.dibujar();
    
    // Personaje
    this.personaje.mover(this.laberinto);
    this.personaje.dibujar();
    
    // Colisión con el enemigo 
    if (this.colisionaPersonajeEnemigo()) {
      this.cambiarEstado(3);
    }
    
    // Meta o salida 
    if (this.personaje.posX > 720 && this.personaje.posY > 320) {
      this.cambiarEstado(2);
    }
  }
  
  colisionaPersonajeEnemigo() {
    let px = this.personaje.posX;
    let py = this.personaje.posY;
    let pt = this.personaje.tam;
      
    let ex = this.enemigo.posX;
    let ey = this.enemigo.posY;
    let et = this.enemigo.tam;
      
    return px < ex + et && px + pt > ex && py < ey + et && py + pt > ey;
  }
  
  //para que cambie de sonido en las diferentes pantallas
  cambiarEstado(nuevoEstado) {
  this.estado = nuevoEstado;

  sonidoMenu.stop(); //para que no se superpongan los sonidos
  sonidoJuego.stop();
  sonidoVictoria.stop();
  sonidoDerrota.stop();

  if (nuevoEstado === 0) {
    sonidoMenu.loop();
  } else if (nuevoEstado === 1) {
    sonidoJuego.loop();
  } else if (nuevoEstado === 2) {
    sonidoVictoria.play();
  } else if (nuevoEstado === 3) {
    sonidoDerrota.play();
  }
}
  
  manejarClicks() {
    if (this.estado === 0 && mouseX >= 320 && mouseX <= 480 && mouseY >= 280 && mouseY <= 320) {
      this.cambiarEstado(1);
    } else if ((this.estado === 2 || this.estado === 3) && mouseX >= 320 && mouseX <= 480 && mouseY >= 280 && mouseY <= 320) {
      this.reiniciar();
    }
  }
}
