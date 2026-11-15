class Personaje {
  constructor(posX, posY, imgs) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 3;
    this.tam = 40;
    this.imgs = imgs;
    this.animacion = 0;
  }
  
  dibujar() {
    if (this.imgs && this.imgs[0] && this.imgs[1]) {
      let spriteActual = this.imgs[Math.floor(this.animacion) % 2];
      image(spriteActual, this.posX, this.posY, this.tam, this.tam + 10);
    } else {
      fill(0, 0, 255);
      noStroke();
      rect(this.posX, this.posY, this.tam, this.tam);
    }
  }
  
  mover(laberinto) {
    let movido = false;

    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= this.velocidad;
      if (laberinto.colisionaRect(this.posX, this.posY, this.tam, this.tam)) {
        this.posX += this.velocidad;
      } else {
        movido = true;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += this.velocidad;
      if (laberinto.colisionaRect(this.posX, this.posY, this.tam, this.tam)) {
        this.posX -= this.velocidad;
      } else {
        movido = true;
      }
    }
    if (keyIsDown(UP_ARROW)) {
      this.posY -= this.velocidad;
      if (laberinto.colisionaRect(this.posX, this.posY, this.tam, this.tam)) {
        this.posY += this.velocidad;
      } else {
        movido = true;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.posY += this.velocidad;
      if (laberinto.colisionaRect(this.posX, this.posY, this.tam, this.tam)) {
        this.posY -= this.velocidad;
      } else {
        movido = true;
      }
    }

    
    if (movido) {
      this.animacion += 0.15;
    }
      
    if (this.posX < 0) this.posX = 0;
    if (this.posX > 800 - this.tam) this.posX = 800 - this.tam;
    if (this.posY < 0) this.posY = 0;
    if (this.posY > 400 - this.tam) this.posY = 400 - this.tam;
  }
}
