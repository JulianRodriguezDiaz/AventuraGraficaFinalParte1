//INICIO: Funcion para todo lo que es la primera pantalla y que este ordenadito.
function dibujarPantallaInicio() {
  //fondo y lluvia solo en pantalla 0.
  image(imgFondo, 0, 0);

  contadorFrames++;
  if (contadorFrames >= 4) {
    frameActual = (frameActual + 1) % totalFramesLluvia;
    contadorFrames = 0;
  }
  if (framesLluvia[frameActual]) {
    image(framesLluvia[frameActual], 0, 0);
  }
  
  //esto seria el logo.
  imageMode(CENTER);
  image(imgLogo, width / 2, 120);
  imageMode(CORNER);
  //esto seria la imagen del boton.
  image(imgInicio, 300, 280, 200, 100);
}

//OFICINA: funcion para toda la pantalla de Oficina
function dibujarEscena1() {
  if (indiceTexto === dialogoOficina.length - 1) {
    image(imgFondoNegro, 0, 0, width, height);
  } else {
    image(imgOficina, 0, 0, width, height);
  }
  dibujarInterfazTexto(nombresOficina, dialogoOficina);
}

//BODEGA: Funcion para todo lo que es bodega
function dibujarEscena2() {
  image(imgBodega, 0, 0, width, height);
  dibujarInterfazTexto(nombresBodega, dialogoBodega);
}

//Pantalla de Decision usando solo 1 imagen 
function dibujarPantallaDecision() {
  image(imgBodega, 0, 0, width, height);
  dibujarInterfazTexto(nombresBodega, dialogoBodega);
  image(imgCuadroDecision, 200, 110, 400, 160);
  push();
  fill(20, 50, 60);
  textSize(14);
  textAlign(CENTER, CENTER);

//Esta seria la primera opcion 
  text("Ir al departamento de Eric (Novio)", 400, 165);
//Y esta la 2da 
  text("Ir a la discoteca a interrogar al Barman", 415, 215);
  pop();
}

//DEPARTAMENTO: Aun en progreso ashex
function dibujarEscenaDepartamento() {
  image(imgDepartamento, 0, 0, width, height);
  dibujarInterfazTexto(nombresDepartamento, dialogoDepartamento);
}

//Discoteca: hecho
function dibujarEscenaDiscoteca() {
  image(imgDiscoteca, 0, 0, width, height);
  dibujarInterfazTexto(nombresDiscoteca, dialogoDiscoteca);
}

//Esto seria volver a la bodega
function dibujarEscenaSegundaBodega() {
  if (indiceTexto == dialogoSegundaBodega.length - 1){
  image(imgFondoNegro, 0, 0, width, height);
  } else {
    image(imgBodega, 0, 0, width, height);
  }
  dibujarInterfazTexto(nombresSegundaBodega, dialogoSegundaBodega);
}
