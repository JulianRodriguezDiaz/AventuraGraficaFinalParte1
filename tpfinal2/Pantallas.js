class Pantallas {
  constructor() {
    
  }
  
  dibujarInstrucciones() {
    background(15);
    textFont(tipografía);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(255, 0, 51);
    textSize(24);
    text("ENCUENTRO EN EL CALLEJÓN", width / 2, 100);
    
    fill(200);
    textSize(16);
    text("Usa las flechas para guiar al detective Márquez. Esquiva al asesino y llega al final del callejón.", width / 2, 170);
    
    // inicio
    fill(40);
    stroke(255, 0, 51);
    rect(320, 280, 160, 40, 5);
    noStroke();
    fill(255);
    textSize(14);
    text("INICIAR", width / 2, 300);
  }
  
  // victoria
  dibujarGanar() {
    background(15);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(0, 255, 102);
    textSize(28);
    text("¡LOGRASTE ESCAPAR!", width / 2, 150);
    this.dibujarBotonReiniciar();
  }
  
  // derrota
  dibujarPerder() {
    background(15);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(255, 0, 51);
    textSize(28);
    text("EL ASESINO TE ATRAPO...", width / 2, 150);
    this.dibujarBotonReiniciar();
  }
  
  // reinicio
  dibujarBotonReiniciar() {
    fill(40);
    stroke(255, 0, 51);
    rect(320, 280, 160, 40, 5);
    noStroke();
    fill(255);
    textSize(14);
    text("REINICIAR", width / 2, 300);
  }
}
