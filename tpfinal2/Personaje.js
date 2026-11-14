class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 3;
    this.tam = 30;
  }
  
  dibujar() {
    fill(0, 0, 255);
    noStroke();
    rect(this.posX, this.posY, this.tam, this.tam);
  }
  
  mover(laberinto) {
    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= this.velocidad;
      if (laberinto.colisionaRect(this.posX, this.posY, this.tam, this.tam)) {
        this.posX += this.velocidad;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += this.velocidad;
      if (laberinto.colisionaRect(this.posX, this.posY, this.tam, this.tam)) {
        this.posX -= this.velocidad;
      }
    }
    
    if (keyIsDown(UP_ARROW)) {
      this.posY -= this.velocidad;
      if (laberinto.colisionaRect(this.posX, this.posY, this.tam, this.tam)) {
        this.posY += this.velocidad;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.posY += this.velocidad;
      if (laberinto.colisionaRect(this.posX, this.posY, this.tam, this.tam)) {
        this.posY -= this.velocidad;
      }
    }
    
    if (this.posX < 0) this.posX = 0;
    if (this.posX > 800 - this.tam) this.posX = 800 - this.tam;
    if (this.posY < 0) this.posY = 0;
    if (this.posY > 400 - this.tam) this.posY = 400 - this.tam;
  }
}
