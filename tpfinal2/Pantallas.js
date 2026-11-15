class Pantallas {
  constructor(imgCallejon, imgGanar, imgPerder) {
    this.imgCallejon = imgCallejon;
    this.imgGanar = imgGanar;
    this.imgPerder = imgPerder;
  }
  
  dibujarInstrucciones() {
    if (this.imgCallejon) {
      image(this.imgCallejon, 0, 0, 800, 400);
    } else {
      background(15);
    }
    textFont(tipografia);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(255, 0, 51);
    textSize(24);
    text("ENCUENTRO EN EL CALLEJON", width / 2, 90);
    
    fill(240);
    textSize(16);
    text("Usa las flechas para guiar al detective Márquez. Esquiva al asesino y llega al final del callejón.", width / 2, 150);
    
    this.dibujarBoton("INICIAR");
  }
  
  // ganar
  dibujarGanar() {
    if (this.imgGanar) {
      image(this.imgGanar, 0, 0, 800, 400);
    } else {
      background(15);
    }
    this.dibujarCreditos();
    this.dibujarBoton("REINICIAR");
  }
  
  // perder
  dibujarPerder() {
    if (this.imgPerder) {
      image(this.imgPerder, 0, 0, 800, 400);
    } else {
      background(15);
    }
    this.dibujarCreditos();
    this.dibujarBoton("REINICIAR");
  }
  
  // créditos
  dibujarCreditos() {
    fill(0, 160);
    noStroke();
    rect(0, 345, 800, 40);

    fill(240);
    textSize(14);
    textAlign(CENTER, CENTER);
    text("Créditos: Julian Rodríguez Díaz y Milagros Ana Sofia Pizzio", width / 2, 365);
  }
  
   //boton
  dibujarBoton(etiqueta) {
    fill(40, 200); 
    stroke(255, 0, 51);
    rect(320, 280, 160, 40, 5);
    noStroke();
    fill(255);
    textSize(14);
    textAlign(CENTER,CENTER);
    text(etiqueta, width / 2, 300);
  }
}
