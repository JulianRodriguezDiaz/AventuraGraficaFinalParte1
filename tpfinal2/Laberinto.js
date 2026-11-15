class Laberinto {
  constructor() {
    this.ladrillo = null;
    
    this.x = [];
    this.y = [];
    this.w = [];
    this.h = [];
    
    this.crearLaberinto();
  }
  
  cargarImagen(img) {
    this.ladrillo = img;
  }
  
  crearLaberinto() {
    
    //estas son las 4 paredes literalmente
    this.agregarPared(0, 0, 800, 20);     
    this.agregarPared(0, 380, 760, 20);   
    this.agregarPared(0, 0, 20, 400);    
    this.agregarPared(780, 0, 20, 340);
    
    for (let i = 0; i < 4; i++) {
      let posX = 150 + (i * 150);
      this.agregarPared(posX, 100, 30, 200);
    }
  }
  
  agregarPared(posX, posY, ancho, alto) {
    this.x.push(posX);
    this.y.push(posY);
    this.w.push(ancho);
    this.h.push(alto);
  }
  
  dibujar() {
    for (let i = 0; i < this.x.length; i++) {
      if (this.ladrillo) {
        image(this.ladrillo, this.x[i], this.y[i], this.w[i], this.h[i]);
      } else {
        fill(40, 40, 70);
        noStroke();
        rect(this.x[i], this.y[i], this.w[i], this.h[i]);
      }
    }
  }
  
  colisionaRect(px, py, pw, ph) {
    for (let i = 0; i < this.x.length; i++) {
      let pxWall = this.x[i];
      let pyWall = this.y[i];
      let pWidth = this.w[i];
      let pHeight = this.h[i];
      
      if (px < pxWall + pWidth && px + pw > pxWall && py < pyWall + pHeight && py + ph > pyWall) {
        return true;
      }
    }
    return false;
  }
}
