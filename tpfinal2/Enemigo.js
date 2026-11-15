class Enemigo {
  constructor(posX, posY, imgs) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 1.9;
    this.tam = 40;
    this.imgs = imgs;
    this.animacion = 0;
  }
  
  dibujar() {
    if (this.imgs && this.imgs[0] && this.imgs[1]) {
      let spriteActual = this.imgs[Math.floor(this.animacion) % 2];
      image(spriteActual, this.posX, this.posY, this.tam, this.tam + 10);
    } else {
      fill(255, 0, 0);
      noStroke();
      rect(this.posX, this.posY, this.tam, this.tam);
    }
  }
  
  mover(posXPersonaje, posYPersonaje) {
    let seMovio = false;

    if (this.posX < posXPersonaje) {
      this.posX += this.velocidad;
      seMovio = true;
    } else if (this.posX > posXPersonaje) {
      this.posX -= this.velocidad;
      seMovio = true;
    }
    
    if (this.posY < posYPersonaje) {
      this.posY += this.velocidad;
      seMovio = true;
    } else if (this.posY > posYPersonaje) {
      this.posY -= this.velocidad;
      seMovio = true;
    }

    if (seMovio) {
      this.animacion += 0.1;
    }
  }
}
