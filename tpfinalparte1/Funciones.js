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
//CALLEJON OSCURO:  que mieio
function dibujarEscenaCallejon() {
  image(imgCallejon, 0, 0, width, height);
  dibujarInterfazTexto(nombresCallejon, dialogoCallejon);
}

//Funcion para volver a llamar la interfaz de texto, vendria siendo literalmente todo lo que sirva pal texto xD
function dibujarInterfazTexto(listaNombres, listaDialogos) {
  image(imgCuadroTexto, 100, 300, 600, 150);
  image(imgMarcoPersonaje, 110, 265, 160, 45);
  push();
  fill(20, 50, 60);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(listaNombres[indiceTexto], 110, 268, 160, 40);
  pop();
  fill(20, 50, 60);
  textSize(16);
  textAlign(LEFT, TOP);
  
  let textoActual = listaDialogos[indiceTexto];
  let textoProgresivo = textoActual.substring(0, maxTexto);
  text(textoProgresivo, 157, 330, 500, 100);
  if (maxTexto < textoActual.length) {
    maxTexto++;
  }
}

//Una imagen negra que sirve para darle ese toque de suspensito
function dibujarTransicionSuspenso(){
  image(imgFondoNegro, 0, 0, width, height);
}

//boton de decision callejon
function dibujarPantallaDecisionCallejon() {
  dibujarEscenaCallejon();
  image(imgCuadroDecision, 200, 110, 400, 160);
  push();
  fill(20, 50, 60);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("Enfrentar al atacante y defenderse", 400, 165);
  text("Intentar huir y escapar del callejón", 400, 215);
  pop();
}
function dibujarEscenaAlmacen() {
  image(imgAlmacen, 0, 0, width, height); 
  dibujarInterfazTexto(nombresAlmacen, dialogoAlmacen);
}
 
 function dibujarPantallaDecisionAlmacen() {
  image(imgAlmacen, 0, 0, width, height);
  dibujarInterfazTexto(nombresAlmacen, dialogoAlmacen);
  image(imgCuadroDecision, 200, 110, 400, 160);
  push();
  fill(20, 50, 60);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("Entrar sigilosamente por la puerta trasera", 415, 165);
  text("Entrar a la fuerza derribando la entrada", 415, 215);
  pop();
}

function dibujarEscenaAlmacenLlamas() {
  image(imgAlmacenEnLlamas, 0, 0, width, height);
  dibujarInterfazTexto(nombresAlmacenLlamas, dialogoAlmacenLlamas);
}
function dibujarEscenaAlmacenSigiloso() {
  image(imgAlmacen, 0, 0, width, height);
  dibujarInterfazTexto(nombresAlmacenSigiloso, dialogoAlmacenSigiloso);
}

// FUNCIONES PARA LOS FINALES
function dibujarFinalBueno() {
  image(imgFinalBueno, 0, 0, width, height); 
  dibujarInterfazTexto(nombresFinalBueno, dialogoFinalBueno);
}

function dibujarFinalMalo() {
  image(imgFinalMalo, 0, 0, width, height); 
  dibujarInterfazTexto(nombresFinalMalo, dialogoFinalMalo);
}
function dibujarFinalNeutral() {
  image(imgFinalNeutral, 0, 0, width, height);
  dibujarInterfazTexto(nombresFinalNeutral, dialogoFinalNeutral);
}
