class Enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 2;
    this.tam = 30;
  }
  
  dibujar() {
    fill(255, 0, 0);
    noStroke();
    rect(this.posX, this.posY, this.tam, this.tam);
  }
  
  mover(posXPersonaje, posYPersonaje) {
    if (this.posX < posXPersonaje) {
      this.posX += this.velocidad;
    } else if (this.posX > posXPersonaje) {
      this.posX -= this.velocidad;
    }
    
    if (this.posY < posYPersonaje) {
      this.posY += this.velocidad;
    } else if (this.posY > posYPersonaje) {
      this.posY -= this.velocidad;
    }
  }
  
}
