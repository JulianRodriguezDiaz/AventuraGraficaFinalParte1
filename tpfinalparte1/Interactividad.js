//Botones interactivos.
function mousePressed() {
  if (estadoPantalla == 0) {
    if (mouseX > 300 && mouseX < 500 && mouseY > 280 && mouseY < 380) {
      estadoPantalla = 1;
      maxTexto = 0;
      indiceTexto = 0;
    }
  } 
  else if (estadoPantalla == 1) {
    if (mouseX > 100 && mouseX < 700 && mouseY > 300 && mouseY < 450) {
      if (indiceTexto < dialogoOficina.length - 1) {
        indiceTexto++;
        maxTexto = 0;
      } else {
        estadoPantalla = 2;
        maxTexto = 0;
        indiceTexto = 0; 
      } 
    }
  }
  else if (estadoPantalla == 2) {
    estadoPantalla = 3;
    maxTexto = 0;
    indiceTexto = 0;
  }
  else if (estadoPantalla == 3) {
    if (mouseX > 100 && mouseX < 700 && mouseY > 300 && mouseY < 450) {
      if (indiceTexto < dialogoBodega.length - 1) {
        indiceTexto++;
        maxTexto = 0;
      } else {
        estadoPantalla = 4;
        maxTexto = 0;
      }
    }
  }
  else if (estadoPantalla == 4) {
    if (mouseX > 200 && mouseX < 600) {
      if (mouseY > 110 && mouseY < 190) {
        estadoPantalla = 5;
        maxTexto = 0;
        indiceTexto = 0;
      } 
      else if (mouseY > 190 && mouseY < 270) {
        estadoPantalla = 6;
        maxTexto = 0;
        indiceTexto = 0;
      }
    }
  }
  else if (estadoPantalla == 5) {
    if (mouseX > 100 && mouseX < 700 && mouseY > 300 && mouseY < 450) {
      if (indiceTexto < dialogoDepartamento.length - 1) {
        indiceTexto++;
        maxTexto = 0;
      }
    }
  }
  else if (estadoPantalla == 6) {
    if (mouseX > 100 && mouseX < 700 && mouseY > 300 && mouseY < 450) {
      if (indiceTexto < dialogoDiscoteca.length - 1) {
        indiceTexto++;
        maxTexto = 0;
      } else {
        estadoPantalla = 7;
        maxTexto = 0;
        indiceTexto = 0;
      }
    }
  } 
  else if (estadoPantalla == 7) {
    if (mouseX > 100 && mouseX < 700 && mouseY > 300 && mouseY < 450) {
      if (indiceTexto < dialogoSegundaBodega.length - 1) {
        indiceTexto++;
        maxTexto = 0;
      } else {
        estadoPantalla = 8;
        maxTexto = 0;
        indiceTexto = 0;
      } 
    }
  }
  else if (estadoPantalla == 8) {
    if (mouseX > 100 && mouseX < 700 && mouseY > 300 && mouseY < 450) {
      if (indiceTexto < dialogoCallejon.length - 1) {
        indiceTexto++;
        maxTexto = 0;
      } else {
        estadoPantalla = 9;
        maxTexto = 0;
      }
    }
  }
  else if (estadoPantalla == 9) {
    if (mouseX > 200 && mouseX < 600) {
      if (mouseY > 110 && mouseY < 190) {
        estadoPantalla = 10; //FINAL BUENO
        maxTexto = 0;
        indiceTexto = 0;
      } 
      else if (mouseY > 190 && mouseY < 270) {
        estadoPantalla = 11; //FINAL MALO
        maxTexto = 0;
        indiceTexto = 0;
      }
    }
  }
else if (estadoPantalla == 10) {
    if (mouseX > 100 && mouseX < 700 && mouseY > 300 && mouseY < 450) {
      if (indiceTexto < dialogoFinalBueno.length - 1) {
        indiceTexto++;
        maxTexto = 0;
      }
    }
  }
  else if (estadoPantalla == 11) {
    if (mouseX > 100 && mouseX < 700 && mouseY > 300 && mouseY < 450) {
      if (indiceTexto < dialogoFinalMalo.length - 1) { 
        indiceTexto++;
        maxTexto = 0;
      }
    }
  }
 }
